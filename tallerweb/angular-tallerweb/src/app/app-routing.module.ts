import { NgModule } from '@angular/core';
/* import { CommonModule } from '@angular/common'; */
import { RouterModule, Routes } from '@angular/router';

/* import { NavMainComponent } from './components/nav-main/nav-main.component';
import { PresentationComponent } from './components/presentation/presentation.component';
import { TransactionManagerComponent } from './components/transaction-manager/transaction-manager.component';
import { ContactComponent } from './components/contact/contact.component'; */
import { AppComponent } from './app.component';
import { NavMainComponent } from './components/nav-main/nav-main.component';
import { TransactionCreatorComponent } from './components/transaction-creator/transaction-creator.component';

/* Array de rutas */
const routes: Routes = [
  { path: '', component: NavMainComponent },
  { path: 'createTransaction', component: TransactionCreatorComponent }
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
