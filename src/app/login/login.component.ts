import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  aim='Your Perfect Banking Partner'
  accnum='Account Number Please'
  accno=""
  pwd=""
   accountdetails: any = {
    1000: { name: 'ajay', acno: 1000, password: 'testone', balance: 5000 },
    1001: { name: 'jay', acno: 1001, password: 'testtwo', balance: 4000 },
    1002: { name: 'sjay', acno: 1002, password: 'testthree', balance: 8000 },
    1003: { name: 'raj', acno: 1003, password: 'testfour', balance: 7000 }
}

  constructor() { }

  ngOnInit(): void {
  }
  accnoChange(event:any){
    this.accno=event.target.value;
    alert(this.accno)
    
  }
  pwdChange(event:any){
    this.pwd=event.target.value;
    alert(this.pwd)
  }
  login(){
    
        var acno = this.accno;
        var pswd = this.pwd;
        let details=this.accountdetails
        if (acno in details) {
            if (pswd == details[acno]['password']) {
              alert('login success');
                // login success
            }
            else {
              alert('invalid password');
                // invalid paswrd
            }
        }
        else {
          alert('invalid account');
            // invalid account number
        }
        
  }

}
