import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormDemoComponent } from './form-demo/form-demo.component';
import { DataServiceService } from './services/data-service.service';
import { PanelAComponent } from './services/panel-a/panel-a.component';
import { PanelBComponent } from './services/panel-b/panel-b.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormDemoComponent,PanelAComponent,PanelBComponent],
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
