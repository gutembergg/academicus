(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"7Z3z":function(o,e,t){"use strict";t.r(e),t.d(e,"UserProfileModule",function(){return F});var i=t("ofXK"),n=t("tyNb"),r=t("mrSG"),b=t("3Pt+"),c=t("vkgz"),s=t("SxV6"),l=t("fXoL"),u=t("vcGB"),a=t("qBIq"),d=t("gcOT"),h=t("2Vo4"),m=t("Vaw3"),f=t("UbJi");let O=(()=>{class o{constructor(o,e){this._fireStorage=o,this._angularAuth=e,this._urlPhotoSubject$=new h.a(null),this.urlPhoto$=this._urlPhotoSubject$.asObservable()}takePhoto(){return Object(r.b)(this,void 0,void 0,function*(){const o=yield d.b.getPhoto({resultType:d.c.Uri,source:d.d.Camera,quality:100});return this.imageUrl=o.webPath,this.saveImage()})}saveImage(){return Object(r.b)(this,void 0,void 0,function*(){const o=yield this._angularAuth.currentUser.then(o=>o.uid),e=Date.now(),t=yield this.readAsBlob(this.imageUrl),i=this._fireStorage.ref(`${e}${o}`);return yield i.put(t),yield i.getDownloadURL().toPromise()})}readAsBlob(o){return Object(r.b)(this,void 0,void 0,function*(){const e=yield fetch(o);return yield e.blob()})}}return o.\u0275fac=function(e){return new(e||o)(l.Sb(m.a),l.Sb(f.a))},o.\u0275prov=l.Hb({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var p=t("TEn/");function g(o,e){if(1&o&&(l.Ob(0,"ion-select-option",14),l.nc(1),l.Nb()),2&o){const o=e.$implicit;l.dc("value",o.name),l.Bb(1),l.pc(" ",o.name," ")}}let k=(()=>{class o{constructor(o,e,t,i,n,r){this._userBookService=o,this._route=e,this._formBuilder=t,this._bookservice=i,this._cameraService=n,this._router=r}ngOnInit(){this.form=this._formBuilder.group({title:["",b.j.required],authors:["",b.j.required],publisher:["",b.j.required],image:[""],offer:["",b.j.required],category:["",b.j.required]}),this._route.paramMap.subscribe(o=>{const e=o.get("id");this._userBookService.getUserBookById(e)}),this.subscription=this._userBookService.bookDetail$.pipe(Object(c.a)(o=>this.form.patchValue(o)),Object(c.a)(o=>this.imageUrl=null==o?void 0:o.image),Object(c.a)(o=>this._bookId=null==o?void 0:o.id)).subscribe(o=>this.selectedBook$=o),this.form.patchValue(this.selectedBook$),this._getCategories()}_getCategories(){return Object(r.b)(this,void 0,void 0,function*(){const o=yield this._bookservice.getCategories().pipe(Object(s.a)()).toPromise();this.categories=o})}takePhoto(){return Object(r.b)(this,void 0,void 0,function*(){const o=yield this._cameraService.takePhoto();this.imageUrl=o})}onSubmit(){const o=Object.assign(Object.assign({},this.form.value),{id:this._bookId,image:this.imageUrl});this._bookservice.updateBook(o)}deleteBook(o){this._userBookService.deleteBook(o),this._router.navigate(["pages/user-profile"])}ngOnDestroy(){this.subscription.unsubscribe()}}return o.\u0275fac=function(e){return new(e||o)(l.Lb(u.a),l.Lb(n.a),l.Lb(b.a),l.Lb(a.a),l.Lb(O),l.Lb(n.e))},o.\u0275cmp=l.Fb({type:o,selectors:[["app-book-edit-remove"]],decls:57,vars:9,consts:[["slot","start"],[1,"image",3,"src"],[1,"ion-justify-content-center"],[3,"formGroup","ngSubmit"],["expand","block",3,"click"],["position","stacked"],["formControlName","title","value","title"],["formControlName","authors"],["formControlName","publisher"],["formControlName","offer"],["formControlName","category","okText","Ok","cancelText","Cancel",3,"placeholder","value"],[3,"value",4,"ngFor","ngForOf"],["type","submit","expand","block",3,"disabled"],["color","danger","expand","block",3,"click"],[3,"value"]],template:function(o,e){1&o&&(l.Ob(0,"ion-header"),l.Ob(1,"ion-toolbar"),l.Ob(2,"ion-buttons",0),l.Mb(3,"ion-back-button"),l.Nb(),l.Ob(4,"ion-title"),l.nc(5,"\xc9diter / Supprimer"),l.Nb(),l.Nb(),l.Nb(),l.Ob(6,"ion-content"),l.Ob(7,"ion-card"),l.Ob(8,"ion-card-header"),l.Mb(9,"ion-img",1),l.Ob(10,"ion-grid"),l.Ob(11,"ion-row",2),l.Ob(12,"ion-card-title"),l.nc(13),l.Nb(),l.Nb(),l.Ob(14,"ion-row",2),l.Ob(15,"ion-card-subtitle"),l.nc(16),l.Nb(),l.Nb(),l.Ob(17,"ion-row",2),l.Ob(18,"ion-text"),l.nc(19," \xc9diteur: "),l.Nb(),l.nc(20),l.Nb(),l.Nb(),l.Nb(),l.Nb(),l.Ob(21,"ion-card"),l.Ob(22,"form",3),l.Wb("ngSubmit",function(){return e.onSubmit()}),l.Ob(23,"ion-card-content"),l.Ob(24,"ion-item"),l.Ob(25,"ion-button",4),l.Wb("click",function(){return e.takePhoto()}),l.nc(26," Photo "),l.Nb(),l.Nb(),l.Nb(),l.Ob(27,"ion-card-content"),l.Ob(28,"ion-item"),l.Ob(29,"ion-label",5),l.nc(30,"Titre"),l.Nb(),l.Mb(31,"ion-input",6),l.Nb(),l.Nb(),l.Ob(32,"ion-card-content"),l.Ob(33,"ion-item"),l.Ob(34,"ion-label",5),l.nc(35,"Author"),l.Nb(),l.Mb(36,"ion-input",7),l.Nb(),l.Nb(),l.Ob(37,"ion-card-content"),l.Ob(38,"ion-item"),l.Ob(39,"ion-label",5),l.nc(40,"Edition"),l.Nb(),l.Mb(41,"ion-input",8),l.Nb(),l.Nb(),l.Ob(42,"ion-card-content"),l.Ob(43,"ion-item"),l.Ob(44,"ion-label",5),l.nc(45,"offre"),l.Nb(),l.Mb(46,"ion-input",9),l.Nb(),l.Nb(),l.Ob(47,"ion-card-content"),l.Ob(48,"ion-item"),l.Ob(49,"ion-label"),l.nc(50,"Categories"),l.Nb(),l.Ob(51,"ion-select",10),l.mc(52,g,2,2,"ion-select-option",11),l.Nb(),l.Nb(),l.Nb(),l.Ob(53,"ion-button",12),l.nc(54," Click me "),l.Nb(),l.Nb(),l.Ob(55,"ion-button",13),l.Wb("click",function(){return e.deleteBook(null==e.selectedBook$?null:e.selectedBook$.id)}),l.nc(56," Supprimer livre "),l.Nb(),l.Nb(),l.Nb()),2&o&&(l.Bb(9),l.dc("src",null==e.selectedBook$?null:e.selectedBook$.image),l.Bb(4),l.pc(" ",null==e.selectedBook$?null:e.selectedBook$.title," "),l.Bb(3),l.oc(null==e.selectedBook$?null:e.selectedBook$.authors),l.Bb(4),l.pc(" ",null==e.selectedBook$?null:e.selectedBook$.publisher," "),l.Bb(2),l.dc("formGroup",e.form),l.Bb(29),l.dc("placeholder",null==e.selectedBook$?null:e.selectedBook$.categoryId)("value",null==e.selectedBook$?null:e.selectedBook$.categoryId),l.Bb(1),l.dc("ngForOf",e.categories),l.Bb(1),l.dc("disabled",e.form.invalid))},directives:[p.n,p.K,p.e,p.b,p.c,p.J,p.l,p.f,p.h,p.p,p.m,p.v,p.j,p.i,p.G,b.k,b.h,b.c,p.g,p.r,p.d,p.s,p.q,p.P,b.g,b.b,p.z,p.O,i.j,p.A],styles:[".image[_ngcontent-%COMP%]{height:200px}"]}),o})();var v=t("AytR"),N=t("JIr8"),B=t("tk/3");const _=v.a.apiBooksUrl;let j=(()=>{class o{constructor(o){this._http=o}searchApiBook(o){return Object(r.b)(this,void 0,void 0,function*(){return yield this._http.get(`${_}${o}`).pipe(Object(N.a)(o=>Object(r.b)(this,void 0,void 0,function*(){return console.log("error: ",o)}))).toPromise()})}}return o.\u0275fac=function(e){return new(e||o)(l.Sb(B.a))},o.\u0275prov=l.Hb({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();const y=function(o){return["/pages/user-profile/user-book",o]};function S(o,e){if(1&o){const o=l.Pb();l.Ob(0,"ion-slide",4),l.Wb("click",function(){l.jc(o);const t=e.$implicit;return l.Yb().selectBook(t.id)}),l.Ob(1,"ion-grid",5),l.Ob(2,"ion-row",6),l.Mb(3,"img",7),l.Nb(),l.Ob(4,"ion-row",6),l.Ob(5,"p"),l.nc(6),l.Nb(),l.Nb(),l.Nb(),l.Nb()}if(2&o){const o=e.$implicit;l.dc("routerLink",l.gc(3,y,o.id)),l.Bb(3),l.dc("src",o.image,l.kc),l.Bb(3),l.oc(o.title.substr(0,25))}}let I=(()=>{class o{constructor(o,e){this._userBooksService=o,this._router=e,this.slideOpts={slidesPerView:3,coverflowEffect:{rotate:50,stretch:0,depth:100,modifier:1,slideShadows:!0}}}ngOnInit(){return Object(r.b)(this,void 0,void 0,function*(){yield this._userBooksService.getUserBooks(),this._userBooksService.userBooks$.subscribe(o=>this.userBooks$=o)})}selectBook(o){this._userBooksService.getUserBookById(o)}}return o.\u0275fac=function(e){return new(e||o)(l.Lb(u.a),l.Lb(n.e))},o.\u0275cmp=l.Fb({type:o,selectors:[["app-user-books"]],decls:7,vars:2,consts:[["color","primary"],[1,"block_list"],[3,"options"],[3,"routerLink","click",4,"ngFor","ngForOf"],[3,"routerLink","click"],["fixed",""],[1,"ion-justify-content-center"],["alt","test",1,"img_book",3,"src"]],template:function(o,e){1&o&&(l.Ob(0,"ion-content"),l.Ob(1,"ion-text",0),l.Ob(2,"h1"),l.nc(3,"Mes livres"),l.Nb(),l.Nb(),l.Ob(4,"div",1),l.Ob(5,"ion-slides",2),l.mc(6,S,7,5,"ion-slide",3),l.Nb(),l.Nb(),l.Nb()),2&o&&(l.Bb(5),l.dc("options",e.slideOpts),l.Bb(1),l.dc("ngForOf",e.userBooks$))},directives:[p.l,p.G,p.C,i.j,p.B,n.f,p.N,p.m,p.v],styles:["ion-content[_ngcontent-%COMP%]{height:100vh}.img_book[_ngcontent-%COMP%]{height:130px}.block_list[_ngcontent-%COMP%]{margin:30px 10px 10px}"]}),o})();const P=function(){return["/pages/book-detail"]};function C(o,e){if(1&o){const o=l.Pb();l.Ob(0,"ion-item",8),l.Wb("click",function(){l.jc(o);const t=e.$implicit;return l.Yb().seletedBook(t)}),l.Ob(1,"ion-thumbnail",9),l.Mb(2,"img",10),l.Nb(),l.Ob(3,"ion-label",11),l.Ob(4,"ion-text"),l.Ob(5,"h2"),l.Ob(6,"strong"),l.nc(7),l.Nb(),l.Nb(),l.Nb(),l.Ob(8,"ion-text"),l.Ob(9,"h5"),l.nc(10),l.Nb(),l.Nb(),l.Nb(),l.Nb()}if(2&o){const o=e.$implicit;l.Bb(2),l.dc("src",null!=o.volumeInfo.imageLinks&&o.volumeInfo.imageLinks.smallThumbnail?null==o.volumeInfo.imageLinks?null:o.volumeInfo.imageLinks.smallThumbnail:"../../../assets/book-cover-placeholder.jpg",l.kc),l.Bb(1),l.dc("routerLink",l.fc(4,P)),l.Bb(4),l.oc(o.volumeInfo.title),l.Bb(3),l.oc(o.volumeInfo.authors)}}function $(o,e){if(1&o&&(l.Ob(0,"ion-select-option",23),l.nc(1),l.Nb()),2&o){const o=e.$implicit;l.dc("value",o.name),l.Bb(1),l.pc(" ",o.name," ")}}function L(o,e){if(1&o){const o=l.Pb();l.Ob(0,"div"),l.Ob(1,"ion-grid",6),l.Ob(2,"ion-row"),l.Ob(3,"form",12),l.Wb("ngSubmit",function(){return l.jc(o),l.Yb().onSubmit()}),l.Ob(4,"ion-col",7),l.Ob(5,"ion-text",13),l.Ob(6,"h4"),l.nc(7,"Ajouter livre"),l.Nb(),l.Nb(),l.Nb(),l.Ob(8,"ion-col",7),l.Ob(9,"ion-item"),l.Ob(10,"ion-button",14),l.Wb("click",function(){return l.jc(o),l.Yb().takePhoto()}),l.nc(11," Photo "),l.Nb(),l.Nb(),l.Nb(),l.Ob(12,"ion-col",7),l.Ob(13,"ion-item"),l.Ob(14,"ion-label",15),l.nc(15,"Titre"),l.Nb(),l.Mb(16,"ion-input",16),l.Nb(),l.Nb(),l.Ob(17,"ion-col",7),l.Ob(18,"ion-item"),l.Ob(19,"ion-label",15),l.nc(20,"Author"),l.Nb(),l.Mb(21,"ion-input",17),l.Nb(),l.Nb(),l.Ob(22,"ion-col",7),l.Ob(23,"ion-item"),l.Ob(24,"ion-label",15),l.nc(25,"Editeur"),l.Nb(),l.Mb(26,"ion-input",18),l.Nb(),l.Nb(),l.Ob(27,"ion-col",7),l.Ob(28,"ion-item"),l.Ob(29,"ion-label",15),l.nc(30,"Offre"),l.Nb(),l.Mb(31,"ion-input",19),l.Nb(),l.Nb(),l.Ob(32,"ion-col",7),l.Ob(33,"ion-item"),l.Ob(34,"ion-label"),l.nc(35,"Categories"),l.Nb(),l.Ob(36,"ion-select",20),l.mc(37,$,2,2,"ion-select-option",21),l.Nb(),l.Nb(),l.Nb(),l.Ob(38,"ion-col",7),l.Ob(39,"ion-button",22),l.nc(40," Valider "),l.Nb(),l.Nb(),l.Nb(),l.Nb(),l.Nb(),l.Nb()}if(2&o){const o=l.Yb();l.Bb(3),l.dc("formGroup",o.form),l.Bb(34),l.dc("ngForOf",o.categoriesList)}}const w=[{path:"",component:(()=>{class o{constructor(o,e,t,i,n,r){this._apiService=o,this._router=e,this._bookService=t,this.cameraService=i,this._formBuilder=n,this._angularAuth=r,this.bookSelected={title:"",authors:"",image:"",publisher:""},this.toggleForm=!1}ngOnInit(){return Object(r.b)(this,void 0,void 0,function*(){this.form=this._formBuilder.group({userId:["",b.j.required],title:["",b.j.required],authors:["",b.j.required],categoryId:["",b.j.required],image:["",b.j.required],publisher:["",b.j.required],offer:["",b.j.required]}),this.categoriesList=yield this._bookService.getCategories().pipe(Object(s.a)()).toPromise()})}getApibooks(o){return Object(r.b)(this,void 0,void 0,function*(){const e=yield this._apiService.searchApiBook(o);this.booksList=e.items})}seletedBook(o){var e;this.bookSelected=Object.assign(Object.assign({},this.bookSelected),{title:o.volumeInfo.title,authors:Array.isArray(o.volumeInfo.authors)?o.volumeInfo.authors[0]:o.volumeInfo.authors,image:null===(e=o.volumeInfo.imageLinks)||void 0===e?void 0:e.smallThumbnail,publisher:o.volumeInfo.publisher}),this._bookService.set(this.bookSelected),this._router.navigate(["/pages/book-detail"])}toggleBookForm(){this.toggleForm=!this.toggleForm}takePhoto(){return Object(r.b)(this,void 0,void 0,function*(){const o=yield this.cameraService.takePhoto();this.photoUrl=o})}onSubmit(){return Object(r.b)(this,void 0,void 0,function*(){const o=yield this._angularAuth.currentUser.then(o=>o.uid),e=Object.assign(Object.assign({},this.form.value),{userId:o,image:this.photoUrl});this._bookService.createBook(e),this.toggleForm=!1})}getEvent(o){this.booksList=[]}}return o.\u0275fac=function(e){return new(e||o)(l.Lb(j),l.Lb(n.e),l.Lb(a.a),l.Lb(O),l.Lb(b.a),l.Lb(f.a))},o.\u0275cmp=l.Fb({type:o,selectors:[["app-user-profile"]],decls:20,vars:2,consts:[["type","text",3,"ionClear"],["search",""],["color","primary","expand","block","fill","solid",3,"click"],[3,"click",4,"ngFor","ngForOf"],["color","primary","expand","block",3,"click"],[4,"ngIf"],["fixed",""],["size","12"],[3,"click"],["slot","start"],[3,"src"],[3,"routerLink"],[1,"formSubmit",3,"formGroup","ngSubmit"],["color","primary"],["expand","block",3,"click"],["position","stacked"],["formControlName","title"],["formControlName","authors"],["formControlName","publisher"],["formControlName","offer"],["formControlName","categoryId","okText","Ok","cancelText","Cancel"],[3,"value",4,"ngFor","ngForOf"],["expand","block","type","submit",1,"btn"],[3,"value"]],template:function(o,e){if(1&o){const o=l.Pb();l.Ob(0,"ion-header"),l.Ob(1,"ion-toolbar"),l.Ob(2,"ion-title"),l.nc(3,"Profile"),l.Nb(),l.Nb(),l.Nb(),l.Ob(4,"ion-content"),l.Ob(5,"p"),l.nc(6,"Cherchez votre livre ou ajouter vous m\xeame"),l.Nb(),l.Ob(7,"ion-searchbar",0,1),l.Wb("ionClear",function(o){return e.getEvent(o)}),l.Nb(),l.Ob(9,"ion-button",2),l.Wb("click",function(){l.jc(o);const t=l.ic(8);return e.getApibooks(t.value)}),l.nc(10,"Valider"),l.Nb(),l.Ob(11,"ion-list"),l.mc(12,C,11,5,"ion-item",3),l.Nb(),l.Ob(13,"ion-button",4),l.Wb("click",function(){return e.toggleBookForm()}),l.nc(14,"Enregister moi m\xeame"),l.Nb(),l.mc(15,L,41,2,"div",5),l.Ob(16,"ion-grid",6),l.Ob(17,"ion-row"),l.Ob(18,"ion-col",7),l.Mb(19,"app-user-books"),l.Nb(),l.Nb(),l.Nb(),l.Nb()}2&o&&(l.Bb(12),l.dc("ngForOf",e.booksList),l.Bb(3),l.dc("ngIf",e.toggleForm))},directives:[p.n,p.K,p.J,p.l,p.w,p.P,p.d,p.t,i.j,i.k,p.m,p.v,p.k,I,p.r,p.I,p.s,n.f,p.N,p.G,b.k,b.h,b.c,p.q,b.g,b.b,p.z,p.O,p.A],styles:[".btn[_ngcontent-%COMP%]{height:40px;margin-top:15px}.btn[_ngcontent-%COMP%], .formSubmit[_ngcontent-%COMP%]{width:100%}"]}),o})()},{path:"user-book/:id",component:k}];let x=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=l.Jb({type:o}),o.\u0275inj=l.Ib({imports:[[n.h.forChild(w)],n.h]}),o})();var M=t("PCNd");let F=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=l.Jb({type:o}),o.\u0275inj=l.Ib({imports:[[i.c,x,p.L,M.a,b.i]]}),o})()}}]);