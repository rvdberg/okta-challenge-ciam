import { AxiosRequestConfig } from "axios";
import { ApiResponse } from "../models/api-response";
import { ApiOrderResponse } from "../models/api-order-response";
import { callExternalApi } from "./external-api.service";
import { Pizza } from "src/models/pizza";

const apiServerUrl = process.env.REACT_APP_API_SERVER_URL;

export const getPizzas = async (): Promise<ApiResponse> => {
  const config: AxiosRequestConfig = {
    url: `${apiServerUrl}/api/pizzas`,
    method: "GET",
    headers: {
      "content-type": "application/json",
    },
  };

  const { data, error } = (await callExternalApi({ config })) as ApiResponse;

  return {
    data,
    error,
  };
};

export const getOrders = async (accessToken: string): Promise<ApiOrderResponse> => {
  const config: AxiosRequestConfig = {
    url: `${apiServerUrl}/api/orders`,
    method: "GET",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${accessToken}`
    },
  };

  const { data, error } = (await callExternalApi({ config })) as ApiOrderResponse;

  return {
    data,
    error,
  };
};

export const createOrders = async (accessToken: string, pizza: Pizza): Promise<ApiOrderResponse> => {
  const config: AxiosRequestConfig = {
    url: `${apiServerUrl}/api/orders`,
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${accessToken}`
    },
    data: pizza
  };

  const { data, error } = (await callExternalApi({ config })) as ApiOrderResponse;

  return {
    data,
    error,
  };
};

