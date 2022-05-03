import prisma from '../../lib/prisma'

export default async function handler(req, res) {
    const result = await prisma.question.update({
        where: { id: 2 },
        data: { answer: "updated" },
    })
    res.json(result);
}