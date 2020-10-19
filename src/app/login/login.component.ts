import { UserService } from './../shared/services/user.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  loginForm: FormGroup
  loginFormValues: any
  submitting = false
  hasError = false
  errorMsg: string
  private subs = new Subscription()

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private userService: UserService

  ) { }

  ngOnInit(): void {
    this.createFormControls()
    this.createForm()
  }

  createFormControls() {
    this.loginFormValues = {
      email: ['', Validators.required],
      password: ['', Validators.required]
    }
  }

  createForm() {
    this.loginForm = this.fb.group(this.loginFormValues)
  }

  ngOnDestroy() {
    this.subs.unsubscribe
  }

}
