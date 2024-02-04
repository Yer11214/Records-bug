---
title: Vue
---

# Records Vue.js 

## 在Arco-Design-Vue中Vite按需引入的时候自定义主题颜色不起效
`
大致内容如下
`
``` javascript
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite';
import { ArcoResolver } from 'unplugin-vue-components/resolvers';


export default defineConfig({
  ...,
  AutoImport({
    resolvers: [ArcoResolver()],
  }),
  Components({
    resolvers: [
      ArcoResolver({
        sideEffect: true
      })
    ]
  }),
  css: {
      preprocessorOptions: {
        less: {
          modifyVars: {
            'arcoblue-6': '#32ccbc', // 常规
            
          },
          javascriptEnabled: true,
        },
      },
    },
})
```
上面代码试了好几遍也没生效最后在Arco的issues查询了一下[地址](https://github.com/arco-design/arco-design-vue/issues/1503)使用如下代码完美解决

``` javascript
Components({
  resolvers: [
    ArcoResolver({
      sideEffect: true,
      importStyle: 'less', // 添加一行
    }),
  ],
}),
```
