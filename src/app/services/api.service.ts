import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import io from '../socket/socket';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private url: string = 'http://localhost:3000/'
  public socket: any = io

  constructor(private http: HttpClient) { }

  testConnection(): Observable<Response> {
    return this.http.get<Response>(this.url);
  }

}
