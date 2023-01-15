import { CustomRepository } from '../typeorm-ex.decorator';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@CustomRepository(User)
export class UserRepository extends Repository<User> {}