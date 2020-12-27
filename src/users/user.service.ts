import { Injectable } from '@nestjs/common';
import { User } from './entity/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
    export class UserService {
        constructor(
        @InjectRepository(User)
            private usersRepository: Repository<User>,
        ) {}

        async findAll(): Promise<User[]> {
            return await this.usersRepository.find();
        }

        async create(body: User): Promise<Object> {
            console.log(body);
            return await this.usersRepository.save(body);
        }
    }