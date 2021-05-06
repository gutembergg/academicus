import { Component } from "@angular/core";
import { SwUpdate } from "@angular/service-worker";
import { ToastController } from "@ionic/angular";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "academicus";

  constructor(private _toast: ToastController, private _sw: SwUpdate) {
    this.checkDevice();
    this._sw.available.subscribe((response) => {
      if (response) {
        this.displayPopUpUpdate();
      }
    });
  }

  checkDevice() {
    const isIos = () => {
      const userAgent = window.navigator.userAgent.toLowerCase();
      return /iphone|ipad|ipod/.test(userAgent);
    };

    // Detect if app is install
    const isInStandaloneMode = () =>
      "standalone" in (window as any).navigator &&
      (window as any).navigator.standalone;
    if (isIos() && !isInStandaloneMode()) {
      this.displayPopUpInstall();
    }
  }

  async displayPopUpInstall() {
    const toast = await this._toast.create({
      message: `Pour installer l'application...`,
      position: "bottom",
      keyboardClose: true,
      color: "dark",
      buttons: [
        {
          text: "ok",
          role: "cancel",
          handler: () => {
            console.log("pppppppp");
          }
        }
      ]
    });
    await toast.present();
  }

  async displayPopUpUpdate() {
    const toast = await this._toast.create({
      message: `Vous avez une nouvelle version d'Academicus`,
      position: "bottom",
      keyboardClose: true,
      color: "dark",
      buttons: [
        {
          text: "ok",
          role: "cancel",
          handler: async () => {
            this._sw.activateUpdate();
            window.location.reload();
          }
        }
      ]
    });
    await toast.present();
  }
}
