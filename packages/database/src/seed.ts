import { prisma } from './client';

(async () => {
  try {
    //noop
  } catch (error) {
    console.error(error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
})();
