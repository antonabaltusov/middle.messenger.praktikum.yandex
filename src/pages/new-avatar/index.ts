import { Block } from 'utils/Block';
import Connect from 'utils/Store/Connect';
import { NewAvatar } from './NewAvatar';

export default Connect(NewAvatar as typeof Block, (state) => state ?? {});
