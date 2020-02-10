import { Controller, Get } from '@nestjs/common';

@Controller()
export class HelloController {

    @Get()
    index() {
        return {
            language: "Type Script",
            framework: "Nest JS",
            platform: "Node.js",
            message: "Hello From Nest JS"
        }
    }
}
