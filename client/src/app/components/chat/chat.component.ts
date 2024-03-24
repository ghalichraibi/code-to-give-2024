import { AfterViewInit, Component, Input, ElementRef, OnInit, QueryList, ViewChildren, Output, EventEmitter, OnDestroy } from '@angular/core';
import { UserRoles } from '../../../../../common/enums/user-roles.enum';
import { WebSocketService } from '@app/services/websocket.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
    selector: 'app-chat',
    templateUrl: './chat.component.html',
    styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements AfterViewInit, OnInit, OnDestroy {
    @Input() resident: any;
    @Output() closeChat = new EventEmitter<void>();

    @ViewChildren('messageList', { read: ElementRef }) messageList: QueryList<ElementRef>;
    roomMessages: string[] = [];
    roomMessage = '';
    isMessageTooLong: boolean = false;
    userRole: UserRoles;
    message: Subscription;

    constructor(private readonly webSocketService: WebSocketService, private router: Router){}

        ngOnDestroy(): void {
        if (this.message) {
            this.message.unsubscribe();
        }
    }

    async ngOnInit() {
        this.message = this.webSocketService.getMessage().subscribe((message: string) => {
            this.roomMessages.push(message);
        });
        await this.joinChat();
    }

    onChatClose(): void {
        this.closeChat.emit();
    }

    async joinChat() {
        this.roomMessages = await this.webSocketService.joinChat();
    }

    scrollToBottomAfterViewChecked(): void {
        // this.messageList.last.nativeElement.scrollIntoView({ behavior: 'smooth' });
    }

    scrollToBottom(): void {
        // this.messageList.changes.subscribe(() => {
        //     this.scrollToBottomAfterViewChecked();
        // });
    }

    ngAfterViewInit(): void {
        this.scrollToBottom();
    }

    sendToRoom(): void {
        const currentDate = new Date();
        if (this.roomMessage.trim() === '') return;
        this.roomMessage = `[${currentDate.getHours()}h:${currentDate.getMinutes()}min You]: ${this.roomMessage}`;
        this.webSocketService.sendMessage(this.roomMessage);
        this.roomMessage = '';
    }

    isSent(message: string): boolean {
        return message.split(' ').includes('You]:');
    }

    isResident(): boolean {
        return this.router.url.includes('resident');
    }
}
