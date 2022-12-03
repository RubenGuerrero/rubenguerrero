import {NextApiRequest, NextApiResponse} from "next";

const hello = (req: NextApiRequest, res: NextApiResponse) => {
  res.statusCode = 200;
  res.json({ name: 'Hello world' });
};


export default hello