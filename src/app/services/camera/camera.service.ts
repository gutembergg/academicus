import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFireStorage } from "@angular/fire/storage";

import { Camera, CameraResultType, CameraSource } from "@capacitor/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class CameraService {
  imageUrl: any;

  _urlPhotoSubject$: BehaviorSubject<any> = new BehaviorSubject(null);
  urlPhoto$: Observable<string> = this._urlPhotoSubject$.asObservable();

  constructor(
    private _fireStorage: AngularFireStorage,
    private _angularAuth: AngularFireAuth
  ) {}

  public async takePhoto(): Promise<any> {
    const imgUrl = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100
    });

    this.imageUrl = imgUrl.webPath;

    const url = this.saveImage();

    return url;
  }

  async saveImage() {
    const userID = await this._angularAuth.currentUser.then(
      (response) => response.uid
    );
    const timestamp = Date.now();
    const blob = await this.readAsBlob(this.imageUrl);
    const ref = this._fireStorage.ref(`${timestamp}${userID}`);
    await ref.put(blob);

    const url = await ref.getDownloadURL().toPromise();

    console.log("url: ", url);
    return url;
  }

  async readAsBlob(webPath: string) {
    const response = await fetch(webPath);
    const blob = await response.blob();

    return blob;
  }
}
