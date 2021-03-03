import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { Customer } from './app.model';
import { CustomerService } from './app.service';
import { HttpParams } from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'customer-app';
  showCustomerDetails : boolean = false;
  enableInterestButton : boolean = true;
  showMsg: boolean = false;

  constructor(private customerService : CustomerService){}

  CustomerModel : Customer = new Customer();

  calculateInterest() {
    this.customerService.getInterest(this.CustomerModel).subscribe((data:any) => {
      console.log(data);
      this.CustomerModel.interestAmount = data.interestAmount;
      this.CustomerModel.totalAmount = data.totalAmount;
      this.CustomerModel.interestRate = data.interestRate;
      this.updateShowCustomerDetails();
    });;
  }

  updateShowCustomerDetails(){
    this.showCustomerDetails=true;
  }

  saveCustomerDetais(){
    this.customerService.save(this.CustomerModel).subscribe();
    this.showMsg = true;
  }
}


