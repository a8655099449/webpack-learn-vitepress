# 格式化输出

| 内容  |            含义            |                          示例                           |
| :---: | :------------------------: | :-----------------------------------------------------: |
| `%v`  | 代表`var`,相应值的默认格式 | ![](https://s2.loli.net/2022/12/09/JKP4mb1I7rMcqUl.png) |
| `%#v` | 相对于`%v`有额外的结构输出 | ![](https://s2.loli.net/2022/12/09/Tl641xUOtNo7AsE.png) |
| `%T`  |          输出类型          | ![](https://s2.loli.net/2022/12/09/olRZbXc1DwK8vqm.png) |
| `%t`  |        输出布尔类型        |              `fmt.Printf("b: %t\n", true)`              |
| `%p`  |        输出指针类型        | ![](https://s2.loli.net/2022/12/09/Tc6LCvobw9WjKX8.png) |


**整数占位符**


| 内容  |       含义       |                示例                 |
| :---: | :--------------: | :---------------------------------: |
| `%b`  |    二进制表示    | `fmt.Printf("%b\n", 5)  // 输出101` |
| `%d`  |    十进制表示    |                                     |
| `%o`  |    八进制表示    |                                     |
| `%x`  | 小写的16进制表示 |                                     |




## go的循环运算符

go里面只有`for` 和 `for range`
```go
for i := 0; i < 10; i++ {
  fmt.Printf("i: %v\n", i)
}

arr := [...]int  {1,1,3}
for _, v := range arr {
  fmt.Printf("v: %v\n", v)
}
```
`for range`  有点类似于 `js`中的 `for in` ,可以遍历 数组 、 字符串 、 map 、 切片 、 通道 。返回有以下的规律

1. 数组 、 字符串 、 切片 返还索引和值
2. map 返回键和值
3. 通道，只返回通道内的值




## 条件运算符
`if else` 为go的条件运算符，和其他语言基本相同，只需要注意以下的几个问题

1. if 后面不需要跟括号
2. if 后面的语句必须要返回的必须要是一个布尔值’
3. if 和 `{` 必须要在同一行

以下的三种都有错误

![](https://s2.loli.net/2022/12/09/2y71c9qZdu68MPA.png)


 

##  关键字

**break**

`break` 可以结束 `for` \ `switch` \ `select` 的代码块


![](https://s2.loli.net/2022/12/09/y2oGnZCLYmOt4UH.png)


**continue**  ： 结束本次循环，继续下一次



**goto**

`goto`关键字可以跳转到一个标签 ,并且结束当前的代码块

```go
func main() {

	for i := 0; i < 10; i++ {

		if i == 6 {
			goto END
		}
		fmt.Printf("i: %v\n", i)
	}
END:
	fmt.Printf("end...")
}
```

而且 `goto` 还可以结束多重for循环 ,  而break只能结束当前这次的for循环


```go
func main() {

	for i := 0; i < 10; i++ {

		for j := 0; j < 10; j++ {

			if i == 1 && j == 2 {
				goto END
			}	
			fmt.Printf("i: %v  j:%v\n", i ,j)
		}
	}
END:
	fmt.Printf("end...")

}
```



## 数组

数组在go中，是指固定长度相同类型的一段空间


```go
var arr = [3]int{1, 2, 3}
fmt.Printf("arr: %v\n", arr)
```

也可以不指定长度

```go
var arr = [...]int{1, 2, 3}

fmt.Printf("arr: %v\n", arr)
```

## 切片 

切片可以理解为不限长度的数组
```go
var arr = []int{1, 2, 3}

fmt.Printf("arr: %v\n", arr)
```

也可以从数组中进行初始化

```go
var arr = [...]int{1, 2, 3, 4, 5, 6}

var slice1 = arr[:] // 取数组所有值作为切片
var slice2 = arr[2:] // 取索引 2 ~ n 
var slice3 = arr[:3] // 取索引 0 ~ 3-1
var slice4 = arr[2:3] // 取索引 2 ~ 3-1

fmt.Printf("slice1: %v\n", slice1)
fmt.Printf("slice2: %v\n", slice2)
fmt.Printf("slice3: %v\n", slice3)
fmt.Printf("slice4: %v\n", slice4)
```

