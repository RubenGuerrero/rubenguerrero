import { prisma } from '.';

(async () => {
  try {
    await prisma.test.create({
      data: {},
    });
  } catch (error) {
    console.error(error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
})();
