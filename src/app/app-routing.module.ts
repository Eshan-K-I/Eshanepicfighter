import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ArchiveComponent } from './archive/archive.component';
import { HomeComponent } from './home/home.component';
import { DonateComponent } from './donate/donate.component';
import { FirstpostComponent } from './firstpost/firstpost.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home', 
    pathMatch: 'full'
},
  { path: 'about', component: AboutComponent },
  { path: 'firstpost', component: FirstpostComponent },
  { path: 'home', component: HomeComponent },
  { path: 'archive', component: ArchiveComponent },
  { path: 'donate', component: DonateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
