import {Server} from 'socket.io'

class SocketService {
    private _io: Server;
    constructor() {
        console.log("Init Socket Service...");
         this._io = new Server()
    }

    public initLiteners() {
        const io = this.io;
       io.on("connect", (socket) => {
        console.log(`New socket Connected`, socket.id);

        socket.on('event:message', async({message}: {message:string}) => {})
         console.log("New Message Rec.", message);
      });
     
    }

    get io() {
        return this._io;
    }
}

export default SocketService;