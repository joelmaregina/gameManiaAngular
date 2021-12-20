import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarrinhoComponent } from './pages/carrinho/carrinho.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { HeaderComponent } from './pages/header/header.component';
import { FooterComponent } from './pages/footer/footer.component';
import { ComputadoresComponent } from './pages/computadores/computadores.component';
import { ConsolesComponent } from './pages/consoles/consoles.component';
import { ConstrucaoComponent } from './pages/construcao/construcao.component';

@NgModule({
  declarations: [
    AppComponent,
    CarrinhoComponent,
    HomeComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    ComputadoresComponent,
    ConsolesComponent,
    ConstrucaoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    //FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
