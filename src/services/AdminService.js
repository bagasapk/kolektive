import http from "./http-common";

const get = () => {
  return http.get("/admin/withdraw");
};
const put = (id) => {
  return http.put("/admin/" + id);
};

const EventService = {
  get,
  put,
};

export default EventService;
