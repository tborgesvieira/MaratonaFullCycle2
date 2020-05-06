import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MaratonaController } from './maratona/maratona.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {ConfigModule} from "@nestjs/config";
import {Maratona} from "./maratona/maratona.model";
import { MaratonaModule } from './maratona/maratona.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env'
    }),
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'database.sqlite',      
      synchronize: true,
      entities: [Maratona],
  }),
    MaratonaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
