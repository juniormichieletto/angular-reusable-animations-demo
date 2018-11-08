import { transition, trigger, useAnimation } from '@angular/animations';
import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input
} from '@angular/core';

import { pulseAnimation } from '../animations';

@Component({
  selector: 'app-fab',
  templateUrl: './fab.component.html',
  styleUrls: ['./fab.component.css'],
  animations: [
    trigger('counterChange', [
      transition(
        ':increment',
        useAnimation(pulseAnimation, {
          params: {
            timings: '400ms cubic-bezier(.11,.99,.83,.43)',
            scale: 1.05
          }
        })
      )
    ])
  ],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class FabComponent {

  @HostBinding('@counterChange')
  @Input()
  counter: number;

}
