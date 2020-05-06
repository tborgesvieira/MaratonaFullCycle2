import { Injectable } from '@nestjs/common';
import { EntitySubscriberInterface, Connection, Repository } from 'typeorm';
import { Maratona } from './maratona.model';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class MaratonaSubscriberService implements EntitySubscriberInterface<Maratona> {
    constructor(
        connection: Connection,
        @InjectRepository(Maratona)
        private readonly orderRepo: Repository<Maratona>
    ) {
        connection.subscribers.push(this);
    }

    listenTo() {
        return Maratona;
    }
}
