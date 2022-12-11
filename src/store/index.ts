export const defaultState: AppState = {
  isLoading: false,
  user: null,
  chats: [],
  activeChat: {
    id: null,
    masseges: null,
  },
  socket: null,
};
