import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "src/app/services/auth/auth.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"]
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  formErrorEmail = false;
  formErrorPassword = false;

  constructor(
    private _formBuilder: FormBuilder,
    private _authService: AuthService
  ) {}

  ngOnInit(): void {
    this.form = this._formBuilder.group({
      email: ["", [Validators.required, Validators.maxLength(200)]],
      password: ["", [Validators.required, Validators.minLength(6)]]
    });
  }

  registerUser() {
    if (this.form.get("email").status !== "VALID") {
      this.formErrorEmail = true;
      return;
    }
    if (this.form.get("password").status !== "VALID") {
      this.formErrorPassword = true;
      return;
    }
    const { email, password } = this.form.value;

    this._authService.createUser(email, password);
  }
}
