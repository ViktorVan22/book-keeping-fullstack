import axios from "axios";
import { Toast } from "zarm";

const MODE = import.meta.env.MODE; // 环境变量

// 根据环境变量使用相对应的请求的基础路径
axios.defaults.baseURL =
  MODE === "development" ? "/api" : "http://api.chennick.wang";

// 设置请求头
axios.defaults.withCredentials = true;
axios.defaults.headers["X-Requested-With"] = "XMLHttpRequest";
axios.defaults.headers["Authorization"] = `${
  localStorage.getItem("token") || null
}`;

// 客户端发送 POST 请求时，默认设置为 application/json 形式的请求体
axios.defaults.headers.post["Content-Type"] = "application/json";

// 拦截器拦截每一次请求，在回调函数中做适当处理，再将数据返回
axios.interceptors.response.use(res => {
  if (typeof res.data !== "object") {
    Toast.show("服务端异常! ");
    return Promise.reject(res);
  }
  if (res.data.code !== 200) {
    if (res.data.msg) Toast.show(res.data.msg);
    if (res.data.code === 401) {
      window.location.href = "/login";
    }
    return Promise.reject(res.data);
  }

  return res.data;
});

// 导出配置好的 axios，供页面组件请求使用
export default axios;
