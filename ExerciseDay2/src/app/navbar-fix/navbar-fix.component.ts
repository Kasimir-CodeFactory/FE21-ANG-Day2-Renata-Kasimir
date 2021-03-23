import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-fix',
  templateUrl: './navbar-fix.component.html',
  styleUrls: ['./navbar-fix.component.css']
})
export class NavbarFixComponent implements OnInit {
  
  
  counter: number = 0;
  countPlus() {
      let a = this.counter +10;
      this.counter = a;
  }


  constructor() { }

  ngOnInit(): void {
  }

}
