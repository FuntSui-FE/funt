module.exports = {
  base: '/funt/',
  dest: 'docs/dist',
  port: 1111,
  serviceWorker: true,
  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'Hello Funt',
      description: 'A Vue.js 2.0 UI Toolkit for Web'
    }
  },
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: '/funt.png'
      }
    ],
    [
      'meta',
      {
        name: 'theme-color',
        content: '#3eaf7c'
      }
    ]
  ],
  themeConfig: {
    repo: 'FuntSui-FE/funt',
    editLinks: true,
    docsDir: 'docs',
    locales: {
      '/': {
        label: '简体中文',
        selectText: '选择语言',
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdated: '上次更新',
        serviceWorker: {
          updatePopup: {
            message: '发现新内容可用',
            buttonText: '刷新'
          }
        },
        nav: [
          // {
          //   text: '文档',
          //   link: '/API/install.html'
          // }
        ]
      }
    },
    sidebar: {
      '/API/': [
        {
          title: '开发指南',
          collapsable: false,
          children: ['install', 'start']
        },
        {
          title: '组件',
          collapsable: false,
          children: ['loading']
        }
      ]
    }
  }
};
