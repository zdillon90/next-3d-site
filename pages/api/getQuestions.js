import prisma from '../../lib/prisma'

export default async function handler(req, res) {
    const questions = await prisma.question.findMany()
    res.json(questions);
}