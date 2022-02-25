const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const io = require('socket.io')(server, {
	cors: {
		origin: '*',
	},
});

const PORT = 5000;

let users = [];

server.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});

io.on('connection', (socket) => {
	socket.on('JOIN', (name) => {
		console.log(name);
	})
});