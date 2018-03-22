import vueTimeLine from './hzqing-vue-timeline'
const hzqingTimeLine = {
    install(Vue, options) {
        Vue.component(vueTimeLine.name, vueTimeLine)
    }
}
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(hzqingTimeLine)
}
export default hzqingTimeLine // 导出