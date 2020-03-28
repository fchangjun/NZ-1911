
import React, { Component } from 'react';
import XLSX from "xlsx"
class ExportElsx extends Component {
  createElsx(){
    // 获取表格的dom元素
    var elt = document.getElementsByTagName('table')[0];
    console.log(elt)
    // 将表格的dom 元素转化为 excel工作薄
    var wb = XLSX.utils.table_to_book(elt, {sheet:"Sheet JS"});
    // 将工作薄导出为excel文件
    XLSX.writeFile(wb,'呵呵哒.xlsx');
  }
  state = {  }
  render() { 
    return ( 
      <div>
        <table>
          <tr>
            <td>序号</td>
            <td>名字</td>
            <td>描述</td>
            <td>呵呵</td>
          </tr>
          <tr>
            <td>1</td>
            <td>韩梅梅</td>
            <td>好看</td>
            <td>呵呵</td>
          </tr>
          <tr>
            <td>2</td>
            <td>李蕾蕾</td>
            <td>呵呵</td>
            <td>呵呵</td>
          </tr>
        </table>
        <button onClick={this.createElsx}>导出excel</button>
      </div>
     );
  }
}
 
export default ExportElsx;