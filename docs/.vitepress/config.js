import { defineConfig } from "vitepress";
import {
  chineseSearchOptimize,
  pagefindPlugin,
} from "vitepress-plugin-pagefind";
export default defineConfig({
  title: "RyanRan",
 
  ignoreDeadLinks: true,
  lang: "zh-cn",
  themeConfig: {
    outlineTitle: "list",
    logo: "",
    nav: [
      { text: "home", link: "/bugs/Vue/" },
    ],

    footer: {
      copyright: "©2023 by RyanRan",
    },

    sidebar: {
      "/bugs/": [
        {
          text: "bugs",
          items: [
            {
              text: "Vue",
              link: "/bugs/Vue/",
            },
            {
              text: "uni-app",
              link: "/bugs/uni-app/",
            },
          ]

        },
      ],
    },
  },
  // srcExclude: '../../components',
  vite: {
    plugins: [
      pagefindPlugin(
        {
          customSearchQuery: chineseSearchOptimize,
          resultOptimization: false,
          filter(searchItem, idx, originArray) {
            return !searchItem.route.includes("404");
          },
        },
        {
          forceLanguage: "zh-cn",
        }
      ),
    ],
  },
});
