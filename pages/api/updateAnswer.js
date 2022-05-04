import prisma from '../../lib/prisma'

export default async function handler(req, res) {
    const result = await prisma.question.update({
        where: { id: 3 },
        data: { answer: "They're both Paris sites." },
    })
    res.json(result);
}