import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth-service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
 
@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './signup.html',
  styleUrl: './signup.scss'
})
export class Signup {
  signupForm!: FormGroup;
 
  constructor(private authService: AuthService, private router: Router, private fb: FormBuilder) { }

  ngOnInit() {
    this.signupForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(15)], ],
      name: ['', [Validators.required]],
    });
  }

  onSubmit() {
    if (this.signupForm.invalid) return;

    const credentials = this.signupForm.value;
    this.authService.createOrUpdate(credentials).subscribe({
  	next: () => {
    	  this.router.navigate(['/login']);
      },
      error: (err) => {
          console.error('Błąd rejestracji:', err);
        }
    });
  }
}
