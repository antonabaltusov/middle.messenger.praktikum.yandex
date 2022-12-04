import { Block } from 'utils/Block';
import Connect from 'utils/Store/Connect';
import { EditProfile } from './EditProfile';

export default Connect(EditProfile as typeof Block, (state) => state ?? {});
