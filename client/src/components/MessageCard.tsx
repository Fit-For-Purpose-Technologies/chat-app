import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { useUserContext } from '../contexts/UsersProvider';
import Message from '../models/Message';

interface MessageProps {
	message: Message;
}

const { width } = Dimensions.get('window');
const MESSAGE_WIDTH = width * 0.7;

const MessageCard: React.FC<MessageProps> = ({ message }) => {
	const { currentUser } = useUserContext();

	const isMine = () => {
		return currentUser.id === message.user?.id;
	};

	return (
		<View
			style={[
				styles.container,
				{
					alignSelf: isMine() ? 'flex-end' : 'flex-start',
				},
			]}>
			<Text style={styles.author}>{message.user?.name}</Text>
			<View
				style={[
					styles.message,
					{
						borderColor: isMine() ? '#00b894' : '#e2e8f0',
						borderWidth: 1,
					},
				]}>
				<Text style={styles.date}>{new Date().toLocaleDateString()}</Text>
				<Text style={styles.content}>{message.message}</Text>
			</View>
		</View>
	);
};

export default MessageCard;

const styles = StyleSheet.create({
	container: {
		width: MESSAGE_WIDTH,
		padding: 5,
		alignSelf: 'flex-end',
	},
	author: {
		marginLeft: 5,
	},
	date: {
		fontSize: 10,
		color: 'grey',
	},
	content: {},
	message: {
		borderWidth: 1,
		borderColor: 'black',
		borderRadius: 10,
		padding: 10,
	},
});
