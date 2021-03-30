import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { map } from "rxjs/operators";
import { IBook } from "../interfaces/IBook";

const apiUrl = environment.apiBooksUrl;

const list = [
  { title: "2001 l'odyssey de l'espace", authors: "Arthur Clark" },
  { title: "A arte da guerra", authors: "Sun Tzu" },
  { title: "nous ami les terrieins", authors: "Bernard Webber" }
];

@Injectable({
  providedIn: "root"
})
export class ApiBooksService {
  constructor(private _http: HttpClient) {}

  getBook(title: string): Observable<any> {
    return this._http
      .get(`${apiUrl}${title}`)
      .pipe(map((data: any) => data.items));
  }

  listDB() {
    return list;
  }
}
