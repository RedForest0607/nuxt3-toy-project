import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function seed() {
    const dataList = [
        {
            productId: '12346',
            productPrice: 13000,
            stock: 3,
            productName: '샘플상품',
        },
        {
            productId: '12347',
            productPrice: 6000,
            stock: 5,
            productName: '샘플상품2',
        },
        {
            productId: '12348',
            productPrice: 1000,
            stock: 10,
            productName: '샘플상품3',
        },
        {
            productId: '12349',
            productPrice: 20000,
            stock: 3,
            productName: '샘플상품4',
        },
        {
            productId: '123450',
            productPrice: 300000,
            stock: 5,
            productName: '샘플상품5',
        },
    ];
    dataList.map(async data => {
        await prisma.product.create({
            data,
        });
    });

    await prisma.cart.create({
        data: {
            id: '1',
            cartId: '12345',
            amount: 1,
            isChecked: true,
            productId: '12346',
        },
    });
}

try {
    await seed();
    await prisma.$disconnect();
} catch (e) {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
}
