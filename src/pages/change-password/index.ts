import { Block } from 'utils/Block';
import Connect from 'utils/Store/Connect';
import { ChangePassword } from './ChangePassword';

export default Connect(ChangePassword as typeof Block, (state) => state ?? {});
