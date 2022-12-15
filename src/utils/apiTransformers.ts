import { UserDTO, UserDTOChat } from 'api/login-api';

export const transformUser = (data: UserDTO): User => {
  return {
    id: data.id,
    login: data.login,
    firstName: data.first_name,
    secondName: data.second_name,
    displayName: data.display_name,
    avatar: data.avatar
      ? 'https://ya-praktikum.tech/api/v2/resources/' + data.avatar
      : null,
    phone: data.phone,
    email: data.email,
  };
};

export const transformUsersChats = (data: UserDTOChat[]): UserInChat[] => {
  return data.map((user) => {
    return { ...transformUser(user), role: user.role };
  });
};

export const transformMessage = (data: MessageDTO): Message => {
  return {
    ...data,
    chatId: data.chat_id,
    isRead: data.is_read,
    userId: data.user_id,
  };
};
