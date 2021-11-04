import http from "./http-common";

const get = () => {
  return http.get("/information");
};

const LandingService = {
  get,
};

export default LandingService;
