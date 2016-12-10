import { Component } from '@angular/core';
import { dataBindingComponent } from './data-binding/data-binding.component';
import { TwoWayDataBindingComponent } from './two-way-data-binding/two-way-data-binding.component';
import { LifeCycleComponent } from './ciclo/life-cycle.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  valorInicial = 15;
  deletarConteudo = false;
}
