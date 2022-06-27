# js 中的 set 、 map 、weakMap 、 weakSet
在es6中新增了几种数据类型，其中就包括`set 、 map 、weakMap 、 weakSet` ，他们各种都有自己独特的作用，本文会介绍这四种新数据类型的使用，和应用场景

相关文章：


## set

- [阮一峰es6入门 - set](https://es6.ruanyifeng.com/#docs/set-map)
- [mdn-set](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set)

**set的特点是值是唯一的。**

### 创建一个Set值

```js
const set1 = new Set([1, 2, 3, 1,]) // =>{1, 2, 3}

const set2 = new Set()
set2.add(1).add(2).add(3).add(1) // => {1, 2, 3}
```

### set 的方法



| 方法名 | 描述              | 返回值          |
| :----: | ----------------- | --------------- |
| `add`  | 往set中添加一个值 | 返回新的set集合 |
| `has`  | 判断set中是否存在某个值 | `boolean` |
| `delete`  | 删除某个值 | `boolean` |
| `clear`  | 清空set | `undefined` |
| `keys \ values`  | 获得set的键集合或者值集合 | `Set` |
| `entries`  | 返回一个键值对 | 类似于 `{1 => 1, 2 => 2, 3 => 3, 5 => 5}` |


