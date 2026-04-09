import { Component } from '@angular/core';

@Component({
  selector: 'app-directivedemo',
  imports: [],
  templateUrl: './directivedemo.component.html',
  styleUrl: './directivedemo.component.css'
})
export class DirectivedemoComponent {
  isLogin=true;

  cities=["pune","Mumbai","solapur"];

  pcolor="red";
}
