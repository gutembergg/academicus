(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{RKQH:function(e,t,o){"use strict";o.r(t),o.d(t,"BooksListModule",function(){return u});var s=o("ofXK"),c=o("tyNb"),i=o("lJxs"),r=o("fXoL"),n=o("qBIq"),a=o("TEn/");function d(e,t){if(1&e){const e=r.Pb();r.Ob(0,"li",2),r.Wb("click",function(){r.jc(e);const t=r.Yb();return t.selected(t.item)}),r.nc(1),r.Nb()}if(2&e){const e=t.$implicit;r.Bb(1),r.pc(" ",e.volumeInfo.title," ")}}function l(e,t){if(1&e&&(r.Ob(0,"li"),r.nc(1),r.Nb()),2&e){const e=t.$implicit;r.Bb(1),r.pc(" ",e.title," ")}}const b=[{path:"",component:(()=>{class e{constructor(e){this._firestore=e}ngOnInit(){this.newBook$=this._firestore.books$.pipe(Object(i.a)(e=>e))}selected(e){console.log("Event",e)}}return e.\u0275fac=function(t){return new(t||e)(r.Lb(n.a))},e.\u0275cmp=r.Fb({type:e,selectors:[["app-books-list"]],decls:9,vars:6,consts:[[3,"click",4,"ngFor","ngForOf"],[4,"ngFor","ngForOf"],[3,"click"]],template:function(e,t){1&e&&(r.Ob(0,"ion-content"),r.Ob(1,"ul"),r.mc(2,d,2,1,"li",0),r.Zb(3,"async"),r.Nb(),r.Ob(4,"h3"),r.nc(5,"Firestore DB"),r.Nb(),r.Ob(6,"ul"),r.mc(7,l,2,1,"li",1),r.Zb(8,"async"),r.Nb(),r.Nb()),2&e&&(r.Bb(2),r.dc("ngForOf",r.ac(3,2,t.books$)),r.Bb(5),r.dc("ngForOf",r.ac(8,4,t.newBook$)))},directives:[a.m,s.j],pipes:[s.b],styles:[""]}),e})()}];let h=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=r.Jb({type:e}),e.\u0275inj=r.Ib({imports:[[c.h.forChild(b)],c.h]}),e})(),u=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=r.Jb({type:e}),e.\u0275inj=r.Ib({imports:[[s.c,h,a.M]]}),e})()},qBIq:function(e,t,o){"use strict";o.d(t,"a",function(){return d});var s=o("mrSG"),c=o("2Vo4"),i=o("lJxs"),r=o("vkgz"),n=o("fXoL"),a=o("I/3d");let d=(()=>{class e{constructor(e){this._firestore=e,this.booksSubject$=new c.a([]),this.books$=this.booksSubject$.asObservable(),this.categorySujet$=new c.a([]),this.booksBycategory$=this.categorySujet$.asObservable(),this._researchedBooks$=new c.a([]),this.researchedBooks$=this._researchedBooks$.asObservable(),this.colections=this._firestore.collection("books",e=>e.where("researched","==",!1)),this.colections.stateChanges(["added","modified","removed"]).pipe(Object(i.a)(e=>e.map(e=>{const t=e.payload.doc.data(),o=e.type;return Object.assign(Object.assign({id:e.payload.doc.id},t),{type:o})}))).subscribe(e=>{const t=[...this.booksSubject$.value.filter(t=>!e.find(e=>e.id===t.id)),...e.filter(e=>"removed"!==e.type)].map(e=>(delete e.type,e));this.booksSubject$.next(t)}),this.categories$=this._firestore.collection("categories").valueChanges(),this._firestore.collection("books",e=>e.where("researched","==",!0)).stateChanges(["added","modified","removed"]).pipe(Object(i.a)(e=>e.map(e=>{const t=e.payload.doc.data(),o=e.type;return Object.assign(Object.assign({id:e.payload.doc.id},t),{type:o})}))).subscribe(e=>{const t=[...this._researchedBooks$.value.filter(t=>!e.find(e=>e.id===t.id)),...e.filter(e=>"removed"!==e.type)].map(e=>(delete e.type,e));return this._researchedBooks$.next(t),t})}createBook(e){this._firestore.collection("books").add(e).then(e=>{console.log("Document written with ID: ",e.id)}).catch(e=>{console.error("Error adding document: ",e)})}getBooksByCategory$(e){return this.books$.pipe(Object(i.a)(t=>t.filter(t=>t.categoryId===e.name)),Object(r.a)(e=>this.categorySujet$.next(e)))}getCategories(){return this.categories$}updateBook(e){var{id:t}=e,o=Object(s.f)(e,["id"]);this._firestore.collection("books").doc(t).update(o).then(e=>console.log("Success!!!")).catch(e=>console.log("error: ",e))}deleteBook(e){this._firestore.collection("books").doc(e).delete().then(e=>e).catch(e=>console.log("Error: ",e))}}return e.\u0275fac=function(t){return new(t||e)(n.Sb(a.a))},e.\u0275prov=n.Hb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()}}]);