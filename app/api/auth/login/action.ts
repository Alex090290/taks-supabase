"use server";

import { signIn } from "@/libs/auth";
import { ActionResponse } from "@/libs/definitions";

export async function validateCredentials({
  email,
  password,
}: {
  email: string;
  password: string;
}): Promise<ActionResponse<Boolean>> {
  try {
    await signIn("credentials", { email, password, redirect: false });

    return {
      success: true,
      message: "SESIÓN INICIADA",
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return {
      success: false,
      message: error.message,
    };
  }
}
