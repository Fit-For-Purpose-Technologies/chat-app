import { useEffect, useState } from 'react';
import { Button, Text, TouchableOpacity, View } from 'react-native';
import { useSocket } from '../contexts/SocketProvider';
import { useUserContext } from '../contexts/UsersProvider';

export type User = {
	id: string;
	name: string;
};

const Home = () => {
	const { socket } = useSocket();
	const [users, setUsers] = useState<User[]>([]);
	const { currentUser, setCurrentUser } = useUserContext();

	useEffect(() => {
		if (socket) {
			socket.emit('JOIN', 'svv');
			socket.on('USERS', (users: User[]) => {
				setUsers(users);
			});
		}

		return () => {
			if (socket) {
				socket.off('USERS');
			}
		};
	}, [socket]);

	return (
		<View>
			<Text>Home</Text>
			<pre>{JSON.stringify(currentUser)}</pre>
		</View>
	);
};

export default Home;
