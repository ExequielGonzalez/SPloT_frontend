import openSocket from "socket.io-client";

export function useSocketIo(port) {
  return openSocket(`http://localhost:${port}`);
}

export function useSocketConnection(socket, callback) {
  socket.on("active_plates_update", () => {
    // console.log("llego algo por ws");
    callback();
  });
}
