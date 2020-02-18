import { Controller, Get } from '@nestjs/common';

@Controller('hello3')
export class Hello3Controller {

    @Get()
    index() {
        return 'Hello from VS Code Plugin'
    }
}
