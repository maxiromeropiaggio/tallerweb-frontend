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

  constructor(private transactionService: TransactionService) {
    this.reverse = false;
    this.propertyName = "id";
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

  getTransactions(): void {
    this.transactionService.getTransactions().subscribe(transactions => this.transactions = transactions);
  }

  refresh() {
    /*
    Pedir al servidor nuevamente todas las transacciones.
    */
    window.alert('refresh works! :D');
  }

  search() {
    /*
    Buscar por los atributos mostrados en pantalla:
    - email - medio de pago - pagado - monto
    */

  }

  create() {
    /*
    Crear una transaccion que luega será validada y enviada al servidor.
    */

  }

  update() {
    /*
    Editar una transacción sin necesidad de autenticar.
    */

  }

  delete() {
    /*
    Borrar las transacciones por id?
    */

  }




}
