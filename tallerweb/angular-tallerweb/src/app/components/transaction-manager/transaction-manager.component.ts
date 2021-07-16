import { Component, Input, OnInit } from '@angular/core';
import { Transaction } from 'src/app/interfaces/transaction';
import { TransactionService } from 'src/app/services/transaction.service';

@Component({
  selector: 'app-transaction-manager',
  templateUrl: './transaction-manager.component.html',
  styleUrls: ['./transaction-manager.component.css']
})
export class TransactionManagerComponent implements OnInit {

  @Input() searchBox: string='';

  /* Filter attributes */  
  public propertyName: string;
  public reverse: boolean;

  /* Attribute used by create methods */
  public toCreate: boolean;
  @Input() public newTransaction?: Transaction;
  public inputEmail?: string;
  public inputMount?: number;
  public inputSource?: string;

  /* Attribute used by update method */
  public selectedTransaction?: Transaction;
  public newTime?: Date;
  public inputStatus?: string;

  /* Transaction's Array */
  public transactions: Transaction[] = [];
  
  
  constructor(private transactionService: TransactionService) {
    this.reverse = false;
    this.propertyName = "index";
    this.toCreate = false;
  }

  ngOnInit(): void {
    this.getTransactions();
  }

  title = 'Gestor de transacciones';

  sortBy = (propertyName: string) => {
    this.reverse = (this.propertyName === propertyName) ? !this.reverse : false;
    this.propertyName = propertyName;
  };

  onSelect(transaction: Transaction): void {
    this.selectedTransaction = transaction;
    this.newTime = new Date(Date.now());
  }

  async getTransactions() {
    await this.transactionService.getTransactions().subscribe(transactions => {
      this.transactions = transactions || [];
    }, error => {
      this.transactions = [];
      console.error(`getTransactions() failed: ${error.message}`);
    });

  }

  async updateTransaction() {
    await this.transactionService.updateTransaction(this.selectedTransaction as Transaction).subscribe(next => {
      console.log('The transaction was update successfully.');
      this.cancelUpdate();
    }, error => {
      console.error(`updateTransaction() failed: ${error.message}`);
    });
  }

  async deleteTransaction(transaction: Transaction) {
    await this.transactionService.deleteTransaction(transaction).subscribe(next => {
      console.log('The transaction was delete successfully.');
      this.transactions = this.transactions.filter((t) => { return t._id !== transaction._id });
    }, error => {
      console.error(`deleteTransaction() failed: ${error.message}`);
    });
  }

  async createTransaction() {
    await this.transactionService.createTransaction(this.newTransaction as Transaction).subscribe(next => {
      console.log('The transaction was created successfully.');
      (this.newTransaction as Transaction)._id = next._id;
      this.transactions.push(this.newTransaction as Transaction);
      this.cancelCreate();
    }, error => {
      console.error(`createTransaction() failed: ${error.message}`);
    });
  }

  refresh() {
    this.getTransactions();
  }

  onCreate() {
    this.newTransaction = {};
    this.toCreate = true;
    (this.newTransaction as Transaction).date = new Date(Date.now());
    (this.newTransaction as Transaction).status = "IMPAGO"; /* ¿Se queda así? */
    (this.newTransaction as Transaction).index = this.transactions.length + 1;
  }

  create() {
    (this.newTransaction as Transaction).email = this.inputEmail;
    (this.newTransaction as Transaction).mount = this.inputMount;
    (this.newTransaction as Transaction).source = this.inputSource;
    this.createTransaction();
  }

  cleanInputs() {
    this.inputEmail = undefined;
    this.inputMount = undefined;
    this.inputSource = undefined;
    this.inputStatus = undefined;
  }

  cancelCreate() {
    this.toCreate = false;
    this.newTransaction = undefined;
  }

  search(event:any) {
    console.log(event);
    
    /*
    Buscar por los atributos mostrados en pantalla:
    - email - medio de pago - pagado - monto
    */

  }

  cancelUpdate() {
    this.selectedTransaction = undefined;
    this.cleanInputs();
    this.newTime = undefined;
  }

  update() {
    (this.selectedTransaction as Transaction).mount = this.inputMount;
    (this.selectedTransaction as Transaction).date = this.newTime;
    (this.selectedTransaction as Transaction).status = this.inputStatus;
    this.updateTransaction();
  }

  delete(transaction: Transaction) {
    this.deleteTransaction(transaction);
  }

}
