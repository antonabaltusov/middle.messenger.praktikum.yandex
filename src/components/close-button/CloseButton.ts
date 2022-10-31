import { Block } from "../../utils/Block";
import "./CloseButton.scss";
import img from "../../assets/close.svg";

interface CloseButtonProps {
  onClick?: () => void;
}

export class CloseButton extends Block {
  constructor(props: CloseButtonProps) {
    const onClick = () => {
      history.back();
    };
    super({
      img,
      events: {
        click: onClick,
      },
      ...props,
    });
  }
  render() {
    return `
    <button onclick="{{click}}" class="close-button"><img src="{{img}}" alt="x"></button>
  
    `;
  }
}
