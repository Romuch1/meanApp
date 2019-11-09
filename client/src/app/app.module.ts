import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//import modules
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from "./core/core.module";

//import components
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
