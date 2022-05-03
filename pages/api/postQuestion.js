import prisma from '../../lib/prisma'

export default async function handler(req, res) {
    const result = await prisma.question.create({
        data: {
            question: "Test question 2",
            answer: "",
            asker: {
                connect: {
                    email: "zdillon90@gmail.com"
                }
            }               
        },
    });
    res.json(result);
}