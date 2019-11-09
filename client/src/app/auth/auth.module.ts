import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from "./auth-routing.module";
import { AuthComponent } from './auth/auth.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';

@NgModule({
  declarations: [
    AuthComponent,
    SignUpComponent,
    SignInComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
