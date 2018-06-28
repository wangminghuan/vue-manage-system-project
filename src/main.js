import Vue from 'vue';
import App from './App';
import router from './router';
import axios from './http/http';
// import VueParticles from 'vue-particles'
// Vue.use(VueParticles);
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import "babel-polyfill";
import  VueQuillEditor from 'vue-quill-editor';
// 动态设置publicPath,模板中 window.resourceBaseUrl为最终结果
__webpack_public_path__ = window.resourceBaseUrl;
Vue.use(ElementUI);
Vue.use(VueQuillEditor);
Vue.prototype.$axios = axios;

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
