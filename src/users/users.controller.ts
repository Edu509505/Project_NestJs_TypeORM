import { Body, Controller, Get, Post, Put, Param, Delete } from '@nestjs/common';
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
    console.log('DTO recebido:', userDTO);
    return await this.usersService.createUsers(userDTO);
  }

  @Put('edit/:id')
  async publishPost(
    @Param('id') id: string,
    @Body() body: Partial<UsersDTOS>,
  ): Promise<UsersDTOS> {
    return await this.usersService.updateUser(id, body);
  }

  @Delete('delete/user/:id')
  async deletePost(
    @Param('id') id: string
  ): Promise<UsersDTOS> {
    return await this.usersService.deleteUser(id)
  }
}
