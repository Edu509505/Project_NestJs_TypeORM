import {
  IsString,
  IsNotEmpty,
  IsEmail,
  IsDate,
  MaxLength,
  MinLength,
  IsOptional,
} from 'class-validator';

// Aqui é importado uma biblioteca de validação direto no Nest com o pipe

export class UserDomain {
  @IsOptional()
  @IsString({ message: 'ID deve ser uma string' })
  readonly id?: string;

  @IsString({ message: 'O nome deve ser uma string' })
  @IsNotEmpty({ message: 'Nome Obrigatório' })
  @MinLength(3, { message: 'O Nome deve ser maior do que 3 caracteres' })
  @MaxLength(100, {
    message: 'O Name não pode ser maior do que 100 caracteres',
  })
  readonly name: string;

  @IsString({ message: 'Email deve ser uma string' })
  @IsNotEmpty({ message: 'Email obrigatório' })
  @IsEmail({}, { message: 'Formato de email inválido' })
  readonly email: string;

  @IsOptional()
  @IsString({ message: 'Senha deve ser uma string' })
  @MinLength(6, { message: 'Senha deve ter no mínimo 6 caracters' })
  @MaxLength(255, {
    message: 'Senha não deve ter um número maior do que 255 caracteres',
  })
  readonly password?: string;

  @IsOptional()
  @IsDate({ message: 'Formato de data inválido' })
  readonly created_at?: Date;

  @IsOptional()
  @IsDate({ message: 'Formato de data Inválido' })
  readonly updated_at?: Date;
}
