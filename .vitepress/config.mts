import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: '季小小的碎碎念',
  description: '季小小的碎碎念',
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  srcDir: './',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    outline: {
      label: '目录'
    },
    nav: [
      { text: '🏠 首页', link: '/' },
      { text: '关于', link: '/docs/about' }
    ],
    sidebar: [
      {
        text: '小白副业探索',
        collapsed: false,
        items: [
          { text: '前言', link: '/docs/side-hustle/preface' }
          // { text: '观念', link: '/docs/side-hustle/preface' },
        ]
      },
      {
        text: '小项目',
        collapsed: false,
        items: [
          { text: '前言', link: '/docs/projects/preface' },
          { text: 'cps-淘宝客', link: '/docs/projects/cps-taobao' }
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
          { text: 'macOS双开微信', link: '/docs/tips/macos-wechat' }
        ]
      },
      {
        text: '风向标共读',
        collapsed: false,
        items: [
          { text: '前言', link: '/docs/weather-vane/preface' }
          // { text: 'xxx', link: '/docs/weather-vane/preface' },
        ]
      },
      {
        text: '广告',
        collapsed: false,
        items: [
          { text: '前言', link: '/docs/ads/preface' },
          { text: '业务', link: '/docs/ads/business' }
        ]
      }
    ],
    socialLinks: [{ icon: 'github', link: 'https://github.com/Little-Gee/Little-Gee.github.io' }]
  }
});
