import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ProfileComponent } from './pages/profile/profile.component';

const routes: Routes = [
  {
    path: '' ,
    component: HomeComponent,
    title: 'Home' ,
  },
  {
    path: 'login' ,
    component: LoginComponent,

  },
  {
    path: 'singnup' ,
    component:SignupComponent,

  },
  {
    path: 'profile' ,
    component: ProfileComponent,

  },
  {
    path: '**' ,
    component: HomeComponent,
    redirectTo: 'Home',

  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
