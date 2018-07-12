import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  submitted = false;
  users = [];
  constructor() { }
   user = {
      fname: '',
      lname: '',
      email: '',
      password: '',
   }
  ngOnInit() {
  }
  onSubmit(){
    this.submitted = true;
    console.log(this.user);
  }
}
