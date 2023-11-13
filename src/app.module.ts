import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasosController } from './cat.controller';
import { Text } from './Modal/text.entity';
import { User } from './Modal/user.entity';
import { EssayService } from './Services/essay.service';
import { essayController } from './Controller/essay.controller';
import { userController } from './Controller/user.controller';
import { UserService } from './Services/user.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'blog',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Text, User])
  ],
  controllers: [AppController, TasosController, essayController, userController],
  providers: [AppService, EssayService, UserService],
})
export class AppModule { }
