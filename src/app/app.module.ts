import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { HomeComponent } from './views/home/home.component';
import { TenisComponent } from './views/tenis/tenis.component';
import { CamisetasComponent } from './views/camisetas/camisetas.component';
import { BonesComponent } from './views/bones/bones.component';
import { JaquetaMoletonsComponent } from './views/jaqueta-moletons/jaqueta-moletons.component';
import { JordanComponent } from './views/jordan/jordan.component';
import { BreadcrumbComponent } from './components/template/breadcrumb/breadcrumb.component';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { BolaComponent } from './views/bola/bola.component';
import { ShortsComponent } from './views/shorts/shorts.component';
import { CamisetasTimeComponent } from './views/camisetas-time/camisetas-time.component';
import { CortaVentoComponent } from './views/corta-vento/corta-vento.component';
import { BolsasMochilaComponent } from './views/bolsas-mochila/bolsas-mochila.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    TenisComponent,
    CamisetasComponent,
    BonesComponent,
    JaquetaMoletonsComponent,
    JordanComponent,
    BreadcrumbComponent,
    BolaComponent,
    ShortsComponent,
    CamisetasTimeComponent,
    CortaVentoComponent,
    BolsasMochilaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
