import {
  Component,
  HostBinding,
  Input,
  ChangeDetectionStrategy
} from '@angular/core';
import {
  trigger,
  transition,
  useAnimation
} from '@angular/animations';

import {
  pulseAnimation,
  slideInAnimation,
  slideOutAnimation
} from '../animations';

@Component({
  selector: 'app-counter-bubble',
  templateUrl: './counter-bubble.component.html',
  styleUrls: ['./counter-bubble.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('visibilityChange', [
      transition(':enter', [
        trigger('visibilityChange', [
          transition(':enter', [
            useAnimation(slideInAnimation, {
              params: { from: '20%', timings: '200ms ease-in' }
            })
          ]),
          transition(':leave', [
            useAnimation(slideOutAnimation, {
              params: { to: '-200%', timings: '200ms ease-in' }
            })
          ])
        ]),
        trigger('counterChange', [
          transition(
            ':increment',
            useAnimation(pulseAnimation, {
              params: {
                timings: '200ms',
                scale: 1.2
              }
            })
          )
        ])
      ])
    ])
  ]
})
export class CounterBubbleComponent {

  @HostBinding('@counterChange')
  @Input()
  counter: number;

  @HostBinding('@visibilityChange')
  animation = true;

}
