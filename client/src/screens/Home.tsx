import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet } from 'react-native';
import { useUserContext } from '../contexts/UsersProvider';
import Chat from './Chat';
import Login from './Login';

export type User = {
	id: string;
	name: string;
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});

const Home = () => {
	const { currentUser } = useUserContext();
	return (
		<SafeAreaView style={styles.container}>
			<StatusBar style='auto' />
			{!currentUser.id ? <Login /> : <Chat />}
		</SafeAreaView>
	);
};

export default Home;
