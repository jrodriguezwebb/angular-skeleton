import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [ LoadingSpinnerComponent, CommonModule ],
  declarations: [ LoadingSpinnerComponent ],
  providers: [  ]
})
export class SharedModule { }
