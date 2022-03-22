import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    //Rota padrão Home quando a rota for vazia
    path:'', component:HomeComponent,
    children: [
      //Rota children padrão em Home para o Login quando a rota for vazia
      {path:'', component:LoginComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
