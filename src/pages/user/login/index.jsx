import { Alert, Checkbox, Icon } from 'antd';
import { FormattedMessage, formatMessage } from 'umi-plugin-react/locale';
import React, { Component } from 'react';
import Link from 'umi/link';
import { connect } from 'dva';
import LoginComponents from './components/Login';
import styles from './style.less';

const { Tab, UserName, Password, Mobile, Captcha, Submit } = LoginComponents;

@connect(({ userAndlogin, loading }) => ({
  userAndlogin,
  submitting: loading.effects['userAndlogin/login'],
}))
class Login extends Component {
  loginForm = undefined;

  state = {
    type: 'account',
    autoLogin: true,
  };

  changeAutoLogin = e => {
    this.setState({
      autoLogin: e.target.checked,
    });
  };

  handleSubmit = (err, values) => {
    const { type } = this.state;

    if (!err) {
      const { dispatch } = this.props;
      dispatch({
        type: 'userAndlogin/login',
        payload: { ...values},
      })
    }
  };

  onTabChange = type => {
    this.setState({
      type,
    });
  };

  onGetCaptcha = () =>
    new Promise((resolve, reject) => {
      if (!this.loginForm) {
        return;
      }

      this.loginForm.validateFields(['mobile'], {}, (err, values) => {
        if (err) {
          reject(err);
        } else {
          const { dispatch } = this.props;
          dispatch({
            type: 'userAndlogin/getCaptcha',
            payload: values.mobile,
          })
            .then(resolve)
            .catch(reject);
        }
      });
    });

  renderMessage = content => (
    <Alert
      style={{
        marginBottom: 24,
      }}
      message={content}
      type="error"
      showIcon
    />
  );

  render() {
    const { userAndlogin, submitting } = this.props;
    const { status} = userAndlogin;
    const { type, autoLogin } = this.state;
    const loginType='account'
    return (
      <div className={styles.main}>
        <LoginComponents
          defaultActiveKey={type}
          onTabChange={this.onTabChange}
          onSubmit={this.handleSubmit}
          ref={form => {
            this.loginForm = form;
          }}
        >
          <div  key="account" className={styles.login}>
            {status === 'error' &&
              loginType === 'account' &&
              !submitting &&
              this.renderMessage(
                formatMessage({
                  id: 'userandlogin.login.message-invalid-credentials',
                }),
              )}
            <UserName
              name="user"
              rules={[
                {
                  required: true,
                  message: formatMessage({
                    id: 'userandlogin.userName.required',
                  }),
                },
              ]}
            />
            <Password
              name="passwd"
              rules={[
                {
                  required: true,
                  message: formatMessage({
                    id: 'userandlogin.password.required',
                  }),
                },
              ]}
              onPressEnter={e => {
                e.preventDefault();
                this.loginForm.validateFields(this.handleSubmit);
              }}
            />
            </div>
          <Submit loading={submitting}>
            <FormattedMessage id="userandlogin.login.login" />
          </Submit>
        </LoginComponents>
      </div>
    );
  }
}

export default Login;
