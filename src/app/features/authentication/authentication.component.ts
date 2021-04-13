import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "src/app/services/auth/auth.service";

@Component({
  selector: "app-authentication",
  templateUrl: "./authentication.component.html",
  styleUrls: ["./authentication.component.scss"]
})
export class AuthenticationComponent implements OnInit {
  form: FormGroup;

  constructor(
    private _authService: AuthService,
    private _formBuider: FormBuilder,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.form = this._formBuider.group({
      email: ["", Validators.required],
      password: ["", Validators.required]
    });
  }

  authentication() {
    const { email, password } = this.form.value;

    this._authService.signIn(email, password);
  }
}
