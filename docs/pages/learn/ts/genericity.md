# ts中的内置泛型和类型体操实例

## Pick

Pick是选择属性的泛型，第一个参数传入一个类型，第二个参数传入你需要的属性集合，返回一个新的类型

```ts
type Person = {
  name: string;
  age: number;
  gender: number;
};
type PikeType = Pick<Person,'name'|'age'> // 只有name 和 age属性
```

**实现自己的Pick**

```ts
type MyPick<T,K extends keyof T> = {
  [P in K]:T[P]
}
```
## Readonly

Readonly 会将类型的属性变为只读属性

**实现**

```ts
type MyReadOnly<T> = {
  readonly [K in keyof T]: T[K];
};
```

## 将元祖转换为对象
[github地址](https://github.com/type-challenges/type-challenges/blob/main/questions/00011-easy-tuple-to-object/README.zh-CN.md)

```ts
type TupleToObject<T extends readonly any[]> = {
  [K in T[number]]: K;
};
```


## 第一个对象
实现一个通用`First<T>`，它接受一个数组T并返回它的第一个元素的类型。