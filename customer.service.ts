import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  

  constructor(private http:HttpClient) { }
postData(emailId,password)
  {
    debugger;
    var redData={emailId:"",password:""};
    let headers=new HttpHeaders();
    headers.append('Content-type',"application/json");
   redData.emailId=emailId;
    redData.password=password;
    let jsonData=JSON.stringify(redData);
    return this.http.post("localhost:8082/validate/pras@gmail.com/852",jsonData,{headers});}

registerData(emailId,fullName,mobileNumber,password,confirmpassword,address,city,zipcode,country)
{
  debugger;
  var stroeData={emailId:"",fullName:"",mobileNumber:"",password:"",confirmpassword:"",address:"",city:"",zipcode:"",country:""};
  let headers=new HttpHeaders();
  headers.append('Content-type',"application/json");
  stroeData.emailId=emailId;
  stroeData.fullName=fullName;
  stroeData.mobileNumber=mobileNumber;
  stroeData.password=password;
  stroeData.confirmpassword=confirmpassword;
  stroeData.address=address;
  stroeData.city=city;
  stroeData.zipcode=zipcode;
  stroeData.country=country;
  let jsonData=JSON.stringify(stroeData);
  return this.http.put("localhost:8082/register",jsonData,{headers});
}

}
