# 接口
go语言的接口，是一种新的类型定义，它把所有具有共性的方法定义在一起，任何其他类型，只要实现了这些方法就是实现了这个接口

实际上接口我们也能把他当作一种类型

## 定义接口


```go
package main

import (
	"fmt"
	"math"
)

// 定义一个形状的接口.方法是获取面积
type share interface {
	area() float64
}

// 定义结构体 方形
type Rect struct {
	width  float64
	height float64
}

// 定义结构体圆形
type Circle struct {
	radius float64
}

func (c Circle) area() float64 {
	return c.radius * math.Pi * c.radius
}
func (r Rect) area() float64 {
	return r.width * r.height
}

func main() {

	var s1 share = Rect{
		width:  10,
		height: 5,
	}
	var s2 share = Circle{
		radius: 3,
	}

	fmt.Printf("s1.area(): %v\n", s1.area())
	fmt.Printf("s2.area(): %v\n", s2.area())
}
```
当结构体没有实现该方法时，就无法使用接口当作类型

![](https://s2.loli.net/2022/12/13/LBc3z59SvZfoDps.png)


## 联合接口

联合接口指的是，一个接口由其他的多个接口组合而成
