export default {
  mode: 'doc',
  resolve: {
    includes: ['ui', 'components']
  },
  hash: true, // 打包产物生成 hash 串
  exportStatic: { htmlSuffix: true }, // 部署到 zhdocs，需要开启 html 后缀，如果没有 html 后缀，zhdoc nginx 会重定向到错误地址
  themeConfig: {
    hd: {
      rules: []
    }
  }
}
