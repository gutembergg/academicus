import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { App } from "@capacitor/core";
import { Platform } from "@ionic/angular";
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
    private _platforme: Platform
  ) {}

  ngOnInit(): void {
    this.form = this._formBuider.group({
      email: ["", Validators.required],
      password: ["", Validators.required]
    });

    this._platforme.backButton.subscribeWithPriority(666666, () =>
      App.exitApp()
    );
  }

  authentication() {
    const { email, password } = this.form.value;

    if (email !== "" || password !== "") {
      this._authService.signIn(email, password);
    } else {
      alert("Remplissez tout les champs");
      return;
    }
  }
}
