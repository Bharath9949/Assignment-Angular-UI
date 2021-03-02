import { Injectable, Type } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Customer } from './app.model';



@Injectable()
export class CustomerService {

  private usersUrl: string;
  private interestUrl: string;

  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8080/customers';
    this.interestUrl = 'http://localhost:8080/customers/calculateInterest'
  }

  public getInterest(CustomerModel: Customer){
    const interestUrl2 = this.interestUrl+"?principalAmount="+CustomerModel.principalAmount+"&years="+CustomerModel.years;
    return this.http.get<Customer>(interestUrl2);
  }

  public save(CustomerModel: Customer) {
    return this.http.post<Customer>(this.usersUrl, CustomerModel);
  }
}