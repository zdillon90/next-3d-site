import prisma from '../../lib/prisma'

export default async function handler(req, res) {
    const result = await prisma.question.create({
        data: {
            question: "What do a tick and the Eiffel Tower have in common?",
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