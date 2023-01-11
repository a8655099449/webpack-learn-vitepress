# gin 的使用

Gin是一个使用Go语言开发的Web框架。 [中文文档地址](https://gin-gonic.com/zh-cn/)


## 下载
```
go get -u github.com/gin-gonic/gin
```

## 启动一个服务
新建文件`common/server.go` , 填充内容
```go
package common

import (
	"github.com/gin-gonic/gin"
	"log"
)

var App *gin.Engine

// RunServer 启动服务器
func RunServer() {
	App = gin.Default()
	// 跑在3000端口
	err := App.Run(":3000")
	if err == nil {
		log.Println("服务器启动成功")
	} else {
		log.Println("服务启动失败", err.Error())
	}
}

```