import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import io from '../socket/socket';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  //private url: string = 'http://localhost:3000/'
  public url: string = 'https://pdwstoreapi.herokuapp.com/'
  public socket: any = io

  constructor(private http: HttpClient) { }

  testConnection(): Observable<Response> {
    return this.http.get<Response>(this.url);
  }

  getProducts(): Observable<any> {
    return this.http.get<any>(this.url + 'products');
  }

  newProduct(name: string, price: number): Observable<any> {
    return this.http.post<any>(this.url + 'product', {
      name: name,
      price: price
    });
  }

  deleteProduct(id: number): Observable<any> {
    return this.http.post<any>(this.url + 'delete', {
      id: id
    });
  }

  addProduct(): Observable<any> {
    return this.http.get<any>(this.url + 'add');
  }

}
