import { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import ChatList from '../components/ChatList';
import MessageBox from '../components/MessageBox';
import UserList from '../components/UserList';
import { useSocket } from '../contexts/SocketProvider';
import Message from '../models/Message';

interface ChatProps {}

const Chat: React.FC<ChatProps> = () => {
	const { socket } = useSocket();
	const [messages, setMessages] = useState<Message[]>([]);

	useEffect(() => {
		if (socket) {
			socket.on('MESSAGE_RECEIVED', (message: Message) => {
				setMessages((messages) => [message, ...messages]);
			});
		}
	}, [socket]);

	return (
		<View style={styles.container}>
			<UserList />
			<ChatList {...{ messages }} />
			<MessageBox />
		</View>
	);
};

export default Chat;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
