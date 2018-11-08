import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-total-counter',
  templateUrl: './total-counter.component.html',
  styleUrls: ['./total-counter.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TotalCounterComponent {

  @Input()
  counter: string;

}
