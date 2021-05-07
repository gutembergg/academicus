import { Injectable } from "@angular/core";
import {
  AngularFirestore,
  AngularFirestoreCollection
} from "@angular/fire/firestore";
import { IonBackButton } from "@ionic/angular";
import { BehaviorSubject, Observable } from "rxjs";
import { first, map, tap } from "rxjs/operators";
import { IBook } from "src/app/interfaces/IBook";
import { ICategory } from "src/app/interfaces/ICategory";
import { ISubCategorie } from "src/app/interfaces/ISubCategorie";

@Injectable({
  providedIn: "root"
})
export class BooksService {
  booksSubject$: BehaviorSubject<any> = new BehaviorSubject([]);
  books$: Observable<any[]> = this.booksSubject$.asObservable();

  colections: AngularFirestoreCollection<any>;

  categories$: Observable<ICategory[]>;
  booksBycategory: any;

  categorySujet$: BehaviorSubject<any> = new BehaviorSubject([]);
  booksBycategory$: Observable<any> = this.categorySujet$.asObservable();

  _researchedBooks$: BehaviorSubject<any> = new BehaviorSubject([]);
  researchedBooks$: Observable<any> = this._researchedBooks$.asObservable();

  category$: any;
  _subCategories$: BehaviorSubject<any> = new BehaviorSubject([]);
  subCategories$: Observable<any> = this._subCategories$.asObservable();

  _booksSubCategory$: BehaviorSubject<any> = new BehaviorSubject([]);
  booksSubCategory$: Observable<any> = this._booksSubCategory$.asObservable();

  subCategoriesList: Observable<ISubCategorie[]>;

  constructor(private _firestore: AngularFirestore) {
    this.colections = this._firestore.collection("books", (ref) =>
      ref.where("researched", "==", false)
    );
    this.colections
      .stateChanges(["added", "modified", "removed"])
      .pipe(
        map((response) =>
          response.map((res) => {
            const data = res.payload.doc.data();
            const id = res.payload.doc.id;
            const type = res.type;
            return { id, ...data, type };
          })
        )
      )
      .subscribe((newData) => {
        const currentState = this.booksSubject$.value.filter(
          (book) => !newData.find((newP) => newP.id === book.id)
        );

        const newState = [
          ...currentState,
          ...newData.filter((book) => book.type !== "removed")
        ].map((data) => {
          delete data.type;

          return data;
        });

        this.booksSubject$.next(newState);
      });

    //Get Categories ////////////////////////////////////////////////////
    this.categories$ = this._firestore
      .collection<ICategory>("categories")
      .valueChanges();

    //Get Sub-categories /////////////////////////////////////////////////
    this.subCategoriesList = this._firestore
      .collection<ISubCategorie>("subcategories")
      .valueChanges({ idField: "id" });

    /* this.category$ = this._firestore
      .collection<ICategory>("categorys")
      .stateChanges(["added"])
      .pipe(
        map((response) =>
          response
            .map((res) => {
              const data = res.payload.doc.data();
              const id = res.payload.doc.id;
              const type = res.type;
              return { id, ...data, type };
            })
            .sort((a, b) => {
              if (a.name < b.name) {
                return -1;
              }
              if (a.name > b.name) {
                return 1;
              }
              return 0;
            })
        )
      ); */

    //All Books researched=true /////////////////////////////////////////////////////
    this._firestore
      .collection<IBook>("books", (ref) => ref.where("researched", "==", true))
      .stateChanges(["added", "modified", "removed"])
      .pipe(
        map((response) =>
          response.map((res) => {
            const data = res.payload.doc.data();
            const id = res.payload.doc.id;
            const type = res.type;
            return { id, ...data, type };
          })
        )
      )
      .subscribe((newList) => {
        const currentList = this._researchedBooks$.value.filter(
          (book) => !newList.find((newB) => newB.id === book.id)
        );

        const newState = [
          ...currentList,
          ...newList.filter((book) => book.type !== "removed")
        ].map((data) => {
          delete data.type;

          return data;
        });

        this._researchedBooks$.next(newState);
        return newState;
      });
  }

  /*   private _updateState(res: any[]): void {
    const currentState = this._items$.value;
    // using Set() to exclude duplicate item
    const SetList = new Set([...currentState, ...res]);
    const newState = [...SetList];
    this._items$.next(newState);
  } */

  ////Add categories and subcategory in database///////////////////////////////////////////

  /*   addCategory() {
    this._firestore
      .collection("subcategories")
      .add({
        parent: "Ingénierie",
        name: "Microtechnique"
      })
      .then((response) => console.log("Added category"));
  } */
  //////////////////////////////////////////////////////

  createBook(book: IBook) {
    this._firestore
      .collection("books")
      .add(book)
      .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  }

  getBooksByCategory$(category: ICategory) {
    this.getSubCategories(category.name);
    return this.books$.pipe(
      map((books) =>
        books.filter((book: IBook) => book.categoryId === category.name)
      ),
      tap((response) => this.categorySujet$.next(response))
    );
  }

  /*  _getBooksByCategory$(id: string) {
    return this.books$.pipe(
      map((books) => books.filter((book: IBook) => book.categoryId === id)),
      tap((response) => console.log("___>>>", response))
    );
  } */

  getCategories() {
    return this.categories$;
  }

  getSubCategories$() {
    return this.subCategoriesList;
  }

  getSubCategories(categoryName: string) {
    this._firestore
      .collection<ISubCategorie>("subcategories", (ref) =>
        ref.where("parent", "==", categoryName)
      )
      .stateChanges(["added"])
      .pipe(
        map((response) =>
          response.map((book) => {
            const data = book.payload.doc.data();
            const id = book.payload.doc.id;

            return { id, ...data };
          })
        )
      )
      .subscribe((newData) =>
        this._subCategories$.next(
          newData.sort((a, b) => {
            if (a.name < b.name) {
              return -1;
            }
            if (a.name > b.name) {
              return 1;
            }
            return 0;
          })
        )
      );
  }

  _getBooksBySubCategory(id: string) {
    return this.books$.pipe(
      map((books: any) => books.filter((book) => book.subcategory === id)),
      tap((response) => this._booksSubCategory$.next(response))
    );
  }
  /*
  getBooksBySubCategory(subCategoryId: string) {
    this._firestore
      .collection<IBook>("books", (ref) =>
        ref.where("subcategory", "==", subCategoryId)
      )
      .stateChanges(["added", "modified", "removed"])
      .pipe(
        map((books) =>
          books.map((book) => {
            const data = book.payload.doc.data();
            const type = book.type;
            const id = book.payload.doc.id;

            console.log("getBooksBySubCategory: ", data);
            return { id, ...data, type };
          })
        )
      )
      .subscribe((newData) => {
        const currentState = this._booksSubCategory$.value.filter(
          (book) => !newData.find((newBook) => newBook.id === book.id)
        );

        const newState = [
          ...currentState,
          ...newData.filter((book) => book.type !== "removed")
        ].map((data) => {
          delete data.type;

          return data;
        });

        this._booksSubCategory$.next(newState);
        return newState;
      });
  } */

  /*  getCategorys() {
    return this.category$;
  } */

  updateBook({ id, ...data }) {
    this._firestore
      .collection<IBook>("books")
      .doc(id)
      .update(data)
      .then((response) => console.log("Success!!!"))
      .catch((error) => console.log("error: ", error));
  }

  deleteBook(id: string) {
    this._firestore
      .collection("books")
      .doc(id)
      .delete()
      .then((response) => response)
      .catch((error) => console.log("Error: ", error));
  }
}
