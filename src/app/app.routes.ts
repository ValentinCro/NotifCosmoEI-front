import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LogingComponent } from './loging/loging.component';
import { CreateAEComponent } from './create-ae/create-ae.component';
import { SearchComponent } from './search/search.component';
import { NotifificationComponent } from './notifification/notifification.component';
import { ProductComponent } from './product/product.component';
import { EffectComponent } from './effect/effect.component';
import { IngredientComponent } from './ingredient/ingredient.component';
import { ObjectNotFoundComponent } from './object-not-found/object-not-found.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { CreateEffectComponent } from './create-effect/create-effect.component';
import { CreateIngredientComponent } from './create-ingredient/create-ingredient.component';

export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'newProduct', component: CreateProductComponent },
  { path: 'newProduct/:productId', component: CreateProductComponent },
  { path: 'newEffect', component: CreateEffectComponent },
  { path: 'newEffect/:effectId', component: CreateEffectComponent },
  { path: 'newAE', component: CreateAEComponent },
  { path: 'newAE/:notifId', component: CreateAEComponent },
  { path: 'newIngredient', component: CreateIngredientComponent },
  { path: 'newIngredient/:notifId', component: CreateIngredientComponent },
  { path: 'search', component: SearchComponent },
  { path: 'log', component: LogingComponent },
  { path: 'not-found/:objectId', component: ObjectNotFoundComponent },
  { path: 'notification/:notifId', component: NotifificationComponent },
  { path :'product/:productId', component: ProductComponent},
  { path :'effect/:effectId', component: EffectComponent},
  { path :'ingredient/:ingredientId', component: IngredientComponent}
];
