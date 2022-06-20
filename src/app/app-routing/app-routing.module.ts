import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from '../componentes/header/header.component';
import { HomeComponent } from '../componentes/home/home.component';
import { IniciarSesionComponent } from '../componentes/iniciar-sesion/iniciar-sesion.component';
import { PortfolioComponent } from '../componentes/portfolio/portfolio.component';
import { GuardGuard } from '../servicios/guard.guard';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login',component:IniciarSesionComponent}
  /*{path:'portfolio',component:PortfolioComponent, canActivate:[GuardGuard]},
  {path:'iniciar-sesion',component:IniciarSesionComponent},
  {path:'',redirectTo:'iniciar-sesion',pathMatch:'full'},
  {path:'header', component:HeaderComponent}*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
