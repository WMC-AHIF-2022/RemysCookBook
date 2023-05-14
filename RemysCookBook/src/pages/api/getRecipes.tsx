import { prisma } from "RemysCookBook/server/db"
import { type NextApiRequest, type NextApiResponse } from "next"

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method !== "GET") return res.status(404).send({})

    try {
        const data = await prisma.recipes.findMany()
        return res.status(200).json(data)
    } catch (e) {
        console.error("error", e)
        return res.status(500).json({ message: e })
    }
}