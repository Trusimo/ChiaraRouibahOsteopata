import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { OsteopatiaComponent } from './pages/osteopatia/osteopatia.component';
import { FaqComponent } from './pages/faq/faq.component';
import { ContattiComponent } from './pages/contatti/contatti.component';
import { RecensioniComponent } from './pages/recensioni/recensioni.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    HomepageComponent,
    OsteopatiaComponent,
    FaqComponent,
    RecensioniComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule  ],
  providers: []
})
export class AppModule { }
