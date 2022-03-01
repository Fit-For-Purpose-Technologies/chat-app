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
	// const IP = '10.121.200.179'; // MIC
	const IP = '192.168.1.61'; // FFP
	// const IP = '172.20.10.5'; // 4G

	const [socket, setSocket] = useState<ISocketProvider>({ socket: null });

	useEffect(() => {
		console.log('SocketProvider: useEffect');
		setSocket({ socket: io(`http://${IP}:5000`) });
	}, []);

	return (
		<SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
	);
};

export default SocketProvider;
