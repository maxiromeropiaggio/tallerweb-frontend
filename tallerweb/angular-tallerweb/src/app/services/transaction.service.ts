import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

/* import data from somewhere */
import { Transaction } from 'src/app/interfaces/transaction';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  private transactionURL = environment.apiURL + '/transactions';
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  /** GET: get all transactions on the server */
  getTransactions(): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(this.transactionURL);
  }

  /** PUT: update the transaction details on the server */
  updateTransaction(transaction: Transaction): Observable<any> {
    const url = `${this.transactionURL}/${transaction._id}`;
    return this.http.put(url, transaction ,this.httpOptions);
  }

  /** DELETE: delete the transaction on the server */
  deleteTransaction(transaction: Transaction): Observable<any> {
    const url = `${this.transactionURL}/${transaction._id}`;
    return this.http.delete(url, this.httpOptions);
  }

  /** POST: create a new transaction and save it on the server */
  createTransaction(transaction: Transaction): Observable<any> {
    return this.http.post(this.transactionURL, transaction, this.httpOptions);
  }

}
