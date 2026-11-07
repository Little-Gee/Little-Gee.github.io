import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: '季小小的碎碎念',
  description: '季小小的碎碎念',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    [
      'script',
      {
        async: '',
        src: 'https://www.googletagmanager.com/gtag/js?id=G-T90EDR5PZG'
      }
    ],
    [
      'script',
      {},
      "window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', 'G-T90EDR5PZG');"
    ]
    // [
    //   'script',
    //   {
    //     async: '',
    //     src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8150237012929100',
    //     crossorigin: 'anonymous'
    //   }
    // ]
  ],
  sitemap: {
    hostname: 'https://little-gee.github.io'
  },
  srcDir: './',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    // 文章翻页
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },
    // 移动端 - 外观
    darkModeSwitchLabel: '外观',
    // 移动端 - 返回顶部
    returnToTopLabel: '返回顶部',
    // 移动端 - menu
    sidebarMenuLabel: '菜单',
    outline: {
      label: '目录'
    },
    nav: [
      { text: '🏠 首页', link: '/' },
      {
        text: '小产品',
        items: [
          { text: '小小文件处理器', link: '/docs/products/fileprocessor' }
          // { text: '小小快捷加水印', link: '/docs/products/watermark' },
          // { text: '躺平小目标', link: '/docs/products/retirementgoal' }
          // { text: '壁纸样机生成器', link: 'https://phonemockup.top/' }
        ]
      },
      { text: '关于', link: '/docs/about' }
    ],
    sidebar: [
      {
        text: '小白副业探索',
        collapsed: false,
        items: [
          { text: '前言', link: '/docs/side-hustle/preface' },
          { text: '做过的项目', link: '/docs/side-hustle/projects-done' },
          { text: '圈层', link: '/docs/side-hustle/community' }
        ]
      },
      // {
      //   text: '广告',
      //   collapsed: false,
      //   items: [
      //     { text: '前言', link: '/docs/ads/preface' },
      //   ]
      // },
      {
        text: '小产品',
        collapsed: false,
        items: [
          { text: '前言', link: '/docs/products/preface' },
          { text: '小小文件处理器', link: '/docs/products/fileprocessor' }
          // { text: '小小快捷加水印', link: '/docs/products/watermark' },
          // { text: '躺平小目标', link: '/docs/products/retirementgoal' }
          // { text: '壁纸样机生成器', link: '/docs/products/phonemockup' }
        ]
      },
      {
        text: '小项目',
        collapsed: false,
        items: [
          { text: '前言', link: '/docs/projects/preface' },
          { text: '网盘拉新', link: '/docs/projects/pan' },
          { text: 'cps-淘宝客', link: '/docs/projects/cps-taobao' },
          { text: 'cps-快递100', link: '/docs/projects/cps-express' }
        ]
      },
      {
        text: '小技巧/信息差',
        collapsed: false,
        items: [
          { text: '前言', link: '/docs/tips/preface' },
          { text: '工具', link: '/docs/tips/tools' },
          { text: '本网站的搭建', link: '/docs/tips/website-build' },
          { text: 'ios 1比10 充值微信豆', link: '/docs/tips/ios-webeans' },
          { text: '快捷键快速打开VSCode', link: '/docs/tips/open-vscode' },
          { text: '快捷键快速打开iTerm', link: '/docs/tips/open-iterm' },
          { text: 'macOS双开微信', link: '/docs/tips/macos-wechat' },
          { text: '关闭微信开发者工具打开外部终端快捷键', link: '/docs/tips/close-terminal-key' }
        ]
      }
      // {
      //   text: '风向标共读',
      //   collapsed: false,
      //   items: [
      //     { text: '前言', link: '/docs/weather-vane/preface' },
      //     { text: '2024-4', link: '/docs/weather-vane/2024-4' },
      //     { text: '2024-3', link: '/docs/weather-vane/2024-3' },
      //     { text: '2024-2', link: '/docs/weather-vane/2024-2' }
      //   ]
      // }
    ],
    socialLinks: [{ icon: 'github', link: 'https://github.com/Little-Gee/Little-Gee.github.io' }]
    // search: {
    //   provider: 'local',
    //   options: {
    //     locales: {
    //       root: {
    //         translations: {
    //           button: {
    //             buttonText: '搜索文档',
    //             buttonAriaLabel: '搜索文档'
    //           },
    //           modal: {
    //             noResultsText: '无法找到相关结果',
    //             resetButtonTitle: '清除查询条件',
    //             footer: {
    //               selectText: '选择',
    //               navigateText: '切换',
    //               closeText: '关闭'
    //             }
    //           }
    //         }
    //       }
    //     }
    //   }
    // }
  }
});
