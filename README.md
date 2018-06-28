# 保世界内部管理后台 #
基于Vue.js 2.x系列 + Element UI 的后台管理系统解决方案。在此[项目](http://blog.gdfengshuo.com/example/work/)基础上修改而成

>线上地址：http://inner.inswindows.com

>测试地址：http://zc-03.dev.bxd365.com （用户名 admin, 密码：123456）

## 一、项目说明

### 1. 项目启动说明
#### 第一步：安装依赖

	npm i
建议不要用cnpm  安装有各种诡异的bug 可以通过如下操作解决npm速度慢的问题 npm install --registry=https://registry.npm.taobao.org
#### 第二步：运行开发环境

	npm run dev //浏览器会自动打开 http://localhost:8060

#### 2. 项目构建说明

#### 第一步：修改异步模块版本号

	build/webpack.prod.conf.js 修改该文件中的版本号(目前版本号改为了动态时间戳，所以此步可以跳过~)
#### 第二步：运行构建命令

	npm run build


## 二、结构目录说明

    ├─.babelrc
	├─.editorconfig
	├─.gitignore
	├─index.html
	├─package.json
	├─README.md
	├─static
	|   ├─.gitkeep
	|   ├─img
	|   |  └avatar.png
	|   ├─css
	|   |  └main.css
	├─src
	|  ├─App.vue  //入口组件
	|  ├─main.js
	|  ├─utils
	|  |   ├─http.js
	|  |   └utils.js
	|  ├─router
	|  |   └index.js
	|  ├─components
	|  |     ├─page
	|  |     |  ├─editor.vue
	|  |     |  ├─login.json
	|  |     |  ├─Login.vue   //登录组件
	|  |     |  ├─Welcome.vue //欢迎组件
	|  |     |  ├─user
	|  |     |  |  └index.vue  //用户管理
    |  |     |  ├─poster                   **//海报管理
    |  |     |  |   ├─posterList.vue         //海报列表
    |  |     |  |   └─posterSort.vue         //海报分类
	|  |     |  ├─servicemanage            **//服务商审核管理
	|  |     |  |   ├─smanageAout.vue        //服务商审核
	|  |     |  |   └─smanageList.vue        //服务商列表
	|  |     |  ├─square          //广场管理
	|  |     |  |   ├─addserverdetails.vue  //应用添加，服务添加
	|  |     |  |   ├─appbg.vue             //应用后台管理
	|  |     |  |   ├─apptype.vue           //应用类型管理
	|  |     |  |   ├─audit.vue             //服务审核管理
	|  |     |  |   ├─default.vue           //默认应用管理
	|  |     |  |   ├─position.vue          //默认应用类型管理
	|  |     |  |   ├─provider.vue          //优质服务商管理
	|  |     |  |   ├─server.vue            //服务管理
	|  |     |  |   └servertype.vue          //服务类型管理
	|  |     |  ├─permission   //权限管理
	|  |     |  |     ├─admin.vue           //管理员管理
	|  |     |  |     ├─role.vue            //权限管理
	|  |     |  |     └version.vue           //版本管理
	|  |     |  ├─operate      //运营中心
	|  |     |  |    ├─appabanner.vue       //app应用广场banner管理
	|  |     |  |    ├─appsbanner.vue       //app服务广场banner管理
	|  |     |  |    ├─appwbanner.vue       //app  工作台banner管理
	|  |     |  |    ├─banner.vue           //企业管理后台banner管理
	|  |     |  |    ├─msgnotify.vue        //消息通知
	|  |     |  |    ├─msgrecord.vue        //消息记录
	|  |     |  |    ├─pcabanner.vue        //客户案例-pc站首页轮播图
	|  |     |  |    ├─pckbanner.vue        //pc站首页轮播图
	|  |     |  |    └startpage.vue
	|  |     |  ├─invite
	|  |     |  |   ├─actSituation.vue
	|  |     |  |   ├─cardSituation.vue
	|  |     |  |   ├─userDetail.vue
	|  |     |  |   └userSituation.vue
	|  |     |  ├─headline
	|  |     |  |    ├─acticle.vue                      //头条管理文章列表信息
	|  |     |  |    ├─acticleAdd.vue                  //头条管理文章添加
	|  |     |  |    ├─acticleEdit.vue                 //头条管理文章编辑
	|  |     |  |    ├─column.vue                      //头条管理专栏列表信息
	|  |     |  |    ├─columnAdd.vue                   //头条管理专栏添加
	|  |     |  |    ├─columnArticleAdd.vue            //头条管理专栏文章添加
	|  |     |  |    ├─columnEdit.vue                  //头条管理专栏编辑
	|  |     |  |    ├─columnSelectArticleList.vue     //头条管理专栏文章选择
	|  |     |  |    ├─comment.vue                     //头条管理评论列表信息
	|  |     |  |    ├─recommend.vue                   //头条管理推荐位列表信息
	|  |     |  |    ├─recommendAdd.vue                //头条管理推荐位添加
	|  |     |  |    ├─recommendEdit.vue               //头条管理推荐位编辑
	|  |     |  |    ├─subject.vue                     //头条管理专题列表信息
	|  |     |  |    ├─subjectAdd.vue                  //头条管理专题添加
	|  |     |  |    ├─subjectArticleAdd.vue           //头条管理专题文章添加
	|  |     |  |    ├─subjectEdit.vue                 //头条管理专题编辑
	|  |     |  |    └subjectSelectArticleList.vue     //头条管理专题文章选择
	|  |     |  ├─data
	|  |     |  |  ├─companyData.vue
	|  |     |  |  └userData.vue
	|  |     |  ├─business
	|  |     |  |    └index.vue                        //企业管理
	|  |     ├─common
	|  |     |   ├─error.vue
	|  |     |   ├─Header.vue
	|  |     |   ├─Home.vue
	|  |     |   └Sidebar.vue
	|  ├─assets
	|  |   └logo.png
	├─config
	|   ├─dev.env.js
	|   ├─index.js
	|   └prod.env.js
	├─build
	|   ├─build.js
	|   ├─check-versions.js
	|   ├─dev-client.js
	|   ├─dev-server.js
	|   ├─utils.js
	|   ├─vendor-manifest.json
	|   ├─vue-loader.conf.js
	|   ├─webpack.base.conf.js
	|   ├─webpack.dev.conf.js
	|   ├─webpack.dll.conf.js
	|   └webpack.prod.conf.js



