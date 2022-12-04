import { Block } from 'utils/Block';
import Connect from 'utils/Store/Connect';
import { Profile } from './Profile';

export default Connect(Profile as typeof Block, (state) => state ?? {});
