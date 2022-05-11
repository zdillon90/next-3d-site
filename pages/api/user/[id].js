import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(req, res) {
    const id = parseInt(req.query.id)
    const user = await prisma.user.findUnique({
        where: {
            id: id
        }
    })
    res.json(user);
}