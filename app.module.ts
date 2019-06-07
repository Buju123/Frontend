import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { RegistercomponentComponent } from './registercomponent/registercomponent.component';
import { LogincomponentComponent } from './logincomponent/logincomponent.component';




@NgModule({
  declarations: [
    AppComponent,RegistercomponentComponent,LogincomponentComponent
  ],
  imports: [
    BrowserModule,AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
