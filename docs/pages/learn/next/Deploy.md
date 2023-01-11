# 部署next项目

因为next有许多的`SSR`渲染优化，所以部署的方式会和其他的脚手架有所不同


[next 部署官方文档](https://nextjs.org/docs/deployment)

## 导出静态文件


[导出静态文件官方文档](https://nextjs.org/docs/advanced-features/static-html-export)

如果执行`next build` 导出的是一个node项目文件，假如我们只需要一个静态文件。需要将指令改成`next build && next export`。就会出现一个`out`的文件夹里面就有静态的文件。

![](https://s2.loli.net/2023/01/11/QtiE3WDxA8Mo2dK.png)

值得一提的时，打包出来的文件依然是ssr渲染的。并且如果你在页面中有调接口，会提前调接口。然后将内容喧染到静态文件中。

这将很好的支持`seo`。


这种部署就跟我们寻常部署一样

[demo](https://github.com/vercel/next.js/tree/canary/examples/with-static-export)
## 启动next的node项目进行部署

1. 将 `build`指令改为 `next build`
2. 然后`next start`

然后就启动next的项目了，当然这个需要你有`node项目部署经验`。


## 使用[Vercel](https://vercel.com/dashboard?utm_source=next-site&utm_medium=docs&utm_campaign=next-website)部署

Vercel 我个人认为是比较适合部署个人网站，是next官方推出的一项服务，也是next官方推崇的部署方式（毕竟要支持自家的产品）

这个部署方式也比较简单。

