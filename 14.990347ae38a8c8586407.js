(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{fOOd:function(t,o,e){"use strict";e.r(o),e.d(o,"HomeModule",function(){return L});var i=e("ofXK"),n=e("tyNb"),r=e("fXoL"),s=e("2Vo4"),b=e("I/3d");let c=(()=>{class t{constructor(t){this._firestore=t,this.authorSujectData$=new s.a(null),this.booksByAuthor$=this.authorSujectData$.asObservable()}getBooksByAuthor(t){this.colections=this._firestore.collection("books",o=>o.where("authors","==",`${t}`)),this.colections.valueChanges().subscribe(t=>this.authorSujectData$.next(t))}get(){return this.booksByAuthor$}}return t.\u0275fac=function(o){return new(o||t)(r.Sb(b.a))},t.\u0275prov=r.Hb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var a=e("TEn/");function u(t,o){if(1&t&&(r.Ob(0,"ion-slide"),r.Ob(1,"ion-grid",2),r.Ob(2,"ion-row",3),r.Mb(3,"img",7),r.Nb(),r.Ob(4,"ion-row",3),r.Ob(5,"p"),r.nc(6),r.Nb(),r.Nb(),r.Nb(),r.Nb()),2&t){const t=o.$implicit;r.Bb(3),r.dc("src",t.image,r.kc),r.Bb(3),r.oc(t.title.substr(0,25))}}let h=(()=>{class t{constructor(t,o){this._authorsFindedService=t,this._route=o,this.slideOpts={slidesPerView:3,coverflowEffect:{rotate:50,stretch:0,depth:100,modifier:1,slideShadows:!0}}}ngOnInit(){this.subscription=this._route.queryParams.subscribe(t=>{this.author=t,this._authorsFindedService.getBooksByAuthor(t.author)}),this.authorBooks=this._authorsFindedService.get()}ngOnDestroy(){this.subscription.unsubscribe()}}return t.\u0275fac=function(o){return new(o||t)(r.Lb(c),r.Lb(n.a))},t.\u0275cmp=r.Fb({type:t,selectors:[["app-author-finded"]],decls:16,vars:5,consts:[["slot","start"],[1,"block"],["fixed",""],[1,"ion-justify-content-center"],["color","primary"],[3,"options"],[4,"ngFor","ngForOf"],["alt","test",1,"img_book",3,"src"]],template:function(t,o){1&t&&(r.Ob(0,"ion-header"),r.Ob(1,"ion-toolbar"),r.Ob(2,"ion-buttons",0),r.Mb(3,"ion-back-button"),r.Nb(),r.Ob(4,"ion-title"),r.nc(5,"Author"),r.Nb(),r.Nb(),r.Nb(),r.Ob(6,"ion-content"),r.Ob(7,"div",1),r.Ob(8,"ion-grid",2),r.Ob(9,"ion-row",3),r.Ob(10,"ion-text",4),r.Ob(11,"h1"),r.nc(12),r.Nb(),r.Nb(),r.Nb(),r.Nb(),r.Ob(13,"ion-slides",5),r.mc(14,u,7,2,"ion-slide",6),r.Zb(15,"async"),r.Nb(),r.Nb(),r.Nb()),2&t&&(r.Bb(12),r.oc(o.author.author),r.Bb(1),r.dc("options",o.slideOpts),r.Bb(1),r.dc("ngForOf",r.ac(15,3,o.authorBooks)))},directives:[a.n,a.K,a.e,a.b,a.c,a.J,a.l,a.m,a.v,a.G,a.C,i.i,a.B],pipes:[i.b],styles:[".block[_ngcontent-%COMP%]{margin:30px 5px 5px}.img_book[_ngcontent-%COMP%]{height:130px}ion-slides[_ngcontent-%COMP%]{margin-top:20px}"]}),t})();var l=e("3Pt+"),d=e("MS4O");let f=(()=>{class t{constructor(t){this._firestore=t}createInterest(t,o){this._firestore.collection("interest").add(t).then(t=>{console.log("Document written with ID: ",t.id),this._firestore.collection("books").doc(o).update({interestId:t.id})}).catch(t=>{console.error("Error adding document: ",t)})}}return t.\u0275fac=function(o){return new(o||t)(r.Sb(b.a))},t.\u0275prov=r.Hb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),p=(()=>{class t{constructor(t,o,e){this._bookFindedService=t,this._formBuilder=o,this._inerestService=e}ngOnInit(){this.subscription=this._bookFindedService.get().subscribe(t=>{this.book=t}),this.form=this._formBuilder.group({offer:["",l.j.required],contact:["",l.j.required]})}onSubmit(){this._inerestService.createInterest(this.form.value,this.book.id)}ngOnDestroy(){this.subscription.unsubscribe()}}return t.\u0275fac=function(o){return new(o||t)(r.Lb(d.a),r.Lb(l.a),r.Lb(f))},t.\u0275cmp=r.Fb({type:t,selectors:[["app-book-finded"]],decls:39,vars:7,consts:[["slot","start"],[3,"src"],[1,"ion-justify-content-center"],[3,"formGroup","ngSubmit"],["position","stacked"],["formControlName","offer"],["formControlName","contact"],["fixed",""],[1,"btn_send"]],template:function(t,o){1&t&&(r.Ob(0,"ion-header"),r.Ob(1,"ion-toolbar"),r.Ob(2,"ion-buttons",0),r.Mb(3,"ion-back-button"),r.Nb(),r.Ob(4,"ion-title"),r.nc(5),r.Nb(),r.Nb(),r.Nb(),r.Ob(6,"ion-content"),r.Ob(7,"ion-card"),r.Ob(8,"ion-card-header"),r.Mb(9,"ion-img",1),r.Ob(10,"ion-grid"),r.Ob(11,"ion-row",2),r.Ob(12,"ion-card-title"),r.nc(13),r.Nb(),r.Nb(),r.Ob(14,"ion-row",2),r.Ob(15,"ion-card-subtitle"),r.nc(16),r.Nb(),r.Nb(),r.Ob(17,"ion-row",2),r.Ob(18,"ion-text"),r.nc(19," \xc9diteur: "),r.Nb(),r.nc(20),r.Nb(),r.Nb(),r.Nb(),r.Nb(),r.Ob(21,"form",3),r.Wb("ngSubmit",function(){return o.onSubmit()}),r.Ob(22,"ion-card"),r.Ob(23,"ion-card-content"),r.Ob(24,"p"),r.nc(25),r.Nb(),r.Nb(),r.Ob(26,"ion-card-content"),r.Ob(27,"ion-item"),r.Ob(28,"ion-label",4),r.nc(29,"Mon offre"),r.Nb(),r.Mb(30,"ion-input",5),r.Nb(),r.Ob(31,"ion-item"),r.Ob(32,"ion-label",4),r.nc(33,"Mon contact"),r.Nb(),r.Mb(34,"ion-input",6),r.Nb(),r.Nb(),r.Nb(),r.Ob(35,"ion-grid",7),r.Ob(36,"ion-row"),r.Ob(37,"button",8),r.nc(38,"Envoyer"),r.Nb(),r.Nb(),r.Nb(),r.Nb(),r.Nb()),2&t&&(r.Bb(5),r.oc(o.book.title),r.Bb(4),r.dc("src",o.book.image),r.Bb(4),r.oc(o.book.title),r.Bb(3),r.oc(o.book.authors),r.Bb(4),r.pc(" ",o.book.publisher," "),r.Bb(1),r.dc("formGroup",o.form),r.Bb(4),r.pc("Offert pour: ",o.book.offer,""))},directives:[a.n,a.K,a.e,a.b,a.c,a.J,a.l,a.f,a.h,a.p,a.m,a.v,a.j,a.i,a.G,l.k,l.h,l.c,a.g,a.r,a.s,a.q,a.O,l.g,l.b],styles:["ion-img[_ngcontent-%COMP%]{height:200px}.btn_send[_ngcontent-%COMP%]{width:100%;height:40px;background:#00f;color:#fff;margin:3px;border-radius:6px}"]}),t})();var O=e("mrSG"),g=e("vkgz"),m=e("SxV6"),N=e("qBIq"),k=e("UbJi"),v=e("hKYS");function B(t,o){if(1&t){const t=r.Pb();r.Ob(0,"ion-button",10),r.Wb("click",function(){return r.jc(t),r.Yb().signOut()}),r.nc(1," SignOut "),r.Nb()}}function _(t,o){if(1&t){const t=r.Pb();r.Ob(0,"ion-item",11),r.Wb("click",function(){r.jc(t);const e=o.$implicit;return r.Yb().selectedItem(e)}),r.nc(1),r.Nb()}if(2&t){const t=o.$implicit,e=r.Yb();r.Bb(1),r.pc(" ","titre"===e.seachFomat?null==t||null==t.title?null:t.title.substr(0,25):null==t?null:t.substr(0,25)," ")}}const w=function(t){return{display:t}},y=function(){return["/pages/login"]},S=[{path:"",component:(()=>{class t{constructor(t,o,e,i){this._firestore=t,this._bookFindedService=o,this._router=e,this._authService=i,this.listItems=[],this.dbBooks$=null,this.authorsList=[],this.seachFomat="titre"}ngOnInit(){this.dbBooks$=this._firestore.books$.pipe(Object(g.a)(t=>t.map(t=>this.authorsList.push(t.authors)))),this.subscription=this.dbBooks$.subscribe(),this._authService.onAuthStateChanged(t=>this.user=!!t),console.log("==>HOME")}searchBooks(t){return Object(O.b)(this,void 0,void 0,function*(){const o=t.target.value;if(0===o.length)return void(this.listItems=[]);const e=yield this.dbBooks$.pipe(Object(m.a)()).toPromise();if("titre"===this.seachFomat){const t=e.filter(t=>t.title.toLocaleLowerCase().includes(o));this.listItems=t}if("authors"===this.seachFomat){const t=new Set;this.authorsList.forEach(o=>{t.add(o)});const e=[...t.values()].filter(t=>t.toLocaleLowerCase().includes(o));this.listItems=e}})}segmentChanged(t){this.seachFomat=t.target.value,console.log("event",t.target.value)}selectedItem(t){"titre"===this.seachFomat?(this._bookFindedService.set(t),this.listItems=[],this._router.navigate(["/pages/home/book-finded"])):(this.listItems=[],this._router.navigate(["/pages/home/author-finded"],{queryParams:{author:t}}))}signOut(){this._authService.signOut(),this._router.navigate(["pages/login"])}ngOnDestroy(){this.subscription.unsubscribe()}}return t.\u0275fac=function(o){return new(o||t)(r.Lb(N.a),r.Lb(d.a),r.Lb(n.e),r.Lb(k.a))},t.\u0275cmp=r.Fb({type:t,selectors:[["app-home"]],decls:24,vars:9,consts:[["slot","end"],["routerLinkActive","router-link-active","color","primary","expand","block","fill","solid",3,"ngStyle","routerLink"],["shape","round",3,"click",4,"ngIf"],["value","titre",3,"ionChange"],["topButton",""],["value","titre"],["value","authors"],["type","text",3,"placeholder","ionInput"],[3,"hidden"],[3,"click",4,"ngFor","ngForOf"],["shape","round",3,"click"],[3,"click"]],template:function(t,o){if(1&t&&(r.Ob(0,"ion-header"),r.Ob(1,"ion-toolbar"),r.Ob(2,"ion-buttons",0),r.Ob(3,"ion-button",1),r.nc(4,"Login"),r.Nb(),r.mc(5,B,2,0,"ion-button",2),r.Nb(),r.Ob(6,"ion-title"),r.nc(7,"Academicus"),r.Nb(),r.Nb(),r.Nb(),r.Ob(8,"ion-content"),r.Ob(9,"ion-grid"),r.Ob(10,"ion-row"),r.Ob(11,"ion-segment",3,4),r.Wb("ionChange",function(t){return o.segmentChanged(t)}),r.Ob(13,"ion-segment-button",5),r.Ob(14,"ion-label"),r.nc(15,"Titre"),r.Nb(),r.Nb(),r.Ob(16,"ion-segment-button",6),r.Ob(17,"ion-label"),r.nc(18,"Author"),r.Nb(),r.Nb(),r.Nb(),r.Nb(),r.Ob(19,"ion-row"),r.Ob(20,"ion-searchbar",7),r.Wb("ionInput",function(t){return o.searchBooks(t)}),r.Nb(),r.Ob(21,"ion-list",8),r.mc(22,_,2,1,"ion-item",9),r.Nb(),r.Nb(),r.Nb(),r.Mb(23,"app-categories"),r.Nb()),2&t){const t=r.ic(12);r.Bb(3),r.dc("ngStyle",r.gc(6,w,o.user&&"none"))("routerLink",r.fc(8,y)),r.Bb(2),r.dc("ngIf",o.user),r.Bb(15),r.ec("placeholder",t.value),r.Bb(1),r.dc("hidden",o.listItems.length<=0),r.Bb(1),r.dc("ngForOf",o.listItems)}},directives:[a.n,a.K,a.e,a.d,n.g,i.k,n.f,a.M,i.j,a.J,a.l,a.m,a.v,a.x,a.N,a.y,a.s,a.w,a.O,a.t,i.i,v.a,a.r],styles:["ion-grid[_ngcontent-%COMP%]{margin-top:10px}"]}),t})()},{path:"book-finded",component:p},{path:"author-finded",component:h}];let I=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=r.Jb({type:t}),t.\u0275inj=r.Ib({imports:[[n.h.forChild(S)],n.h]}),t})();var F=e("PCNd");let L=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=r.Jb({type:t}),t.\u0275inj=r.Ib({imports:[[i.c,I,a.L,F.a,l.d,l.i]]}),t})()}}]);