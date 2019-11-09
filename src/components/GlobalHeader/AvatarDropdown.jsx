import { Avatar, Icon, Menu, Spin } from 'antd'
import { FormattedMessage } from 'umi-plugin-react/locale'
import React from 'react'
import { connect } from 'dva'
import router from 'umi/router'
import HeaderDropdown from '../HeaderDropdown'
import styles from './index.less'
import person from '../../assets/person.png'

class AvatarDropdown extends React.Component {
  onMenuClick = event => {
    const { key } = event

    if (key === 'logout') {
      const { dispatch } = this.props

      if (dispatch) {
        dispatch({
          type: 'login/logout'
        })
      }

      return
    }

    router.push(`/user/login`)
  }

  render () {
    const {
      currentUser = {
        avatar: '',
        name: '运维管理员'
      },
      menu
    } = this.props
    const menuHeaderDropdown = (
      <Menu
        className={styles.menu}
        selectedKeys={[]}
        onClick={this.onMenuClick}
      >
        {menu && <Menu.Divider />}

        <Menu.Item key='logout'>
          <Icon type='logout' />
          <FormattedMessage id='menu.account.logout' defaultMessage='logout' />
        </Menu.Item>
      </Menu>
    )
    return currentUser && currentUser.name ? (
      <HeaderDropdown overlay={menuHeaderDropdown}>
        <span className={`${styles.action} ${styles.account}`}>
          <Avatar
            size='small'
            className={styles.avatar}
            src={person}
            alt='avatar'
          />
          <span className={styles.name}>{currentUser.name}</span>
        </span>
      </HeaderDropdown>
    ) : (
      <Spin
        size='small'
        style={{
          marginLeft: 8,
          marginRight: 8
        }}
      />
    )
  }
}

export default connect(({ user }) => ({
  currentUser: user.currentUser
}))(AvatarDropdown)
