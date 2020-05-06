import { Module } from '@nestjs/common';
import { Maratona } from './maratona.model';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MaratonaController } from './maratona.controller';
import { MaratonaSubscriberService } from './maratona-subscriber.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([Maratona]),
    ],
    controllers: [
        MaratonaController
    ],
    providers: [MaratonaSubscriberService],
})
export class MaratonaModule {}
