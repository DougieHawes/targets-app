import axios from "axios";

const API_URL = "/api/targets/";

const createTarget = async (targetData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(API_URL, targetData, config);

  return response.data;
};

const readTargets = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URL, config);

  return response.data;
};

const targetService = { createTarget, readTargets };

export default targetService;
