import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { forbiddenNameValidator } from './shared/user-name.validator';
import { PasswordValidator } from './shared/password.validator';
import { EventManagerPlugin } from '@angular/platform-browser/src/dom/events/event_manager';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  registrationForm: FormGroup;
  
  // Using formBuilder instead of formgroup and formcontrol.
  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
     // registrationform using formBuilder.
    this.registrationForm = this.fb.group({
      userName: ['', 
        [
          Validators.required,
          Validators.minLength(5), 
          forbiddenNameValidator(/password/)
        ]
      ],// first param is the default value, validation related array or single, 
      email:[''],
      subscribe: [false],
      password: [''],
      confirmPassword: [''],
      address : this.fb.group({
        city: [''],
        state: [''],
        postalCode: ['']
      })
    }, {validator: PasswordValidator}); // Password validators is for across
                                       // controls so must apply to the form as a whole.

    this.registrationForm.get('subscribe').valueChanges
    .subscribe((checkedValue) => {
      const email = this.registrationForm.get('email');
      if(checkedValue) {
        email.setValidators(Validators.required);
      } else {
        email.clearValidators();
      }
      email.updateValueAndValidity();
    });
                                     
  }
  title = 'reactiveForms';
  
  // registrationForm = new FormGroup({
  //   userName: new FormControl('Sukh'),
  //   password: new FormControl(''),
  //   confirmPassword: new FormControl(''),
  //   address: new FormGroup({
  //     city: new FormControl(''),
  //     state: new FormControl(''),
  //     postalCode: new FormControl('')
  //   })
  // });
  // Getters for the form fields.
  get userName() {
    return this.registrationForm.get('userName');
  }

  get email() {
    return this.registrationForm.get('email');
  }
  get password() {
    return this.registrationForm.get('password');
  }

  get confirmPassword() {
    return this.registrationForm.get('confirmPassword');
  }
  get address() {
    return this.registrationForm.get('address');
  }
 

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
