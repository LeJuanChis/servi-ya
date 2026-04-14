import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  contactForm: FormGroup;
  isSubmitted = false;
  isSending = false;
  showSuccessMessage = false;

  subjectOptions = [
    'Consulta de Servicio',
    'Asesoría Estratégica',
    'Soporte',
    'Alianza Comercial',
  ];

  // Validamos el formulario con FormBuilder y Validators
  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      fullName: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(80),
        ],
      ],
      email: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.maxLength(120),
        ],
      ],
      subject: ['', [Validators.required]],
      message: [
        '',
        [
          Validators.required,
          Validators.minLength(20),
          Validators.maxLength(1000),
        ],
      ],
    });
  }

  get fullName() {
    return this.contactForm.get('fullName');
  }

  get email() {
    return this.contactForm.get('email');
  }

  get subject() {
    return this.contactForm.get('subject');
  }

  get message() {
    return this.contactForm.get('message');
  }

  hasError(controlName: 'fullName' | 'email' | 'subject' | 'message'): boolean {
    const control = this.contactForm.get(controlName);

    return !!control && control.invalid && (control.touched || this.isSubmitted);
  }

  onSubmit(): void {
    this.isSubmitted = true;
    this.showSuccessMessage = false;

    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.isSending = true;

    // Simulamos el envio
    setTimeout(() => {
      console.log('Formulario enviado:', this.contactForm.value);

      this.isSending = false;
      this.showSuccessMessage = true;
      this.contactForm.reset();
      this.isSubmitted = false;
    }, 1000);
  }
}