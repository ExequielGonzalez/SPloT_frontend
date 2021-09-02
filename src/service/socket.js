import { ref } from "vue";
import openSocket from "socket.io-client";
import { currentUrlWithPortNumber } from "src/utils/url-manipulation.js";

export function useSocketIo(port) {
  return openSocket(`http://localhost:${port}`);
}

export function useSocketName(socket) {
  const name = ref("");

  socket.on("name", (serverName) => {
    name.value = serverName;
  });

  function setDisplayName(value) {
    socket.emit("updateName", value);
  }

  return [name, setDisplayName];
}
