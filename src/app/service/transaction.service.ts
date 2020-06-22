import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {LinkApiService} from "./link-api.serivce";
import {Observable} from "rxjs";
import {ITransaction} from "../interface/i-transaction";

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private http: HttpClient,
              private url: LinkApiService) {
  }

  getTransaction(): Observable<ITransaction[]> {
    return this.http.get<ITransaction[]>(`${this.url.link}/support/channel/transaction`);
  }

  deleteTransaction(id: number) {
    return this.http.delete(`${this.url.link}/support/delete/${id}`);
  }
}
