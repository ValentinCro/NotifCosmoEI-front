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

import { HttpServiceService } from './http-service.service';
import { TranslateLevelService } from './translate-level.service';

import { NotifificationComponent } from './notifification/notifification.component';
import { ProductComponent } from './product/product.component';
import { MyNotificationComponent } from './my-notification/my-notification.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { CreateEffectComponent } from './create-effect/create-effect.component';
import { EffectComponent } from './effect/effect.component';
import { IngredientComponent } from './ingredient/ingredient.component';
import { ObjectNotFoundComponent } from './object-not-found/object-not-found.component';
import { CreateIngredientComponent } from './create-ingredient/create-ingredient.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LayoutComponent,
    RegisterComponent,
    LogingComponent,
    CreateAEComponent,
    SearchComponent,
    NotifificationComponent,
    ProductComponent,
    MyNotificationComponent,
    CreateProductComponent,
    CreateEffectComponent,
    EffectComponent,
    IngredientComponent,
    ObjectNotFoundComponent,
    CreateIngredientComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    HttpServiceService,
    TranslateLevelService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
