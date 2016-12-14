import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { RegisterComponent } from './register/register.component';
import { LogingComponent } from './loging/loging.component';
import { CreateAEComponent } from './create-ae/create-ae.component';
import { SearchComponent } from './search/search.component';

import { HttpServiceService } from './http-service.service'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LayoutComponent,
    RegisterComponent,
    LogingComponent,
    CreateAEComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    HttpServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
