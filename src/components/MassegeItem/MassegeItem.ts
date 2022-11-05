import Block from 'utils/Block';
import './style.scss';

export type Massege = {
  text: string;
  time: string;
  isMy?: boolean;
};
type Prop = {
  massege: Massege;
};

export class MassegeItem extends Block<Prop> {
  static componentName = 'MassegeItem';
  constructor(prop: Prop) {
    super(prop);
  }
  render() {
    return `
    <div class="massenger-main__item {{#if massege.isMy }}right{{/if}}">
      <p>{{massege.text}}</p>
      <span>{{massege.time}}</span>
    </div>
    `;
  }
}
