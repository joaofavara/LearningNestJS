import { Controller, Get, Post, Req } from '@nestjs/common';
import { UserService } from './user.service';
import { Request } from 'express';
import { User } from './entity/user.entity';

@Controller('user')
export class UserController {
    constructor(private userService: UserService) {}

    @Get()
    async findAll(): Promise<User[]> {
        return await this.userService.findAll();
    }

    @Post()
    async create(@Req() req: Request): Promise<Object> {
        const body :User = req.body;
        return await this.userService.create(body);
    }
}