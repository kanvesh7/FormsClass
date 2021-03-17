import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { ReactiveFormsModule} from '@angular/forms';
import { FormsModule} from '@angular/forms';
import { TemplateFormsComponent } from './template-forms/template-forms.component';
@NgModule({
  declarations: [
    AppComponent,
    ReactiveFormsComponent,
    TemplateFormsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
