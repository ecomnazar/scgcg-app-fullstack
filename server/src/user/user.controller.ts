import {
  Body,
  Controller,
  Get,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateCertDto, CreateUserDto } from './dto/create-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Post('/cert')
  getCert(@Body() createCertDto: CreateCertDto) {
    return this.userService.generateCert(createCertDto);
  }
  // @Get(':id')
  // findOne(@Param('id') id: number) {
  //   // return this.userService.findOne(+id);
  // }
}
