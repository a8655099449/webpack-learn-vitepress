# 在ts中的关键字

## keyof

[keyof官方文档解释](https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html)

总的来说，就是可以抽取一个对象中的key，来形成一个字符串或者数字的集合

```ts
type Person = {
  name: string;
  age: number;
  gender: number;
};

type Keys = keyof Person

// 等价于
type Keys = 'name' | 'age' | 'gender'

```
