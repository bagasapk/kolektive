import http from "./http-common";

const post = (data, id) => {
  return http.post(`/event/${id}/transaction`, data);
};

const get = () => {
  return http.get(`/transaction`);
};

const TransactionService = {
  post,
  get,
};

export default TransactionService;
