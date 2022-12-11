import { Block } from 'utils/Block';
import Connect from 'utils/Store/Connect';
import { FormProfile } from './FormProfile';

export default Connect(FormProfile as typeof Block, (state) => state ?? {});
