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
