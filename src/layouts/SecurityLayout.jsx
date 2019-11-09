import React from 'react'
import { connect } from 'dva'
import { Redirect } from 'umi'
import { stringify } from 'querystring'
import PageLoading from '@/components/PageLoading'
import { identifier } from '@babel/types'

class SecurityLayout extends React.Component {
  state = {
    isReady: false,
    islogin: true
  }

  componentDidMount () {
    this.setState({
      isReady: true
    })
    const { dispatch } = this.props

    if (dispatch) {
      dispatch({
        type: 'manage/fetchAllProject'
      }).then(res => {
        console.log(res.code)
        if (res.code != 1000) {
          this.setState({
            islogin: false
          })
        }
      })
    }
  }

  render () {
    const { isReady, isLogin } = this.state
    const { children, loading } = this.props // You can replace it to your authentication rule (such as check token exists)
    // 你可以把它替换成你自己的登录认证规则（比如判断 token 是否存在）

    const queryString = stringify({
      redirect: window.location.href
    })

    if ((!isLogin && loading) || !isReady) {
      return <PageLoading />
    }

    if (!isLogin) {
      return <Redirect to={`/user/login?${queryString}`} />
    }

    return children
  }
}

export default connect(({ user, manage, loading }) => ({
  currentUser: user.currentUser,
  loading: loading.models.user
}))(SecurityLayout)
