import axios from "axios";
const instance = axios.create({
  // baseURL: "http://89.116.236.251:8000/api/",
  baseURL: "http://localhost:7070/api/v1",
  timeout: 1000,
  //   headers: { "X-Custom-Header": "foobar" },
});
export default instance;
