import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transaction-manager',
  templateUrl: './transaction-manager.component.html',
  styleUrls: ['./transaction-manager.component.css']
})
export class TransactionManagerComponent implements OnInit {
  static title: any;

  constructor() { }

  ngOnInit(): void {
  }
  title = 'Gestor de transacciones';

}
