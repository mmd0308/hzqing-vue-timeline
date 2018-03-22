<template>
    <div id="hzqing" >
        <div class="timeline">
            <div class="timeline-row" v-for="(item,index) in timeItemList" :key="index">
                <div class="timeline-time">
                    <span>{{ item.time}} </span>
                </div>
                <div class="timeline-img">
                    <div class="img">
                    <img src="static/touxiang.jpeg"/>
                    </div>
                </div>
                <div class="timeline-content">
                    <div class="content-body">
                        <h2>{{ item.title }}</h2>
                        <p>
                            {{ item.content }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'hzqing-vue-timeline',
    data() {
        return {
            timeItemList:[
                {
                    time: '2018年03月22日 06:56',
                    img: 'static/touxiang.jpeg',
                    title: '这是一个完美的vue时间轴插件',
                    content: '参加高考啦,过后报考成都理工大学应用物理专业参加高考啦,过后报考成都理工大学应用物理专业参加高考啦,过后报考成都理工大学应用物理专业参加高考啦,过后报考成都理工大学应用物理专业'
                },
                {
                    time: '2018年03月25日 03:56',
                    img: 'static/touxiang.jpeg',
                    title: '这是一个标题',
                    content: '踏上编程道路,学习安卓开发~~~'
                },
                {
                    time: '2018年03月25日 23:56',
                    img: 'static/touxiang.jpeg',
                    title: '这是一个标题',
                    content: '踏上编程道路,学习安卓开发~~~'
                },
                 {
                    time: '2018年03月22日 06:56',
                    img: 'static/touxiang.jpeg',
                    title: '这是一个标题',
                    content: '参加高考啦,过后报考成都理工大学应用物理专业参加高考啦,过后报考成都理工大学应用物理专业参加高考啦,过后报考成都理工大学应用物理专业参加高考啦,过后报考成都理工大学应用物理专业'
                },
                {
                    time: '2018年03月25日 03:56',
                    img: 'static/touxiang.jpeg',
                    title: '这是一个标题',
                    content: '踏上编程道路,学习安卓开发~~~'
                },
                {
                    time: '2018年03月25日 23:56',
                    img: 'static/touxiang.jpeg',
                    title: '这是一个标题',
                    content: '踏上编程道路,学习安卓开发~~~'
                }
            ]
        }
    }
}
</script>

<style rel="stylesheet/scss" lang="scss">
#hzqing{
    list-style: none;
    position: relative;
    max-width: 1200px;
    padding: 20px;
    margin: 0 auto;
    overflow: hidden;
    .timeline-row{
        padding-left: 50%;
        z-index: 10;
        position: relative;
        .timeline-time{
            position: absolute;
            right: 50%;
            text-align: right;
            margin-right: 60px;
            font-size: 15px;
            line-height: 35px;
            top: 40px;
        }
        .timeline-img{
            position: absolute;
            top: 30px;
            left: 50%;
            margin-left: -20px;
            width: 60px;
            height: 60px;
            text-align: center;
            overflow: hidden;
            padding: 3px;
            font-size: 14px;
            z-index: 100;
            .img{
                width: 60px;
                height: 60px;
                img{
                    width: 100%;
                    height: 100%;
                    border-radius: 50%;
                }
            }
        }
        .timeline-content{
            position: relative;
            background-color: white;
            color: #333333;
            border-radius: 5px;
            margin-right: 0px;
            margin-left: 60px;
            margin-bottom: 20px;
            .content-body{
                padding: 15px 15px 2px;
                position: relative;
                z-index: 10;
                h2{
                    font-size: 20px;
                    margin-bottom: 12px;
                    margin-top: 0;
                    line-height: 15px;
                    font-weight: 600;
                }
                p{
                    margin: 0px 0px 15px;
                }
            }
        }
        .timeline-content:after{
            content: "";
            position: absolute;
            top: 60px;
            left: -60px;
            height: 4px;
            width: 60px;
            background-color: rgba(0, 0, 0, 0.2);
            z-index: -1;
        }
    }
    .timeline-row:nth-child(odd){ // 奇数样式
        padding-left: 0;
        padding-right: 50%;
        .timeline-time{
            right: auto;
            left: 50%;
            text-align: left;
            margin-right: 0;
            margin-left: 60px;
        }
        .timeline-content{
            margin-right: 60px;
            margin-left: 0px;
        }
        .timeline-content:after{
            left: auto;
            right: -60px;
        }
    }
   @media screen and (max-width:1200px){
        .timeline{
            .timeline-row {
                position: relative;
                right: auto;
                top: 0;
                margin: 0 0 6px 56px;
                padding-left: 0;
                margin-bottom: 16px;
            }
            .timeline-row:nth-child(odd){
                padding-right: 0;
                .timeline-content{
                    margin-right: 0px;
                    margin-left: 40px;
                }
                .timeline-time {
                    position: relative;
                    right: auto;
                    left: auto;
                    top: 0;
                    text-align: left;
                    margin: 0 0 0px 40px;
                }
            }
            .timeline-img{
                top: 40px;
                left: -45px;
                margin-left: 0;
            }
            .timeline-time {
                position: relative;
                right: auto;
                left: auto;
                top: 0;
                text-align: left;
                margin: 0 0 0px 40px;
            }
            .timeline-content{
                margin-left: 40px;
                box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
                position: relative;
            }
            .timeline-content:after{
                right: auto !important;
                left: -40px !important;
                top: 30px;
            }
        }
        .timeline:after{
            left: 50px;
        }
        
    }
}

.timeline:after{
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    background-color: rgba(0, 0, 0, 0.2);
    height: 100%;
    width: 4px;
    border-radius: 2px;
    display: block;
    margin-left: 10px;
}

</style>
