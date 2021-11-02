import http from "./http-common";

const post = (data) => {
  return http.post("/event", data);
};

const CampaignService = {
  post,
};

export default CampaignService;
