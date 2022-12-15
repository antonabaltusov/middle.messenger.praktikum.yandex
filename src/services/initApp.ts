import { authAPI } from 'api/login-api';
import { apiHasError } from 'utils/apiHasError';
import { transformUser } from 'utils/apiTransformers';
import { addUserData } from 'utils/Store/Action';
import { Router } from 'utils/Router/index';
import { Screens } from 'utils/screenList';

const router = new Router('#app');
export async function initApp() {
  try {
    const response = await authAPI.me();

    if (apiHasError(response)) {
      router.go(Screens.SingIn);
      return;
    }

    addUserData(transformUser(response));
    if (
      router.currentRoute?.path === Screens.SingIn ||
      router.currentRoute?.path === Screens.Registration
    ) {
      router.go(Screens.Massenger);
    }
  } catch (err) {
    console.error(err);
    router.go(Screens.SingIn);
  }
}
