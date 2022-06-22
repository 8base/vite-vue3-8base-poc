import { Auth, AUTH_STRATEGIES } from '@8base/auth';
import store from "../../store";

/**
 * There are multiple auth strategies that can be
 * used when using 8base. By default, specifying
 * 'web_8base_cognito' will configure the 8base auth client.
 */

export const auth = Auth.createClient(
  {
    strategy: AUTH_STRATEGIES.WEB_8BASE_COGNITO,
  },
  {
    domain: import.meta.env.VITE_APP_AUTH_DOMAIN,
    clientId: import.meta.env.VITE_APP_AUTH_CLIENT_ID,
    logoutRedirectUri: `${window.location.origin}/logout`,
    redirectUri: `${window.location.origin}/auth/callback`,
  }
);