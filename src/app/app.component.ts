import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtondemoComponent } from './buttondemo/buttondemo.component';
import { DirectivedemoComponent } from './directivedemo/directivedemo.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ButtondemoComponent,DirectivedemoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app';
}
