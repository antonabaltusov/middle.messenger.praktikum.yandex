import { Block } from 'utils/Block';
import Connect from 'utils/Store/Connect';
import { Registration } from './registration';

export default Connect(Registration as typeof Block, (state) => state ?? {});
