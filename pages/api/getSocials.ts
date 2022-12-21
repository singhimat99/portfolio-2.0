import type { NextApiRequest, NextApiResponse } from "next";
import { Socials } from "../../typings";
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";

const query = groq`
*[_type == "socials"] 
`;

type Data = {
    socials: Socials[];
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const socials: Socials[] = await sanityClient.fetch(query);
    res.status(200).json({ socials });
}
