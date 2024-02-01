import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const response = await fetch("https://api.scripture.api.bible/v1/bibles/english/books", {
    headers: {
      "api-key": process.env.API_KEY || "",
    },
  });

  const data = await response.json();

  res.status(200).json(data);
}
