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
```js
import { OrbitControls } from 'three-orbitcontrols-ts';
const controls = new OrbitControls(camera, render.domElement);
```

## 添加坐标轴辅助

```js
const axes = new Three.AxesHelper(5);
scene.add(axes);
```