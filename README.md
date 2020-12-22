## 🎁微信发送碎片化思想

随时随地发表碎片化思想。

## 🚩安装

```
npm install hexo-bb --save
```

## 🧻准备

### Leancloud创建存储空间

  - 新建一个应用
  - 在此应用下创建一个名为content的class

### 微信公众号绑定

![黑石哔哔公众号](https://cdn.jsdelivr.net/gh/heson10/pic@master/pic/20201130212710.png)

按照公众号的提示的命令进行绑定：

```
//bindCurrentUser:你的AppID,你的MasterKey,https://你的api域名
```

以上准备工作详细步骤：[点我](https://www.heson10.com/posts/58339.html#Leancloud%E5%88%9B%E5%BB%BA%E5%AD%98%E5%82%A8%E7%A9%BA%E9%97%B4 )

## 🕋配置

在根目录配置文件_config.yml中加入:

```
## 哔哔功能配置
## 关注公众号 "黑石哔哔"，发送: //bindCurrentUser:你的APPID,你的MASTERKEY,你的RESTAPI 
## 可用leancloud国际版，国际版api为 https://appid前八位.api.lncldglobal.com 
bb:
 title: 哔哔  #页面title
 appId: 你的leancloud appId
 appKey: 你的leancloud appKey
 serverURLs: https://xxxxxx #你的api地址
 limit: 10 #显示条数
 path: bb #路径名称 例如：https://你的域名/bb
 content: '👉🏼此说说通过📱手机微信发出，主要记录黑石碎片化思考和动态。📑' #显示在哔哔上方,如不需要注释即可
```

## 💌发送消息

对`黑石哔哔`公众号私信即可发送消息同步到hexo博客。

- 表情支持emoji
- 图片支持外链
## 🍳预览

```
https://你的域名/bb/
```
## 🎃欢迎反馈bug

当前只在最新的`landscape`、`fluid`、`volantis`、`next`、`matery`、`butterfly`主题上测试过。

## 💞更新记录
v0.1.13
- 优化p标签margin样式

v0.1.12
- 外链图片增加对svg的支持

v0.1.11
- 增加哔哔上方内容简介配置(content)
- 增加显示数量配置(limit)
- 增加哔哔页面路径配置(path)

v0.1.10
- 哔哔样式细节优化

v0.1.9

- 更新readme

v0.1.8

- ejs集成

v0.1.2 

- 修复图片宽度问题