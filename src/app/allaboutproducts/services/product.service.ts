import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productsubject = new BehaviorSubject(null);
  productsubject$ = this.productsubject.asObservable();
  constructor(private http: HttpClient) { }

getProductsFromServer(data)
{
  this.http.post("http://localhost:3000/addProduct", data).subscribe(res =>{

  console.log(res);

  })
}


}
