import React from 'react';
import { Upload, Icon, Modal, message,Card} from 'antd';
import uploadApi from '@api/upload'
import {imgServer} from '@config/index.js'
class PicturesWall extends React.Component {
  state = {
    previewVisible: false,
    previewImage: '',
    fileList: [],
  };
  filterUrls(arr){
    return arr.map((item)=>{
      return item.dir
    })
  }
  handleCancel = () => this.setState({ previewVisible: false });
  handlePreview = async file => {
    this.setState({
      previewImage: file.url || file.preview,
      previewVisible: true,
    });
  };
  render() {
    const { previewVisible, previewImage, fileList } = this.state;
    const uploadButton = (
      <div>
        <Icon type="plus" />
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    let {okCb} = this.props
    return (
      <Card  style={ {width:'500px'} }>
        <Upload
          customRequest={async (e)=>{
            let {file} = e
            let {name,uid} = file
            let formdata = new FormData()
            formdata.append('hehe',file)

            let {code,msg,path} = await uploadApi.img(formdata)
            if(code !== 0) {return message.error(msg)}
            let  {fileList} =this.state
            fileList.push({
              uid:uid,
              name: name,
              status: 'done',
              url:imgServer+path,
              dir:path
            })
            this.setState({fileList})
            let urls =this.filterUrls(fileList)
            okCb(urls)
            message.success(msg)
          }}
          listType="picture-card"
          fileList={fileList}
          name='hehe'
          onPreview={this.handlePreview}
        >
          {fileList.length >= 8 ? null : uploadButton}
        </Upload>
        <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
          <img alt="example" style={{ width: '100%' }} src={previewImage} />
        </Modal>
      </Card>
    );
  }
}

export default PicturesWall