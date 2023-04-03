import axios from "axios";
import { InfoSchemaType } from "./types";

const instance = axios.create({
  baseURL: "https://designo.onrender.com/api",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export const getCategoryProjects = async (category: string) => {
  return instance.get("/projects/" + category);
};
export const postInvoices = async (data: InfoSchemaType) => {
  return instance.post("/invoices", data);
};
