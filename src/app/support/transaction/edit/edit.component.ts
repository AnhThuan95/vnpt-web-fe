import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {TransactionService} from "../../../service/transaction.service";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpErrorResponse} from "@angular/common/http";
import {ITransaction} from "../../../interface/i-transaction";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  transaction: ITransaction;
  data: FormGroup;

  message: string;

  constructor(private fb: FormBuilder, private transactionService: TransactionService,
              private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.data = this.fb.group({
      id: '',
      pointName: '',
      address: '',
      phone: '',
      channel: 'transaction'
    });

    const id = +this.route.snapshot.paramMap.get('id');
    this.transactionService.getTransaction(id).subscribe(next => {
        this.transaction = next;
        this.data.patchValue(this.transaction);
      },
      error => {
        console.log(error);
        this.transaction = null;
      }
    );
  }

  submit() {
    this.transactionService.updateTransaction(this.data.value).subscribe(next => {
        console.log(next);
        alert('Updated transaction!');
      }, (error: HttpErrorResponse) => {
        console.log(error);
        if (error.status === 200) {
          alert(error.error.text);
          this.router.navigate(['support/transaction']).then(e => {
            if (e) {
              console.log('Navigation is successful!');
            } else {
              console.log('Navigation has failed!');
            }
          });
        } else {
          alert('Có lỗi xảy ra, sửa không thành công!');
        }
      }
    );
  }
}
