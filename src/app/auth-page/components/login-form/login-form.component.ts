// import { HttpErrorResponse } from '@angular/common/http';
// import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { first } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private toastr: ToastrService,
    private router: Router
  ) // private http: HttpResponse<any>
  {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  onSignin(): void {
    const body = this.loginForm.value;

    if (body.email && body.password) {
      this.authService
        .login(body.email, body.password)
        .pipe(first())
        .subscribe({
          next: (result) => {
            this.router.navigateByUrl('/');
            this.toastr.success('Connexion réussie !');
          },
          error: (err) => {
            this.toastr.error('Identifiants incorrect');
          },
          complete: () => {},
        });
    }

    this.loginForm.reset();
  }
}
