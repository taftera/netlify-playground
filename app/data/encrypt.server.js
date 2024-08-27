import bcrypt from "bcryptjs";

export async function encryptReview(text, salt) {
  const hash = bcrypt.hashSync(text, salt);
  return hash;
}
