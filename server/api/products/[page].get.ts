import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient({
    log: ['query'],
});

export default defineEventHandler(() => {
    return prisma.product.findMany({
        take: 10,
    });
});
