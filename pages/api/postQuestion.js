import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(req, res) {
    const { question, name, email } = req.body
    const result = await prisma.question.create({
        data: {
            question: question,
            answer: "",
            asker: {
                connectOrCreate: {
                    where: { email: email },
                    create: {
                        email: email,
                        name: name,
                        admin: false,
                    },
                }
            }               
        },
    });
    res.json(result);
}