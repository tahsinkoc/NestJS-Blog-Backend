import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasosController } from './cat.controller';
import { Text } from './Modal/text.entity';
import { EssayService } from './Services/essay.service';
import { essayController } from './Controller/essay.controller';

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
    TypeOrmModule.forFeature([Text])
  ],
  controllers: [AppController, TasosController, essayController],
  providers: [AppService, EssayService],
})
export class AppModule { }
