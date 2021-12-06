import { NextApiRequest, NextApiResponse } from "next";
import { getRecipe } from "../../../data";

const cacheDuration = 60 * 60 * 24; // 1 day
const swrDuration = 60 * 60 * 24; // 1 day

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "GET") return res.status(405).end();

  try {
    const data = await getRecipe(req.query.id as string);
    res.setHeader(
      "Cache-Control",
      `s-maxage=${cacheDuration}, stale-while-revalidate=${swrDuration}`
    );
    res.status(200).json(data);
  } catch (err) {
    res.status(500).end();
  }
};
