# Toast

一个简易的 toast 组件，功能简单，可自定义样式和图标，没有其他花里胡哨的功能。

## 安装
```bash
npm i @wenmu/Toast
```

## 语法

```js
Toast.show(text, [options]);
```

## Demo

```js
import Toast from "../index";

// 省略其他代码

// 调用
const onClick = () => {
  Toast.show("hello,everyone", {
    className: styles.customcss,
    icon: <Icon />,
  });
};
```

## 参数

| 参数      | 说明                                         | 默认值     | 类型 |
| --------- | :------------------------------------------- | :--------- |---|
| text      | 显示的内容 | ''|string|
| time      | 消息显示的时间 | 1500ms | number|
| className | 自定义样式 | '' | string|
| icon      | 消息前面的小图标|''| ReactElement |