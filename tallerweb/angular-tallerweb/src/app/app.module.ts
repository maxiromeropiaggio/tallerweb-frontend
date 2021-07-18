import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { AppComponent } from './app.component';
import { NavMainComponent } from './components/nav-main/nav-main.component';
import { PresentationComponent } from './components/presentation/presentation.component';
import { TransactionManagerComponent } from './components/transaction-manager/transaction-manager.component';
import { ContactComponent } from './components/contact/contact.component';

import { SortPipe } from './pipes/sort.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavMainComponent,
    PresentationComponent,
    TransactionManagerComponent,
    ContactComponent,
    SortPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    Ng2SearchPipeModule
  ],
  providers: [  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
