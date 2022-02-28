import { User } from '../screens/Home';

export default interface Message {
	id: string;
	message: string;
	createdAt: Date;
	user: User;
}
