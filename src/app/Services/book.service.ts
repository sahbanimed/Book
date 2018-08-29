import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from '../Models/AdBook';
import { DataJSON } from '../assets/data/DataSetType';
import { throwError, Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private _url="https://www.googleapis.com/books/v1/volumes?q=toto";

  constructor(public http: HttpClient) { }

  getAllBooks(){
    return this.http.get<DataJSON>(this._url).pipe();
  }
}
