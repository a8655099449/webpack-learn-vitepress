import { UserConfig } from 'vitepress'

const workSide: any[] = [
	{
		text: '日常代码',
		collapsible: true,
		items: [
			{ text: 'html中导出word', link: '/pages/working/html2doc' },
			{ text: '内网服务搭建', link: '/pages/working/frp' },
			{
				text: '日常开发中常使用的js片段',
				link: '/pages/working/js-common-code',
			},
			{
				text: '日常开发中常使用的css片段',
				link: '/pages/working/css-code-block',
			},
			{
				text: '好用的电脑软件',
				link: '/pages/working/nice-soft',
			},
		],
	},
	{
		text: 'sdk使用经验',
		items: [
			{
				text: '地图类使用经验',
				link: '/pages/working/maps',
			},
		],
	},
]

export default workSide
