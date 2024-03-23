import { Logger, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ChatGateway } from '@app/gateways/chat/chat.gateway';
import { UserController } from './controllers/user/user.controller';
import { UserService } from './services/user/user.service';

@Module({
    imports: [
        ConfigModule.forRoot({ isGlobal: true }),
    ],
    controllers: [UserController],
    providers: [ChatGateway, UserService, Logger],
})
export class AppModule {}
