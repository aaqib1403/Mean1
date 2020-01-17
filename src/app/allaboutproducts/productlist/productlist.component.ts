import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.scss']
})
export class ProductlistComponent implements OnInit {
  savedproducts : Product[] = []
  constructor(private productservice :ProductService) { }

  ngOnInit() {

    

    this.productservice.productsubject$.subscribe(res =>{


      this.savedproducts.push(res);

      console.log(this.savedproducts)
      
    })

  }



}
