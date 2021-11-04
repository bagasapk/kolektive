import http from "./http-common";

const get = () => {
  return http.get("/event");
};

const EventService = {
  get,
};

export default EventService;
