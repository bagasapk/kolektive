import http from "./http-common";

const post = () => {
  return http.post("/details");
};

const UserService = {
  post
};

export default UserService;
