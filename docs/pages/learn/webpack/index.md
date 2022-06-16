# webpack是什么？


webpack是一个现代的打包工具，学习它将会对我们的工作有很大的帮助。是现代前端工程化的摇篮。


## webpack的五个概念


### 1. entry 

入口表示webpack以那个文件作为七点开始打包


### 2. output

输出表示webpack打包后的资源输出到哪里去，以及如何命名

### 3. loader

loader让webpack能够处理那些非js文件  , 比如`scss` \ `less` 文件

### 4. plugins

插件可以执行更广的任务，从打包优化，到压缩，一直到重新定义环境便令等等。

### 5. mode


模式指示webpack使用相应模式的配置



|     模式      |               描述               |
| :-----------: | :------------------------------: |
| `development` | 开发者模式，可以用于在本地调试的 |
| `production`  |    生产模式，用于在线上的环境    |


## 尝试使用webpack

1. 首先安装webpack至全局 `npm i webpack webpack-cli -g`

2. 新建文件 `src/index.js`在js里面随便输入一些内容，把这当作你的入口文件
> 我的jQuery是下载的，为了更好的体现出问题

```js
// 入口文件
import jQuery from "jquery";
import './index.css'
console.log('👴jQuery', jQuery)
```

3. 初始化项目 `npm init -y`

4. 在`package.json` 的 `scripts` 中增加打包指令，分别进行开发环境和生产环境的打包以辨区分


```json
{
  "name": "learm-01",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "build:dev": "webpack ./src/index.js -o ./build/ --mode=development",
    "build:pro": "webpack ./src/index.js -o ./build/ --mode=production"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "jquery": "^3.6.0"
  }
}
```
5. 分别执行 `npm run build:dev `  和  `npm run build:pro`

查看打包结果，我们会发现生产环境打包出来的代码会远小于开发环境的，其次就是webpack会将你的代码转换为`es5`更好的适配浏览器



让我们来测试一下webpack的打包兼容性如何，比如在`src/index.js`中输入下面这段代码

```javascript
const a = {}
console.log('👴>>>>', a?.name)
```
这里面我们使用到了最新es的链式语法，很多低版本的浏览器都还没有支持，让我们来看看webpack会如何处理

执行 `npm run build:pro`


查看打包的内容

```js
console.log("👴2022-06-15 21:24:38 index.js line:6",{}?.name);
```

以上是我打包出来文件的模样，可以说几乎没有做任何处理，那么要怎么改变这种情况呢？





## 在webpack中打包样式

如果你在你的`index.js`中，引入`css`文件，然后在执行打包命令。你会发现会出现错误，这是因为webpack默认并不支持css的文件。

那么如何支持css文件的引入呢？

```js
// src/index.js
import './index.css'
```
会提示一下的错误
```
Module parse failed: Unexpected token (1:0)
You may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders
> * {
|   margin: 0;
|   padding: 0;
 @ ./src/index.js 2:0-20

webpack 5.73.0 compiled with 1 error in 307 ms
error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```


遇到这种情况，我们的[loader](#3-loader)就可以登场了。loader就是为了支持各种各样后缀文件引入



### webpack.config.js


这时候我们不能再使用那种很长且抽象的指令来配置我们的输出了。我们需要引入一个配置文件，这个非常重要。


1. 新建文件`./webpack.config.js`，输入以下的内容

```javascript

const { resolve } = require('path')

module.exports = {
  // 入口文件
  entry: "./src/index.js",
  // 打包后输出的文件
  output: {
    filename: 'build.js',
    path: resolve(__dirname, 'build')
  },
  // 配置我们的loader 
  module: {
    rules: [
      {
        test: /\.css$/,
        // use中的顺序是从下至上执行的
        use: [
          // 将css-loader 解析出来的字符串创建成style标签添加到head当中
          'style-loader',
          // 将css的内容解析成字符串
          'css-loader'
        ]
      }
    ]
  },
  mode: 'development',
  plugins: []

}
```
2. 安装依赖，由于我们在配置中增加了两个`loader`，所以对应的也要安装这两个loader

```
npm install css-loader style-loader -D
```

3. 执行 `webpack`  ,当你的根目录存在`webpack.config.js`时，就可以不需要再输入那些指令



