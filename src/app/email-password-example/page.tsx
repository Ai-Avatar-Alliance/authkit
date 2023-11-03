'use client';

import { useFormState } from 'react-dom';
import { authenticateWithPassword } from './email-password';

export default function EmailPasswordExamplePage() {
  const [authenticateState, authenticateAction] = useFormState(authenticateWithPassword, {});

  return (
    <main>
      <h1>Email + Password example</h1>

      <form action={authenticateAction}>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />
        </div>

        <button type="submit">Sign in</button>
      </form>

      <pre>{JSON.stringify(authenticateState, null, 2)}</pre>
    </main>
  );
}
