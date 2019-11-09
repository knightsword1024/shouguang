import { routerRedux } from 'dva/router'
import { stringify } from 'querystring'
import { fakeAccountLogin, getFakeCaptcha } from '@/services/login'
import { setAuthority } from '@/utils/authority'
import { getPageQuery } from '@/utils/utils'
const Model = {
  namespace: 'login',
  state: {
    status: undefined,
    token: ''
  },
  effects: {
    * login ({ payload }, { call, put }) {
      const response = yield call(fakeAccountLogin, payload)
      yield put({
        type: 'changeLoginStatus',
        payload: response
      }) // Login successfully
      if (response.status === 'ok') {
        const urlParams = new URL(window.location.href)
        const params = getPageQuery()
        let { redirect } = params

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
      }
      return response
    },

    * getCaptcha ({ payload }, { call }) {
      yield call(getFakeCaptcha, payload)
    },

    * logout (_, { put }) {
      const { redirect } = getPageQuery() // redirect

      if (window.location.pathname !== '/user/login' && !redirect) {
        localStorage.clear()
        yield put(
          routerRedux.replace({
            pathname: '/user/login',
            search: stringify({
              redirect: window.location.href
            })
          })
        )
      }
    }
  },
  reducers: {
    changeLoginStatus (state, { payload }) {
      setAuthority(payload.currentAuthority)
      return {
        ...state,
        status: payload.status,
        type: payload.type,
        token: payload.data.token
      }
    }
  }
}
export default Model
