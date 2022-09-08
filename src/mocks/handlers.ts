import { rest } from "msw";

const apiUrl = process.env.REACT_APP_API_URL;

export const handlers = [
  rest.post(`${apiUrl}users/register`, async (req, res, ctx) => {
    const { userName } = await req.json();
    let status = userName === "" ? 400 : 201;
    return res(ctx.status(status));
  }),

  rest.post(`${apiUrl}users/login`, async (req, res, ctx) => {
    const { userName, password } = await req.json();

    const status = userName === "Test" && password === "1234" ? 200 : 400;
    return res(
      ctx.status(status),
      ctx.json({
        user: {
          token:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMTA2NmNjNGJhMzgzOWNlYmFjMmI0MiIsInVzZXJOYW1lIjoiTWFyaWEiLCJpYXQiOjE2NjIyOTI5NTF9.30S4d21bbdSxb3g6Hes387gReNgjbIXYm3dyVd8UAdM",
        },
      })
    );
  }),

  rest.get(`${apiUrl}sequences`, async (req, res, ctx) => {
    const sequences = [
      {
        id: "",
        name: "",
        pictograms: [0, 0],
        private: true,
        owner: "235",
      },
    ];
    const headerTestError = req.headers.get("Error");

    if (headerTestError) {
      return res(
        ctx.status(500),
        ctx.json({
          error: "Something server error",
        })
      );
    }

    return res(ctx.status(200), ctx.json({ sequences }));
  }),
];
