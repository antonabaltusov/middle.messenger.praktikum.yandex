import { Block } from 'utils/Block';
import Connect from 'utils/Store/Connect';
import { SingIn } from './sing-in';

export default Connect(SingIn as typeof Block, (state) => state ?? {});
