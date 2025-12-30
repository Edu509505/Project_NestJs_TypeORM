import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersDTOS } from './users.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async findAllUsers() {
    return await this.usersService.findAllUsers();
  }

  @Post()
  async createUsers(@Body() userDTO: UsersDTOS) {
    return await this.usersService.createUsers(userDTO);
  }
}
