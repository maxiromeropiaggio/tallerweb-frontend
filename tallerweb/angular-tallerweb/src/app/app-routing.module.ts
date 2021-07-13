import { NgModule } from '@angular/core';
/* import { CommonModule } from '@angular/common'; */
import { RouterModule, Routes } from '@angular/router';

import { NavMainComponent } from './components/nav-main/nav-main.component';
import { PresentationComponent } from './components/presentation/presentation.component';
import { TransactionManagerComponent } from './components/transaction-manager/transaction-manager.component';
import { ContactComponent } from './components/contact/contact.component';

/* Array de rutas */
const routes: Routes = [
  { path: '', component: NavMainComponent },
  { path: 'presentation', component: PresentationComponent },
  { path: 'transactions', component: TransactionManagerComponent },
  { path: 'contact', component: ContactComponent }
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
