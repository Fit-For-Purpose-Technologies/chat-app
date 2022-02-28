import { useState } from 'react';
import {
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from 'react-native';
import { useSocket } from '../contexts/SocketProvider';

const Login: React.FC = () => {
	const { socket } = useSocket();

	const [username, setUsername] = useState('');

	const submit = () => {
		if (socket) {
			if (!username) {
				alert('no');
				console.log('here');
				return;
			}
			socket.emit('JOIN', username);
		}
	};

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Login</Text>
			<TextInput
				style={styles.input}
				value={username}
				onChangeText={(e) => setUsername(e)}
			/>
			<TouchableOpacity onPress={submit} style={styles.button}>
				<Text style={{ color: '#fff', fontWeight: '500' }}>Submit</Text>
			</TouchableOpacity>
		</View>
	);
};

export default Login;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 10,
		justifyContent: 'center',
	},
	title: {
		fontSize: 30,
		fontWeight: '600',
		textAlign: 'center',
	},
	input: {
		borderWidth: 1,
		borderRadius: 10,
		borderColor: '#ccc',
		padding: 10,
		marginVertical: 10,
	},
	button: {
		textAlign: 'center',
		fontSize: 12,
		backgroundColor: '#000',
		padding: 10,
		marginVertical: 10,
		borderRadius: 10,
	},
});
