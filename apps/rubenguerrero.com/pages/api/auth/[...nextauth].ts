import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { prisma } from 'database';
import { serverConfig } from 'lib/server-config';
import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';


export const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GithubProvider({
      clientId: serverConfig.GITHUB_ID,
      clientSecret: serverConfig.GITHUB_SECRET
    }),
  ],
  secret: serverConfig.NEXTAUTH_SECRET,
  debug: true,
};
export default NextAuth(authOptions);
