import ChangePassword from 'pages/change-password';
import EditProfile from 'pages/edit-profile';
import Massenger from 'pages/massenger';
import NewAvatar from 'pages/new-avatar';
import Profile from 'pages/profile';
import Registration from 'pages/registration';
import SingIn from 'pages/sing-in';
import { Block } from './Block';

export enum Screens {
  SingIn = '/',
  Registration = '/sign-up',
  Profile = '/settings',
  EditProfile = '/edit-profile',
  NewAvatar = '/new-avatar',
  ChangePassword = '/change-password',
  Massenger = '/messenger',
}

const map: Record<Screens, typeof Block> = {
  [Screens.SingIn]: SingIn as typeof Block,
  [Screens.Registration]: Registration as typeof Block,
  [Screens.Profile]: Profile as typeof Block,
  [Screens.EditProfile]: EditProfile as typeof Block,
  [Screens.NewAvatar]: NewAvatar as typeof Block,
  [Screens.ChangePassword]: ChangePassword as typeof Block,
  [Screens.Massenger]: Massenger as typeof Block,
};

export const getScreenComponent = (screen: Screens): typeof Block => {
  return map[screen];
};
