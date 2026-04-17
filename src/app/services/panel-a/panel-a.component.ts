import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CounterservicesComponent } from '../counterservices/counterservices.component';

@Component({
  selector: 'app-panel-a',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './panel-a.component.html',
  styleUrl: './panel-a.component.css'
})
export class PanelAComponent {
  constructor(public svc: CounterservicesComponent) {}

  increment(): void {
    this.svc.increment();
  }

  decrement(): void {
    this.svc.decrement();
  }
}
