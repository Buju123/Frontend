import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-logincomponent',
  templateUrl: './logincomponent.component.html',
  styleUrls: ['./logincomponent.component.css']
})
export class LogincomponentComponent implements OnInit {
 emailId:string;
 password:string;
  constructor(private myservice:CustomerService) { }


  ngOnInit() {
    // this.emailId='pras@gmail.com';
    // this.password='852';
  }
  // onSubmit(){
  //   this.emailId=this.emailId;
  //   this.password=this.password;  

  // }
  readData(emailId,password)
  {
    debugger;
    this.myservice.postData(emailId,password).subscribe(
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


