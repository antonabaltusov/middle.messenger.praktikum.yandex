import { Router } from 'utils/Router';
import { getScreenComponent, Screens } from 'utils/screenList';

const routes = [
  {
    path: Screens.SingIn,
    props: {
      shouldAuthorized: false,
    },
  },
  {
    path: Screens.Registration,
    props: {
      shouldAuthorized: false,
    },
  },
  {
    path: Screens.Profile,
    props: {
      shouldAuthorized: true,
    },
  },
  {
    path: Screens.Massenger,
    props: {
      shouldAuthorized: true,
    },
  },
  {
    path: Screens.NewAvatar,
    props: {
      shouldAuthorized: true,
    },
  },
  {
    path: Screens.EditProfile,
    props: {
      shouldAuthorized: true,
    },
  },
  {
    path: Screens.ChangePassword,
    props: {
      shouldAuthorized: true,
    },
  },
];

export function initRouter(router: Router) {
  routes.forEach((route) => {
    router.use(route.path, getScreenComponent(route.path), route.props);
  });
  router.start();
}
