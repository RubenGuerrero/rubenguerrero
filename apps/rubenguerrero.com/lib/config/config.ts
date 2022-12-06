console.log('RRR', process.env);
const config = {
  TRACKING_HOST: process.env.NEXT_PUBLIC_TRACKING_HOST as string,
  TRACKING_KEY: process.env.NEXT_PUBLIC_TRACKING_KEY as string,
};

export { config };
