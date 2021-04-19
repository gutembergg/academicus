import { Component } from "@angular/core";
import { SwUpdate } from "@angular/service-worker";
import { Plugins } from "@capacitor/core";
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
}