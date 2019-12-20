# 九五斋居\_shmaur 个人博客

> 基于 Nuxt.js 服务器渲染(SSR)搭建的个人博客系统，使用 Vue 全家桶进行开发，自己设计并进行开发

## 实现的功能
- [ ]  登陆
- [ ]  注册
- [ ]  技术文章列表
- [ ]  设计文章列表
- [ ]  读书文章列表
- [ ]  文章搜索
- [ ]  文章分类
- [ ]  文章预览统计
- [ ]  文章评论统计
- [ ]  查看文章
- [ ]  文章评论
- [ ]  留言管理
- [ ]  首页
- [ ]  标签
- [ ]  软件共享

# 设计图

## 首页

![首页](https://github.com/Shmaur/vue_blog_ssr_95/blob/master/design/home.jpg)

## 文章列表

![文章列表](https://github.com/Shmaur/vue_blog_ssr_95/blob/master/design/article.jpg)

## 文章详情

![文章详情](https://github.com/Shmaur/vue_blog_ssr_95/blob/master/design/article_info.png)

## 留言

![留言](https://github.com/Shmaur/vue_blog_ssr_95/blob/master/design/message.png)

## 📁 前端目录结构

```
nuxt_blog/
   |
   ├──assets/                    * 静态资源如 LESS、SASS 或 JavaScript
   |
   ├──components/                *  Vue.js 组件
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
## 📁 服务目录结构
```
nuxt_blog_server/
   |
   ├──bin/                     * 程序启动入口
   |
   ├──config/                  * 通用配置
   │
   │──controllers/             * 路由控制器
   │
   │──lib/                     * 工具类
   |
   ├──logs/                    * 日志
   │
   ├──mysql/                   * mysql 语句
   |
   ├──public/                  * 静态文件，共享目录
   │
   │──router/                  * 路由入口
   │
   │──services/                * 路由服务
   │
   │──app.js/                  * 入口
   │
   │──package.json             * 包信息
   │
   │──.babelrc                 * 解析器
   │
   └──readme.md                * 说明文件

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
# https://blog.csdn.net/weixin_30531261/article/details/80891360
#https://www.cnblogs.com/jpfss/p/10063007.html
#https://blog.csdn.net/hukun910903/article/details/79513203
#https://blog.csdn.net/liao20081228/article/details/77185513
#https://www.cnblogs.com/xq1314/p/8080598.html
#https://blog.csdn.net/weiyuefei/article/details/76269790
# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).


