import jwt from "jwt-decode";

export const decodeToken = (token: string) => {
  const payload: {
    id: string;
    userName: string;
    iat: number;
  } = jwt(token);

  return {
    token: token,
    id: payload.id,
    userName: payload.userName,
  };
};
