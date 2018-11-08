import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';

import { merge, Observable } from 'rxjs';
import { debounceTime, mapTo } from 'rxjs/operators';

@Component({
  selector: 'app-clap-button',
  templateUrl: './clap-button.component.html',
  styleUrls: ['./clap-button.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClapButtonComponent implements OnInit {

  @Input()
  totalCounter: number;

  @Input()
  userCounter: number;

  @Output()
  userCounterChange = new EventEmitter<void>();

  showBubble$: Observable<boolean>;

  ngOnInit() {
    const change$ = this.userCounterChange.asObservable();

    const showBubble$ = change$.pipe(mapTo(true));
    const hideBubble$ = change$.pipe(
      debounceTime(400),
      mapTo(false)
    );

    this.showBubble$ = merge(showBubble$, hideBubble$);
  }

}
