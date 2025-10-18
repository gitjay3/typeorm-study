import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModel } from './entity/user.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([UserModel]),
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'nestjs',
            password: 'nestjs1234',
            database: 'nestjs_study',
            entities: [UserModel],
            synchronize: true,
        }),
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
