import { NgModule } from '@angular/core';
/* import { CommonModule } from '@angular/common'; */
import { RouterModule, Routes } from '@angular/router';

/* import { AppComponent } from './app.component'; */
import { NavMainComponent } from './components/nav-main/nav-main.component';


/* Array de rutas */
const routes: Routes = [
  { path: '', component: NavMainComponent }
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
