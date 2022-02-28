import { StyleSheet, Text, View } from 'react-native';
import { User } from '../screens/Home';

interface UserCardProps {
	user: User;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
	return (
		<View style={styles.container}>
			<Text>{user.name}</Text>
		</View>
	);
};

export default UserCard;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
		borderRadius: 15,
		padding: 10,
		marginVertical: 10,
		textAlign: 'center',
	},
});
