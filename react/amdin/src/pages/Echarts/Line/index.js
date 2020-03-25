import React, { Component } from 'react';
import {Card} from 'antd'
import ReactEcharts from 'echarts-for-react';

class Echarts extends Component {
  hehe(){
    return{
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#6a7985'
                }
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line',
            areaStyle: {}
        },
        {
            data: [82, 1932, 2901, 34, 190, 10, 120],
            type: 'line',
            areaStyle: {}
        }]
    }
  }
  render() { 
    return ( 
      <div>
       <Card  title="折线图" >
        <ReactEcharts option={this.hehe()}></ReactEcharts>
       </Card>
      </div>
     );
  }
}
 
export default Echarts;