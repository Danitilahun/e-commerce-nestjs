import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateUserDto } from './user.dto';
import { User } from './user.entity';
import { hash, compare } from 'bcrypt';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly repository: Repository<User>,
  ) {}

  public async createUser(body: CreateUserDto): Promise<User> {
    body.password = await hash(body.password, 10);
    const user: User = this.repository.create({
      ...body,
    });

    return this.repository.save(user);
  }

  public async findByEmail(email: string): Promise<User> {
    const user: User = await this.repository.findOne({
      where: {
        email,
      },
    });

    return user;
  }

  public async comparePassword(password, userPassword): Promise<boolean> {
    return compare(password, userPassword);
  }
}
