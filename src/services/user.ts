import { authAPI, UserDTO } from 'api/login-api';
import { userAPI } from 'api/user-api';
import { apiHasError } from 'utils/apiHasError';
import { Router } from 'utils/Router';
import { Screens } from 'utils/screenList';

const router = new Router('#app');
export const UserService = {
  async logout() {
    try {
      const response = await authAPI.logout();

      if (apiHasError(response)) {
        return;
      }
      router.go(Screens.SingIn);
    } catch (err) {
      console.error(err);
    }
  },
  async getUsersByLogin(login: string) {
    try {
      const response = await userAPI.getUserByLogin({ login });

      if (apiHasError(response)) {
        alert(response.reason);
        return;
      }
      return response as UserDTO[];
    } catch (err) {
      console.error(err);
    }
  },
};
