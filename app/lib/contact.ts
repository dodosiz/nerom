"use server";
import { redirect } from "next/navigation";
import { isValidEmail, isValidMessage } from "./utils";
import { put } from "@vercel/blob";

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
  try {
    await put(
      `${new Date()}.txt`,
      `SUBJECT: ${subject}\nFROM: ${email}\n\nMESSAGE: ${message}`,
      { access: "public" }
    );
  } catch {
    redirect("/contact/error");
  }
  redirect("/contact/success");
}
