import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TransactionManagerComponent } from './components/transaction-manager/transaction-manager.component';

@NgModule({
  declarations: [
    AppComponent,
    TransactionManagerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
