import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UnitService {
  uri = 'http://localhost:4000/units';
  constructor(private http: HttpClient) {

  }

  addUnit(unit_name, unit_price){
    const obj = {
      unit_name: unit_name,
      unit_price: unit_price
    };
    this.http.post(`${this.uri}/add`, obj)
      .subscribe(res => console.log("done"));
  }
}
