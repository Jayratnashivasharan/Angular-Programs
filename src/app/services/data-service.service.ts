import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor() {
    console.log("Data Service Called");
  }

  getProducts(){
    return [
      {id:1, name:"Laptop", price:45000},
      {id:2, name:"Mobile", price:25000},
      {id:3, name:"Tablet", price:15000},
    ]
  }
  getName(){
    return "Honey";
  }
}
