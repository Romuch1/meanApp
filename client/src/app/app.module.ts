import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//import modules
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from "./core/core.module";
import { AuthModule } from "./auth/auth.module";
import { DashboardModule } from "./dashboard/dashboard.module";
import { ProfileModule } from "./profile/profile.module";

//import components
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    AuthModule,
    DashboardModule,
    ProfileModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
