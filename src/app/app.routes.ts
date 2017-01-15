import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LogingComponent } from './loging/loging.component';
import { CreateAEComponent } from './create-ae/create-ae.component';
import { SearchComponent } from './search/search.component';
import { NotifificationComponent } from './notifification/notifification.component';
import { ProductComponent } from './product/product.component';

export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'newAE', component: CreateAEComponent },
  { path: 'newAE/:notifId', component: CreateAEComponent },
  { path: 'search', component: SearchComponent },
  { path: 'log', component: LogingComponent },
  { path: 'notification/:notifId', component: NotifificationComponent },
  { path :'product/:productId', component: ProductComponent}
];
