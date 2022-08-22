const learnSide = [
  {
    text: "webpack",
    collapsible: true,
    items: [
      { text: "webpack的初体验", link: "/pages/learn/webpack/" },
      { text: "webpack中的js资源", link: "/pages/learn/webpack/01" },
      { text: "开发服务器", link: "/pages/learn/webpack/02" },
      { text: "webpack中的高级配置", link: "/pages/learn/webpack/03" },
      { text: "减少代码打包体积", link: "/pages/learn/webpack/04" },
      {
        text: "使用webpack搭建react的脚手架",
        link: "/pages/learn/webpack/webpack-react-cli",
      },
      { text: "webpack中常见的面试题", link: "/pages/interview/webpack" },
    ],
  },
  {
    text: "js基础",
    collapsible: true,
    items: [
      {
        text: "js 中的 set 、 map 、weakMap 、 weakSet",
        link: "/pages/learn/js/set",
      },
      {
        text: "在vue中使用jsx",
        link: "/pages/learn/vue/vue-jsx",
      },
    ],
  },
  {
    text: "typescript",
    collapsible: true,
    items: [
      {
        text: "ts中的内置关键字",
        link: "/pages/learn/ts/keyword",
      },
      {
        text: "ts中的内置泛型",
        link: "/pages/learn/ts/genericity",
      },
    
    ],
  },
	{
		text: '小程序开发',
		collapsible: true,
		items: [
			{ text: '小程序页面和组件的创建', link: '/pages/learn/miniapp/01' },
		],
	},
	{
		text: 'electron',
		collapsible: true,
		items: [
			{ text: '创建一个electron应用', link: '/pages/learn/electron/start' },
			{ text: '客户端与nodejs的通信', link: '/pages/learn/electron/communication' },
			{ text: '自定义自己的窗口', link: '/pages/learn/electron/diyWindows' },
		],
	},
];

// class A {
//   constructor
// }

export default learnSide;

