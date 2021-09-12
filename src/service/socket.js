import openSocket from "socket.io-client";

export function useSocketIo(port) {
  return openSocket(`http://localhost:${port}`);
}

export function webSocketNewEntry(socket, callback) {
  socket.on("active_plates_update", () => {
    // console.log("llego algo por ws");
    callback();
  });
}

export function webSocketAlarms(socket, callback) {
  socket.on("new_alert", (msg) => {
    // console.log("llego algo por ws");
    callback(msg);
  });
}
