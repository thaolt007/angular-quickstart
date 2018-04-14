import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {HeroesComponent} from './heroes/heroes.component';
import {AppComponent} from './app.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {HeroDetailComponent} from './hero-detail/hero-detail.component';

const routes = [
  {'path': '', 'redirectTo': 'dashboard', 'pathMatch': 'full'},
  {'path': 'dashboard', 'component': DashboardComponent},
  {'path': 'heroes', 'component': HeroesComponent},
  {'path': 'detail/:id', 'component': HeroDetailComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
