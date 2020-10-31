import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { OurservicesComponent } from './components/ourservices/ourservices.component';
import { ContactusComponent } from './components/contactus/contactus.component';

const routes: Routes = [
  { path : 'main' , component : MainComponent },
  { path : 'aboutus' , component : AboutusComponent },
  { path : 'ourservices' , component : OurservicesComponent },
  { path : 'contactus' , component : ContactusComponent },
  { path : '' , redirectTo : '/main' , pathMatch: 'full' },
  { path : '**' , component : MainComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
