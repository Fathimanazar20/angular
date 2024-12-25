import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { StatesComponent } from './pages/states/states.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { SingleStateComponent } from './pages/single-state/single-state.component';
import { single } from 'rxjs';

export const routes: Routes = [
    {path:'home',component:HomeComponent},
    {path:'states',component:StatesComponent},
    {path:'states/:id',component:SingleStateComponent},
    {path:'contact',component:ContactComponent},
   {path:'**',component:NotfoundComponent},
   {
    path:'single-state',component:SingleStateComponent
   },

];
