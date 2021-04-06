import { default as axios, AxiosPromise } from "axios";
import { request } from "@utils/index";
import { SERVER_API_URL } from "@constants/index";

export function getUniversitiesByCountry(country: string): AxiosPromise {
  return request({
    method: "get",
    params: {
      country,
    },
  });
}

export function findUniversitiesByCountryName(
  name: string,
  country: string
): AxiosPromise {
  return request({
    method: "get",
    params: {
      country,
      name,
    },
  });
}

export function subscribe(email: string): AxiosPromise {
  return axios.post(SERVER_API_URL, { email });
}
