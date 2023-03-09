import { GuardGuard } from './guard.guard';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { InicioComponent } from './inicio/inicio.component';
import { RouterModule, Routes } from '@angular/router';
import { RestritoComponent } from './restrito/restrito.component';

const routes: Routes = [

  {path:'inicio', component: InicioComponent},
  {path:'login', component: LoginComponent},
  {path: 'restrito',component: RestritoComponent, canActivate: [GuardGuard]},
  {path:'', redirectTo: '/inicio', pathMatch:'full'}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
