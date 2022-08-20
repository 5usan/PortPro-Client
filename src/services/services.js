import axios from "axios";
import { BASE_URL } from "../config/configRoute";

export function getData(link, params, onSuccess, onFail) {
  axios
    .get(BASE_URL + link, {
      params,
      headers: { "content-type": "application/json" },
    })
    .then((res) => res)
    .then((res) => {
      onSuccess(res);
    })
    .catch((err) => {
      onFail(err);
    });
}

export function getDataWithNoParams(link, onSuccess, onFail) {
  axios
    .get(BASE_URL + link, {
      headers: { "Content-Type": "application/json" },
    })
    .then((res) => res)
    .then((res) => {
      onSuccess(res);
    })
    .catch((err) => {
      onFail(err);
    });
}

// Without FormData
export function postData(link, data, onSuccess, onFail) {
  console.log(BASE_URL+link);
  axios
    .post(BASE_URL + link, data, {
      headers: { "Content-Type": "application/json" },
    })
    .then((res) => res)
    .then((res) => {
      onSuccess(res);
    })
    .catch((err) => {
      onFail(err);
    });
}
