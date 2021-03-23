import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-dyn',
  templateUrl: './contact-dyn.component.html',
  styleUrls: ['./contact-dyn.component.css']
})

// There also should be a Contact us page with a form with as many inputs as you consider pertinent. Do not forget to add the validators to them!!
export class ContactDynComponent implements OnInit {

  inputs = new FormGroup({
  firstName: new FormControl("", [Validators.required, Validators.minLength(5)]),
  lastName: new FormControl("", Validators.required),
  age: new FormControl("", Validators.required),
  email: new FormControl("", Validators.required)
  })

constructor() { }

saveData() {
    if (this.inputs.valid) {
    let a = this.inputs.value;
    console.table(a);
    }
}

  ngOnInit(): void {
  }

}
