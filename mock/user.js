function getFakeCaptcha (req, res) {
  return res.json('captcha-xxx')
} // 代码中会兼容本地 service mock 以及部署站点的静态数据

export default {
  // 支持值为 Object 和 Array
  'GET /api/currentUser': {
    name: '运维管理员',
    // avatar: '../src/assets/person.png',
    // userid: '00000001',
    // email: 'antdesign@alipay.com',
    // signature: '海纳百川，有容乃大',
    // title: '交互专家',
    // group: '蚂蚁金服－某某某事业群－某某平台部－某某技术部－UED',
    // tags: [
    //   {
    //     key: '0',
    //     label: '很有想法的'
    //   },
    //   {
    //     key: '1',
    //     label: '专注设计'
    //   },
    //   {
    //     key: '2',
    //     label: '辣~'
    //   },
    //   {
    //     key: '3',
    //     label: '大长腿'
    //   },
    //   {
    //     key: '4',
    //     label: '川妹子'
    //   },
    //   {
    //     key: '5',
    //     label: '海纳百川'
    //   }
    // ],
    // notifyCount: 12,
    // unreadCount: 11,
    // country: 'China',
    // geographic: {
    //   province: {
    //     label: '浙江省',
    //     key: '330000'
    //   },
    //   city: {
    //     label: '杭州市',
    //     key: '330100'
    //   }
    // },
    // address: '西湖区工专路 77 号',
    // phone: '0752-268888888'
  },
  // GET POST 可省略
  'GET /api/users': [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park'
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park'
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park'
    }
  ],

  'POST /iothub/query/fetchMenu':(req,res)=>{
    res.send({
      data:[
        {
          path: '/',
          component: '../layouts/BlankLayout',
          routes: [
            {
              path: '/user',
              component: '../layouts/UserLayout',
              routes: [
                {
                  path: '/user',
                  redirect: '/user/login'
                },
                {
                  name: 'login',
                  icon: 'smile',
                  path: '/user/login',
                  component: './user/login'
                },
                {
                  name: 'register-result',
                  icon: 'smile',
                  path: '/user/register-result',
                  component: './user/register-result'
                },
                {
                  name: 'register',
                  icon: 'smile',
                  path: '/user/register',
                  component: './user/register'
                },
                {
                  component: '404'
                }
              ]
            },
            {
              path: '/',
              component: '../layouts/BasicLayout',
              Routes: ['src/pages/Authorized'],
              authority: ['admin', 'user'],
              routes: [
                {
                  path: '/homepage',
                  name: '项目首页',
                  icon: 'home',
                  component: './homepage'
                },
                {
                  path: '/projectManage',
                  name: '项目管理',
                  icon: 'home',
                  routes: [
                    {
                      path: '/projectManage/sanyuanzhucun',
                      name: '三元朱村',
                      icon: 'robot',
                      routes: [
                        {
                          path: '/projectManage/sanyuanzhucun/devicemanage',
                          name: '设备管理',
                          component: './projectManage/sanyuanzhucun/devicemanage'
                        },
                        {
                          path: '/projectManage/sanyuanzhucun/log',
                          name: '操作日志',
                          component: './projectManage/sanyuanzhucun/log'
                        },
                        {
                          path: '/projectManage/sanyuanzhucun/datastatistics',
                          name: '数据统计',
                          component: './projectManage/sanyuanzhucun/datastatistics'
                        },
                        {
                          path: '/projectManage/sanyuanzhucun/datastatistics/history',
                          component: './projectManage/sanyuanzhucun/datastatistics/history',
                          hideInMenu: true
                        }
                      ]
                    },
                    {
                      path: '/projectManage/caibohui',
                      name: '菜博会',
                      icon: 'robot',
                      routes: [
                        {
                          path: '/projectManage/caibohui/devicemanage',
                          name: '设备管理',
                          component: './projectManage/caibohui/devicemanage'
                        },
                        {
                          path: '/projectManage/caibohui/log',
                          name: '操作日志',
                          component: './projectManage/caibohui/log'
                        },
                        {
                          path: '/projectManage/caibohui/datastatistics',
                          name: '数据统计',
                          component: './projectManage/caibohui/datastatistics'
                        },
                        {
                          path: '/projectManage/caibohui/datastatistics/history',
                          component: './projectManage/caibohui/datastatistics/history',
                          hideInMenu: true
                        }
                      ]
                    },
                    {
                      path: '/projectManage/guoshujiagong',
                      name: '果蔬加工',
                      icon: 'robot',
                      routes: [
                        {
                          path: '/projectManage/guoshujiagong/devicemanage',
                          name: '设备管理',
                          component: './projectManage/guoshujiagong/devicemanage'
                        },
                        {
                          path: '/projectManage/guoshujiagong/log',
                          name: '操作日志',
                          component: './projectManage/guoshujiagong/log'
                        },
                        {
                          path: '/projectManage/guoshujiagong/datastatistics',
                          name: '数据统计',
                          component: './projectManage/guoshujiagong/datastatistics'
                        },
                        {
                          path: '/projectManage/guoshujiagong/datastatistics/history',
                          component: './projectManage/guoshujiagong/datastatistics/history',
                          hideInMenu: true
                        }
                      ]
                    },
                    {
                      path: '/projectManage/judianhu',
                      name: '巨淀湖',
                      icon: 'robot',
                      routes: [
                        {
                          path: '/projectManage/judianhu/devicemanage',
                          name: '设备管理',
                          component: './projectManage/judianhu/devicemanage'
                        },
                        {
                          path: '/projectManage/judianhu/log',
                          name: '操作日志',
                          component: './projectManage/judianhu/log'
                        },
                        {
                          path: '/projectManage/judianhu/datastatistics',
                          name: '数据统计',
                          component: './projectManage/judianhu/datastatistics'
                        },
                        {
                          path: '/projectManage/judianhu/datastatistics/history',
                          component: './projectManage/judianhu/datastatistics/history',
                          hideInMenu: true
                        }
                      ]
                    },
                    {
                      path: '/projectManage/shuichanyangzhi',
                      name: '水产养殖',
                      icon: 'robot',
                      routes: [
                        {
                          path: '/projectManage/shuichanyangzhi/devicemanage',
                          name: '设备管理',
                          component: './projectManage/shuichanyangzhi/devicemanage'
                        },
                        {
                          path: '/projectManage/shuichanyangzhi/log',
                          name: '操作日志',
                          component: './projectManage/shuichanyangzhi/log'
                        },
                        {
                          path: '/projectManage/shuichanyangzhi/datastatistics',
                          name: '数据统计',
                          component: './projectManage/shuichanyangzhi/datastatistics'
                        },
                        {
                          path: '/projectManage/shuichanyangzhi/datastatistics/history',
                          component: './projectManage/shuichanyangzhi/datastatistics/history',
                          hideInMenu: true
                        }
                      ]
                    },
                    {
                      path: '/projectManage/zhongqinchang',
                      name: '种禽场',
                      icon: 'robot',
                      routes: [
                        {
                          path: '/projectManage/zhongqinchang/devicemanage',
                          name: '设备管理',
                          component: './projectManage/zhongqinchang/devicemanage'
                        },
                        {
                          path: '/projectManage/zhongqinchang/log',
                          name: '操作日志',
                          component: './projectManage/zhongqinchang/log'
                        },
                        {
                          path: '/projectManage/zhongqinchang/datastatistics',
                          name: '数据统计',
                          component: './projectManage/zhongqinchang/datastatistics'
                        },
                        {
                          path: '/projectManage/zhongqinchang/datastatistics/history',
                          component: './projectManage/zhongqinchang/datastatistics/history',
                          hideInMenu: true
                        }
                      ]
                    }
                  ]
                },
      
                {
                  path: '/alerts',
                  name: '报警信息',
                  icon: 'exclamation-circle',
                  component: './alerts'
                },
                {
                  path: '/',
                  redirect: '/homepage',
                  authority: ['admin', 'user']
                },
                {
                  component: '404'
                }
              ]
            }
          ]
        }
      ]
    })
  },
  'POST /iothub/query/allproduct': (req, res) => {
        res.send({
          code:1000,
          desc:"Success",
          data:[{
             proname:'gg',
             id:'1234'
      
          },]
        })
  },
  // 'POST /iothub/query/projectinfo': (req, res) => {
  //   const { token } = req.body
  //   // if (token == 'ggsgsggsgsgs') {
  //     res.send({
  //       code: 1000,
  //       desc: 'Success',
  //       data: {
  //         projectinfo: [
  //           {
  //             sn: 'SANYUANZHU',
  //             name: '三元朱村',
  //             desc: ''
  //           },
  //           {
  //             sn: 'SHUICHANYANGZHI',
  //             name: '水产养殖',
  //             desc: ''
  //           },
  //           {
  //             sn: 'ZHONGQINCHANG',
  //             name: '种禽场',
  //             desc: ''
  //           },
  //           {
  //             sn: 'GUOSHUJIAGONG',
  //             name: '果蔬加工',
  //             desc: ''
  //           }
  //         ]
  //       }
  //     })
  //   // }
  // },

  // 'POST /iothub/user/login': (req, res) => {
  //   const { password, userName, type } = req.body

  //   if (
  //     password ===
  //       'b32cbacf6a6e277e4cd0c55ebd1ffcbc86384cf1f963316a33026ba36fcd046f' &&
  //     userName === 'admin'
  //   ) {
  //     res.send({
  //       code: 1000,
  //       desc: 'Success',
  //       data: {
  //         token: 'ggsgsggsgsgs' // token有效时长为60分钟
  //       }
  //     })
  //     return
  //   }

  //   res.send({
  //     status: 'error',
  //     type,
  //     currentAuthority: 'guest'
  //   })
  // },
  'POST /api/register': (req, res) => {
    res.send({
      status: 'ok',
      currentAuthority: 'user'
    })
  },
  'GET /api/500': (req, res) => {
    res.status(500).send({
      timestamp: 1513932555104,
      status: 500,
      error: 'error',
      message: 'error',
      path: '/base/category/list'
    })
  },
  'GET /api/404': (req, res) => {
    res.status(404).send({
      timestamp: 1513932643431,
      status: 404,
      error: 'Not Found',
      message: 'No message available',
      path: '/base/category/list/2121212'
    })
  },
  'GET /api/403': (req, res) => {
    res.status(403).send({
      timestamp: 1513932555104,
      status: 403,
      error: 'Unauthorized',
      message: 'Unauthorized',
      path: '/base/category/list'
    })
  },
  'GET /api/401': (req, res) => {
    res.status(401).send({
      timestamp: 1513932555104,
      status: 401,
      error: 'Unauthorized',
      message: 'Unauthorized',
      path: '/base/category/list'
    })
  },
  'GET  /api/login/captcha': getFakeCaptcha
}
