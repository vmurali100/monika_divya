import { NgModule } from '@angular/core';
import { MyLibMkComponent } from './my-lib-mk.component';
import { CounterComponent } from './counter/counter.component';



@NgModule({
  declarations: [MyLibMkComponent, CounterComponent],
  imports: [
  ],
  exports: [MyLibMkComponent,CounterComponent]
})
export class MyLibMkModule { }
