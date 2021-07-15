import { Component, OnInit } from '@angular/core';
import { Transaction } from 'src/app/interfaces/transaction';
import { TransactionService } from 'src/app/services/transaction.service';

@Component({
  selector: 'app-transaction-manager',
  templateUrl: './transaction-manager.component.html',
  styleUrls: ['./transaction-manager.component.css']
})
export class TransactionManagerComponent implements OnInit {

  public propertyName: string;
  public reverse: boolean;
  public selectedTransaction?: Transaction;

  public transactions: Transaction[] = [];
  public transaction: Transaction;

  constructor(private transactionService: TransactionService) {
    this.reverse = false;
    this.propertyName = "index";
    this.transaction ={};
  }

  ngOnInit(): void {
    this.getTransactions();

  }

  title = 'Gestor de transacciones';
  // ¿Cómo hago para pedir las transacciones al servidor?

  sortBy = (propertyName: string) => {
    this.reverse = (this.propertyName === propertyName) ? !this.reverse : false;
    this.propertyName = propertyName;
  };

  onSelect(transaction: Transaction): void {
    this.selectedTransaction = transaction;
  }

  async getTransactions() {
    await this.transactionService.getTransactions().subscribe(transactions => {
      this.transactions = transactions || [];
      this.transaction = transactions[0]
    }, error => {
      this.transactions = [];
      console.error(`getTransactions() failed: ${error.message}`);
    });

  }

  async updateTransaction() {
    await this.transactionService.updateTransaction(this.selectedTransaction as Transaction).subscribe(next => {
      console.log('The transaction was update successfully.');
      this.selectedTransaction = undefined;
    }, error => {
      console.error(`updateTransaction() failed: ${error.message}`);
    });
  }

  async deleteTransaction() {
    await this.transactionService.deleteTransaction(this.selectedTransaction as Transaction).subscribe(next => {
      console.log('The transaction was delete successfully.');
      this.transactions = this.transactions.filter((t) => { return t._id !== this.selectedTransaction?._id });
      this.selectedTransaction = undefined;
    }, error => {
      console.error(`deleteTransaction() failed: ${error.message}`);
    });
  }

  refresh() {
    /*
    Pedir al servidor nuevamente todas las transacciones.
    */
    this.getTransactions();
  }

  create() {

    this.transactions.push(this.transaction)
    /*
    Crear una transaccion que luega será validada y enviada al servidor.
    */

  }

  search() {
    /*
    Buscar por los atributos mostrados en pantalla:
    - email - medio de pago - pagado - monto
    */

  }

  update() {
    /*
    Editar una transacción sin necesidad de autenticar.
    */
    if (this.selectedTransaction !== undefined)
      this.updateTransaction();

    // Dejar mostrando un cargando...
    // Para luego cuando se termine, aparezca un TICK al lado de la transacción o un mensaje spam?


    // ¿Cómo evitar enviar 999823657234 PUT por segundo?
    // Es decir, hay que ver si hubo algún campo modificado antes de hacer la solicitud

  }

  delete() {
    /*
    Borrar las transacciones por id.
    */
    if (this.selectedTransaction !== undefined)
      this.deleteTransaction();
  }

}
