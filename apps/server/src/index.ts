import http from "http";
import SocketServices from "./services/socket";
async function init () {
    const socketService = new SocketServices();

    const httpServer = http.createServer();
    const PORT = process.env.Port? process.env :8000;

    socketService.io.attach(httpServer);

    httpServer.listen(PORT, () =>
    console.log(`HTTP Server started at PORT:${PORT}`)
    );
}

init();