import { useSession, signIn, signOut } from "next-auth/react"
import { useCallback } from 'react';

const TestPage = () => {

  const { data: session, status } = useSession()

  const handleSignOut = useCallback(async () => {
    await signOut();
  }, [])

  const handleSignIn = useCallback(async () => {
    await signIn();
  }, [])

  if(status === "loading") {
    return <div>Loading...</div>
  }

  if (status === "authenticated") {
    return <div>
      <div>Signed in as {session?.user?.email}</div>
      <button onClick={handleSignOut}>Sign out</button>
    </div>
  }

  return <div>
    <button onClick={handleSignIn}>Sign in</button>
  </div>
};

export default TestPage;