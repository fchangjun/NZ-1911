import React, { Component } from 'react';
import XLSX from "xlsx"
class ExportElsx extends Component {
  createElsx(){
    let arr =[
      ["序号",'姓名','年纪'],
      ["0",'呵呵哒','15'],
      ["1",'12313','15'],
    ]
    // 将数组转化为标签页 
    var ws = XLSX.utils.aoa_to_sheet(arr);
    // 创建工作薄
    var wb = XLSX.utils.book_new() 
    // 将标签页插入到工作薄里
    XLSX.utils.book_append_sheet(wb,ws)
    // 将工作薄导出为excel文件
    XLSX.writeFile(wb,'呵呵哒.xlsx');
  }
  state = {  }
  render() { 
    return ( 
      <div>
        
        <button onClick={this.createElsx}>导出excel</button>
      </div>
     );
  }
}
 
export default ExportElsx;