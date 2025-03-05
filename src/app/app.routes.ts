import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PnfComponent } from './pnf/pnf.component';

export const routes: Routes = [
    {
        path:'', component:HomeComponent ,title:'Home Page'
    },
    {
        path:'login',component:LoginComponent,title:'Login'
    },
    {
        path:'register',component:RegisterComponent,title:'Register'
    },
    {
        path:'**' , component:PnfComponent,title:'Page Not Found'
    }
];
