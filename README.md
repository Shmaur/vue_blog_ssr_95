# 九五斋居\_shmaur 个人博客

> 基于 Nuxt.js 服务器渲染(SSR)搭建的个人博客系统，使用 Vue 全家桶进行开发，自己设计并进行开发。开始入手开发

# 设计图

## 首页

![首页](https://github.com/Shmaur/vue_blog_ssr_95/blob/master/design/home.jpg)

## 文章列表

![文章列表](https://github.com/Shmaur/vue_blog_ssr_95/blob/master/design/article.jpg)

## 文章详情

![文章详情](https://github.com/Shmaur/vue_blog_ssr_95/blob/master/design/article_info.png)

## 留言

![留言](https://github.com/Shmaur/vue_blog_ssr_95/blob/master/design/message.png)

## 📁 目录结构

```
kite/
   |
   ├──assets/                    * 静态资源如 LESS、SASS 或 JavaScript
   |
   ├──components/                *  Vue.js 组件
   │   ├──build                  * vur ssr build 配置文件
   │   ├──config                 * 部分配置文件
   │   ├──public                 * index模版文件
   │   ├──request                * 请求配置文件
   │   ├──server                 * dev 模式下的开始文件
   │   ├──src                    * src ssr 主文件目录
   │   └──static                 * 静态资源目录
   │
   │──layouts/                   * 布局组件
   │
   │──middleware/                * 中间件
   |
   ├──pages/                     * 路由及视图
   │
   ├──plugins/                   * 实例化之前需要运行的 Javascript 插件。
   |
   ├──static/                    * 静态文件 该目录下的文件会映射至应用的根路径 / 下
   │
   │──store/                     * 全局数据状态管理
   │
   │──test/                      * 测试
   │
   │──server/                    * 服务端
   │
   │──package.json               * 包信息
   │
   │──.babelrc                   * 解析器
   │
   │──.editorconfig              * 编辑器习惯
   │
   │──.gitignore                 * Git忽略文件配置
   │
   │──ava.config                 * ava 测试脚本配置
   │
   │──e2e.config                 * 代码规范配置
   │
   │──nuxt.config                * Nuxt.js的个性化配置
   │
   │──ava.config                 * ava 测试脚本配置
   │
   │──ava.config                 * ava 测试脚本配置
   │
   │──ava.config                 * ava 测试脚本配置
   │
   └──unit.config                * 基础配置

```

## Build Setup

```bash
# install dependencies
$ npm run install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
