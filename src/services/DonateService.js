import http from "./http-common";

const get = (id) => {
  return http.get(`/donate/` + id);
};

const getWithdraw = (id) => {
  return http.get("/event/" + id + "/withdraw");
};

const postWithdraw = (id) => {
  return http.post("/event/" + id + "/withdraw");
};

const DonateService = {
  get,
  postWithdraw,
  getWithdraw,
};

export default DonateService;
