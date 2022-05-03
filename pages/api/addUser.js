import prisma from '../../lib/prisma'

export default async function handler(req, res) {
    const result = await prisma.user.create({
        data: {
            email: "zdillon90@gmail.com",
            name: "Zach Dillon",  
        },
    });
    res.json(result);
}