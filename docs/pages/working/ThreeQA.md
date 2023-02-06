# three.js QA

## 如何设置场景背景颜色

```js
// 颜色 ， 透明度
render.setClearColor('#fff', 1);
```

## 如何添加控制器，并使用ts

[控制器文档](https://threejs.org/docs/index.html?q=OrbitControls#examples/zh/controls/OrbitControls)
```js
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
// 添加控制器
const controls = new OrbitControls(camera, render.domElement);
```
threejs 里面的控制器导入没有类型注释，如果要使用有类型注释版需要下载`three-orbitcontrols-ts`
```
npn i three-orbitcontrols-ts
```

**使用ts版控制器**

有一个`three-orbitcontrols-ts`的库，但很遗憾它和官方版本的并不同步，会导致有些bug，但我们可以借用它的类型定义文件


## 添加坐标轴辅助
```js
const axes = new Three.AxesHelper(5);
scene.add(axes);
```


## 如何清除threejs的实例
以我的react版本为例子
```js
/** @name 清除实例 */
const clear = () => {
  ref.current.render.forceContextLoss();
  ref.current.render.dispose();
  ref.current.scene.clear();
  dom.current.removeChild(ref.current.render.domElement);
  ref.current.render = null;
};
```

## 使用gsap动画库

[gsap官方文档](https://greensock.com/docs/)

安装
```
pnpm i gsap
```

```javascript
gsap.to(cube.position, {
  x: 5,
  duration: 5,
});
```


