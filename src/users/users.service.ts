import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { User } from './entities/user.entity';
import { constants } from 'src/utils/constants';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  // inject user repository
  constructor(@InjectRepository(User) private readonly usersRepository: Repository<User>) {}

  create(createUserDto: CreateUserDto) {
    let user:User = new User();

    user.firstName = createUserDto.firstName;
    user.lastName = createUserDto.lastName;
    user.email = createUserDto.email;
    user.password = createUserDto.password;
    user.role = constants.roles.USER;

    return this.usersRepository.save(user);
  }

  findAll() {
    return this.usersRepository.find();
  }

  findOne(id: number) {
    return this.usersRepository.findOneById(id);
  }

  // findUserByEmail(email: string) {
  //   return this.usersRepository.findOneByOrFail({ where: { email } });
  // }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return this.usersRepository.delete(id);
  }
}
