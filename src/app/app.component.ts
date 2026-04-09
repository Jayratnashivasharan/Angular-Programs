import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtondemoComponent } from './buttondemo/buttondemo.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ButtondemoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app';
}
