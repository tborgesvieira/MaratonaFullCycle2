import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SenderController } from './sender/sender.controller';
import { ReceiverController } from './receiver/receiver.controller';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'peer'),
    }),
  ],
  controllers: [AppController, SenderController, ReceiverController],
  providers: [AppService],
})
export class AppModule {}
