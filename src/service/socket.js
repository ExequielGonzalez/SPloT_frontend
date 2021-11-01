import openSocket from "socket.io-client";

export function useSocketIo(port) {
  return openSocket(`http://${window.location.hostname}:${port}`);
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

export function webSocketPayment(socket, callback) {
  socket.on("register_payment", (msg) => {
    // console.log("llego algo por ws");
    console.log(msg);
    callback(msg);
  });
}
