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

const userExists = (name) => {
	return users.some((user) => user.name === name);
}

const deleteUser = (socketId) => {
	users = users.filter((user) => user.socketId !== socketId);
}

server.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});

io.on('connection', (socket) => {
	socket.on('JOIN', (name) => {
		if (!userExists(name)) {
			const user = {
				id: new Date().getTime(),
				socketId: socket.id,
				name
			}
			users.push(user);
			socket.emit('JOIN_SUCCESS', user);
		}
		io.emit('USERS', users);
	});

	socket.on('disconnect', () => {
		deleteUser(socket.id);
		io.emit('USERS', users);
	});

	socket.on('MESSAGE_SENT', (message) => {
		io.emit('MESSAGE_RECEIVED', {
			id: new Date().getTime(),
			createAt: new Date(),
			message: message.message,
			...message
		});
	})

});