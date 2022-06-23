import axios from "axios";

export function requestGetUser() {
  return axios.request({
    method: "get",
    url: "https://api.coincap.io/v2/assets",
  });
}
