const themeConfig = require('./config/theme')

module.exports = {
  title: "西凉河的葛三叔",
  description: '岁月如飞刀，刀刀催人老',
  dest: 'public',
  head: [
    ['link', { rel: 'icon', href: '/jiaziteng.jpg' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
  ],
  theme: 'reco',
  themeConfig,
  markdown: {
    lineNumbers: true
  },
  plugins: ['@vuepress/medium-zoom', 'flowchart'] 
}  