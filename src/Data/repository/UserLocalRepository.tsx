import { User } from '../../Domain/entity/User';
import { UserLocalRepository } from '../../Domain/repository/UserLocalRepository';
import { LocalStorage } from '../sources/local/LocalStorage';

export class UserLocalRepositoryImp implements UserLocalRepository {
  async save(user: User): Promise<void> {
    const { save } = LocalStorage();
    await save('user', JSON.stringify(user));
  }

  async getUser(): Promise<User> {
    const { getItem } = LocalStorage();
    const data = await getItem('user');
    const user: User = JSON.parse(data as any);
    return user;
  }

  async deleteUser(): Promise<void> {
    const { deleteItem } = LocalStorage();
    await deleteItem('user');
  }
}
