import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-registercomponent',
  templateUrl: './registercomponent.component.html',
  styleUrls: ['./registercomponent.component.css']
})
export class RegistercomponentComponent implements OnInit {
   emailId:string;
   customerName:string;
   mobileNumber:string;
   password:string;
   confirmpassword:string;
   address:string;
   city:string;
   zipcode:string;
   country:string;   
  constructor(private myservice:CustomerService) { }

  ngOnInit() {
  this.emailId="pras@gmail.com";
  this.customerName="Prasa";
  this.mobileNumber="789456123";
  this.password="852";
  this.confirmpassword="852";
  this.address="ramnagar";
  this.city="Cbe";
  this.zipcode="741";
  this.country="India";

  }
  // onSubmit(){
  //   this.emailId= this.emailId;
  // this.customerName=this.customerName;
  // this.mobileNumber=this.mobileNumber;
  // this.password=  this.password;
  // this.confirmpassword=this.confirmpassword;
  // this.address=this.address;
  // this.city=this.city;
  // this.zipcode=this.zipcode;
  // this.country= this.country;
  // }
  registerData(emailId,customerName,mobileNumber,password,confirmpassword,address,city,zipcode,country)
  {
    debugger;
    this.myservice.registerData(emailId,customerName,mobileNumber,password,confirmpassword,address,city,zipcode,country).subscribe(
      (data)=>
      {
        debugger;
      },
      (error)=>
      {
        debugger;
      }
    )
    

    
  }

}
