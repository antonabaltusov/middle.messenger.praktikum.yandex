export enum MessageType {
  message = 'message',
  ping = 'ping',
  pong = 'pong',
}
declare global {
  export type Nullable<T> = T | null;

  export type Keys<T extends Record<string, unknown>> = keyof T;
  export type Values<T extends Record<string, unknown>> = T[Keys<T>];
  export type Indexed = { [key: string]: any };
  export type User = {
    id: number;
    firstName: string;
    secondName: string;
    displayName: string;
    login: string;
    email: string;
    phone: string;
    avatar: string;
  };
  export type UserInChat = {
    id: number;
    firstName: string;
    secondName: string;
    displayName: string;
    login: string;
    email: string;
    phone: string;
    avatar: string;
    role: userRoleChat;
  };

  export type Chat = {
    id: number;
    title: string;
    avatar: string;
    unread_count: 15;
    last_message: {
      user: {
        first_name: string;
        second_name: string;
        avatar: string;
        email: string;
        login: string;
        phone: string;
      };
      time: string;
      content: string;
    };
  };

  export type Chats = Chat[];

  export type MessageDTO = {
    chat_id: number;
    content: string;
    file: unknown;
    id: 2;
    is_read: boolean;
    time: string;
    type: MessageType;
    user_id: number;
  };
  export type Message = {
    chatId: number;
    content: string;
    file: unknown;
    id: 2;
    isRead: boolean;
    time: string;
    type: MessageType;
    userId: number;
    isMy?: boolean;
  };
  export type AppState = {
    isLoading: boolean;
    user: User | null;
    chats: Chats;
    activeChat: { id: number | null; masseges: Message[] | null };
    socket: WebSocket | null;
  };
}

export {};
