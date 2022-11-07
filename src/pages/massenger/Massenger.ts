import { Chat } from 'components/chat/Chat';
import { Masseges } from 'components/MassegeList/MassegeList';
import { Block } from 'utils/Block';
import './style.scss';

export class Massenger extends Block<{}> {
  constructor() {
    const chats: Chat[] = [
      {
        img: '',
        chatname: 'mama',
        newMessageCount: 99,
      },
      {
        img: '',
        chatname: 'love',
        newMessageCount: 1,
      },
      {
        img: '',
        chatname: 'bro',
        newMessageCount: 10,
      },
    ];
    const massegess: Masseges[] = [
      {
        date: '1 мая',
        masseges: [
          {
            text: 'привет как дела?',
            time: '15:30',
            isMy: true,
          },
          {
            text: 'все хорошо',
            time: '15:35',
            isMy: false,
          },
          {
            text: 'хорошо',
            time: '15:37',
            isMy: true,
          },
        ],
      },
      {
        date: '2 мая',
        masseges: [
          {
            text: `гулять??ваваи ваив вааи larem fdbdfb dfbdfbgrb rgbfgb dgbdfb 
            rgbfgbdfg dfghndfhn dfhndfhn dfhndf hndfh ndfhndfhn dfhndfh dghndghndfh n`,
            time: '16:30',
            isMy: true,
          },
          {
            text: 'все хорошо 111',
            time: '17:35',
            isMy: false,
          },
          {
            text: 'хорошо 2222',
            time: '18:37',
            isMy: true,
          },
        ],
      },
      {
        date: '2 мая',
        masseges: [
          {
            text: `гулять??ваваи ваив вааи larem fdbdfb dfbdfbgrb rgbfgb dgbdfb 
            rgbfgbdfg dfghndfhn dfhndfhn dfhndf hndfh ndfhndfhn dfhndfh dghndghndfh n`,
            time: '16:30',
            isMy: true,
          },
          {
            text: 'все хорошо 111',
            time: '17:35',
            isMy: false,
          },
          {
            text: 'хорошо 2222',
            time: '18:37',
            isMy: true,
          },
        ],
      },
      {
        date: '2 мая',
        masseges: [
          {
            text: `гулять??ваваи ваив вааи larem fdbdfb dfbdfbgrb rgbfgb dgbdfb 
            rgbfgbdfg dfghndfhn dfhndfhn dfhndf hndfh ndfhndfhn dfhndfh dghndghndfh n`,
            time: '16:30',
            isMy: true,
          },
          {
            text: 'все хорошо 111',
            time: '17:35',
            isMy: false,
          },
          {
            text: 'хорошо 2222',
            time: '18:37',
            isMy: true,
          },
        ],
      },
      {
        date: '2 мая',
        masseges: [
          {
            text: `гулять??ваваи ваив вааи larem fdbdfb dfbdfbgrb rgbfgb dgbdfb 
            rgbfgbdfg dfghndfhn dfhndfhn dfhndf hndfh ndfhndfhn dfhndfh dghndghndfh n`,
            time: '16:30',
            isMy: true,
          },
          {
            text: 'все хорошо 111',
            time: '17:35',
            isMy: false,
          },
          {
            text: 'хорошо 2222',
            time: '18:37',
            isMy: true,
          },
        ],
      },
    ];

    super({ chats, massegess });
  }
  render() {
    return `
        {{#Body}}
          <div class="massenger">
            <div class="massenger-menu">
              {{{ Link text='profile' link="../profile"}}}
              {{{ ChatList chats=chats }}}
            </div>
            <div class="massenger-main">
            {{{ MassegeList massegess=massegess}}}
              <div class="massenger-main__input-block">
               {{{FormMassenger}}}
              </div>
            </div>
          </div>
        {{/Body}}
        `;
  }
}
