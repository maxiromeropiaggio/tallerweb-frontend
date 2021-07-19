import { taggedTemplate } from '@angular/compiler/src/output/output_ast';
import { Component, Input, OnInit } from '@angular/core';
import { Transaction } from 'src/app/interfaces/transaction';
import { TransactionService } from 'src/app/services/transaction.service';

@Component({
  selector: 'app-transaction-manager',
  templateUrl: './transaction-manager.component.html',
  styleUrls: ['./transaction-manager.component.css']
})
export class TransactionManagerComponent implements OnInit {

  @Input() searchBox: string = '';

  /* Filter attributes */
  public propertyName: string;
  public reverse: boolean;

  /* Search attribute */
  public filterTerm: string;

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

  /*Attribute to delete */
  public toDelete: boolean;

  /* Transaction's Array */
  public transactions: Transaction[] = [];


  constructor(private transactionService: TransactionService) {
    this.reverse = false;
    this.propertyName = "index";
    this.toCreate = false;
    this.filterTerm = "";
    this.toDelete = false;
  }

  ngOnInit(): void {
    this.getTransactions();
  }

  title = 'Gestor de transacciones';

  /**
   * Establece el campo por el cual se ordena la tabla e intercambia en ascendente o descendente.
   * @param propertyName Campo de ordenamiento.
   */
  sortBy = (propertyName: string) => {
    this.reverse = (this.propertyName === propertyName) ? !this.reverse : false;
    this.propertyName = propertyName;
  };

  /**
   * Selecciona la transacción N en el listado para solamente actuar en esa fila.
   * @param transaction 
   */
  onSelect(transaction: Transaction): void {
    this.selectedTransaction = transaction;
  }

  /**
   * Obtiene las todas las transacciones mediante un servicio, luego las enumera.
   */
  async getTransactions() {
    await this.transactionService.getTransactions().subscribe(transactions => {
      this.transactions = transactions || [];
      this.updateIndex();
    }, error => {
      this.transactions = [];
      console.error(`getTransactions() failed: ${error.message}`);
    });

  }

  /**
   * Realiza una actualización de la transacción seleccionada mediante un servicio. Luego limpia las variables auxiliares.
   */
  async updateTransaction() {
    await this.transactionService.updateTransaction(this.selectedTransaction as Transaction).subscribe(next => {
      console.log('The transaction was update successfully.');
      this.cancelUpdate();
    }, error => {
      console.error(`updateTransaction() failed: ${error.message}`);
    });
  }

/**
 * Actualiza el campo index de cada transacción, cada vez que se recarga o se elimina una del servidor.
 */
  private updateIndex() {
    let i: number = 1;
    for (const t of this.transactions) {
      t.index = i;
      i++;
    }
  }

 /**
   * Remueve una transacción mediante un servicio. Luego actualiza los index.
   */
  async deleteTransaction(transaction: Transaction) {
    await this.transactionService.deleteTransaction(transaction).subscribe(next => {
      console.log('The transaction was delete successfully.');
      this.transactions = this.transactions.filter((t) => { return t._id !== transaction._id });
      this.updateIndex();
    }, error => {
      console.error(`deleteTransaction() failed: ${error.message}`);
    });
  }

   /**
   * Crea una transacción seleccionada mediante un servicio. La agrega al array para actualizar la vista y Luego limpia las variables auxiliares.
   */
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

  /**
   * Refresca la vista de la tabla, llamando a la función asincrónica.
   */
  refresh() {
    this.getTransactions();
  }

  /**
   * Establece el modo "en proceso de creación de una transacción", para inicializar las variables y llevarlas a la vista.
   */
  onCreate() {
    this.newTransaction = {};
    this.toCreate = true;
    (this.newTransaction as Transaction).date = new Date(Date.now());
    (this.newTransaction as Transaction).status = "IMPAGO";
    (this.newTransaction as Transaction).index = this.transactions.length + 1;
  }

  /**
   * Decide si el argumento es válido, no debe ser vacío y undefined.
   * @param entry Es el campo por el cual se debe corroborar la condición.
   * @returns V/F
   */
  private validInput(entry: any): boolean {
    return entry && Object.entries(JSON.stringify(entry)).length > 0;
  }

  /**
   * Luego de click en enviar: comprueba la validez de los inputs, los asigna a la nueva transacción y llama a la función asincrónica para crearla.
   */
  create() {
    if (this.validInput(this.inputEmail) && this.validInput(this.inputMount) && this.validInput(this.inputSource)) {
      (this.newTransaction as Transaction).email = this.inputEmail;
      (this.newTransaction as Transaction).mount = this.inputMount;
      (this.newTransaction as Transaction).source = this.inputSource;
      this.createTransaction();
    }
  }

  /**
   * Limpia los inputs disponibles tanto para crear como para actualizar.
   */
  cleanInputs() {
    this.inputEmail = undefined;
    this.inputMount = undefined;
    this.inputSource = undefined;
    this.inputStatus = undefined;
  }

  /**
   * Cancela el proceso de creación luego del click en cancelar.
   */
  cancelCreate() {
    this.toCreate = false;
    this.newTransaction = undefined;
    this.cleanInputs();
  }


  /**
   * Cancela el proceso de actualización luego del click en cancelar.
   */
  cancelUpdate() {
    this.selectedTransaction = undefined;
    this.newTime = undefined;
    this.cleanInputs();
  }

  /**
   * Establece el modo en actualizar, seteando el target de transacción y actualizando los inputs para muestreo.
   * @param transaction Transacción a actualizar.
   */
  onUpdate(transaction: Transaction) {
    this.onSelect(transaction);
    this.newTime = new Date(Date.now());
    this.inputMount = this.selectedTransaction?.mount;
    this.inputSource = this.selectedTransaction?.source;
    this.inputStatus = this.selectedTransaction?.status;
  }

  /**
   * Actualiza con la llamada asincrónica, antes comprobando si los inputs son válidos.
   */
  update() {
    if (this.validInput(this.inputMount) && this.validInput(this.inputStatus) && this.validInput(this.inputSource)) {
      (this.selectedTransaction as Transaction).mount = this.inputMount;
      (this.selectedTransaction as Transaction).source = this.inputSource;
      (this.selectedTransaction as Transaction).date = this.newTime;
      (this.selectedTransaction as Transaction).status = this.inputStatus;
      this.updateTransaction();
    }
  }

  /**
   * Establece si la acción es querer borrar o no.
   * @param b
   */
  toConfirmDelete(b: boolean) {
    this.toDelete = b;
  }

  /**
   * Establece el modo que espera a confirmar o retroceder la acción de borrar por parte del usuario.
   * @param transaction 
   */
  onDelete(transaction: Transaction) {
    this.toConfirmDelete(true);
    this.onSelect(transaction);
  }

  /**
   * Elimina la transaction enviada por parámetro mediante un llamado asincrónico.
   * @param transaction Transacción a eliminar.
   */
  delete(transaction: Transaction) {
    this.deleteTransaction(transaction);
    this.toConfirmDelete(false);
  }

}
