"use server";

import { WorkSectionFormValues } from "@/schemas/work";
import axios from "axios";
import { getToken } from "./auth";
import { redirect } from "next/navigation";

export const getWorkSection = async () => {
  try {
    const response = await axios.get(`${process.env.BACKEND_URL}/work`);

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

export const updateWorkSection = async (data: WorkSectionFormValues) => {
  try {
    const token = await getToken();

    if (!token) {
      return redirect("/login");
    }

    let method = "PUT";
    const service = await getWorkSection();

    if (service.success === false) {
      method = "POST";
    }

    const response = await axios({
      method,
      url: `${process.env.BACKEND_URL}/work`,
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
    console.log(error);

    return {
      success: false,
      message: "Something went wrong",
    };
  }
};
