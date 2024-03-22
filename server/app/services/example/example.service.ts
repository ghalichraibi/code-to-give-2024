import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class ExampleService {
    helloWorld(): string {
        return "Hello world";
    }
}
