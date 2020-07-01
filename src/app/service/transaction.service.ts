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

  getTransactions(): Observable<ITransaction[]> {
    return this.http.get<ITransaction[]>(`${this.url.link}/support/channel/transaction`);
  }

  getTransaction(id: number): Observable<ITransaction> {
    return this.http.get<ITransaction>(`${this.url.link}/support/get/${id}`);
  }

  deleteTransaction(id: number) {
    return this.http.delete(`${this.url.link}/support/delete/${id}`);
  }

  createTransaction(transaction: Partial<ITransaction>): Observable<ITransaction> {
    return this.http.post<ITransaction>(`${this.url.link}/support/create`, transaction);
  }

  updateTransaction(transaction: Partial<ITransaction>): Observable<ITransaction> {
    return this.http.put<ITransaction>(`${this.url.link}/support/edit/${transaction.id}`, transaction);
  }
}
