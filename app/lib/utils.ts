export function isValidMessage(message: string) {
  return /^[a-zA-Z0-9\s.,!?'"-]*$/.test(message);
}

export function isValidEmail(email: string) {
  return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);
}
