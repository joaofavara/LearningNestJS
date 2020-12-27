import { Controller, Delete, Get, Param, Post, Req } from '@nestjs/common';
import { BookService } from './book.service';
import { Request } from 'express';
import { Book } from './entity/book.entity';

@Controller('book')
export class BookController {
    constructor(private bookService: BookService) {}

    @Get()
    async findAll(): Promise<Book[]> {
        return await this.bookService.findAll();
    }

    @Get('/:id')
    async findById(@Param('id') id: number): Promise<Book[] | []> {
        return await this.bookService.findById(id);
    }

    @Post()
    async create(@Req() req: Request): Promise<Object> {
        const body :Book = req.body;
        return await this.bookService.create(body);
    }

    @Delete('/:id')
    async remove(@Param('id') id: number): Promise<Object> {
        return await this.bookService.remove(id);
    }
}