import { defineConfig } from "vitepress"
import learnSide from "./side/learn"
import workSide from "./side/working"

const config = defineConfig({

  title: '三体反攻舰队',
  description: 'my blog work',
  lastUpdated: true,
  themeConfig: {
    // logo: 'https://fulcrum-xy2-jingweisuo.obs.cn-south-1.myhuaweicloud.com:443/9680b50951fc48529a8ee216ffb7dc6a.ico',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
    ],
    editLink: {
      pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },
    nav: nav(),
    sidebar: {
      '/pages/working/': workSide,
      '/pages/learn/': learnSide,
    },
    docsDir: "/",
  },
  algolia: {
    appId: '8J64VVRP8K',
    apiKey: 'a18e2f4cc5665f6602c5631fd868adfd',
    indexName: 'vitepress'
  },
  markdown: {
    lineNumbers: true,
    toc: { includeLevel: [1, 2, 3, 4] },
  }
})








function nav() {
  return [
    { text: '日常开发', link: '/pages/working/', activeMatch: '/pages/working/' },
    {
      text: '学习',
      items: [
        {
          text: 'webpack',
          link: '/pages/learn/webpack/',
        },
        {
          text: 'js',
          link: '/pages/learn/js/set',
        },
      ]
    },
    {
      text: '读书笔记',
      // link: 'https://github.com/vuejs/vitepress/blob/main/CHANGELOG.md'
    }
  ]
}





export default config