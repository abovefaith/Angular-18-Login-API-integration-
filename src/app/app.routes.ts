import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { authGuard } from './guard/auth.guard';

export const routes: Routes = [
  {
    path:'',
    redirectTo:'login',
    pathMatch:'full'
    },
    {
    path:'login',
    component:LoginComponent
    },
    {
      path:'signup',
      component:SignupComponent
      },
    {
    path:'',
    component:LayoutComponent,
    children:[
    {
    path:'dashboard',
    component:DashboardComponent,
    canActivate:[authGuard]
    }
    ]
    },
];
