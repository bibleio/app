import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const endpoint = req.query.endpoint as string;
  const apiUrl = "https://api.scripture.api.bible/v1" + endpoint;

  console.log("API Url: " + apiUrl)

  try {
    const response = await fetch(apiUrl, {
      headers: {
        "api-key": process.env.API_KEY || "",
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch data from ${apiUrl}`);
    }

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
 