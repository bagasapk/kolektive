import http from "./http-common";

const get = () => {
  return http.get("/details");
};

const UserService = {
  get
};

export default UserService;
