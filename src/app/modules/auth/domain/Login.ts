import { Role } from "./Role";

export interface LoginResponse {
  firstName: string;
  lastName: string;
  email: string;
  id: string;
  picture: string;
  active: boolean;
  createdAt: Date;
  roles: Role[];
}

// {
//   iss: "https://accounts.google.com",
//   azp: "3031347316-i5q0lo22ictearq6vfda2nvc543mebp1.apps.googleusercontent.com",
//   aud: "3031347316-i5q0lo22ictearq6vfda2nvc543mebp1.apps.googleusercontent.com",
//   sub: "101961830598460823769",
//   email: "juancamilo19997814@gmail.com",
//   email_verified: true,
//   nbf: 1720618419,
//   name: "Juan Camilo Cardona",
//   picture:
//     "https://lh3.googleusercontent.com/a/ACg8ocLLrE0jlR-Uc_RfrR1OqTXUdB3o4jJlJTgXLm7JO2cSq4ipwZC7=s96-c",
//   given_name: "Juan Camilo",
//   family_name: "Cardona",
//   iat: 1720618719,
//   exp: 1720622319,
//   jti: "d839193775aee2634b577f743f8abdc97a5a196e",
// };
