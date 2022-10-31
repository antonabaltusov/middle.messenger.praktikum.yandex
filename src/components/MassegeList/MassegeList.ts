import { Block } from "../../utils/Block";
import { Massege } from "../MassegeItem/MassegeItem";
import "./style.scss";

export type Masseges = {
  date: string;
  masseges: Massege[];
};

export class MassegeList extends Block {
  constructor(massegess: Masseges[]) {
    super(massegess);
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
