import http from "./http-common";

const register = (data) => {
  return http.post("/register", data);
};

const login = (data) => {
  return http.post("/login", data);
};
const AuthenticationService = {
  register,login
};

export default AuthenticationService;
