import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DirectivedemoComponent } from './directivedemo/directivedemo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DirectivedemoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app';
}
