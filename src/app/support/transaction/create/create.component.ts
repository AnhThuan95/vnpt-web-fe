import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {HttpErrorResponse} from "@angular/common/http";
import {TransactionService} from "../../../service/transaction.service";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  data: FormGroup;

  message: string;

  constructor(private fb: FormBuilder, private transactionService: TransactionService,
              private router: Router) {
  }

  ngOnInit() {
    this.data = this.fb.group({
      pointName: '',
      address: '',
      phone: '',
      channel: 'transaction'
    });
  }

  submit() {
    this.transactionService.createTransaction(this.data.value).subscribe(next => {
        console.log(next);
        alert('Created transaction!');
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
          alert('Có lỗi xảy ra, tạo không thành công!');
        }
      }
    );
  }
}
