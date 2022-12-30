import { User } from '../entity/User';

export interface AuthRepository {
  register(user: User): Promise<any>;
}
