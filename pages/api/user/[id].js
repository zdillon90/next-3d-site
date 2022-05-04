import prisma from '../../../lib/prisma'

export default async function handler(req, res) {
    const id = parseInt(req.query.id)
    const user = await prisma.user.findUnique({
        where: {
            id
        }
    })
    res.json(user);
}