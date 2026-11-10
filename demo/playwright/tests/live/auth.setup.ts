/**
 * Sign in once per role and save the browser state to `.auth/<role>.json`
 * (Git-ignored). Credentials come from environment variables only and are
 * never printed. The only POST the guard allows in this phase is the sign-in
 * form itself.
 */

import { config, test as setup } from '../../src/fixtures.ts';
import { ROLES, authStatePath, credentialProblems, type Role } from '../../src/config.ts';
import { LOGIN_PATH } from '../../src/safety.ts';
import { openRoute } from '../../src/navigation/common.ts';
import type { RouteKey } from '../../src/routes.ts';

setup.use({ phase: 'auth' });

const LANDING: Record<Role, RouteKey> = {
  admin: 'adminOverview',
  teacher: 'myDay',
  guardian: 'portalHome',
};

for (const role of ROLES) {
  setup(`sign in: ${role}`, async ({ page, guard }) => {
    const problems = credentialProblems(config, role);
    if (problems.length) throw new Error(problems.join(' '));
    const { username, password } = config.credentials[role];

    await page.goto(LOGIN_PATH);
    // Field names come from Django's AuthenticationForm (templates/registration/login.html).
    await page.locator('input[name="username"]').fill(username!);
    await page.locator('input[name="password"]').fill(password!);
    await page.getByRole('button', { name: 'Log in' }).click();
    await page.waitForURL((url) => url.pathname !== LOGIN_PATH, { timeout: 15_000 }).catch(() => {
      throw new Error(`Sign-in for ${role} did not leave the login page (wrong credentials, lockout or throttling).`);
    });
    if (guard.violations.some((v) => v.includes('/accounts/password/'))) {
      throw new Error(`The ${role} account must change its password first. Do that manually, outside automation.`);
    }

    // Confirm the role reaches its own area before saving the session.
    await openRoute(page, LANDING[role]);
    await page.context().storageState({ path: authStatePath(role) });
  });
}
