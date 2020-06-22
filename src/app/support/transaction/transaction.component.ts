import {Component, OnInit} from '@angular/core';
import {ITransaction} from "../../interface/i-transaction";
import {TransactionService} from "../../service/transaction.service";
import {HttpErrorResponse} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
  transactions: ITransaction[];
  message: string;

  constructor(private transactionService: TransactionService,
              private router: Router) {
  }

  ngOnInit() {
    this.getList();
  }

  delete(item) {
    if (confirm("Xóa " + item.pointName + "?")) {
      this.transactionService.deleteTransaction(item.id).subscribe(next => {
      }, (error: HttpErrorResponse) => {
        console.log(error);
        if (error.status === 200) {
          alert("Xóa thành công!");
          this.getList();
        } else {
          this.message = 'error';
        }
      });
    } else {
    }
  }

  getList() {
    this.transactionService.getTransaction().subscribe(next => {
      this.transactions = next;
      console.log(next);
    }, error => {
      this.message = error.error.message;
    });
  }
}
