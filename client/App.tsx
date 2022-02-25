import { StyleSheet, Text, View } from 'react-native';
import SocketProvider from './src/contexts/SocketProvider';
import UserProdiver from './src/contexts/UsersProvider';
import Home from './src/screens/Home';

export default function App() {
	return (
		<SocketProvider>
			<UserProdiver>
				<Home />
			</UserProdiver>
		</SocketProvider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
