import React from 'react';
import { routerRedux, Route, Switch } from 'dva/router';
import { LocaleProvider } from 'jltd';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import { connect } from 'dva';
import { getRouterData } from './common/router';
import Authorized from './utils/Authorized';
import { getQueryPath, formatter } from './utils/utils';
import { setAuthority } from './utils/authority';

setAuthority('admin');
// eslint-disable-next-line
import { queryMenu, queryMenuData } from './services/pro/api';
const { ConnectedRouter } = routerRedux;
const { AuthorizedRoute } = Authorized;

@connect(({ global }) => {
  return { global };
})
class RouterConfiga extends React.Component {
  constructor(props) {
    super(props);
    const { app, global } = this.props;
    this.state = {
      routerData: getRouterData(app, global.menuData),
    };

    //刷新从cookie中读取
    props.dispatch({
      type: 'global/saveMennuData',
      payload: { menuData: global.menuData, routerData: getRouterData(app, global.menuData) },
    });

    queryMenu().then(data => {
      const menuData = formatter(data);
      props.dispatch({
        type: 'global/saveMennuData',
        payload: { menuData, routerData: getRouterData(app, menuData) },
      });
      this.setState({ routerData: getRouterData(app, menuData) });
    });

    /* queryMenuData().then(data => {
      let paramData = null;
      if (data === undefined) {
        paramData = [];
      } else {
        paramData = data.data;
      }

      const menuData = formatterMenuData(paramData);
      const changedMenu = changeMenus(menuData);
      props.dispatch({ type: 'global/saveMennuData', payload: changedMenu });
      this.setState({ routerData: getRouterData(app, changedMenu) });
    }); */
  }

  render() {
    const { routerData } = this.state;
    const { history } = this.props;

    const UserLayout = routerData['/user'].component;
    const BasicLayout = routerData['/'].component;
    return (
      <LocaleProvider locale={zhCN}>
        <ConnectedRouter history={history}>
          <Switch>
            <Route path="/user" component={UserLayout} />
            <AuthorizedRoute
              path="/"
              render={props => <BasicLayout {...props} />}
              authority={['admin', 'user']}
              redirectPath={getQueryPath('/user/login', {
                redirect: window.location.href,
              })}
            />
          </Switch>
        </ConnectedRouter>
      </LocaleProvider>
    );
  }
}

function RouterConfig({ history, app }) {
  return <RouterConfiga history={history} app={app} />;
}

export default RouterConfig;
