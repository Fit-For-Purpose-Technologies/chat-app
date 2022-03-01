import { FlatList, View } from 'react-native';
import { useUserContext } from '../contexts/UsersProvider';
import UserCard from './UserCard';

interface UserListProps {}

const UserList: React.FC<UserListProps> = () => {
	const { users: connectedUsers, currentUser } = useUserContext();
	const users = connectedUsers.filter((user) => user.id !== currentUser.id);

	return (
		<View
			style={{
				flex: 0.2,
				backgroundColor: '#ccc',
				padding: 15,
				borderBottomColor: 'black',
				borderBottomWidth: 1,
			}}>
			<FlatList
				style={{ flex: 1 }}
				data={users}
				keyExtractor={(user) => user.id}
				renderItem={({ item }) => <UserCard user={item} />}
			/>
		</View>
	);
};

export default UserList;
