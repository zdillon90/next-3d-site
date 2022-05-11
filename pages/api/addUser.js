import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(req, res) {
    const result = await prisma.user.create({
        data: {
            email: "zdillon90@gmail.com",
            name: "Zach Dillon",
            admin: false,  
        },
    });
    res.json(result);
}