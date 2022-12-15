import { Block } from 'utils/Block';
import Connect from 'utils/Store/Connect';
import { Form } from './Form';

export default Connect(
  Form as unknown as typeof Block,
  (state: AppState) => state
);
