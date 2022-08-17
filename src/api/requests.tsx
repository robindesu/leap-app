import axios from "axios";

export const fetchAll = () =>
  axios.get("https://frontend-test.getsandbox.com/applications", {
    withCredentials: true,
    headers: {
      crossorigin: true,
      "Access-Control-Allow-Credentials": true,
    },
  });
