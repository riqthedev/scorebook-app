import { NextApiRequest, NextApiResponse } from "next";
import * as Prisma  from '@prisma/client'

const prisma = new Prisma.PrismaClient();
export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === "POST") {
        const { teamName } = req.body;

        // Make sure the data object has the required teamName property
    

        try {
            const team = await prisma.team.create({
                data: {
                    teamName,
                    teamId: 1
                }
            });
            res.status(201).json({ team });
        } catch (error) {
            console.error('Error creating team:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    } else {
        res.status(405).json({ error: 'Method Not Allowed' });
    }
};
