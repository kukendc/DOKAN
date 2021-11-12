import axios from "axios";
import { appConfig } from "./config";

const createAxios = () => {
  const params = {
    baseURL: appConfig.apiURL,
  };
  return axios.create(params);
};

export const fetchProducts = async (query = "") => {
  const url = query ? `/products?${query}` : "/products";
  const { data } = await createAxios().get(url);
  return data;
};

export const createOrder = async (order) => {
  const { data } = await createAxios().post("/orders", order);
  return data;
};

export const getOrder = async (orderCode) => {
  const { data } = await createAxios().get(`/orders/${orderCode}`);
  return data;
};

export const patchOrder = async (orderCode) => {
  const { data } = await createAxios().patch(`/orders/${orderCode}`);
  return data;
};
