import React, { Component } from 'react';
import {Card} from 'antd'
import ReactEcharts from 'echarts-for-react';

class Echarts extends Component {
    state={
        option:{
            xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: [0, 0, 0, 0, 0, 0, 0],
                // data: [120, 200, 150, 80, 70, 110, 130],
                type: 'bar'
            }]
        }
    }
  componentDidMount(){
      setTimeout(()=>{
        // 引用类型修改原数据 对比不引起dom的更新改变
        let {option} = JSON.parse(JSON.stringify(this.state))
        option.series[0].data =[120, 200, 150, 80, 70, 110, 130]
        this.setState({option})
        console.log(option)
      },1000)
  }
  render() { 
      let {option} = this.state
    return ( 
      <div>
       <Card  title="折线图" >
        <ReactEcharts option={option}></ReactEcharts>
       </Card>
      </div>
     );
  }
}
 
export default Echarts;