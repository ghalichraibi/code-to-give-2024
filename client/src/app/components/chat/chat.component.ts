import { AfterViewInit, Component, Input, ElementRef, OnInit, QueryList, ViewChildren, Output, EventEmitter } from '@angular/core';
import { UserRoles } from '../../../../../common/enums/user-roles.enum';

@Component({
    selector: 'app-chat',
    templateUrl: './chat.component.html',
    styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements AfterViewInit, OnInit {
    @Input() resident: any;
    @Output() closeChat = new EventEmitter<void>();

    @ViewChildren('messageList', { read: ElementRef }) messageList: QueryList<ElementRef>;
    roomMessages: string[] = [];
    roomMessage = '';
    isMessageTooLong: boolean = false;
    userRole: UserRoles;

    ngOnInit(): void {
        this.receiveMessage();
        this.getAllMessages();
    }

    onChatClose(): void {
        this.closeChat.emit();
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

    isResident(): boolean {
        return this.userRole === UserRoles.Resident;
    }
}
