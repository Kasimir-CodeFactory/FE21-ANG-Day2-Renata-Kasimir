import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-main-dyn',
  templateUrl: './main-dyn.component.html',
  styleUrls: ['./main-dyn.component.css']
})
export class MainDynComponent implements OnInit {
  // You should in this project, have an array of objects with cars and show them on the main page.
  inputCars = new FormGroup({
    name: new FormControl("", Validators.required),
    price: new FormControl("", Validators.required),
    picture: new FormControl("", Validators.required)
    })

  cars = [
    {
      name: "BMW",
      price: "32.000",
      picture: "https://wallpaperaccess.com/full/681489.jpg"
    },{
      name: "Tesla",
      price: "45.000",
      picture: "https://wallpaperaccess.com/full/681489.jpg"
    },{
      name: "BENZER",
      price: "26.800",
      picture: "https://wallpaperaccess.com/full/681489.jpg"
    },{
      name: "Aston Martin",
      price: "99.009",
      picture: "https://wallpaperaccess.com/full/681489.jpg"
    }
  ];

  submitPush() {
    if (this.inputCars.valid) {
    let anyCar = this.inputCars.value;
    console.table(anyCar);
    this.cars.push(anyCar);
    }
}
  constructor() { }
  ngOnInit(): void {
  }

}
