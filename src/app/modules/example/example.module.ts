import { NgModule } from '@angular/core';
import { ExampleComponent } from './example.component';
import { ExampleRoutingModule } from './example-routing.module';

@NgModule({
  declarations: [
    ExampleComponent
  ],
  imports: [
    ExampleRoutingModule
  ]
})
export class ExampleModule {}
