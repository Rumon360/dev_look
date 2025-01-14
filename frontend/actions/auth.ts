"use server";

import { LoginFormData, loginSchema } from "@/schemas/auth";
import axios from "axios";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export type LoginState = {
  success: boolean;
  message: string;
};

export async function loginAction(
  formData: LoginFormData
): Promise<LoginState> {
  const result = loginSchema.safeParse(formData);

  if (!result.success) {
    return { success: false, message: "Invalid form data" };
  }

  const { email, password } = result.data;

  try {
    const response = await axios.post(`${process.env.BACKEND_URL}/auth/login`, {
      email,
      password,
    });

    if (response.status !== 200) {
      return { success: false, message: "Invalid email or password" };
    }

    const token = response.data.token;

    cookies().set("token", token, {
      httpOnly: true,
      expires: new Date(Date.now() + 2 * 60 * 60 * 1000),
      secure: process.env.NODE_ENV === "production" ? true : false,
    });

    return { success: true, message: "Login successful" };
  } catch (error) {
    return { success: false, message: "Invalid email or password" };
  }
}

export const logoutAction = async () => {
  cookies().set("token", "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production" ? true : false,
  });
  return redirect("/login");
};

export const getToken = async () => {
  const token = cookies().get("token")?.value;
  if (!token) return null;
  return token;
};
