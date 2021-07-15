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

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<any> => {

      // TODO: send the error to remote logging infrastructure
      // TODO: better job of transforming error for user consumption
      console.error(`${operation} failed: ${error.message}`); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

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


}
