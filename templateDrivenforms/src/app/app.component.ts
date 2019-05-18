import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'templateDrivenforms';

  // Initial user object , can be used to prefill the form when visible.
  userModel = new User('Kim','kim@test.com', 1234567890, '', 'evening', true);

  topics = ['Angular', 'C++', 'Java'];
}
