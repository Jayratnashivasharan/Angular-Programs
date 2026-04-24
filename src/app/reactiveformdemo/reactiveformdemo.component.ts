import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveformdemo',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './reactiveformdemo.component.html',
  styleUrls: ['./reactiveformdemo.component.css']
})
export class ReactiveformdemoComponent {
  submittedMessage = '';

  reactiveForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required])
  });

  onSubmit(): void {
    if (this.reactiveForm.invalid) {
      this.submittedMessage = 'Please fill all fields correctly.';
      this.reactiveForm.markAllAsTouched();
      return;
    }

    this.submittedMessage = 'Successfully submitted';
    console.log('Reactive form submitted', this.reactiveForm.value);
  }
}
