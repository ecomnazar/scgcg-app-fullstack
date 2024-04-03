import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateCertDto, CreateUserDto } from './dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
import { compositeImage } from './lib/compositeImage';
import * as argon2 from 'argon2';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly jwtService: JwtService,
    private mailerService: MailerService,
  ) {}
  async create(createUserDto: CreateUserDto) {
    const existUser = await this.userRepository.findOne({
      where: { email: createUserDto.email },
    });
    if (existUser) {
      throw new BadRequestException('User already exists');
    }

    const user = await this.userRepository.save({
      fullname: createUserDto.fullname,
      email: createUserDto.email,
      password: await argon2.hash(createUserDto.password),
      region: createUserDto.region,
      gender: createUserDto.gender,
    });
    const token = this.jwtService.sign({ email: createUserDto.email });
    return { user, token };
  }

  async findOne(email: string) {
    return await this.userRepository.findOne({
      where: { email },
    });
  }

  async findAll() {
    return await this.userRepository.find();
  }

  async generateCert(createCertDto: CreateCertDto) {
    const { fullname, id, email } = createCertDto;
    const res = await compositeImage(fullname, id);

    try {
      await this.mailerService.sendMail({
        to: email,
        // from: '"Support Team" <support@example.com>', // override default from
        subject: 'Certificate',
        attachments: [
          {
            path: res,
            filename: `${fullname}.jpg`,
          },
        ],
      });
      console.log('success');
    } catch (error) {
      console.log(error);
    }
    return { message: 'file saved successfully' };
  }
}
