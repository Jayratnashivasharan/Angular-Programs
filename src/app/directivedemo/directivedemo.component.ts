import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-directivedemo',
  imports: [CommonModule],
  templateUrl: './directivedemo.component.html',
  styleUrl: './directivedemo.component.css'
})
export class DirectivedemoComponent {
  isLogin=true;

  cities=["Pune","Mumbai","Solapur"];

  pcolor="red";
  isVisible=false;

}
