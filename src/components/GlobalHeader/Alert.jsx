import React, { Component } from 'react'
import { Avatar } from 'antd'
import alerts from '../../assets/alerts.png'
import styles from './index.less'
import Socket from './websocket.js'

class Alert extends Component {
  constructor () {
    super()
    this.taskRemindInterval = null
  }
  componentDidMount = () => {
    //    判断专家是否登录
    // this.socket = new Socket({
    //   socketUrl: 'ws://148.70.11.196:12222/alarmnotice',
    //   timeout: 500,
    //   socketMessage: receive => {
    //     console.log('接收到的数据')
    //     console.log(receive) // 后端返回的数据，渲染页面
    //   },
    //   // socketClose: msg => {
    //   //   console.log(msg)
    //   // },
    //   // socketError: () => {
    //   //   console.log(this.state.taskStage + '连接建立失败')
    //   // },
    //   socketOpen: () => {
    //     console.log('连接建立成功')
    //     // 心跳机制 定时向后端发数据
    //     this.taskRemindInterval = setInterval(() => {
    //       this.socket.sendMessage({ msgType: 0 })
    //     }, 10000)
    //   }
    // })
    // // 重试创建socket连接
    // try {
    //   this.socket.connection()
    // } catch (e) {
    //   // 捕获异常，防止js error
    //   // donothing
    // }
  }

  render () {
    return (
      <div>
        <Avatar
          size='small'
          className={styles.image}
          src={alerts}
          alt='avatar'
        />
        <a href='/alerts' target='_top'>
          报警信息
        </a>
      </div>
    )
  }
}

export default Alert
