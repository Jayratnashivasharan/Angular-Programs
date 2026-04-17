import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CounterservicesComponent } from '../counterservices/counterservices.component';

@Component({
  selector: 'app-panel-b',
  standalone: true,
  imports: [CommonModule],
  providers: [CounterservicesComponent],
  templateUrl: './panel-b.component.html',
  styleUrl: './panel-b.component.css'
})
export class PanelBComponent {
  constructor(public svc: CounterservicesComponent) {}
  }
