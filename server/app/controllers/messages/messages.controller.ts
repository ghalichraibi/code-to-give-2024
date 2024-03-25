import { Controller, Get, HttpStatus, Res } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { Response } from "express";
import { ChatService } from "@app/services/chat.service";

@ApiTags("Messages")
@Controller("messages")
export class MessageController {
  constructor(private readonly chatService: ChatService) {}

  @Get("/")
  async allUsers(@Res() response: Response) {
    try {
      const allMessages = this.chatService.getAllChannelMessages();
      const mapSerialized = Array.from(allMessages.entries()).map(
        ([key, value]) => ({ channel: key, messages: value })
      );
      response.status(HttpStatus.OK).json(mapSerialized);
    } catch (error) {
      response.status(HttpStatus.NOT_FOUND).send(error.message);
    }
  }
}
