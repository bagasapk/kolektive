import http from "./http-common";

const register = (data) => {
  return http.post("/register", data);
};

const login = (data) => {
  return http.post("/login", data);
};

const loginGoogle = (data) => {
  return http.post("/google/login", data);
};
const AuthenticationService = {
  register,login,loginGoogle
};

export default AuthenticationService;
