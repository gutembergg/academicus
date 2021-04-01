import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { map } from "rxjs/operators";
import { IList } from "../interfaces/IList";
import { IBook } from "../interfaces/IBook";

const apiUrl = environment.apiBooksUrl;

const list = [
  { title: "2001 l'odyssey de l'espace", authors: "Arthur Clark" },
  { title: "A arte da guerra", authors: "Sun Tzu" },
  { title: "nous ami les terriens", authors: "Bernard Webber" }
];

@Injectable({
  providedIn: "root"
})
export class ApiBooksService {
  subject$: BehaviorSubject<any> = new BehaviorSubject(null);
  data$: Observable<any> = this.subject$.asObservable();

  book: IBook;

  constructor(private _http: HttpClient) {}

  getBook(title: string): Observable<any> {
    return this._http
      .get(`${apiUrl}${title}`)
      .pipe(map((data: any) => data.items));
  }

  async searchApiBook(title: string) {
    const response = await this._http.get<any>(`${apiUrl}${title}`).toPromise();
    this.subject$.next(response.items.map((item) => item));
  }

  bookSelected(book: any) {
    console.log(book);
    const titleBook = book.volumeInfo.title;
    const authors = book.volumeInfo.authors;
    const image = book.volumeInfo.imageLinks.smallThumbnail;
    const publisher = book.volumeInfo.publisher;
  }

  listDB(): IList[] {
    return list;
  }
}
