# 通道(channel)

在上篇中我们讲到了[协程](./routine.md),这里介绍另外一个go的概念，通道，通道的主要作用是，可以使两个协程之间，进行image.png


需要在声明通道时指定数据类型。我们可以共享内置、命名、结构和引用类型的值和指针。数据在通道上传递：在任何给定时间只有一个goroutine可以访问数据项：因此按照设计不会发生数据竞争。

根据数据交换的行为，有两种类型的通道：无缓冲通道和缓冲通道。无缓冲通道用于执行goroutine之间的同步通
信，而缓冲通道用于执行异步通信。无缓冲通道保证在发送和接收发生的瞬间执行两个goroutine之间的交换。缓
冲通道没有这样的保证。



## 通道的发送和接收特性

1. 对于同一个通道，发送操作之间是互斥的，接收操作之间也是互斥的。
2. 发送操作和接收操作中对元素值的处理都是不可分割的。
3. 发送操作在完全完成之前会被阻塞。接收操作也是如此。

```go
package main

import (
	"math/rand"
	"time"
)

var chan1 = make(chan int)

func send() {
	val := rand.Intn(100)
	time.Sleep(time.Second * 1) // 等待一秒钟
	print("发送的值为->>", val, "\n")
	chan1 <- val

}

func main() {
	defer close(chan1) // 关闭通道
	go send()
	// 主程序等待接收值完成才进行下一步，
	val := <-chan1 // 接收通道的值
	print("接收的值为->>", val)
	print(`end...`)
}
```