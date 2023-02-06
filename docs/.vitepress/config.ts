import { defineConfig } from "vitepress";
import goSide from "./side/goSide";
import interviewSide from "./side/interview";
import learnSide from "./side/learn";
import workSide from "./side/working";
import nextSide from "./side/nextSide";
import reactSide from "./side/reactSide";

const config = defineConfig({
  title: "三体反攻舰队",
  description: "my blog work",
  lastUpdated: true,
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "https://s2.loli.net/2022/12/13/vVFejXUpPTcCIsM.png",
      },
    ],
  ],
  themeConfig: {
    // logo: 'https://fulcrum-xy2-jingweisuo.obs.cn-south-1.myhuaweicloud.com:443/9680b50951fc48529a8ee216ffb7dc6a.ico',
    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],

    editLink: {
      pattern: "https://github.com/vuejs/vitepress/edit/main/docs/:path",
      text: "Edit this page on GitHub",
    },
    nav: nav(),
    sidebar: {
      "/pages/working/": workSide,
      "/pages/learn/react/": reactSide,
      "/pages/learn/next": nextSide,
      "/pages/learn/": learnSide,
      "/pages/interview/": interviewSide,
      "/pages/go/": goSide,
    } as any,
  },

  markdown: {
    lineNumbers: true,
    toc: { includeLevel: [1, 2, 3, 4] },
  },
});

function nav() {
  return [
    {
      text: "日常开发",
      link: "/pages/working/",
      activeMatch: "/pages/working/",
    },
    {
      text: "学习",
      items: [
        {
          text: "webpack",
          link: "/pages/learn/webpack/",
        },
        {
          text: "js",
          link: "/pages/learn/js/set",
        },
        {
          text: "面试",
          link: "/pages/interview/",
        },
        {
          text: "go",
          link: "/pages/go/install",
        },
        {
          text: "next",
          link: "/pages/learn/next/start",
        },
        {
          text: "react",
          link: "/pages/learn/react/components",
        },
      ],
    },
    {
      text: "读书笔记",
      items: [
        {
          text: "坦格利安的巨龙们",
          link: "/pages/book/dragon",
        },
      ],
      // link: 'https://github.com/vuejs/vitepress/blob/main/CHANGELOG.md'
    },
  ];
}

export default config;
