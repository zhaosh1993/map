var path = require('path')
var utils = require('./utils')

var projectRoot = path.resolve(__dirname, '../')
const vuxLoader = require('vux-loader')

var config = require('../config')
var vueLoaderConfig = require('./vue-loader.conf')
const fs = require('fs')
const demoPath = path.resolve(__dirname, '../src/page_list.json')
const argv = require('yargs').argv

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

let webpackConfig = {
  entry: {
    app: './src/main.js'
  },
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production' ?
      config.build.assetsPublicPath : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src')
    }
  },
  module: {
    rules: [{
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test')]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  }
}


module.exports = vuxLoader.merge(webpackConfig, {
  plugins: ['vux-ui', 'progress-bar', 'duplicate-style', {
      name: 'less-theme',
      path: 'src/theme.less'
    }, {
      name: 'js-parser',
      test: /main\.js/,
      fn: function (source) {
        this.addDependency(demoPath)
        let list = fs.readFileSync(demoPath, 'utf-8')
        list = JSON.parse(list)
        if (argv.demo) {
          list = list.filter(item => {
            return item.indexOf(argv.demo) > -1
          })
        }
        let str = []
        list.forEach(one => {
          let filename = one
          let path = `/pages/${toDash(one)}`
          if (/#/.test(one)) {
            filename = one.split('#')[0]
            path = one.split('#')[1]
          }
          str.push(`{
          path: '${path}',
          component: function (resolve) {
            require(['./pages/${filename}.vue'], resolve)}
          }
          `)
        })

        // 404 page
        str.push(`{
            path: '*',
            component: function (resolve) {
              require(['./pages/NotFoundComponent.vue'], resolve)}
            }`)
        // 首页 page
        str.push(`{
          path: '/',
          component: function (resolve) {
            require(['./pages/Home.vue'], resolve)}
        }`)
        str = `[${str.join(',\n')}]`
        console.log(str);
        source = source.replace('const routes = []', 'const routes = ' + str)
        return source
      }
    }

  ]
})

function toDash(str) {
  return str.replace(/([A-Z])/g, function (m, w) {
    return '-' + w.toLowerCase();
  }).replace('-', '')
}
