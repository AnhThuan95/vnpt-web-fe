import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LinkApiService {
  public link = 'http://localhost:8080/api';

  constructor() { }
}
