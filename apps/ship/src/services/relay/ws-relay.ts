import WebSocket from "ws";

export class WsRelay {
  private static instance: WsRelay;
  private wss = new WebSocket.Server({port: 3006});
  constructor() {
    console.log("ws server started", this.wss.address());
    this.wss.on("connection", function connection(ws) {
      console.log("connected with relay");
      ws.onmessage = function (event) {
        console.log("received: %s", event.data);
      };
    });
  }

  static getInstance() {
    if (!WsRelay.instance) {
      WsRelay.instance = new WsRelay();
    }
    return WsRelay.instance;
  }

  emitInvlidation(string: string) {
    this.wss.clients.forEach(client => {
      client.send(string);
    });
  }
}
