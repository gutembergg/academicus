import { Injectable } from "@angular/core";

import { Camera, CameraResultType, CameraSource } from "@capacitor/core";

@Injectable({
  providedIn: "root"
})
export class CameraService {
  constructor() {}

  public async takePhoto(): Promise<any> {
    const imgUrl = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100
    });
    console.log("capturedPhoto", imgUrl);

    return imgUrl.webPath;
  }
}
