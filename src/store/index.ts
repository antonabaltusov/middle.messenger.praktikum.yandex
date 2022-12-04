export const defaultState: AppState = {
  appIsInited: false,
  isLoading: false,
  user: null,
  chats: [],
  activeChat: {
    id: null,
    masseges: null,
  },
  socket: null,
};
