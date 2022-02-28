import { FlatList, View } from 'react-native';
import { User } from '../screens/Home';
import UserCard from './UserCard';

interface UserListProps {
	users: User[];
}

const UserList: React.FC<UserListProps> = ({ users }) => {
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
