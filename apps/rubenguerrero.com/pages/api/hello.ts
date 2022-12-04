import { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from 'database';

const hello = async (req: NextApiRequest, res: NextApiResponse) => {
  res.statusCode = 200;
  res.json(await prisma.test.findMany({}));
};

export default hello;
