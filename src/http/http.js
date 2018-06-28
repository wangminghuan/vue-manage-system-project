import axios from 'axios';
import qs from "qs";
import router from 'router';
import Vue from 'vue'
//设置基本数据
const  __vue=new Vue();
axios.interceptors.request.use(
config => {

    if(!sessionStorage.getItem('__uid__') || !sessionStorage.getItem('__token__')) return config;
    let _params={};
    if(typeof __golbal_params=="undefined"){
        _params.u_id=sessionStorage.getItem('__uid__');
        _params.access_token=sessionStorage.getItem('__token__');
    }else{
        _params=__golbal_params
    }
    // 多媒体类型不转换
    if(config.data instanceof FormData){
        config.params = {
            ..._params,
            ...config.params
        }
        return config
    }


    config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
    if(config.method === 'post') {
        let data = qs.parse(config.data)

        config.data = qs.stringify({
            ..._params,
            ...data
        })

    } else if(config.method === 'get') {
        config.params = {
            ..._params,
            ...config.params
        }
    }
    return config;
},
err => {
    return Promise.reject(err);
});
axios.interceptors.response.use(function (response) {  
    // token 已过期，重定向到登录页面  
    
    if (response.data.code == -100){  
        sessionStorage.clear();  
        __vue.$message.error('登录过期，请重新登录！！！~');
        router.replace('/login');
        
    }  
    return response  
}, function (error) { 
    console.log(error);
    __vue.$message({
        showClose: true,
        message: '抱歉，网络连接异常，请稍候重试~',
        type: 'error'
      });
    return Promise.reject(error)  
});
export  default axios;
