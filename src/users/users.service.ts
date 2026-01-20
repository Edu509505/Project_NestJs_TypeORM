import { Injectable, NotFoundException } from '@nestjs/common';
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
    const users = await this.usersRepository.find();
    return users;
  }

  async findUserId(id: string): Promise<Users> {
    const user = await this.usersRepository.findOneBy({ id });
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return user;
  }

  async createUsers(user: UserDomain): Promise<UserDomain> {
    const createUsers = await this.usersRepository.save(user);
    return createUsers;
  }

  async updateUser(id: string, data: Partial<UserDomain>) {
    const updateUser = await this.usersRepository.findOneBy({ id });
    if (!updateUser) throw new Error('Usuário Não Encontrado');

    Object.assign(updateUser, data); //Aqui faz a atualização

    return await this.usersRepository.save(updateUser);
  }

  async deleteUser(id: string): Promise<void> {
    const user = await this.usersRepository.findOneBy({ id });
    if (!user) throw new NotFoundException('Usuário não encontrado');
    await this.usersRepository.delete(id);
  }
}
