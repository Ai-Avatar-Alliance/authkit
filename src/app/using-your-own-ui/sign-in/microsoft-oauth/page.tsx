import WorkOS from '@workos-inc/node';

const workos = new WorkOS(process.env.WORKOS_API_KEY);

export default function SignInWithMicrosoftOAuth({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const result = JSON.parse(String(searchParams.response ?? '{ "error": null }'));

  const microsoftOAuthUrl = workos.sso.getAuthorizationURL({
    clientID: process.env.WORKOS_CLIENT_ID || '',
    provider: 'MicrosoftOAuth',
    redirectURI: 'http://localhost:3000/using-your-own-ui/sign-in/microsoft-oauth/callback',
  });

  return (
    <main>
      <h1>Sign-in</h1>
      <h2>Microsoft OAuth</h2>

      <form>
        <a href={microsoftOAuthUrl}>Continue with Microsoft</a>
      </form>

      <pre>{JSON.stringify(result, null, 2)}</pre>
    </main>
  );
}
