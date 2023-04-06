import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subject, take, takeUntil } from 'rxjs';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements  OnInit, OnDestroy {
  @Input() title = 'Error'

  message = '';
  hidden = true;
  desrtoy$$ = new Subject();

  constructor(
    private messageService: MessageService,
  ) {

  }
  ngOnDestroy(): void {
    this.desrtoy$$.next(null);
    this.desrtoy$$.complete();
  }
  ngOnInit(): void {
    this.messageService.message$.pipe(
      takeUntil(this.desrtoy$$)
    )
      .subscribe(text => {
        this.hidden = false;
        this.message = text;
      })
  }
}
