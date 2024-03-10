import { jwtDecode } from "jwt-decode";

export function jwtDecoder(token: string) {
  const decoded = jwtDecode(token);
  return decoded;
}
