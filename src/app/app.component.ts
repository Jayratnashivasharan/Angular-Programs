import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtondemoComponent } from './buttondemo/buttondemo.component';
import { DirectivedemoComponent } from './directivedemo/directivedemo.component';

@Component({
  selector: 'app-root',
  imports: [ ButtondemoComponent,DirectivedemoComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app';
}
