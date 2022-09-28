
# tmf 开发问题汇总

## 1. tmf开发者工具，编译项目出现白屏现象，如何解决？
tmf开发者工具在window系统首次打开出现白屏现象，可以尝试关掉程序，以管理员身份运行，查看编译情况。
![](https://pic2.zhimg.com/80/v2-89181cf201fb71c0ee0e94e90aff2e3d_720w.png)

## 2. tmf开发工具编译后，出现样式加载不出来的情况。
这种现象通常在问题一出现后随着而来，通过调整设备适配后，尝试查看是否解决了问题
![](https://pic2.zhimg.com/80/v2-0b4a05e9ab598a164ea5c8ff02c25ea3_720w.png)

## 3. 如何与app通信？

可以使用`customApi`来与app进行交互。
```js
 wx.customApi({
   apiName: '', // api名称
   hasUserAction: false, // 是否必须点击事件触发
   success: function(res) {}, // 成功的回调函数，app返还的参数将在res中进行返回
   fail: function(res) {}, // 失败的回到
   complete: function(res) {}, // 成功或者失败都会回调
   params: { // 入参
      name : 'kka',
      age : 22,
      data: {...}
   }
 })
```
**需要注意的问题：**

1. 调用api的时候，确认参数的`apiName`app中已经实现
2. 在开发者工具中，是没办法使用这个api的，注意做好兼容

## 4. webview如何使用？
1.在开放平台中配置业务域名

![](https://pic2.zhimg.com/80/v2-3576615f3c3fb77e668df07128902afc_720w.png)

> 在开发者工具中，使用ip地址也是可行的，真机中则必须使用业务域名

2.使用小程序的`web-view` 组件
```
<web-view src="your src" />
```

## 5. 在web-view中，如何与小程序通信？

目前在web-view中没有直接与小程序通信的方式，但是在web-view中可以调用`js-sdk`来调用小程序中的一些api能力，比如`navigateTo`等等，而`navigateTo`可以在query上携带一些参数，来实现通信。

## 6. 如何在小程序中，兼容阿拉伯从右到左的兼容？


阿拉伯地区的使用习惯为从右到左，这在小程序中完成兼容并不困难，只需要在page中的顶层容器中，增加以下的css

```css
page {
  direction:rtl;
}
```


## 7. 在小程序中如何去获取当前app的用户信息？

由于小程序在宿主app中，如果需要获取当前app的登录用户信息，可以使用`customApi`调用app的api来获得用户信息。


## 8. 小程序如何去跳转其他的小程序？
小程序跳转小程序使用`wx.navigateToMiniProgram`这个api来实现

```javascript
wx.navigateToMiniProgram({
  appId: 'appid', // app id
  path: `path`,// path to the
  success() {
    console.log("--");
  },
  fail(err) {
    console.log(err);
  },
});
```
**这里请注意区分测试和生产的appid。**

## 9. 如何绑定app？

**第一步：** 我们需要在`运营平台`中创建应用，也就是您的ios或者安卓应用

![](https://pic2.zhimg.com/80/v2-9ea8bacdfee085f52d7c940eda021d6b_720w.png)

**第二步：** 在`开发平台中`创建一个小程序，然后关联第一步中创建的app

![](https://pic4.zhimg.com/80/v2-26080567bad0445f9da1f451b0e0bf47_720w.png)


## 10. 如何发布小程序？

发布小程序有两种方式

**第一种**：在开发者工具中上传代码。然后在后台进行审核
![](https://pic3.zhimg.com/80/v2-2757c8d193a6fa2ea337bc035f335e04_720w.png)

**第二种**：在开发者工具中导出代码，然后在后台进行上传

![](https://pic2.zhimg.com/80/v2-99f07289a32f2bc39203411b2e6c04fa_720w.png)


![](https://pic2.zhimg.com/80/v2-4bf402ca2f6615229843fd497218225e_720w.png)

## 11. 如何将程序分别打包至生产和测试环境？ 

生产和测试服务器，通常部署在不同的服务器，拥有不同的域名或者端口地址。
方法1： 使用`hosts`文件更改ip解析地址，然后将打包的程序上传到不同的地址，来完成发版。


方法2： 在开发者工具中切换不同的地址，然后使用开发者工具中的上传代码，来完成发版

![](https://pic3.zhimg.com/80/v2-62a4046668850104c36e51e7392156e4_720w.png)
