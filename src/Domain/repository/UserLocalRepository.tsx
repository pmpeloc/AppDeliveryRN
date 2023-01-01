import { User } from '../entity/User';

export interface UserLocalRepository {
  save(user: User): Promise<void>;
  getUser(): Promise<User>;
  deleteUser(): Promise<void>;
}
