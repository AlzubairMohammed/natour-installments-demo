import axios from "axios";
const instance = axios.create({
  // baseURL: "http://inst.natour.ae/api/v1",
  baseURL: "http://localhost:7070/api/v1",
  timeout: 1000,
  //   headers: { "X-Custom-Header": "foobar" },
});
export default instance;
