# 构建vue多页面与spa应用

> Vue构建

## Build Setup

``` bash
# 安装依赖
npm install

# 默认多页面开发服务器地址：localhost:8080
npm run dev

# 默认单页面开发服务器地址：localhost:8080
npm run spa_dev

# 构建打包多页面应用代码的命令
npm run build

# 构建打包单页面多页面应用的命令
npm run spa_build

```
|文件夹名称|文件夹作用|别名|
|----------|----------|----------|
|build|webpack基础配置|无|
|config|常变动的一些配置|无|
|src|项目的源码文件夹|@src|
|static|一些项目不会改变的基础文件|无|
|dist|项目打包生成的文件夹|无|


|src文件夹|文件夹作用|别名|
|----------|----------|----------|
|assets|资源文件夹，存放图片、字体等|@assets|
|components|组件文件夹，存放一些公共的布局组件等|@components|
|modules|模块文件夹，存放项目一些业务模块，一般针对于该项目的模块|@modules|
|pages|页面文件夹，目前app对应的多页面应用配置，h5对应单页面应用配置|@page、@app、@h5|
|router|路由文件夹，如果使用单页面应用，可以定义页面路由|@router|
|vuex|主要放vuex的store，可以使用vue状态管理|@vuex|

项目页面主要内容写在app和H5两个文件夹中，app下的文件夹每一个名称对应一个页面名称，也是打包后的相关文件名称，新增加页面由nodejs自动识别。
