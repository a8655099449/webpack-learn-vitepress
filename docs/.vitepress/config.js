import { defineConfig } from "vitepress"

const config = defineConfig({

  title: 'webpack 的学习',
  description: 'my blog work',
  lastUpdated: true,
  themeConfig: {
    logo: 'https://fulcrum-xy2-jingweisuo.obs.cn-south-1.myhuaweicloud.com:443/9680b50951fc48529a8ee216ffb7dc6a.ico',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
    ],
    editLink: {
      pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },
    nav: nav()

  }

})



function nav() {
  return [
    { text: 'Guide', link: '/guide/what-is-vitepress', activeMatch: '/guide/' },
    { text: 'Configs', link: '/config/introduction', activeMatch: '/config/' },
    {
      text: 'Changelog',
      link: 'https://github.com/vuejs/vitepress/blob/main/CHANGELOG.md'
    }
  ]
}


export default config