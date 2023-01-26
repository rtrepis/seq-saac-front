import { rest } from "msw";

const apiUrl = process.env.REACT_APP_API_URL;
const apiAraSaacUrl = process.env.REACT_APP_API_ARASAAC_URL;

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
        pictograms: [0, 1],
        privately: true,
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

  rest.get(`${apiUrl}sequences/owner`, async (req, res, ctx) => {
    const sequences = {
      userName: "",
      sequencesCreate: [
        {
          id: "345",
          name: "owner",
          pictograms: [0, 1],
          privately: true,
          owner: "235",
        },
      ],
      id: "2345",
    };

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

  rest.get(
    `${apiUrl}sequences/63199e9c8aa067d2f0931a4e`,
    async (req, res, ctx) => {
      const sequenceId = {
        sequences: [
          {
            id: "63199e9c8aa067d2f0931a4e",
            name: "",
            pictograms: [0, 1],
            privately: true,
            owner: "235",
          },
        ],
      };

      return res(ctx.status(200), ctx.json(sequenceId));
    }
  ),

  rest.get(`${apiUrl}sequences/63199e9`, async (req, res, ctx) => {
    return res(ctx.status(404));
  }),

  rest.get(`${apiAraSaacUrl}pictograms/ca/search/pa`, async (req, res, ctx) => {
    const pictograms = [{ _id: 234 }, { _id: 567 }];

    return res(ctx.status(200), ctx.json(pictograms));
  }),

  rest.get(`${apiAraSaacUrl}pictograms/ca/search/`, async (req, res, ctx) => {
    return res(ctx.status(500));
  }),

  rest.post(`${apiUrl}sequences/create/`, async (req, res, ctx) => {
    const { name } = await req.json();
    let status = name === "" ? 500 : 201;

    return res(ctx.status(status));
  }),

  rest.delete(`${apiUrl}sequences/delete/mockId`, async (req, res, ctx) => {
    return res(ctx.status(200));
  }),

  rest.put(`${apiUrl}sequences/update/mockId`, async (req, res, ctx) => {
    return res(ctx.status(200));
  }),

  rest.get(
    `${apiUrl}users/email-verify/validConfirmationCode`,
    async (req, res, ctx) => {
      return res(ctx.status(200));
    }
  ),

  rest.get(`${apiUrl}sequences/search/mockWord`, async (req, res, ctx) => {
    const sequences = [
      {
        id: "",
        name: "",
        pictograms: [0, 1],
        privately: true,
        owner: "235",
      },
    ];
    return res(ctx.status(200), ctx.json({ sequences }));
  }),

  rest.get(`${apiAraSaacUrl}pictograms/ca/1234`, async (req, res, ctx) => {
    const data = { keywords: [{ keyword: "WordPictogram-1234" }] };
    return res(ctx.status(200), ctx.json(data));
  }),

  rest.get(`${apiAraSaacUrl}pictograms/ca/0`, async (req, res, ctx) => {
    const data = { keywords: [{ keyword: "WordPictogram-0" }] };
    return res(ctx.status(200), ctx.json(data));
  }),

  rest.get(`${apiAraSaacUrl}pictograms/ca/1`, async (req, res, ctx) => {
    const data = { keywords: [{ keyword: "WordPictogram-1" }] };
    return res(ctx.status(200), ctx.json(data));
  }),

  rest.get(`${apiUrl}sequences/undefined`, async (req, res, ctx) => {
    return res(ctx.status(403));
  }),

  rest.get(`${apiUrl}sequences/search/%`, async (req, res, ctx) => {
    return res(ctx.status(403));
  }),

  rest.delete(
    `${apiUrl}sequences/delete/mockIdError`,
    async (req, res, ctx) => {
      return res(ctx.status(403));
    }
  ),

  rest.put(`${apiUrl}sequences/update/mockIdError`, async (req, res, ctx) => {
    return res(ctx.status(403));
  }),

  rest.get(`${apiAraSaacUrl}pictograms/ca/NaN`, async (req, res, ctx) => {
    return res(ctx.status(400));
  }),

  rest.get(
    `${apiUrl}users/email-verify/inValidConfirmationCode`,
    async (req, res, ctx) => {
      return res(ctx.status(403));
    }
  ),

  rest.get(
    `${apiUrl}users/email-verify/ValidConfirmationCode`,
    async (req, res, ctx) => {
      return res(ctx.status(200));
    }
  ),
];
