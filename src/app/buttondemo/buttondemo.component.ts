import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-buttondemo',
  imports: [CommonModule],
  templateUrl: './buttondemo.component.html',
  styleUrl: './buttondemo.component.css'
})
export class ButtondemoComponent {
  name : String ='Honey';
}
