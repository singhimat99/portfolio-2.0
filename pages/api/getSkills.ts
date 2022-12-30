import type { NextApiRequest, NextApiResponse } from "next";
import { Skills } from "../../typings";
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";

const query = groq`*[_type == "skills"]`;

type Data = {
    skills: Skills[];
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const skills: Skills[] = await sanityClient.fetch(query);
    res.status(200).json({ skills });
}
