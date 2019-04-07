import axios from 'axios';
import qs from "qs";
import config from './config';

export const baseUrl = {
  mock: '',
  dev: 'http://192.168.86.20:8088/web',
  pre: 'http://zh.jhk.gov.cn:85/webselect'
}[config.env || 'mock'];

const request = axios.create({
  baseURL: baseUrl,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json; charset=utf-8'
  },
  timeout: 5000
})

// 拦截器 对请求做处理 
request.interceptors.request.use(config => {
  config.method === 'post'
    ? config.data = qs.stringify({ ...config.data })
    : config.params = { ...config.params };
  // config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
  return config;
}, error => {  
  //请求错误处理
  Promise.reject(error)
});

// 拦截器 对响应做处理
request.interceptors.response.use(
  response => {  
    // console.log('response', response)
    //成功请求到数据
    //根据后端提供的数据进行对应的处理(token验证)
    if (response.status === 200) {
      return response.data;
    } else {
      // 处理请求
      alert('错误')
    }
  },
  error => {  //响应错误处理
    console.log('error', error);
    console.log(JSON.stringify(error));
    // let text = JSON.parse(JSON.stringify(error)).response.status === 404
    //   ? '404'
    //   : '网络异常，请重试';
    return Promise.reject(error)
  }
)

export default function createAPI(type, url, param) {
  let params = Object.assign({}, param)
  return request({
    url: url,
    method: type,
    data: params
  })
}