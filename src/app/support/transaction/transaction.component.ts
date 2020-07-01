import {Component, OnInit} from '@angular/core';
import {ITransaction} from "../../interface/i-transaction";
import {TransactionService} from "../../service/transaction.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
  transactions: ITransaction[];
  message: string;
  index = 0;

  constructor(private transactionService: TransactionService) {
  }

  ngOnInit() {
    this.getList();
  }

  delete(item) {
    this.transactionService.deleteTransaction(item.id).subscribe(next => {
    }, (error: HttpErrorResponse) => {
      // console.log(error);
      if (error.status === 200) {
        // alert("Xóa thành công!");
        this.getList();
        // console.log('1');
        this.index = 0;
      } else {
        this.message = 'error';
      }
    });
  }

  getList() {
    this.transactionService.getTransactions().subscribe(next => {
      this.transactions = next;
      // console.log(next);
    }, error => {
      this.message = error.error.message;
    });
  }

  save(i) {
    this.index = i;
  }
}
