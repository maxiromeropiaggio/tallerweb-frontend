import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

/* import data from somewhere */
import { transactions } from 'src/app/data-examples/transactions';
import { Transaction } from 'src/app/interfaces/transaction';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private http: HttpClient) { }

  getTransactions(): Observable<Transaction[]> {
    const transactionsReturn = this.http.get<Transaction[]>('192.168.0.57:3000/transactions');
    return transactionsReturn;
  }

  // Peticiones HTTP
}
