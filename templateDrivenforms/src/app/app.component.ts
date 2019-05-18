import { Component } from '@angular/core';
import { User } from './user';
import { CampEnrollmentService } from './camp-enrollment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'templateDrivenforms';

  submitted= false;
  constructor(private _campEnrollmentService: CampEnrollmentService) {
  }


  // topic validated.
  topicHasError = true;
  // Initial user object , can be used to prefill the form when visible.
  userModel = new User('Ming','kim@test.com', 1234567890, 'default', 'evening', true);

  topics = ['Angular', 'C++', 'Java'];

  // Validate topic for selecting atleast one option. Should not be the "Please select..."
  validateTopic(value) {
    if(value ==='default') {
      this.topicHasError = true;
    } else {
      this.topicHasError = false;
    }
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.userModel);
    this._campEnrollmentService.enroll(this.userModel)
    .subscribe(
      data => console.log('Successfully submitted the user info.'),
      error =>  console.log('Failed to submit the user info.')
      )

  }
}
