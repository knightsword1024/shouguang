import { Row, Col } from 'antd'
import React from 'react'
import { connect } from 'dva'
import { formatMessage } from 'umi-plugin-react/locale'
import Avatar from './AvatarDropdown'
import HeaderSearch from '../HeaderSearch'
import SelectLang from '../SelectLang'
import styles from './index.less'
import NoticeIconView from './NoticeIconView'
import Alert from './Alert'

const GlobalHeaderRight = props => {
  const { theme, layout } = props
  let className = styles.right

  if (theme === 'dark' && layout === 'topmenu') {
    className = `${styles.right}  ${styles.dark}`
  }

  return (
    <div className={className}>
      <Row gutter={2}>
        <Col span={6}>
          <Alert />
        </Col>
        <Col span={8}>
          <Avatar menu />
        </Col>
      </Row>
    </div>
  )
}

export default connect(({ settings }) => ({
  theme: settings.navTheme,
  layout: settings.layout
}))(GlobalHeaderRight)
