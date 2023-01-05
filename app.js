const app = require("express")();
const server = require("http").createServer(app);
const io = require("socket.io")(server, {
    cors: {
        origin: "https://chat-app-sabry-1996.vercel.app/",
        methods: ["GET", "POST"]
    }
}); const env = require("dotenv")

// Intila Config
env.config();

// Default data
let messages = [];
let USERS = {}

server.listen(process.env.SOCKET_PROT, () => {
    console.log(`server is work in prot ${process.env.SOCKET_PROT}`);
});

io.sockets.on('connection', (socket) => {
    // Conenect
    USERS[socket.id] = socket;

    // Send Message
    socket.on('send', data => {
        messages.push(data)
    })

    // Disconnect
    socket.on('disconnect', () => {
        console.log(`${socket.id} is disconnect`);
    })

})

// Live update package
setInterval(() => {
    // TODO: send

    for (const user in USERS) {
        USERS[user].emit('update', messages)
    }
}, 100 / 25);