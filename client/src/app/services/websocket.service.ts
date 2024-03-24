import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Socket, io } from 'socket.io-client';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root',
})
export class WebSocketService {
    private socket: Socket;
    private chatSubject: Subject<string> = new Subject<string>();

    constructor() {
        this.connect();
    }

    get id(): string {
        return this.socket.id;
    }

    sendMessage(message: string): void {
        this.socket.emit('message:send', message);
    }

    getMessage(): Observable<string> {
        return this.chatSubject.asObservable();
    }

    async joinChat(): Promise<string[]> {
        return new Promise((resolve) => {
            this.socket.emit('message:join', (messages: string[]) => {
                resolve(messages);
            });
        });
    }

    private createSocket(): Socket {
        return io(environment.wsUrl, { transports: ['websocket'] });
    }

    private connect() {
        this.socket = this.createSocket();
        this.listenForChat();
    }

    private listenForChat() {
        this.socket.on('message:receive', (message: string) => {
            this.chatSubject.next(message);
        });
    }
}
