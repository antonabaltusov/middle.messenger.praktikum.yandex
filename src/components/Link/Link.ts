import { Block } from "../../utils/Block";
import "./Link.scss";

interface LinkProps {
  link: string;
  text: string;
}

export class Link extends Block {
  constructor(props: LinkProps) {
    super(props);
  }
  render() {
    return `<a href="{{link}}" class="link">{{text}}</a>`;
  }
}
