import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormDemoComponent } from './form-demo/form-demo.component';
import { DataServiceService } from './services/data-service.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormDemoComponent],
  providers: [DataServiceService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app';
  products: { id: number; name: string; price: number }[] = [];

  constructor(private dataService: DataServiceService) {}

  loadData() {
    this.products = this.dataService.getProducts();
  }
}
