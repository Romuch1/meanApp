import {NgModule, Optional, SkipSelf} from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

//import services
import { AuthService } from "./services/auth.service";

//import interceptors
import { AuthInterceptor } from "./interceptors/auth.interceptor";
import { ErrorHandlerInterceptor } from "./interceptors/error-handler.interceptor";

//import components
import { HeaderComponent } from "./layouts/header/header.component";
import { FooterComponent } from "./layouts/footer/footer.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorHandlerInterceptor,
      multi: true
    }
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    NotFoundComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    NotFoundComponent
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(`CoreModule has already been loaded. Import Core modules in the AppModule only.`);
    }
  }
}
