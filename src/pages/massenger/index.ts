import { Block } from 'utils/Block';
import Connect from 'utils/Store/Connect';
import { Massenger } from './Massenger';

export default Connect(Massenger as typeof Block, (state) => state.user ?? {});
