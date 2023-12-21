import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient({
    log: ['query'],
});

export default defineEventHandler(event => {
    const { id } = event.context.params;
    return prisma.product.findFirst({
        where: {
            productId: id,
        },
        select: {
            productId: true,
            productName: true,
            productPrice: true,
            stock: true,
        },
    });
});
