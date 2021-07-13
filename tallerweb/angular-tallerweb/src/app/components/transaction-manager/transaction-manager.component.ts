import { Component, OnInit } from '@angular/core';

import { transactions } from '../../interfaces/transaction';

@Component({
  selector: 'app-transaction-manager',
  templateUrl: './transaction-manager.component.html',
  styleUrls: ['./transaction-manager.component.css']
})
export class TransactionManagerComponent implements OnInit {

  private propertyName: string;
  private reverse: boolean;

  constructor() {
    this.reverse = false;
    this.propertyName = "";
  }

  ngOnInit(): void {
  }

  title = 'Gestor de transacciones';
  transactions = transactions;
  // ¿Cómo hago para pedir las transacciones al servidor?

  sortBy = (propertyName: string) => {
    this.reverse = (this.propertyName === propertyName) ? !this.reverse : false;
    this.propertyName = propertyName;
  };

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
