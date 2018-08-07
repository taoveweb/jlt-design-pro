export default (dynamicWrapper, app) => {
  return {
    '/dashboard/analysis': {
      component: dynamicWrapper(app, ['pro/chart'], () =>
        import('../routes/pro/Dashboard/Analysis')
      ),
    },
    '/dashboard/monitor': {
      component: dynamicWrapper(app, ['pro/monitor'], () =>
        import('../routes/pro/Dashboard/Monitor')
      ),
    },
    '/dashboard/workplace': {
      component: dynamicWrapper(app, ['pro/project', 'pro/activities', 'pro/chart'], () =>
        import('../routes/pro/Dashboard/Workplace')
      ),
      // hideInBreadcrumb: true,
      // name: '工作台',
      // authority: 'admin',
    },
    '/form/basic-form': {
      component: dynamicWrapper(app, ['pro/form'], () => import('../routes/pro/Forms/BasicForm')),
    },
    '/form/step-form': {
      component: dynamicWrapper(app, ['pro/form'], () => import('../routes/pro/Forms/StepForm')),
    },
    '/form/step-form/info': {
      name: '分步表单（填写转账信息）',
      component: dynamicWrapper(app, ['pro/form'], () =>
        import('../routes/pro/Forms/StepForm/Step1')
      ),
    },
    '/form/step-form/confirm': {
      name: '分步表单（确认转账信息）',
      component: dynamicWrapper(app, ['pro/form'], () =>
        import('../routes/pro/Forms/StepForm/Step2')
      ),
    },

    '/form/step-form/result': {
      name: '分步表单（完成）',
      component: dynamicWrapper(app, ['pro/form'], () =>
        import('../routes/pro/Forms/StepForm/Step3')
      ),
    },
    '/form/advanced-form': {
      component: dynamicWrapper(app, ['pro/form'], () =>
        import('../routes/pro/Forms/AdvancedForm')
      ),
    },
    '/list/table-list': {
      component: dynamicWrapper(app, ['pro/rulea'], () => import('../routes/pro/List/TableList')),
    },
    '/list/basic-list': {
      component: dynamicWrapper(app, ['pro/list'], () => import('../routes/pro/List/BasicList')),
    },
    '/list/card-list': {
      component: dynamicWrapper(app, ['pro/list'], () => import('../routes/pro/List/CardList')),
    },
    '/list/search': {
      component: dynamicWrapper(app, ['pro/list'], () => import('../routes/pro/List/List')),
    },
    '/list/search/projects': {
      component: dynamicWrapper(app, ['pro/list'], () => import('../routes/pro/List/Projects')),
    },
    '/list/search/applications': {
      component: dynamicWrapper(app, ['pro/list'], () => import('../routes/pro/List/Applications')),
    },
    '/list/search/articles': {
      component: dynamicWrapper(app, ['pro/list'], () => import('../routes/pro/List/Articles')),
    },
    '/profile/basic': {
      component: dynamicWrapper(app, ['pro/profile'], () =>
        import('../routes/pro/Profile/BasicProfile')
      ),
    },
    '/profile/advanced': {
      component: dynamicWrapper(app, ['pro/profile'], () =>
        import('../routes/pro/Profile/AdvancedProfile')
      ),
    },
    '/result/success': {
      component: dynamicWrapper(app, [], () => import('../routes/pro/Result/Success')),
    },
    '/result/fail': {
      component: dynamicWrapper(app, [], () => import('../routes/pro/Result/Error')),
    },
    '/exception/403': {
      component: dynamicWrapper(app, [], () => import('../routes/pro/Exception/403')),
      authority: 'admin',
    },
    '/exception/404': {
      component: dynamicWrapper(app, [], () => import('../routes/pro/Exception/404')),
    },
    '/exception/500': {
      component: dynamicWrapper(app, [], () => import('../routes/pro/Exception/500')),
    },
    '/exception/trigger': {
      component: dynamicWrapper(app, ['pro/error'], () =>
        import('../routes/pro/Exception/triggerException')
      ),
    },
    '/user': {
      component: dynamicWrapper(app, [], () => import('../layouts/UserLayout')),
    },
    '/user/login': {
      component: dynamicWrapper(app, ['pro/login'], () => import('../routes/pro/User/Login')),
    },
    '/user/register': {
      component: dynamicWrapper(app, ['pro/register'], () => import('../routes/pro/User/Register')),
    },
    '/user/register-result': {
      component: dynamicWrapper(app, [], () => import('../routes/pro/User/RegisterResult')),
    },
    // '/user/:id': {
    //   component: dynamicWrapper(app, [], () => import('../routes/pro/User/SomeComponent')),
    // },
  };
};
