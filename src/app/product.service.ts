import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Album } from './album';
import { map } from 'rxjs/operators';
import { Product } from './product';

@Injectable()
export class ProductService {
  private _albumUrl = '../assets/album.json';
  private _productsUrl = '../assets/products.json';

  constructor(private _http: Http) { }

  getProducts(): Observable<Product[]> {
    return this._http.get(this._productsUrl).pipe(map(response => <Product[]>response.json()));
  }

  getAlbum(id: number): Observable<Album> {
    return this._http.get(this._albumUrl).pipe(map(response => <Album>response.json())); }
  }
