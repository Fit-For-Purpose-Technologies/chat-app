import { FlatList, StyleSheet, View } from 'react-native';
import Message from '../models/Message';
import MessageCard from './MessageCard';

interface ChatListProps {
	messages: Message[];
}

const ChatList: React.FC<ChatListProps> = ({ messages }) => {
	return (
		<View style={styles.container}>
			<FlatList
				data={messages}
				keyExtractor={(item) => item.id}
				renderItem={({ item }) => <MessageCard message={item} />}
			/>
		</View>
	);
};

export default ChatList;

const styles = StyleSheet.create({
	container: {
		flex: 0.7,
		padding: 10,
	},
});
