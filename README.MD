# 一些Bug记录

### 在Arco-Design-Vue中Vite按需引入的时候自定义主题颜色不起效
`
大致内容如下
`
```
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

```
Components({
  resolvers: [
    ArcoResolver({
      sideEffect: true,
      importStyle: 'less', // 添加一行
    }),
  ],
}),
```

### 在nutui-uniapp中使用组件样式总是莫名奇妙丢失
`
有的时候出现某个组件样式丢失，这个很奇怪最初是根据如下导入的
`
```
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
