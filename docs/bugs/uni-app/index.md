---
title: uni-app
---

# Records uni-app

## 在nutui-uniapp中使用组件样式总是莫名奇妙丢失
`
有的时候出现某个组件样式丢失，这个很奇怪最初是根据如下导入的
`
``` javascript
  "easycom": {
    "autoscan": true,
    "custom": {
      "^nut-(.*)?-(.*)": "nutui-uniapp/components/$1$2/$1$2.vue",
      "^nut-(.*)": "nutui-uniapp/components/$1/$1.vue"
    }
  },

```
后续我又重新查看了[文档](https://nutui-uniapp.netlify.app/guide/quick-start.html#%E7%BB%84%E4%BB%B6-ts-%E7%B1%BB%E5%9E%8B%E6%94%AF%E6%8C%81)
使用`使用 @uni-helper/vite-plugin-uni-components 自动导入组件`最终解决问题。地址：[自动导入组件](https://nutui-uniapp.netlify.app/guide/quick-start.html#%E7%BB%84%E4%BB%B6-ts-%E7%B1%BB%E5%9E%8B%E6%94%AF%E6%8C%81)



## 使用vite构建的uniapp在使用 @ant-design/colors运行到微信小程序中报错
 查阅源码`generate.js`发现有引入一下内容
``` javascript
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = generate;
var _tinycolor = require("@ctrl/tinycolor");
```
在项目包中引入 @ctrl/tinycolor 解决报错
``` json
 "devDependencies": {
    ...
+    "@ctrl/tinycolor": "^4.0.3",
    ...
 }
```

## 在使用nutui-uniapp的时候，怎么可以清空掉nut-button里面的border?
新建一个scss文件 列比如nut.scss
```
$button-default-border-color: blue;
```
然后再vite.config.ts中导入

``` javascript
//vite.config.ts
css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "nutui-uniapp/styles/variables.scss";@import "@/styles/nut.scss";',
      },
    },
  },
```
可以[参考](https://www.uniapp-nutui.tech/guide/theme.html#%E4%BD%BF%E7%94%A8-sass-%E5%8F%98%E9%87%8F-%E8%BF%9B%E8%A1%8C%E4%B8%BB%E9%A2%98%E9%85%8D%E7%BD%AE)


[原文地址](https://github.com/nutui-uniapp/nutui-uniapp/issues/177)
