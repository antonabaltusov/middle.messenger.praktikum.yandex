import { Block } from "../../utils/Block";
import "./style.scss";

export type Massege = {
  text: string;
  time: string;
  isMy?: boolean;
};
type MassegeProps = {
  massege: Massege;
};

export class MassegeItem extends Block {
  constructor({ massege }: MassegeProps) {
    super({ massege });
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
