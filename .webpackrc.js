const path = require('path');

export default {
  entry: 'src/index.js',
  extraBabelPlugins: [
    // ['import', { libraryName: 'antd', libraryDirectory: 'es', style: true }],
    ['import', { libraryName: 'jltd', libraryDirectory: 'lib', style: true }, 'jltd'],
  ],
  env: {
    development: {
      extraBabelPlugins: ['dva-hmr'],
    },
  },
  externals: {
    '@antv/data-set': 'DataSet',
    rollbar: 'rollbar',
  },
  alias: {
    components: path.resolve(__dirname, 'src/components/'),
  },
  ignoreMomentLocale: true,
  theme: './src/theme.js',
  html: {
    template: './src/index.ejs',
  },
  lessLoaderOptions: {
    javascriptEnabled: true,
  },
  disableDynamicImport: false,
  publicPath: '/',
  hash: true,

  proxy: {
    '/jlt-mdm-web': {
      target: 'http://localhost:9094/jlt-mdm-web',
      // target: 'http://gr2.interinfo.cc:33210/',
      // pathRewrite: { '^/billing-api': '/billing' },
      // target: 'http://192.168.0.193:8083/billing-api/',
      // target: process.env.TARGET_URL || 'http://127.0.0.1:9100/',
      changeOrigin: true,
      pathRewrite: { '^/jlt-mdm-web': '' },
    },
  },
};
