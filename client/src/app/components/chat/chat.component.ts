import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';

@Component({
    selector: 'app-chat',
    templateUrl: './chat.component.html',
    styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements AfterViewInit, OnInit {
    @ViewChildren('messageList', { read: ElementRef }) messageList: QueryList<ElementRef>;
    roomMessages: string[] = [];
    roomMessage = '';
    isMessageTooLong: boolean = false;

    ngOnInit(): void {
        this.receiveMessage();
        this.getAllMessages();
    }

    getAllMessages(): void {
        // this.chatService.getAllMessages().subscribe((messages: string[]) => {
        //     this.roomMessages = messages;
        // });
    }

    scrollToBottomAfterViewChecked(): void {
        this.messageList.last.nativeElement.scrollIntoView({ behavior: 'smooth' });
    }

    scrollToBottom(): void {
        this.messageList.changes.subscribe(() => {
            this.scrollToBottomAfterViewChecked();
        });
    }

    ngAfterViewInit(): void {
        this.scrollToBottom();
    }

    sendToRoom(): void {
        const currentDate = new Date();
        if (this.roomMessage.trim() === '') return;
        this.roomMessage = `[${currentDate.getHours()}h:${currentDate.getMinutes()}min You]: ${this.roomMessage}`;
        this.roomMessages.push(this.roomMessage);
        this.roomMessage = '';
    }

    receiveMessage(): void {
        // this.chatService.onMessageReceived((onmessage) => {
        //     this.roomMessages.push(onmessage);
        // });
    }

    isSent(message: string): boolean {
        return message.split(' ').includes('You]:');
    }
}
