export default [
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
        // authority: ['admin', 'user'],
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
            icon: 'container',
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
                    path: '/projectManage/sanyuanzhucun/operateLog',
                    name: '操作日志(!)',
                    component: './projectManage/sanyuanzhucun/operateLog'
                  },
                  {
                    path: '/projectManage/sanyuanzhucun/runningLog',
                    name: '运行日志',
                    component: './projectManage/sanyuanzhucun/runningLog'
                  },
                  {
                    path: '/projectManage/sanyuanzhucun/locationManage',
                    name: '位置管理',
                    component: './projectManage/sanyuanzhucun/locationManage'
                  },
                  {
                    path: '/projectManage/sanyuanzhucun/datastatistics/:id',
                    name: '数据统计',
                    component: './projectManage/sanyuanzhucun/dataStatistics',
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
                    path: '/projectManage/shuichanyangzhi/operateLog',
                    name: '操作日志(!)',
                    component: './projectManage/shuichanyangzhi/operateLog'
                  },
                  {
                    path: '/projectManage/shuichanyangzhi/runningLog',
                    name: '运行日志',
                    component: './projectManage/shuichanyangzhi/runningLog'
                  },
                  {
                    path: '/projectManage/shuichanyangzhi/locationManage',
                    name: '位置管理',
                    component: './projectManage/shuichanyangzhi/locationManage'
                  },
                  {
                    path: '/projectManage/shuichanyangzhi/datastatistics/:id',
                    name: '数据统计',
                    component: './projectManage/shuichanyangzhi/dataStatistics',
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
                    path: '/projectManage/zhongqinchang/operateLog',
                    name: '操作日志(!)',
                    component: './projectManage/zhongqinchang/operateLog'
                  },
                  {
                    path: '/projectManage/zhongqinchang/runningLog',
                    name: '运行日志',
                    component: './projectManage/zhongqinchang/runningLog'
                  },
                  {
                    path: '/projectManage/zhongqinchang/locationManage',
                    name: '位置管理',
                    component: './projectManage/zhongqinchang/locationManage'
                  },
                  {
                    path: '/projectManage/zhongqinchang/datastatistics/:id',
                    name: '数据统计',
                    component: './projectManage/zhongqinchang/dataStatistics',
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
                    path: '/projectManage/guoshujiagong/operateLog',
                    name: '操作日志(!)',
                    component: './projectManage/guoshujiagong/operateLog'
                  },
                  {
                    path: '/projectManage/guoshujiagong/runningLog',
                    name: '运行日志',
                    component: './projectManage/guoshujiagong/runningLog'
                  },
                  {
                    path: '/projectManage/guoshujiagong/locationManage',
                    name: '位置管理',
                    component: './projectManage/guoshujiagong/locationManage'
                  },
                  {
                    path: '/projectManage/guoshujiagong/datastatistics/:id',
                    name: '数据统计',
                    component: './projectManage/guoshujiagong/dataStatistics',
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
                    path: '/projectManage/judianhu/operateLog',
                    name: '操作日志(!)',
                    component: './projectManage/judianhu/operateLog'
                  },
                  {
                    path: '/projectManage/judianhu/runningLog',
                    name: '运行日志',
                    component: './projectManage/judianhu/runningLog'
                  },
                  {
                    path: '/projectManage/judianhu/locationManage',
                    name: '位置管理',
                    component: './projectManage/judianhu/locationManage'
                  },
                  {
                    path: '/projectManage/judianhu/datastatistics/:id',
                    name: '数据统计',
                    component: './projectManage/judianhu/dataStatistics',
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
                    path: '/projectManage/caibohui/operateLog',
                    name: '操作日志(!)',
                    component: './projectManage/caibohui/operateLog'
                  },
                  {
                    path: '/projectManage/caibohui/runningLog',
                    name: '运行日志',
                    component: './projectManage/caibohui/runningLog'
                  },
                  {
                    path: '/projectManage/caibohui/locationManage',
                    name: '位置管理',
                    component: './projectManage/caibohui/locationManage'
                  },
                  {
                    path: '/projectManage/caibohui/datastatistics/:id',
                    name: '数据统计',
                    component: './projectManage/caibohui/dataStatistics',
                    hideInMenu: true
                  }
                ]
              }
            ]
          },

          {
            path: '/projectConsumption',
            name: '项目统计',
            icon: 'ordered-list',
            component: './projectConsumption'
          },
          {
            path: '/productManage',
            name: '产品管理(!)',
            icon: 'radar-chart',
            component: './productManage'
          },
          {
            path: '/productManage/info/:id',
            name: '产品详情',
            component: './productManage/info',
            hideInMenu: true
          },
          {
            path: '/alerts',
            name: '报警信息',
            icon: 'exclamation-circle',
            component: './alerts'
          },
          {
            path: '/debug',
            name: '调试面板',
            icon: 'exclamation-circle',
            component: './debug'
          },
          {
            path: '/',
            redirect: '/homepage'
            // authority: ['admin', 'user']
          },
          {
            component: '404'
          }
        ]
      }
    ]
  }
]
