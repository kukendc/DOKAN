import axios from "axios";

const createAxios = () => {
  const params = {
    baseURL: "http://localhost:1337",
  };
  return axios.create(params);
};

export const fetchProductCart = async () => {
  const { data } = await createAxios().get("/products");
  return data;
};
