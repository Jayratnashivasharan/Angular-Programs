import { Component } from '@angular/core';
import { FormDemoComponent } from './form-demo/form-demo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormDemoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app';
}
