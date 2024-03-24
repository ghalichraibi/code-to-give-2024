import { Injectable, Logger } from '@nestjs/common';
import { SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

const PRIVATE_ROOM_ID = 'private';

@WebSocketGateway({ cors: true })
@Injectable()
export class ChatGateway {
    @WebSocketServer() private server: Server;
    private roomMessages: Map<string, string[]> = new Map();

    constructor(
        private readonly logger: Logger,
    ) {
    }

    @SubscribeMessage('message:send')
    handleMessage(client: Socket, message: string): void {
        const timestamp = new Date().getTime();

        if (!this.roomMessages.has(PRIVATE_ROOM_ID)) {
            this.roomMessages.set(PRIVATE_ROOM_ID, []);
        }
        this.roomMessages.get(PRIVATE_ROOM_ID)?.push(message);

        this.server.to(PRIVATE_ROOM_ID).emit('message:receive', message);
    }

    @SubscribeMessage('message:join')
    async handleGetMessages(client: Socket): Promise<string[]> {
        const messages = this.roomMessages.get(PRIVATE_ROOM_ID) || [];
        client.join(PRIVATE_ROOM_ID);
        this.logger.log
        return messages;
    }
}
