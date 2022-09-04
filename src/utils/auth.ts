import jwt from "jwt-decode";

export const decodeToken = (token: string) => {
  const payloadToken: {
    id: string;
    userName: string;
    iat: number;
  } = jwt(token);

  return {
    token: token,
    id: payloadToken.id,
    userName: payloadToken.userName,
  };
};
