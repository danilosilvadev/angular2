import { Component } from '@angular/core';
import { dataBindingComponent } from './data-binding/data-binding.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
}
