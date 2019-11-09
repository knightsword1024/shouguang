import { routerRedux } from 'dva/router'
import { fakeAccountLogin, getFakeCaptcha } from './service'
import { getPageQuery, setAuthority } from './utils/utils'
import router from 'umi/router'
import { message } from 'antd'

const Model = {
  namespace: 'userAndlogin',
  state: {
    status: undefined
  },
  effects: {
    * login ({ payload }, { call, put }) {
      const response = yield call(fakeAccountLogin, payload)
      yield put({
        type: 'changeLoginStatus',
        payload: response
      }) // Login successfully
      if (response.code === 1000) {
        const urlParams = new URL(window.location.href)
        const params = getPageQuery()
        let { redirect } = params
        router.push(`/homepage`)
        if (redirect) {
          const redirectUrlParams = new URL(redirect)

          if (redirectUrlParams.origin === urlParams.origin) {
            redirect = redirect.substr(urlParams.origin.length)

            if (redirect.match(/^\/.*#/)) {
              redirect = redirect.substr(redirect.indexOf('#') + 1)
            }
          } else {
            window.location.href = redirect
            return
          }
        }

        yield put(routerRedux.replace(redirect || '/'))
      } else {
        message.error('用户账号或密码不匹配')
      }
    },

    * getCaptcha ({ payload }, { call }) {
      yield call(getFakeCaptcha, payload)
    }
  },
  reducers: {
    changeLoginStatus (state, { payload }) {
      localStorage.setItem('token', payload.data.token)
      var status = ''
      var currentAuthority = ''
      if (payload.code == 1000) {
        status = 'ok'
        currentAuthority = 'admin'
      } else {
        status = 'error'
        currentAuthority = 'guest'
      }
      setAuthority(currentAuthority)
      return { ...state, status: status, type: payload.type }
    }
  }
}
export default Model
