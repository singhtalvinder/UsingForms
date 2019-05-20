import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reactiveForms';
  registrationForm = new FormGroup({
    userName: new FormControl('Sukh'),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
    address: new FormGroup({
      city: new FormControl(''),
      state: new FormControl(''),
      postalCode: new FormControl('')
    })
  });

  loadApiData() {
    // Fetch data from a backend and set those values as forms control values.
    // use setValue of ReactiveForms to set values in forms.
    // setValue - is very strict on maintaining the structure of the data structure(model) =>
    // You need to supply for each controls and not just one.
    // NOTE: If you need to set only a few controls and not all, use patchValue.

    this.registrationForm.setValue({
      userName: 'Ash',
      password: 'test',
      confirmPassword: 'test',
      address:{
        city: 'City',
        state: 'State',
        postalCode: '123456'
      }
    });
    // this.registrationForm.patchValue({
    //   userName: 'Ash',
    //   password: 'test',
    //   confirmPassword: 'test',
    // });
  }
}
