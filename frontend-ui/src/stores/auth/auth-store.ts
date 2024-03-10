import {defineStore} from "pinia";
import {reactive} from "vue";
import {User, UserManager} from "oidc-client-ts";

export const useAuthStore = defineStore('auth', () => {
  const userManager = reactive(new UserManager({
    authority: 'http://auth_server:8180/realms/wildfly/',
    client_id: 'frontend-client',
    redirect_uri: 'http://localhost:5173/signin-redirect',
    post_logout_redirect_uri: 'http://localhost:5173/logout',
    response_type: 'code',
    scope: 'openid profile'
  }));

  function getUser(): Promise<User | null> {
    return userManager.getUser();
  }

  function login(): Promise<void> {
    return userManager.signinRedirect();
  }

  function renewToken(): Promise<User | null> {
    return userManager.signinSilent();
  }

  function logout(): Promise<void> {
    return userManager.signoutRedirect();
  }

  function signinCallback(): Promise<User | void> {
    return userManager.signinCallback();
  }

  return {
    getUser,
    login,
    renewToken,
    logout,
    signinCallback,
  };
});

export default useAuthStore;