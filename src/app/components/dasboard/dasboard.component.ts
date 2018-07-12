import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dasboard',
  templateUrl: './dasboard.component.html',
  styleUrls: ['./dasboard.component.css']
})
export class DasboardComponent implements OnInit {
  users = [];
  constructor() {
  	fetch("http://localhost/z-ang-project/extra/perfectwebsolution/login-app/src/api/")
  	.then((res)  => res.json())
  	.then((data) => this.users = data)
  	.catch((err) => console.log(err))
  }
   ngOnInit() { }

}
