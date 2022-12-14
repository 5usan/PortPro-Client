import axios from "axios";
import { BASE_URL } from "../config/configRoute";

export function getData(link, token,  onSuccess, onFail) {
  axios
    .get(BASE_URL + link, {
      headers: { "Content-Type": "application/json",  Authorization: token  },
    })
    .then((res) => {
      onSuccess(res);
    })
    .catch((err) => {
      onFail(err);
    });
}

export function postData(link, data, token, onSuccess, onFail) {
  axios
    .post(BASE_URL + link, data, {
      headers: { "Content-Type": "application/json", Authorization: token },
    })
    .then((res) => res)
    .then((res) => {
      onSuccess(res);
    })
    .catch((err) => {
      onFail(err);
    });
}

export function postDataWithoutToken(link, data, onSuccess, onFail) {
  console.log(BASE_URL + link);
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
