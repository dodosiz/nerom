"use server";

import { redirect } from "next/navigation";
import { isValidEmail, isValidMessage } from "./utils";

export async function sendMessage(
  subject: string,
  email: string,
  message: string
) {
  const invalid =
    !isValidEmail(email) || !isValidMessage(message) || !subject.length;
  if (invalid) {
    redirect("/contact/error");
  }
  redirect("/contact/success");
}
