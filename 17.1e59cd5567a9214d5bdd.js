(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{fOOd:function(t,o,e){"use strict";e.r(o),e.d(o,"HomeModule",function(){return F});var i=e("ofXK"),n=e("tyNb"),s=e("fXoL"),r=e("2Vo4"),b=e("I/3d");let c=(()=>{class t{constructor(t){this._firestore=t,this.authorSujectData$=new r.a(null),this.booksByAuthor$=this.authorSujectData$.asObservable()}getBooksByAuthor(t){this.colections=this._firestore.collection("books",o=>o.where("authors","==",`${t}`)),this.colections.valueChanges({idField:"id"}).subscribe(t=>this.authorSujectData$.next(t))}get(){return this.booksByAuthor$}}return t.\u0275fac=function(o){return new(o||t)(s.Sb(b.a))},t.\u0275prov=s.Hb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var a=e("MS4O"),l=e("TEn/");function u(t,o){if(1&t){const t=s.Pb();s.Ob(0,"ion-slide"),s.Ob(1,"ion-grid",7),s.Wb("click",function(){s.jc(t);const e=o.$implicit;return s.Yb().selectBook(e.id)}),s.Ob(2,"ion-row",3),s.Mb(3,"img",8),s.Nb(),s.Ob(4,"ion-row",3),s.Ob(5,"p"),s.nc(6),s.Nb(),s.Nb(),s.Nb(),s.Nb()}if(2&t){const t=o.$implicit;s.Bb(3),s.dc("src",t.image,s.kc),s.Bb(3),s.oc(null==t?null:t.title.substr(0,25))}}let d=(()=>{class t{constructor(t,o,e,i){this._authorsFindedService=t,this._route=o,this._router=e,this._bookFindedService=i,this.slideOpts={slidesPerView:3,coverflowEffect:{rotate:50,stretch:0,depth:100,modifier:1,slideShadows:!0}}}ngOnInit(){this._route.paramMap.subscribe(t=>{const o=t.get("id");this.author=o,this._authorsFindedService.getBooksByAuthor(o)}),this.authorBooks=this._authorsFindedService.booksByAuthor$,this.subscription=this.authorBooks.subscribe()}selectBook(t){this._router.navigate(["/pages/home/book-finded",t])}ngOnDestroy(){this.subscription.unsubscribe()}}return t.\u0275fac=function(o){return new(o||t)(s.Lb(c),s.Lb(n.a),s.Lb(n.e),s.Lb(a.a))},t.\u0275cmp=s.Fb({type:t,selectors:[["app-author-finded"]],decls:16,vars:5,consts:[["slot","start"],[1,"block"],["fixed",""],[1,"ion-justify-content-center"],["color","primary"],[3,"options"],[4,"ngFor","ngForOf"],["fixed","",3,"click"],["alt","test",1,"img_book",3,"src"]],template:function(t,o){1&t&&(s.Ob(0,"ion-header"),s.Ob(1,"ion-toolbar"),s.Ob(2,"ion-buttons",0),s.Mb(3,"ion-back-button"),s.Nb(),s.Ob(4,"ion-title"),s.nc(5,"Author"),s.Nb(),s.Nb(),s.Nb(),s.Ob(6,"ion-content"),s.Ob(7,"div",1),s.Ob(8,"ion-grid",2),s.Ob(9,"ion-row",3),s.Ob(10,"ion-text",4),s.Ob(11,"h1"),s.nc(12),s.Nb(),s.Nb(),s.Nb(),s.Nb(),s.Ob(13,"ion-slides",5),s.mc(14,u,7,2,"ion-slide",6),s.Zb(15,"async"),s.Nb(),s.Nb(),s.Nb()),2&t&&(s.Bb(12),s.oc(o.author),s.Bb(1),s.dc("options",o.slideOpts),s.Bb(1),s.dc("ngForOf",s.ac(15,3,o.authorBooks)))},directives:[l.o,l.L,l.f,l.b,l.c,l.K,l.m,l.n,l.w,l.H,l.D,i.j,l.C],pipes:[i.b],styles:[".block[_ngcontent-%COMP%]{margin:30px 5px 5px}.img_book[_ngcontent-%COMP%]{height:130px}ion-slides[_ngcontent-%COMP%]{margin-top:20px}"]}),t})();var h=e("mrSG"),p=e("3Pt+"),f=e("vkgz"),g=e("M7+f");let m=(()=>{class t{constructor(t,o,e,i,n){this._bookFindedService=t,this._formBuilder=o,this._inerestService=e,this._route=i,this._toast=n}ngOnInit(){this._route.paramMap.subscribe(t=>{const o=t.get("id");this._bookFindedService.getUserBookById(o)}),this.subscription=this._bookFindedService.bookFinded$.pipe(Object(f.a)(t=>t)).subscribe(t=>this.book=t),this.form=this._formBuilder.group({offer:["",p.k.required],contact:["",p.k.required]})}onSubmit(){const t=Object.assign(Object.assign({},this.form.value),{bookId:this.book.id});this._inerestService.createInterest(t),this.displayPopUp(),this.form.reset()}displayPopUp(){return Object(h.b)(this,void 0,void 0,function*(){const t=yield this._toast.create({message:"Livre enregistr\xe9 avec success",position:"bottom",keyboardClose:!0,color:"dark",duration:2e3});yield t.present()})}ngOnDestroy(){this.subscription.unsubscribe()}}return t.\u0275fac=function(o){return new(o||t)(s.Lb(a.a),s.Lb(p.a),s.Lb(g.a),s.Lb(n.a),s.Lb(l.R))},t.\u0275cmp=s.Fb({type:t,selectors:[["app-book-finded"]],decls:37,vars:8,consts:[[1,"ion-no-border"],["slot","start"],[3,"src"],[1,"ion-justify-content-center"],[3,"formGroup","ngSubmit"],["position","stacked"],["formControlName","offer"],["formControlName","contact"],["expand","block","type","submit",3,"disabled"]],template:function(t,o){1&t&&(s.Ob(0,"ion-header",0),s.Ob(1,"ion-toolbar"),s.Ob(2,"ion-buttons",1),s.Mb(3,"ion-back-button"),s.Nb(),s.Ob(4,"ion-title"),s.nc(5),s.Nb(),s.Nb(),s.Nb(),s.Ob(6,"ion-content"),s.Ob(7,"ion-card"),s.Ob(8,"ion-card-header"),s.Mb(9,"ion-img",2),s.Ob(10,"ion-grid"),s.Ob(11,"ion-row",3),s.Ob(12,"ion-card-title"),s.nc(13),s.Nb(),s.Nb(),s.Ob(14,"ion-row",3),s.Ob(15,"ion-card-subtitle"),s.nc(16),s.Nb(),s.Nb(),s.Ob(17,"ion-row",3),s.Ob(18,"ion-text"),s.nc(19," \xc9diteur: "),s.Nb(),s.nc(20),s.Nb(),s.Nb(),s.Nb(),s.Nb(),s.Ob(21,"form",4),s.Wb("ngSubmit",function(){return o.onSubmit()}),s.Ob(22,"ion-card"),s.Ob(23,"ion-card-content"),s.Ob(24,"p"),s.nc(25),s.Nb(),s.Nb(),s.Ob(26,"ion-card-content"),s.Ob(27,"ion-item"),s.Ob(28,"ion-label",5),s.nc(29,"Mon offre"),s.Nb(),s.Mb(30,"ion-input",6),s.Nb(),s.Ob(31,"ion-item"),s.Ob(32,"ion-label",5),s.nc(33,"Mon contact"),s.Nb(),s.Mb(34,"ion-input",7),s.Nb(),s.Nb(),s.Nb(),s.Ob(35,"ion-button",8),s.nc(36," Envoyer "),s.Nb(),s.Nb(),s.Nb()),2&t&&(s.Bb(5),s.oc(null==o.book?null:o.book.title),s.Bb(4),s.dc("src",null==o.book?null:o.book.image),s.Bb(4),s.oc(null==o.book?null:o.book.title),s.Bb(3),s.oc(null==o.book?null:o.book.authors),s.Bb(4),s.pc(" ",null==o.book?null:o.book.publisher," "),s.Bb(1),s.dc("formGroup",o.form),s.Bb(4),s.pc("Offert pour: ",null==o.book?null:o.book.offer,""),s.Bb(10),s.dc("disabled",o.form.invalid))},directives:[l.o,l.L,l.f,l.b,l.c,l.K,l.m,l.g,l.i,l.q,l.n,l.w,l.k,l.j,l.H,p.l,p.h,p.c,l.h,l.s,l.t,l.r,l.Q,p.g,p.b,l.e],styles:["ion-img[_ngcontent-%COMP%]{height:200px}.btn_send[_ngcontent-%COMP%]{width:100%;height:40px;background:#00f;color:#fff;margin:3px;border-radius:6px}"]}),t})();var O=e("SxV6"),k=e("qBIq"),N=e("UbJi"),v=e("hKYS");function B(t,o){if(1&t){const t=s.Pb();s.Ob(0,"ion-button",13),s.Wb("click",function(){return s.jc(t),s.Yb().signOut()}),s.nc(1," SignOut "),s.Nb()}}function _(t,o){if(1&t){const t=s.Pb();s.Ob(0,"ion-item",14),s.Wb("click",function(){s.jc(t);const e=o.$implicit;return s.Yb().selectedItem(e)}),s.nc(1),s.Nb()}if(2&t){const t=o.$implicit,e=s.Yb();s.Bb(1),s.pc(" ","titre"===e.seachFomat?null==t||null==t.title?null:t.title.substr(0,25):null==t?null:t.substr(0,25)," ")}}const y=function(t){return{display:t}},w=function(){return["/pages/login"]},L=[{path:"",component:(()=>{class t{constructor(t,o,e,i){this._firestore=t,this._bookFindedService=o,this._router=e,this._authService=i,this.listItems=[],this.authorsList=[],this.seachFomat="titre"}ngOnInit(){this.dbBooks$=this._firestore.books$.pipe(Object(f.a)(t=>t.map(t=>this.authorsList.push(t.authors)))),this.subscription=this.dbBooks$.subscribe(),this._authService.onAuthStateChanged(t=>this.user=t)}searchBooks(t){return Object(h.b)(this,void 0,void 0,function*(){const o=t.target.value;if(0===o.length)return void(this.listItems=[]);const e=yield this.dbBooks$.pipe(Object(O.a)()).toPromise();if("titre"===this.seachFomat){const t=e.filter(t=>t.title.toLocaleLowerCase().includes(o.toLocaleLowerCase()));this.listItems=t}if("authors"===this.seachFomat){const t=new Set;this.authorsList.forEach(o=>{t.add(o)});const e=[...t.values()].filter(Boolean).filter(t=>t.toLocaleLowerCase().includes(o.toLocaleLowerCase()));this.listItems=e}})}segmentChanged(t){this.seachFomat=t.target.value,console.log("event",t.target.value)}selectedItem(t){if("titre"===this.seachFomat){const{id:o}=t;this.listItems=[],this._router.navigate(["/pages/home/book-finded",o])}else console.log("authos??>",t),this.listItems=[],this._router.navigate(["/pages/home/author-finded",t])}signOut(){this._authService.signOut(),this._router.navigate(["pages/login"])}ngOnDestroy(){this.subscription.unsubscribe()}}return t.\u0275fac=function(o){return new(o||t)(s.Lb(k.a),s.Lb(a.a),s.Lb(n.e),s.Lb(N.a))},t.\u0275cmp=s.Fb({type:t,selectors:[["app-home"]],decls:25,vars:9,consts:[[1,"ion-no-border"],["slot","end"],["routerLinkActive","router-link-active","color","primary","expand","block","fill","solid",3,"ngStyle","routerLink"],["color","danger","expand","block","fill","solid",3,"click",4,"ngIf"],["color","academicus-green"],["name","school-sharp","size","large",1,"icon"],["color","academicus-green","value","titre",3,"ionChange"],["topButton",""],["value","titre"],["value","authors"],["type","text",3,"placeholder","ionInput"],[3,"hidden"],[3,"click",4,"ngFor","ngForOf"],["color","danger","expand","block","fill","solid",3,"click"],[3,"click"]],template:function(t,o){if(1&t&&(s.Ob(0,"ion-header",0),s.Ob(1,"ion-toolbar"),s.Ob(2,"ion-buttons",1),s.Ob(3,"ion-button",2),s.nc(4,"Login"),s.Nb(),s.mc(5,B,2,0,"ion-button",3),s.Nb(),s.Ob(6,"ion-title",4),s.Mb(7,"ion-icon",5),s.nc(8," UNILivres "),s.Nb(),s.Nb(),s.Nb(),s.Ob(9,"ion-content"),s.Ob(10,"ion-grid"),s.Ob(11,"ion-row"),s.Ob(12,"ion-segment",6,7),s.Wb("ionChange",function(t){return o.segmentChanged(t)}),s.Ob(14,"ion-segment-button",8),s.Ob(15,"ion-label"),s.nc(16,"Titre"),s.Nb(),s.Nb(),s.Ob(17,"ion-segment-button",9),s.Ob(18,"ion-label"),s.nc(19,"Author"),s.Nb(),s.Nb(),s.Nb(),s.Nb(),s.Ob(20,"ion-row"),s.Ob(21,"ion-searchbar",10),s.Wb("ionInput",function(t){return o.searchBooks(t)}),s.Nb(),s.Ob(22,"ion-list",11),s.mc(23,_,2,1,"ion-item",12),s.Nb(),s.Nb(),s.Nb(),s.Mb(24,"app-categories"),s.Nb()),2&t){const t=s.ic(13);s.Bb(3),s.dc("ngStyle",s.gc(6,y,o.user&&"none"))("routerLink",s.fc(8,w)),s.Bb(2),s.dc("ngIf",o.user),s.Bb(16),s.ec("placeholder",t.value),s.Bb(1),s.dc("hidden",o.listItems.length<=0),s.Bb(1),s.dc("ngForOf",o.listItems)}},directives:[l.o,l.L,l.f,l.e,n.g,i.l,n.f,l.O,i.k,l.K,l.p,l.m,l.n,l.w,l.y,l.P,l.z,l.t,l.x,l.Q,l.u,i.j,v.a,l.s],styles:["ion-grid[_ngcontent-%COMP%]{margin-top:10px}ion-title[_ngcontent-%COMP%]{font-size:30px}"]}),t})()},{path:"book-finded/:id",component:m},{path:"author-finded/:id",component:d}];let S=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=s.Jb({type:t}),t.\u0275inj=s.Ib({imports:[[n.h.forChild(L)],n.h]}),t})();var I=e("PCNd");let F=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=s.Jb({type:t}),t.\u0275inj=s.Ib({imports:[[i.c,S,l.M,I.a,p.d,p.i]]}),t})()}}]);