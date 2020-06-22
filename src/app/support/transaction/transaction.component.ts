import { Component, OnInit } from '@angular/core';
import {ITransaction} from "../../interface/i-transaction";
import {TransactionService} from "../../service/transaction.service";

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
  transactions: ITransaction[];
  message: string;

  constructor(private transactionService: TransactionService) { }

  ngOnInit() {
    this.transactionService.getTransaction().subscribe(next => {
      this.transactions = next;
      console.log(next);
    }, error => {
      this.message = error.error.message;
    });
  }

}
