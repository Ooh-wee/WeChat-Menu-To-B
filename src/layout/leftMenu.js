import * as React from 'react'
import {} from 'antd'

export default class LeftMenu extends React.Component {
  render(){
    return(
      <div className="leftMenu">
        <div className="siteIcon">icon</div>
        <ul>
          <li>监控</li>
          <li>个人面板</li>
          <li>菜单管理</li>
          <li>图片上传</li>
          <li>信息配置</li>
        </ul>
      </div>
    )  
  }
}