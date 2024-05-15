import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { OsteopatiaComponent } from './pages/osteopatia/osteopatia.component';
import { FaqComponent } from './pages/faq/faq.component';
import { ContattiComponent } from './pages/contatti/contatti.component';
import { RecensioniComponent } from './pages/recensioni/recensioni.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    OsteopatiaComponent,
    FaqComponent,
    ContattiComponent,
    RecensioniComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
