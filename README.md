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

## 如何引入
``` main.js```:
```js
// 全局注册
import hzqingVueTimeline from 'hzqing-vue-timeline'
Vue.use(hzqingVueTimeline)

 <hzqing-vue-timeline></hzqing-vue-timeline>
```

### 配置
### 引入组件
```html
   <hzqing-vue-timeline 
   timelineColor="#5bbcd5"  
   timeContentColor="#fff"
   :dataList="data"
   ></hzqing-vue-timeline>

```
### 组件数据
``` js
    data: [
        {
            time: 1522372393000,
            img: 'static/touxiang.jpeg',
            title: 'hzqing.com',
            content: '这是衡钊清的个人博客'
        },
        {
            time: '2018-03-30 14:36:35',
            img: 'static/one.jpeg',
            title: '这是一个简单的vue时间轴插件',
            content: '这是一个简单的vue时间轴插件，使用非常的方便'
        },
        {
            time: 1522372393000,
            img: 'static/three.jpg',
            title: '努力奋斗',
            content: '当你发现你的才华撑不起野心时，就请安静下来学习吧~~~'
        }
    ]
```

### Props

|    name    |    Description   |   type   |default|
| -----------------  | ---------------- | :--------: | :----------: |
| dataList  |   数据  |   Array |
| timelineColor       | 时间轴插件整个背景颜色 |String| #5bbcd5
| timeContentColor        | 文字内容背景颜色 |String | #f2f2f2

### Props(dataList)格式
|    name    |    Description   |   type   |
| -----------------  | ---------------- | :--------: |
| time  |   时间  |   Date |
| img   | 中间图片 |String|
| title  | 标题 |String |
| content  | 内容 |String |

## update(更新内容)
- 2018-03-30 发布1.0.2 版本 修改time数据格式为Date
- 2018-03-29 发布1.0.1 版本 
- 2018-03-27 发布1.0.0 版本 第一次发布
