import { ChatService } from './chatService';

export class Socket {
  // eslint-disable-next-line no-use-before-define
  static _instance: Socket;
  static token: number;
  static chatId: number;
  socket: WebSocket | null = null;
  ping: number | undefined;
  constructor(token: number, chatId: number) {
    if (token === Socket.token && chatId === Socket.chatId) {
      return Socket._instance;
    }
    Socket.token = token;
    Socket.chatId = chatId;
    this.socket = ChatService.createSocket();
    if (!this.ping && this.ping !== 0) {
      clearInterval(this.ping);
    }
    this.ping = setInterval(() => {
      if (this.socket) {
        this.socket.send(
          JSON.stringify({
            type: 'ping',
          })
        );
      }
    }, 5000);
    console.log(this.ping);
  }
}
