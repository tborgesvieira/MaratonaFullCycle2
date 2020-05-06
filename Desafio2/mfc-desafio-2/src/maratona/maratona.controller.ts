import { Controller, Get, Post, Req, Request } from '@nestjs/common';
import { Maratona } from './maratona.model';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Controller('maratona')
export class MaratonaController {

    constructor(
        @InjectRepository(Maratona)
        private readonly maratonaRepo: Repository<Maratona>,
    ){}

    @Get()
    async index(){
        return await this.maratonaRepo.find();
    }

    @Post()
    async store(@Req() request: Request) {
        const maratona = this.maratonaRepo.create(request.body as any);
        await this.maratonaRepo.save(maratona);
        return maratona;
    }
}
