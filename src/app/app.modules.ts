import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormGroup,FormControl, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FormComponent } from './comp/form.component';
import { IsPrimaryDirective } from './is-primary.directive';
import { NombreToTestComponent } from './comp/nombre-to-test.component';

@NgModule({
  declarations: [
    AppComponent,
    IsPrimaryDirective,
    FormComponent,
    NombreToTestComponent
  ],
  imports: [
    BrowserModule,ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
