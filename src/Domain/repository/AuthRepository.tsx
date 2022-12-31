import { User } from '../entity/User';
import { ResponseAPIDelivery } from '../../Data/sources/remote/models/ResponseApiDelivery';

export interface AuthRepository {
  register(user: User): Promise<ResponseAPIDelivery>;
  login(email: string, password: string): Promise<ResponseAPIDelivery>;
}
