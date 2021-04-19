import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { catchError } from "rxjs/operators";

const apiUrl = environment.apiBooksUrl;

@Injectable({
  providedIn: "root"
})
export class ApiBooksService {
  constructor(private _http: HttpClient) {}

  async searchApiBook(title: string) {
    const response = await this._http
      .get<any>(`${apiUrl}${title}`)
      .pipe(catchError(async (error) => console.log("error: ", error)))
      .toPromise();
    return response;
  }
}
