import http from "./http-common";

const register = (data) => {
  return http.post("/register", data);
};
const AuthenticationService = {
  register,
};

export default AuthenticationService;
