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
          // { text: '你的观念可能不对', link: '/docs/side-hustle/preface' },
        ]
      },
      // {
      //   text: '小项目',
      //   collapsed: false,
      //   items: [
      //     { text: '前言', link: '/docs/projects/preface' },
      //     { text: 'xxx', link: '/docs/projects/preface' },
      //     { text: 'xxx', link: '/docs/projects/preface' }
      //   ]
      // },
      {
        text: '小技巧/信息差',
        collapsed: false,
        items: [
          { text: '前言', link: 'docs/tips/preface' }
          // { text: '快捷键快速打开VSCode', link: 'docs/tips/preface' },
          // { text: '快捷键快速打开iTerm', link: 'docs/tips/preface' },
          // { text: 'macOS双开微信', link: 'docs/tips/preface' },
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
          { text: '前言', link: 'docs/ads/preface' },
          { text: '业务', link: 'docs/ads/business' }
        ]
      }
    ],
    socialLinks: [{ icon: 'github', link: 'https://github.com/vuejs/vitepress' }]
  }
});
