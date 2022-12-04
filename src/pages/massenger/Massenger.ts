import { Block } from 'utils/Block';
import { Screens } from 'utils/screenList';
import { ChatService } from 'services/chatService';
import './style.scss';
export class Massenger extends Block<{}> {
  constructor(props: Record<string, any>) {
    super({
      newChats: ChatService.newChat,
      ...props,
    });
  }
  render() {
    return `
        {{#Body}}
          <div class="massenger">
            <div class="massenger-menu">
              {{{ Link text='profile' link="${Screens.Profile}"}}}
              {{{ ChatList chats=chats }}}
              {{{Button label="новый чат" onClick=newChats}}}
            </div>
            <div class="massenger-main">
            {{{ MassegeList }}}
              <div class="massenger-main__input-block">
               {{{FormMassenger}}}
              </div>
            </div>
          </div>
        {{/Body}}
        `;
  }
}
