import { Injectable } from "@angular/core";
import { AngularFireStorage } from "@angular/fire/storage";

import { Camera, CameraResultType, CameraSource } from "@capacitor/core";

@Injectable({
  providedIn: "root"
})
export class CameraService {
  constructor(private _fireStorage: AngularFireStorage) {}

  public async takePhoto(): Promise<any> {
    const imgUrl = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100
    });

    /*  this._fireStorage.ref(`files/${imgUrl.webPath}`).put(imgUrl.webPath); */

    console.log("capturedPhoto", imgUrl.webPath);

    return imgUrl.webPath;
  }
}
