import {
  Body,
  Controller,
  Get,
  Post,
  Put,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersDTOS } from './users.dto';
import { Users } from './user.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async findAllUsers() {
    return await this.usersService.findAllUsers();
  }

  @Get('getUserId/:id')
  async findUserId(@Param('id') id: string): Promise<Users> {
    return await this.usersService.findUserId(id);
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
  async deletePost(@Param('id') id: string): Promise<{ message: string }> {
    await this.usersService.deleteUser(id);
    return { message: `Usuário ${id} deletado com sucesso` };
  }
}
