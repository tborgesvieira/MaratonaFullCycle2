import { Controller, Get, Res } from '@nestjs/common';
import { join } from 'path';
import { Response } from 'express';

@Controller('sender')
export class SenderController {

    @Get()
    index(@Res() res: Response){
        res.sendFile(join(process.cwd(), 'peer/send.html'));
    }
}
