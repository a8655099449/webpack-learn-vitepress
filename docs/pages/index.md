## 腾讯TMF平台兼容方案

### less的兼容 
less 我们使用 最初的方案 easy less来解决
1. 使用vscode 下载 easy less 插件 （该插件会在less文件保存时自动在同级目录下生成一个.wxss文件）
2. 修改vscode配置文件（这部我会在两个项目的配置文件中修改）


### 不支持 `usingComponents` 的问题

1. 取消使用vant的组件，全部改为自己写
2. 自定义组件全部都copy到page页面

### 不支持 `es module` 的问题

1. 将 import 语法，改为使用`require`
2. 将 `export` 改为 `module.exports`  



因为不支持组件化，所以我们尽量编写一些公共的样式，来实现css的模块化

比如 按钮 、 弹出层这些类名我们最好能都写在公共样式里 


