import { createApp } from 'vue'
import App from './App.vue'
// 引入 element-plus 插件与样式
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// @ts-expect-error
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import 'virtual:svg-icons-register'

// 获取应用实例对象
const app = createApp(App)
// 安装 element-plus 插件
app.use(ElementPlus, {
  locale: zhCn,
})
// 引入自定义插件对象：注册整个项目的全局组件
import gloablComponent from '@/components'
app.use(gloablComponent)
// 引入模板的全局样式
import '@/styles/index.scss'
// 将应用挂在到挂载点上
app.mount('#app')
