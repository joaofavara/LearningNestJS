import { Module } from '@nestjs/common';
import { UserModule } from './users/user.module';
import { BookModule } from './books/book.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [
        TypeOrmModule.forRoot(),
        UserModule,
        BookModule
      ],
})

export class AppModule {}