import prisma from '../../lib/prisma'

export default async function handler(req, res) {
    const user = await prisma.user.findOne({
        where: {
            id: req.body.id
        }
    })
    res.json(user);
}