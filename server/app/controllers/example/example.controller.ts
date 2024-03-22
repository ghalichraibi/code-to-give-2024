import { Message } from '@app/model/schema/message.schema';
import { ExampleService } from '@app/services/example/example.service';
import { Controller, Get, Post } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Example')
@Controller('example')
export class ExampleController {
    constructor(private readonly exampleService: ExampleService) {}

    @Get('/')
    @ApiOkResponse({
        description: 'Return current time with hello world',
        type: Message,
    })
    exampleInfo() {
        return this.exampleService.helloWorld();
    }
}
