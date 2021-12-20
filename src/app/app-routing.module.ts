import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarrinhoComponent } from './pages/carrinho/carrinho.component';
import { ComputadoresComponent } from './pages/computadores/computadores.component';
import { ConsolesComponent } from './pages/consoles/consoles.component';
import { ConstrucaoComponent } from './pages/construcao/construcao.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "carrinho", component: CarrinhoComponent },
  { path: "login", component: LoginComponent},
  { path: "consoles", component: ConsolesComponent},
  { path: "computadores", component: ComputadoresComponent},
  { path: "construcao", component: ConstrucaoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
