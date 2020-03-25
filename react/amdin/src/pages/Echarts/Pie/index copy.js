import React, { Component } from 'react';
import {Card} from 'antd'
import echarts from 'echarts'
class Echarts extends Component {
  state = {  }
  componentDidMount(){
    this.initEcharts()
  }
  initEcharts(){
    var myChart = echarts.init(this.refs.pie1);
    myChart.setOption({
        title: {
            text: 'ECharts 入门示例'
        },
        tooltip: {},
        xAxis: {
            data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [{
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
        }]
    });
  }
  render() { 
    return ( 
      <div>
       <Card  title='基本饼状图' >
         <div ref='pie1' style={ {background:'red',width:'300px',height:"300px"} }></div>
       </Card>
      </div>
     );
  }
}
 
export default Echarts;