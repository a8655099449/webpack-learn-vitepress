export type SideItem = {
  text?: string;
  collapsible?: boolean;
  items?: SideItem[];
  link?: string;
};

export default [
  {
    text: "起步",
    collapsible: true,
    items: [
      { text: "go的安装", link: "/pages/go/install" },
      { text: "格式化输出、运算符与关键字", link: "/pages/go/type2" },
      { text: "go的类型", link: "/pages/go/type" },
      { text: "函数", link: "/pages/go/func" },
      { text: "结构体（struct）", link: "/pages/go/struct" },
      { text: "指针（pointer）", link: "/pages/go/pointer" },
      { text: "接口（interface）", link: "/pages/go/interface" },
      { text: "包（package）", link: "/pages/go/package" },
      { text: "协程(routine)", link: "/pages/go/routine" },
      { text: "通道(channel)", link: "/pages/go/channel" },
      { text: "其他", link: "/pages/go/other" },
    ],
  },
  {
  text: "包（package）",
    collapsible: true,
    items: [
      { text: "validator", link: "/pages/go/validator" },
      { text: "gorm", link: "/pages/go/gorm" },
      { text: "gin", link: "/pages/go/gin" },
    ],
  },
];
