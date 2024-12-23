import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContattiComponent } from './pages/contatti/contatti.component';
import { FaqComponent } from './pages/faq/faq.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { OsteopatiaComponent } from './pages/osteopatia/osteopatia.component';

const routes: Routes = [
  { path: 'homepage', component: HomepageComponent },
  { path: 'osteopatia', component: OsteopatiaComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'contatti', component: ContattiComponent },
  { path: '', redirectTo: 'homepage', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }