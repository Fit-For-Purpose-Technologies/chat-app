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
	setUsers: (users: User[]) => void;
	currentUser: User;
	setCurrentUser: (user: User) => void;
};

const UserContext = createContext<IUserContext>({} as IUserContext);

export const useUserContext = () => useContext(UserContext);

type UserProviderProps = {
	children: ReactNode;
};

const UserProdiver: React.FC<UserProviderProps> = ({ children }) => {
	const { socket } = useSocket();
	const [users, setUsers] = useState<User[]>([]);
	const [currentUser, setCurrentUser] = useState<User>({
		id: '1',
		name: 'svv',
	});

	useEffect(() => {
		if (socket) {
			socket.on('USERS', (users: User[]) => setUsers(users));
		}
	}, [socket]);

	return (
		<UserContext.Provider
			value={{ users, setUsers, currentUser, setCurrentUser }}>
			{children}
		</UserContext.Provider>
	);
};

export default UserProdiver;
