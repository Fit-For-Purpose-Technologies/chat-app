import {
	createContext,
	ReactNode,
	useContext,
	useEffect,
	useState,
} from 'react';
import { User } from '../screens/Home';
import { useSocket } from './SocketProvider';

type IUserContext = {
	users: User[];
	setUsers: React.Dispatch<React.SetStateAction<User[]>>;
	currentUser: User;
	setCurrentUser: React.Dispatch<React.SetStateAction<User>>;
};

const UserContext = createContext<IUserContext>({} as IUserContext);

export const useUserContext = () => useContext(UserContext);

type UserProviderProps = {
	children: ReactNode;
};

const UserProdiver: React.FC<UserProviderProps> = ({ children }) => {
	const { socket } = useSocket();
	const [users, setUsers] = useState<User[]>([]);
	const [currentUser, setCurrentUser] = useState<User>({} as User);

	useEffect(() => {
		if (socket) {
			socket.on('USERS', (users: User[]) => {
				setUsers(users);
			});
			socket.on('JOIN_SUCCESS', (user: User) => {
				setCurrentUser(user);
			});
		}

		return () => {
			if (socket) {
				socket.off('USERS');
				socket.off('JOIN_SUCCESS');
			}
		};
	}, [socket]);

	return (
		<UserContext.Provider
			value={{ users, setUsers, currentUser, setCurrentUser }}>
			{children}
		</UserContext.Provider>
	);
};

export default UserProdiver;
