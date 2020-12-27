import { Injectable } from '@nestjs/common';
import { Book } from './entity/book.entity';
import { DeleteResult, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
    export class BookService {
        constructor(
        @InjectRepository(Book)
            private booksRepository: Repository<Book>,
        ) {}

        async findAll(): Promise<Book[]> {
            return await this.booksRepository.find();
        }

        async findById(id: number): Promise<Book[]> {
            return await this.booksRepository.find({ id });
        }

        async create(body: Book): Promise<Object> {
            console.log(body);
            return await this.booksRepository.save(body);
        }

        async remove(id: number): Promise<DeleteResult> {
            return await this.booksRepository.delete(id);
        }
    }