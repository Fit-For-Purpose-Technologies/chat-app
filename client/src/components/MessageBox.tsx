import { useState } from 'react';
import {
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from 'react-native';
import { useSocket } from '../contexts/SocketProvider';
import { useUserContext } from '../contexts/UsersProvider';

interface MessageBoxProps {}

const MessageBox: React.FC<MessageBoxProps> = () => {
	const { socket } = useSocket();
	const { currentUser } = useUserContext();
	const [message, setMessage] = useState('');
	const submit = () => {
		if (socket) {
			socket.emit('MESSAGE_SENT', {
				message,
				user: currentUser,
			});
			setMessage('');
		}
	};
	return (
		<View style={styles.container}>
			<View style={styles.inputContainer}>
				<TextInput
					value={message}
					onChangeText={(text) => setMessage(text)}
					style={styles.input}
				/>
				<TouchableOpacity onPress={submit} style={styles.textContainer}>
					<Text>Send</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default MessageBox;

const styles = StyleSheet.create({
	container: {
		flex: 0.1,
		padding: 10,
	},
	input: {
		width: '80%',
		padding: 10,
	},
	inputContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		borderWidth: 1,
		borderColor: '#ccc',
		borderRadius: 10,
	},
	textContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		width: '20%',
	},
});
