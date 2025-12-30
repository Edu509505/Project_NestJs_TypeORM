import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from './user.entity';
import { UserDomain } from './user.domain';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private readonly usersRepository: Repository<Users>,
  ) {}

  async findAllUsers(): Promise<Users[]> {
    if (Users.length === 0)
      throw new HttpException('Users not found!', HttpStatus.NOT_FOUND);

    return this.usersRepository.find();
  }

  async createUsers(user: UserDomain): Promise<UserDomain> {
    const createUsers = await this.usersRepository.save(user);
    return createUsers;
  }
}
