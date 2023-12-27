import http from "http";

async function init () {
    const httpServer = http.createServer();
    const PORT = process.env.Port? process.env :8000;

    httpServer.listen(PORT, () =>
    console.log(`HTTP Server started at PORT:${PORT}`)
    );
}

init();