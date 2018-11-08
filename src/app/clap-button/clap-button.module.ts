import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClapButtonComponent } from './clap-button/clap-button.component';
import { CounterBubbleComponent } from './counter-bubble/counter-bubble.component';
import { FabComponent } from './fab/fab.component';
import { TotalCounterComponent } from './total-counter/total-counter.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    FabComponent,
    CounterBubbleComponent,
    TotalCounterComponent,
    ClapButtonComponent
  ],
  exports: [
    ClapButtonComponent
  ]
})
export class ClapButtonModule { }
