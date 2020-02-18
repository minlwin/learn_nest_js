import { Controller, Get } from '@nestjs/common';

@Controller('hello2')
export class Hello2Controller {
    
    @Get()
    index() {
        return 'Hello from CLI Controller'
    }
}
