import { Component, OnInit } from '@angular/core';
import { MessageService } from './services/message.service';
import { TodosService } from './services/todos.service';
import { Todo } from './types/todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {}
