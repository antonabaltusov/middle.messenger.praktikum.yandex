import { Block } from 'utils/Block';
import Connect from 'utils/Store/Connect';
import { FormMassenger } from './FormMassenger';

export default Connect(
  FormMassenger as typeof Block,
  (state: AppState) => state.socket
);
