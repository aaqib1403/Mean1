import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.scss']
})
export class AddproductComponent implements OnInit {


  title ='';
  description = '';
  enable = false;

   productsubject = new BehaviorSubject(null);
   productsubject$ = this.productsubject.asObservable();

  constructor(private fb: FormBuilder,private router :Router,private productservice :ProductService ){ }

  ngOnInit() {
  }
  addproductform = this.fb.group({
    title: [''],
    description: [''],
  });



  onAddProduct()
  {  let obj   =<Product>{}
    obj.title = this.addproductform.controls['title'].value;
    obj.description =  this.addproductform.controls['description'].value;
   // this.productservice.productsubject.next(obj); 

    this.productservice.getProductsFromServer(obj);
    this.router.navigate(["/addproduct"]);
    this.enable = true
    
  }
}


