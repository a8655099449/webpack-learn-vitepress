
# go的结构体

在go中没有面向对象的概念，也就是其他语言中的`对象`、`类`在go中都没有。但是可以使用结构体来实现一些面向对象的特性。比如继承、组合

## 定义结构体
```go
type Person struct {
	name   string
	age    int
	id     int
	gender string
}
```
可以把相同类型的合并成一行
```go
type Person struct {
	name, gender string
	age, id      int
}
```
## 声明结构体变量


```go
var tom Person = Person{
  name:   "tom",
  age:    18,
  id:     1,
  gender: "男",
}

kuangw := Person{
  name: "kuangw",
  age:    20,
  id:     2,
  gender: "男",
}

fmt.Printf("tom: %v\n", tom)
fmt.Printf("kuangw: %v\n", kuangw)
// 访问结构成员
fmt.Printf("kuangw.name: %v\n", kuangw.name)
```


## 匿名结构体
直接声明变量的时候也可以定义成结构体
```go
var dog struct {
  name string
  age  int
}

dog.name = `旺福`
dog.age = 2
```


## 结构体的指针

关于 [指针的介绍](./pointer.md)


**第一种方法**
```go{12}
type Person struct {
  name, gender string
  age, id      int
}
var tom Person = Person{
  name:   "tom",
  age:    18,
  id:     1,
  gender: "男",
}

var pTom *Person = &tom
fmt.Printf("pTom: %p\n", pTom) // 输出 pTom: 0xc0000764b0
```
第二种方法，使用`new`关键字

```go{12,13}
type Person struct {
  name, gender string
  age, id      int
}
var tom Person = Person{
  name:   "tom",
  age:    18,
  id:     1,
  gender: "男",
}

var pTom  = new(Person)
pTom = &tom
fmt.Printf("pTom: %p\n", pTom) // 输出 pTom: 0xc0000764b0
fmt.Printf("pTom: %v\n", *pTom) // 输出 pTom: {tom 男 18 1}
```
### 访问结构指针的成员

跟其他指针的语法不同，通常我们访问指针的值时，需要在变量前面加上`*`号。而访问结构指针成员时，可以省略
```go{3,4}
var pTom = new(Person)
pTom = &tom
pTom.age = 66    // 和下面那行的效果是一样的
(*pTom).age = 66 //
```


## 结构体作为函数的参数
```go{10-13}
package main

import "fmt"

type Person struct {
	name, gender string
	age, id      int
}

func fn(p Person) {
	var name = p.name
	fmt.Printf("name: %v\n", name)
}
func main() {
	var tom Person = Person{
		name:   "tom",
		age:    18,
		id:     1,
		gender: "男",
	}
	fn(tom)
}
```
:::warning
值得注意的是，改变当做参数结构体的值时，不会影响函数外部的值
```go
package main
import "fmt"
type Person struct {
	name, gender string
	age, id      int
}

func fn(p Person) {
	p.name = "李四" // 改变结构体的值
}
func main() {
	var tom Person = Person{
		name:   "tom",
		age:    18,
		id:     1,
		gender: "男",
	}
	fn(tom)
	fmt.Printf("tom.name: %v\n", tom.name) // 输出还是tom
}
```
如果我们想要修改结构体的话，就需要传递指针过去

```go{8,18}
package main
import "fmt"
type Person struct {
	name, gender string
	age, id      int
}

func fn(p *Person) {
	p.name = "李四"
}
func main() {
	var tom Person = Person{
		name:   "tom",
		age:    18,
		id:     1,
		gender: "男",
	}
	fn(&tom)
	fmt.Printf("tom.name: %v\n", tom.name) // 输出李四
}
```
:::

## 结构体嵌套

go语言中没有面向对象的编程思维。但是可以通过结构体嵌套拿来实现这种效果。以下的例子进行展示
```go{12,21-24}
package main
import "fmt"

type Dog struct {
	name string
	age  int
}

type Person struct {
	name, gender string
	age, id      int
	dog          Dog
}

func main() {
	var tom Person = Person{
		name:   "tom",
		age:    18,
		id:     1,
		gender: "男",
		dog: Dog{
			name: "旺财",
			age:  18,
		},
	}
	fmt.Printf("tom: %v\n", tom)
}
```

## 结构体的方法

Go中的方法，是一种特殊的函数，定义于struct之上（与struct关联、绑定），被称为struct的接受者(receiver)。
通俗的讲，方法就是有接收者的函数。
```go{10-12,19}
package main

import "fmt"

type Person struct {
	name string
	age  int
}

func (p Person) sayHello() { // 函数名字前面加上括号，代表是一个结构体的方法
	fmt.Printf(" %v say hello \n", p.name)
}

func main() {
	var tom Person = Person{
		name: "tom",
		age:  18,
	}
	tom.sayHello()
}
```