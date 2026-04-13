import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-demo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './form-demo.component.html',
  styleUrl: './form-demo.component.css'
})
export class FormDemoComponent {
  name = '';
  submitted = false;
  onSubmit(contactForm: NgForm) {
    console.log("Form Submitted!");
    this.submitted = true;
  };
}
