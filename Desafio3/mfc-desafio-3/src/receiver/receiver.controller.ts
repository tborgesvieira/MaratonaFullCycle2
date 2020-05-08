import { Controller, Get, Res } from '@nestjs/common';
import { join } from 'path';
import { Response } from 'express';

@Controller('receiver')
export class ReceiverController {

    @Get()
    index(@Res() res: Response){
        res.sendFile(join(process.cwd(), 'peer/receive.html'));
    }
}
