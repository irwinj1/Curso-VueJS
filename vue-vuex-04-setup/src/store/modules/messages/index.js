import {getters} from './getters.js'
const module = {
  namespaced: true,
  state: {
    messages: [
      {
        id: 1,
        author: 1,
        message: "Hola 👀",
        timestamp: new Date().toLocaleTimeString(),
        read: false,
        channelId:1
      },
      {
        id: 2,
        author: 2,
        message: "Canal 2",
        timestamp: new Date().toLocaleTimeString(),
        read: false,
        channelId:2
      },
    ],
  },
  getters
};

export default module;
