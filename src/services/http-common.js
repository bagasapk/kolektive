import axios from "axios";

axios.defaults.headers.common["Authorization"] =
  "Bearer " + localStorage.getItem("token");

export default axios.create({
  baseURL: "http://127.0.0.1:8000/api",
  // baseURL: "https://pacific-springs-44512.herokuapp.com/api",
  headers: {
    "Content-type": "application/json",
  },
});
