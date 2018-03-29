# hzqing-vue-timeline

> A Vue component to hzqing-vue-timeline 一个Vue的时间插件

## example (图片展示)


### 屏幕宽度大于1200px

![HZQING](./doc/timeline.png)

### 屏幕宽度小于1200px

![HZQING](./doc/timelinephone.png)

## 安装

```JS
npm install -S hzqing-vue-timeline
```

## 使用

```js
// ES6
import hzqingVueTimeLine from 'hzqing-vue-timeline.js'
// require
var hzqingVueTimeLine = require('hzqingTimeLine')

Vue.use(hzqingVueTimeLine)

// 或者直接使用script导入
<script src="./node_modules/vue/dist/hzqing-vue-timeline.js"></script>

// 作为组件的方式使用
 <hzqing-vue-timeline></hzqing-vue-timeline>
```

### 配置

```html
   <hzqing-vue-timeline 
   timelineColor="#5bbcd5"  
   timeContentColor="#fff"
   :dataList="data"
   ></hzqing-vue-timeline>

```
``` js
    data: {
            time: '2018年03月28日 09:45',
            img: 'static/touxiang.jpeg',
            title: 'hzqing.com',
            content: '这是衡钊清的个人博客'
        },
        {
            time: '2018年03月26日 10:50',
            img: 'static/one.jpeg',
            title: '这是一个简单的vue时间轴插件',
            content: '这是一个简单的vue时间轴插件，使用非常的方便'
        },
        {
            time: '2018年03月25日 20:56',
            img: 'static/three.jpg',
            title: '努力奋斗',
            content: '当你发现你的才华撑不起野心时，就请安静下来学习吧~~~'
        },
        {
            time: '2018年03月24日 11:15',
            img: 'static/touxiang.jpeg',
            title: 'vue时间轴插件',
            content: '初次开发插件，望大神指教'
        },
            {
            time: '2018年03月23日 06:56',
            img: 'static/one.jpeg',
            title: '这是一个标题',
            content: '这是一个标题这是一个标题这是一个标题这是一个标题这是一个标题这是一个标题这是一个标题这是一个标题这是一个标题这是一个标题这是一个标题这是一个标题这是一个标题'
        },
        {
            time: '2018年03月22日 15:32',
            img: 'static/three.jpg',
            title: '北漂的辛酸',
            content: '北漂中~~~~~~'
        },
        {
            time: '2018年03月22日 13:50',
            img: 'static/touxiang.jpeg',
            title: 'hzqing.com',
            content: '欢迎参观我的博客~~~'
        },
        {
            time: '2018年03月21日 10:16',
            img: 'static/three.jpg',
            title: '开始写vue时间轴插件',
            content: '在进行博客第二次开发时候，发现没有找到何时的时间轴插件。最后只能自己动手开始写~~~'
        },
        {
            time: '2018年03月20日 09:30',
            img: 'static/touxiang.jpeg',
            title: '博客二次开发',
            content: '开发关于我模块，缺少时间轴插件~~~'
        }
    ]
```

### Props

|    name    |    Description   |   type   |default|
| -----------------  | ---------------- | :--------: | :----------: |
| dataList  |   数据  |   Array |
| timelineColor       | 时间轴插件整个背景颜色 |String| #5bbcd5
| timeContentColor        | 文字内容背景颜色 |String | #f2f2f2


