import { Massege } from 'components/MassegeItem/MassegeItem';
import Block from 'utils/Block';
import './style.scss';

export type Masseges = {
  date: string;
  masseges: Massege[];
};
type Prop = {
  massegess: Masseges[];
};

export class MassegeList extends Block<Prop> {
  constructor(prop: Prop) {
    super(prop);
  }
  componentDidMount() {
    this.element!.scrollTop = this.element!.scrollHeight;
  }
  render() {
    return `
    <div class="massenger-main__list-wrapper">
      <div class="massenger-main__list">
        {{#each massegess}}
          <div class="day">
            <p class="day__date">{{this.date}}</p>
            {{#each this.masseges}}
              {{{ MassegeItem massege=this }}}
            {{/each}}
          </div>
        {{/each}}
      </div>
    </div>
    `;
  }
}
