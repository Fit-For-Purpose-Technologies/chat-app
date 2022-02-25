import {
	createContext,
	ReactNode,
	useContext,
	useEffect,
	useState,
} from 'react';
import { io, Socket } from 'socket.io-client';

type ISocketProvider = {
	socket: Socket | null;
};

const SocketContext = createContext<Partial<ISocketProvider>>({});

export const useSocket = () => {
	return useContext(SocketContext);
};

type SocketProviderProps = {
	children: ReactNode;
};

const SocketProvider: React.FC<SocketProviderProps> = ({ children }) => {
	const [socket, setSocket] = useState<ISocketProvider>({ socket: null });

	useEffect(() => {
		setSocket({ socket: io('http://10.121.200.179:5000') });
	}, []);

	return (
		<SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
	);
};

export default SocketProvider;
