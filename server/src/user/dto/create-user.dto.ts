import { IsEmail, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  email: string;

  @MinLength(6, { message: 'Password must be more than 6 symbols' })
  password: string;

  @MinLength(3, { message: 'Fullname must be more than 3 symbols' })
  fullname: string;

  region: string;

  gender: string;
}

export class CreateCertDto {
  fullname: string;
  id: string;
  email: string;
}
