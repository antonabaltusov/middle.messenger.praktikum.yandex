import { Block } from 'utils/Block';
import './style.scss';
export type Masseges = {
  date: string;
  masseges: Message[];
};
type Prop = {
  userId: number;
  activeChat: number;
  socket: WebSocket | undefined;
};

export class MassegeList extends Block<Prop> {
  static componentName = 'MassegeList';
  ping: ReturnType<typeof setInterval> | undefined;
  constructor(prop: Prop) {
    super(prop);
  }
  initPing() {
    clearInterval(this.ping);
    this.ping = setInterval(() => {
      if (this.props.socket) {
        this.props.socket.send(
          JSON.stringify({
            type: 'ping',
          })
        );
      }
    }, 5000);
  }
  goDown() {
    if (this.element) {
      this.element.scrollTop = this.element.scrollHeight;
    }
  }
  componentDidMount() {
    this.goDown();
  }
  componentBeforeUnmount(): void {
    clearInterval(this.ping);
  }
  render() {
    this.initPing();
    this.goDown();
    return `
    <div class="massenger-main__list-wrapper">
      <div class="massenger-main__list">
        {{#each masseges}}
            {{{ MassegeItem massege=this }}}
        {{/each}}
      </div>
    </div>
    `;
  }
}
