import { rest } from "msw";

const apiUrl = process.env.REACT_APP_API_URL;

export const handlers = [
  rest.post(`${apiUrl}users/register`, async (req, res, ctx) => {
    const { userName } = await req.json();
    let status;
    userName === "" ? (status = 400) : (status = 201);
    return res(ctx.status(status));
  }),
];
