import axios from 'axios'

/*
export function request(config, success, failure) {
    const instance = axios.create({
        baseURL: 'http://123.207.32.32:8000',
        timeout: 5000,
    })

    instance(config)
    .then(res => {
        success(res)
    }).catch(err => {
        failure(err)
    })
}
*/

export function request(config) {
    // 创建axios实例
    const instance = axios.create({
        baseURL: 'http://123.207.32.32:8000',
        timeout: 5000
    })

    // axios拦截器
    instance.interceptors.request.use(config => {
        console.log(config)
        // 请求拦截器
        // 请求不符合服务器要求
        // 动画，loading
        // 登录token，拦截重定向
        return config
    }, err => {
        console.log(err)
    })

    instance.interceptors.response.use(res => {
        console.log(res.data)
        return res
    }, err => {
        console.log(err)
    })

    return instance(config)
}