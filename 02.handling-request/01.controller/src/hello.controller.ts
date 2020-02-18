import { Controller, Get } from '@nestjs/common'

@Controller('hello')
export class Hello {

    @Get()
    index() {
        return "Hello Plain Controller"
    }
}