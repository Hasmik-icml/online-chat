import { createServer } from 'node:http';
import express from 'express';
import { Server } from "socket.io";
import cors from "cors";
import router from './route.mjs';

const app = express();
app.use(cors());
app.use(router);

const server = createServer(app);

const io = new Server(server, {
    cors: { origin: "*" },
});

io.on("connection", (socket) => {
    socket.on("join", ({ name, room }) => {
        socket.join(room);

        socket.emit('message', {
            data: {user: {name: "Admin"}, message: `Hello`}
        })
    });

    io.on("disconnect", () => {
        console.log("Disconnect");
    })
})

server.listen(5000, () => {
    console.log("Server is running...");
})
