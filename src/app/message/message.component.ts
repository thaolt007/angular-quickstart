import { Component, OnInit } from '@angular/core';
import {MessageService} from '../message.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  constructor(private messageService: MessageService) { }
  messages: string[];
  ngOnInit() {
    this.getMessages();
  }
  getMessages(): void {
    this.messages = this.messageService.getMessages();
  }
  clearMessages(): void {
    this.messageService.clear();
    this.getMessages();
  }
}
