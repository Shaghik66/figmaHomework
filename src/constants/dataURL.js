import axios from "axios";

export const dataURL = axios.create({
  baseURL: "https://cloud.codesupply.co/endpoint/react",
});
