"use server";

import { ServicesSectionFormValues } from "@/schemas/service";
import axios from "axios";
import { getToken } from "./auth";
import { redirect } from "next/navigation";

export const getServiceSection = async () => {
  try {
    const response = await axios.get(`${process.env.BACKEND_URL}/service`);
    return {
      success: response.data.length === 0 ? false : true,
      data: response.data,
    };
  } catch (error) {
    return {
      success: false,
      error: "Something went wrong",
    };
  }
};

export const updateServiceSection = async (data: ServicesSectionFormValues) => {
  try {
    const token = await getToken();

    if (!token) {
      return redirect("/login");
    }

    let method = "PUT";
    const service = await getServiceSection();

    if (service.success === false) {
      method = "POST";
    }

    const response = await axios({
      method,
      url: `${process.env.BACKEND_URL}/service`,
      data,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return {
      success: true,
      data: response.data,
      message: "Updated",
    };
  } catch (error) {
    return {
      success: false,
      message: "Something went wrong",
    };
  }
};
