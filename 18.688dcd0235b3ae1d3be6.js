(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"7Z3z":function(e,o,t){"use strict";t.r(o),t.d(o,"UserProfileModule",function(){return E});var i=t("ofXK"),n=t("tyNb"),r=t("mrSG"),s=t("3Pt+"),b=t("vkgz"),c=t("SxV6"),l=t("fXoL"),a=t("vcGB"),u=t("qBIq"),d=t("gcOT"),g=t("2Vo4"),h=t("Vaw3"),m=t("UbJi");let f=(()=>{class e{constructor(e,o){this._fireStorage=e,this._angularAuth=o,this._urlPhotoSubject$=new g.a(null),this.urlPhoto$=this._urlPhotoSubject$.asObservable()}takePhoto(){return Object(r.b)(this,void 0,void 0,function*(){const e=yield d.b.getPhoto({resultType:d.c.Uri,source:d.d.Camera,quality:100});return this.imageUrl=e.webPath,this.saveImage()})}saveImage(){return Object(r.b)(this,void 0,void 0,function*(){const e=yield this._angularAuth.currentUser.then(e=>e.uid),o=Date.now(),t=yield this.readAsBlob(this.imageUrl),i=this._fireStorage.ref(`${o}${e}`);return yield i.put(t),yield i.getDownloadURL().toPromise()})}readAsBlob(e){return Object(r.b)(this,void 0,void 0,function*(){const o=yield fetch(e);return yield o.blob()})}}return e.\u0275fac=function(o){return new(o||e)(l.Sb(h.a),l.Sb(m.a))},e.\u0275prov=l.Hb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var O=t("M7+f"),p=t("TEn/");function k(e,o){1&e&&l.bc(0,0,["*ngIf","interests"])}function v(e,o){if(1&e){const e=l.Pb();l.Ob(0,"ion-item"),l.Ob(1,"ion-label"),l.nc(2,"Offre"),l.Nb(),l.Ob(3,"ion-label"),l.nc(4),l.Nb(),l.Ob(5,"ion-label"),l.nc(6),l.Nb(),l.Ob(7,"ion-icon",18),l.Wb("click",function(){l.jc(e);const t=o.$implicit,i=l.Yb();return i.deleteInterest(null==t?null:t.id,null==i.selectedBook$?null:i.selectedBook$.id)}),l.Nb(),l.Nb()}if(2&e){const e=o.$implicit;l.Bb(4),l.oc(null==e?null:e.offer),l.Bb(2),l.oc(null==e?null:e.contact)}}function N(e,o){if(1&e&&(l.Ob(0,"ion-select-option",19),l.nc(1),l.Nb()),2&e){const e=o.$implicit;l.dc("value",e.name),l.Bb(1),l.pc(" ",e.name," ")}}function B(e,o){if(1&e&&(l.Ob(0,"ion-select-option"),l.nc(1),l.Nb()),2&e){const e=o.$implicit;l.Bb(1),l.pc(" ",e.name," ")}}const y=["*"];let C=(()=>{class e{constructor(e,o,t,i,n,r,s,b){this._userBookService=e,this._route=o,this._formBuilder=t,this._bookservice=i,this._cameraService=n,this._router=r,this._interestService=s,this._toast=b,this.isSubCategory=!1}ngOnInit(){this.form=this._formBuilder.group({title:["",s.k.required],authors:["",s.k.required],publisher:["",s.k.required],image:[""],offer:["",s.k.required],category:["",s.k.required]}),this._route.paramMap.subscribe(e=>{const o=e.get("id");this._userBookService.getUserBookById(o),this._interestService.getListInterstsByBookId(o)}),this.subscription=this._userBookService.bookDetail$.pipe(Object(b.a)(e=>this.form.patchValue(e)),Object(b.a)(e=>this.imageUrl=null==e?void 0:e.image),Object(b.a)(e=>this._bookId=null==e?void 0:e.id)).subscribe(e=>this.selectedBook$=e),this._getCategories(),this._interestService.interest$.pipe(Object(b.a)(e=>e)).subscribe(e=>this.interests=e)}_getCategories(){return Object(r.b)(this,void 0,void 0,function*(){const e=yield this._bookservice.getCategories().pipe(Object(c.a)()).toPromise();this.categories=e})}takePhoto(){return Object(r.b)(this,void 0,void 0,function*(){const e=yield this._cameraService.takePhoto();this.imageUrl=e})}onSubmit(){const e=Object.assign(Object.assign({},this.form.value),{id:this._bookId,image:this.imageUrl,subcategory:this.selectedSubCategory?this.selectedSubCategory:""});this._bookservice.updateBook(e),this.displayPopUp()}deleteBook(e){this._userBookService.deleteBook(e),this._router.navigate(["pages/user-profile"])}deleteInterest(e,o){console.log("booId: ",o),this._interestService.deleteInteret(e,o)}displayPopUp(){return Object(r.b)(this,void 0,void 0,function*(){const e=yield this._toast.create({message:"Enregistr\xe9 avec success",position:"bottom",keyboardClose:!0,color:"dark",duration:2e3});yield e.present()})}selectSubCategory(e){this.selectedSubCategory=e.detail.value}getSubcategory(e){this.formSubCategories=e.detail.value,this.subCategoriesList(e.detail.value)}subCategoriesList(e){this._bookservice.getSubCategories(e),this.subCategory$=this._bookservice.subCategories$,this._bookservice.subCategories$.pipe(Object(b.a)(e=>this.isSubCategory=!(e.length>0))).subscribe(e=>e)}ngOnDestroy(){this.subscription.unsubscribe()}}return e.\u0275fac=function(o){return new(o||e)(l.Lb(a.a),l.Lb(n.a),l.Lb(s.a),l.Lb(u.a),l.Lb(f),l.Lb(n.e),l.Lb(O.a),l.Lb(p.R))},e.\u0275cmp=l.Fb({type:e,selectors:[["app-book-edit-remove"]],ngContentSelectors:y,decls:66,vars:15,consts:[[1,"ion-no-border"],["slot","start"],[1,"image",3,"src"],[1,"ion-justify-content-center"],[4,"ngIf"],[4,"ngFor","ngForOf"],[3,"formGroup","ngSubmit"],["expand","block",3,"click"],["position","stacked"],["formControlName","title","value","title"],["formControlName","authors"],["formControlName","publisher"],["formControlName","offer"],["formControlName","category","okText","Ok","cancelText","Cancel",3,"placeholder","value","ionChange"],[3,"value",4,"ngFor","ngForOf"],["okText","Okay","cancelText","Dismiss",3,"disabled","ionChange"],["type","submit","expand","block",3,"disabled"],["color","danger","expand","block",3,"click"],["name","trash-outline",3,"click"],[3,"value"]],template:function(e,o){1&e&&(l.cc(),l.Ob(0,"ion-header",0),l.Ob(1,"ion-toolbar"),l.Ob(2,"ion-buttons",1),l.Mb(3,"ion-back-button"),l.Nb(),l.Ob(4,"ion-title"),l.nc(5,"\xc9diter / Supprimer"),l.Nb(),l.Nb(),l.Nb(),l.Ob(6,"ion-content"),l.Ob(7,"ion-card"),l.Ob(8,"ion-card-header"),l.Mb(9,"ion-img",2),l.Ob(10,"ion-grid"),l.Ob(11,"ion-row",3),l.Ob(12,"ion-card-title"),l.nc(13),l.Nb(),l.Nb(),l.Ob(14,"ion-row",3),l.Ob(15,"ion-card-subtitle"),l.nc(16),l.Nb(),l.Nb(),l.Ob(17,"ion-row",3),l.Ob(18,"ion-text"),l.nc(19," \xc9diteur: "),l.Nb(),l.nc(20),l.Nb(),l.Nb(),l.Nb(),l.Nb(),l.Ob(21,"ion-list"),l.mc(22,k,1,0,"ng-content",4),l.mc(23,v,8,2,"ion-item",5),l.Nb(),l.Ob(24,"ion-card"),l.Ob(25,"form",6),l.Wb("ngSubmit",function(){return o.onSubmit()}),l.Ob(26,"ion-card-content"),l.Ob(27,"ion-item"),l.Ob(28,"ion-button",7),l.Wb("click",function(){return o.takePhoto()}),l.nc(29," Photo "),l.Nb(),l.Nb(),l.Nb(),l.Ob(30,"ion-card-content"),l.Ob(31,"ion-item"),l.Ob(32,"ion-label",8),l.nc(33,"Titre"),l.Nb(),l.Mb(34,"ion-input",9),l.Nb(),l.Nb(),l.Ob(35,"ion-card-content"),l.Ob(36,"ion-item"),l.Ob(37,"ion-label",8),l.nc(38,"Author"),l.Nb(),l.Mb(39,"ion-input",10),l.Nb(),l.Nb(),l.Ob(40,"ion-card-content"),l.Ob(41,"ion-item"),l.Ob(42,"ion-label",8),l.nc(43,"Edition"),l.Nb(),l.Mb(44,"ion-input",11),l.Nb(),l.Nb(),l.Ob(45,"ion-card-content"),l.Ob(46,"ion-item"),l.Ob(47,"ion-label",8),l.nc(48,"offre"),l.Nb(),l.Mb(49,"ion-input",12),l.Nb(),l.Nb(),l.Ob(50,"ion-card-content"),l.Ob(51,"ion-item"),l.Ob(52,"ion-label"),l.nc(53,"Categories"),l.Nb(),l.Ob(54,"ion-select",13),l.Wb("ionChange",function(e){return o.getSubcategory(e)}),l.mc(55,N,2,2,"ion-select-option",14),l.Nb(),l.Nb(),l.Ob(56,"ion-item"),l.Ob(57,"ion-label"),l.nc(58,"Sub-categories"),l.Nb(),l.Ob(59,"ion-select",15),l.Wb("ionChange",function(e){return o.selectSubCategory(e)}),l.mc(60,B,2,1,"ion-select-option",5),l.Zb(61,"async"),l.Nb(),l.Nb(),l.Nb(),l.Ob(62,"ion-button",16),l.nc(63," Click me "),l.Nb(),l.Nb(),l.Ob(64,"ion-button",17),l.Wb("click",function(){return o.deleteBook(null==o.selectedBook$?null:o.selectedBook$.id)}),l.nc(65," Supprimer livre "),l.Nb(),l.Nb(),l.Nb()),2&e&&(l.Bb(9),l.dc("src",null==o.selectedBook$?null:o.selectedBook$.image),l.Bb(4),l.pc(" ",null==o.selectedBook$?null:o.selectedBook$.title," "),l.Bb(3),l.oc(null==o.selectedBook$?null:o.selectedBook$.authors),l.Bb(4),l.pc(" ",null==o.selectedBook$?null:o.selectedBook$.publisher," "),l.Bb(2),l.dc("ngIf",o.interests),l.Bb(1),l.dc("ngForOf",o.interests),l.Bb(2),l.dc("formGroup",o.form),l.Bb(29),l.dc("placeholder",null==o.selectedBook$?null:o.selectedBook$.categoryId)("value",null==o.selectedBook$?null:o.selectedBook$.categoryId),l.Bb(1),l.dc("ngForOf",o.categories),l.Bb(4),l.dc("disabled",o.isSubCategory),l.Bb(1),l.dc("ngForOf",l.ac(61,13,o.subCategory$)),l.Bb(2),l.dc("disabled",o.form.invalid))},directives:[p.o,p.L,p.f,p.b,p.c,p.K,p.m,p.g,p.i,p.q,p.n,p.w,p.k,p.j,p.H,p.u,i.k,i.j,s.l,s.h,s.c,p.h,p.s,p.e,p.t,p.r,p.Q,s.g,s.b,p.A,p.P,p.p,p.B],pipes:[i.b],styles:[".image[_ngcontent-%COMP%]{height:200px}ion-icon[_ngcontent-%COMP%]{color:red}"]}),e})();var S=t("AytR"),_=t("JIr8"),j=t("tk/3");const $=S.a.apiBooksUrl;let I=(()=>{class e{constructor(e){this._http=e}searchApiBook(e){return Object(r.b)(this,void 0,void 0,function*(){return yield this._http.get(`${$}${e}`).pipe(Object(_.a)(e=>Object(r.b)(this,void 0,void 0,function*(){return console.log("error: ",e)}))).toPromise()})}}return e.\u0275fac=function(o){return new(o||e)(l.Sb(j.a))},e.\u0275prov=l.Hb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var L=t("4vlQ");function P(e,o){1&e&&l.Mb(0,"ion-icon",10)}const w=function(e){return["/pages/user-profile/user-book",e]};function x(e,o){if(1&e){const e=l.Pb();l.Ob(0,"ion-slide",4),l.Wb("click",function(){l.jc(e);const t=o.$implicit;return l.Yb().selectBook(t.id)}),l.Ob(1,"ion-grid",5),l.Ob(2,"ion-row",6),l.Mb(3,"img",7),l.Nb(),l.Ob(4,"ion-row",8),l.Ob(5,"ion-label"),l.nc(6),l.Nb(),l.mc(7,P,1,0,"ion-icon",9),l.Nb(),l.Nb(),l.Nb()}if(2&e){const e=o.$implicit;l.dc("routerLink",l.gc(4,w,e.id)),l.Bb(3),l.dc("src",e.image,l.kc),l.Bb(3),l.oc(e.title.substr(0,25)),l.Bb(1),l.dc("ngIf",e.interests>0)}}let F=(()=>{class e{constructor(e,o){this._userBooksService=e,this._router=o,this.slideOpts={slidesPerView:3,coverflowEffect:{rotate:50,stretch:0,depth:100,modifier:1,slideShadows:!0}}}ngOnInit(){return Object(r.b)(this,void 0,void 0,function*(){yield this._userBooksService.getUserBooks(),this._userBooksService.userBooks$.subscribe(e=>this.userBooks$=e)})}selectBook(e){this._userBooksService.getUserBookById(e)}}return e.\u0275fac=function(o){return new(o||e)(l.Lb(a.a),l.Lb(n.e))},e.\u0275cmp=l.Fb({type:e,selectors:[["app-user-books"]],decls:8,vars:2,consts:[["color","primary"],[1,"block_list"],[3,"options"],[3,"routerLink","click",4,"ngFor","ngForOf"],[3,"routerLink","click"],["fixed",""],[1,"ion-justify-content-center"],["alt","test",1,"img_book",3,"src"],[1,"ion-justify-content-center","ion-margin-top"],["size","large","name","alert-circle-sharp","color","warning",4,"ngIf"],["size","large","name","alert-circle-sharp","color","warning"]],template:function(e,o){1&e&&(l.Ob(0,"ion-content"),l.Ob(1,"ion-text",0),l.Ob(2,"h1"),l.nc(3,"Mes livres"),l.Nb(),l.Nb(),l.Ob(4,"div",1),l.Ob(5,"ion-slides",2),l.mc(6,x,8,6,"ion-slide",3),l.Nb(),l.Mb(7,"app-user-book-researched"),l.Nb(),l.Nb()),2&e&&(l.Bb(5),l.dc("options",o.slideOpts),l.Bb(1),l.dc("ngForOf",o.userBooks$))},directives:[p.m,p.H,p.D,i.j,L.a,p.C,n.f,p.O,p.n,p.w,p.t,i.k,p.p],styles:["ion-content[_ngcontent-%COMP%]{height:600px}.img_book[_ngcontent-%COMP%]{height:130px}.block_list[_ngcontent-%COMP%]{margin:30px 10px 10px}"]}),e})();const M=function(){return["/pages/book-detail"]};function U(e,o){if(1&e){const e=l.Pb();l.Ob(0,"ion-item",9),l.Wb("click",function(){l.jc(e);const t=o.$implicit;return l.Yb().seletedBook(t)}),l.Ob(1,"ion-thumbnail",10),l.Mb(2,"img",11),l.Nb(),l.Ob(3,"ion-label",12),l.Ob(4,"ion-text"),l.Ob(5,"h2"),l.Ob(6,"strong"),l.nc(7),l.Nb(),l.Nb(),l.Nb(),l.Ob(8,"ion-text"),l.Ob(9,"h5"),l.nc(10),l.Nb(),l.Nb(),l.Nb(),l.Nb()}if(2&e){const e=o.$implicit;l.Bb(2),l.dc("src",null!=e.volumeInfo.imageLinks&&e.volumeInfo.imageLinks.smallThumbnail?null==e.volumeInfo.imageLinks?null:e.volumeInfo.imageLinks.smallThumbnail:"../../../assets/book-cover-placeholder.jpg",l.kc),l.Bb(1),l.dc("routerLink",l.fc(4,M)),l.Bb(4),l.oc(e.volumeInfo.title),l.Bb(3),l.oc(e.volumeInfo.authors)}}function q(e,o){if(1&e&&(l.Ob(0,"ion-select-option",27),l.nc(1),l.Nb()),2&e){const e=o.$implicit;l.dc("value",e.name),l.Bb(1),l.pc(" ",e.name," ")}}function A(e,o){if(1&e&&(l.Ob(0,"ion-select-option",27),l.nc(1),l.Nb()),2&e){const e=o.$implicit;l.dc("value",e.id),l.Bb(1),l.pc(" ",e.name," ")}}function T(e,o){if(1&e){const e=l.Pb();l.Ob(0,"div"),l.Ob(1,"ion-grid",7),l.Ob(2,"ion-row"),l.Ob(3,"form",13),l.Wb("ngSubmit",function(){return l.jc(e),l.Yb().onSubmit()}),l.Ob(4,"ion-col",8),l.Ob(5,"ion-text",14),l.Ob(6,"h4"),l.nc(7,"Ajouter livre"),l.Nb(),l.Nb(),l.Nb(),l.Ob(8,"ion-col",8),l.Ob(9,"ion-segment",15),l.Wb("ionChange",function(o){return l.jc(e),l.Yb().segmentChanged(o)}),l.Ob(10,"ion-segment-button",16),l.Ob(11,"ion-label"),l.nc(12,"J'offre"),l.Nb(),l.Nb(),l.Ob(13,"ion-segment-button",17),l.Ob(14,"ion-label"),l.nc(15,"Je recherche"),l.Nb(),l.Nb(),l.Nb(),l.Nb(),l.Ob(16,"ion-col",8),l.Ob(17,"ion-item"),l.Ob(18,"ion-button",5),l.Wb("click",function(){return l.jc(e),l.Yb().takePhoto()}),l.nc(19," Photo "),l.Nb(),l.Nb(),l.Nb(),l.Ob(20,"ion-col",8),l.Ob(21,"ion-item"),l.Ob(22,"ion-label",18),l.nc(23,"Titre"),l.Nb(),l.Mb(24,"ion-input",19),l.Nb(),l.Nb(),l.Ob(25,"ion-col",8),l.Ob(26,"ion-item"),l.Ob(27,"ion-label",18),l.nc(28,"Author"),l.Nb(),l.Mb(29,"ion-input",20),l.Nb(),l.Nb(),l.Ob(30,"ion-col",8),l.Ob(31,"ion-item"),l.Ob(32,"ion-label",18),l.nc(33,"Edition"),l.Nb(),l.Mb(34,"ion-input",21),l.Nb(),l.Nb(),l.Ob(35,"ion-col",8),l.Ob(36,"ion-item"),l.Ob(37,"ion-label",18),l.nc(38,"Offre"),l.Nb(),l.Mb(39,"ion-input",22),l.Nb(),l.Nb(),l.Ob(40,"ion-col",8),l.Ob(41,"ion-item"),l.Ob(42,"ion-label"),l.nc(43,"Categories"),l.Nb(),l.Ob(44,"ion-select",23),l.Wb("ionChange",function(o){return l.jc(e),l.Yb()._selectedCategory(o)}),l.mc(45,q,2,2,"ion-select-option",24),l.Nb(),l.Nb(),l.Nb(),l.Ob(46,"ion-col",8),l.Ob(47,"ion-item"),l.Ob(48,"ion-label"),l.nc(49,"Sub-categories"),l.Nb(),l.Ob(50,"ion-select",25),l.Wb("ionChange",function(o){return l.jc(e),l.Yb().selecteSubCategory(o)}),l.mc(51,A,2,2,"ion-select-option",24),l.Zb(52,"async"),l.Nb(),l.Nb(),l.Nb(),l.Ob(53,"ion-col",8),l.Ob(54,"ion-button",26),l.nc(55," Valider "),l.Nb(),l.Nb(),l.Nb(),l.Nb(),l.Nb(),l.Nb()}if(2&e){const e=l.Yb();l.Bb(3),l.dc("formGroup",e.form),l.Bb(42),l.dc("ngForOf",e.categoriesList),l.Bb(5),l.dc("disabled",e.isSubCategory),l.Bb(1),l.dc("ngForOf",l.ac(52,4,e.subCategory$))}}const W=[{path:"",component:(()=>{class e{constructor(e,o,t,i,n,r,s){this._apiService=e,this._router=o,this._bookService=t,this.cameraService=i,this._formBuilder=n,this._angularAuth=r,this._toast=s,this.bookSelected={title:"",authors:"",image:"",publisher:""},this.toggleForm=!1,this.formFormat="offer",this.isSubCategory=!0}ngOnInit(){return Object(r.b)(this,void 0,void 0,function*(){this.form=this._formBuilder.group({userId:["",s.k.required],title:["",s.k.required],authors:["",s.k.required],categoryId:["",s.k.required],image:["",s.k.required],publisher:["",s.k.required],offer:["",s.k.required]}),this.categoriesList=yield this._bookService.getCategories().pipe(Object(c.a)()).toPromise()})}getApibooks(e){return Object(r.b)(this,void 0,void 0,function*(){const o=yield this._apiService.searchApiBook(e);this.booksList=o.items})}seletedBook(e){var o;this.bookSelected=Object.assign(Object.assign({},this.bookSelected),{title:e.volumeInfo.title,authors:Array.isArray(e.volumeInfo.authors)?e.volumeInfo.authors[0]:e.volumeInfo.authors,image:null===(o=e.volumeInfo.imageLinks)||void 0===o?void 0:o.smallThumbnail,publisher:e.volumeInfo.publisher}),this.booksList=[],this._router.navigate(["/pages/book-detail"],{queryParams:this.bookSelected})}toggleBookForm(){this.toggleForm=!this.toggleForm}takePhoto(){return Object(r.b)(this,void 0,void 0,function*(){const e=yield this.cameraService.takePhoto();this.photoUrl=e})}selecteSubCategory(e){this.selectedSubCategory=e.detail.value}_selectedCategory(e){this.subCategoriesList(e.detail.value)}subCategoriesList(e){this._bookService.getSubCategories(e),this.subCategory$=this._bookService.subCategories$,this._bookService.subCategories$.pipe(Object(b.a)(e=>this.isSubCategory=!(e.length>0))).subscribe(e=>e)}onSubmit(){return Object(r.b)(this,void 0,void 0,function*(){const e=yield this._angularAuth.currentUser.then(e=>e.uid),o=Object.assign(Object.assign({},this.form.value),{userId:e,image:this.photoUrl,interests:0,researched:"offer"!==this.formFormat,subcategory:this.selectedSubCategory?this.selectedSubCategory:""});this._bookService.createBook(o),this.form.reset(),this.displayPopUp(),this.toggleForm=!1})}displayPopUp(){return Object(r.b)(this,void 0,void 0,function*(){const e=yield this._toast.create({message:"Livre enregistr\xe9 avec success",position:"bottom",keyboardClose:!0,color:"dark",duration:2e3});yield e.present()})}getEvent(e){this.booksList=[]}segmentChanged(e){this.formFormat=e.target.value,console.log("event: ",e)}}return e.\u0275fac=function(o){return new(o||e)(l.Lb(I),l.Lb(n.e),l.Lb(u.a),l.Lb(f),l.Lb(s.a),l.Lb(m.a),l.Lb(p.R))},e.\u0275cmp=l.Fb({type:e,selectors:[["app-user-profile"]],decls:20,vars:2,consts:[[1,"ion-no-border"],["type","text",3,"ionClear"],["search",""],["color","academicus-green","expand","block","fill","solid",3,"click"],[3,"click",4,"ngFor","ngForOf"],["color","academicus-green","expand","block",3,"click"],[4,"ngIf"],["fixed",""],["size","12"],[3,"click"],["slot","start"],[3,"src"],[3,"routerLink"],[1,"formSubmit",3,"formGroup","ngSubmit"],["color","academicus-green"],["color","academicus-green","value","offer",3,"ionChange"],["value","offer"],["value","request"],["position","stacked"],["formControlName","title"],["formControlName","authors"],["formControlName","publisher"],["formControlName","offer"],["formControlName","categoryId","okText","Ok","cancelText","Cancel",3,"ionChange"],[3,"value",4,"ngFor","ngForOf"],["okText","Ok","cancelText","Cancel",3,"disabled","ionChange"],["color","academicus-green","expand","block","type","submit",1,"btn"],[3,"value"]],template:function(e,o){if(1&e){const e=l.Pb();l.Ob(0,"ion-header",0),l.Ob(1,"ion-toolbar"),l.Ob(2,"ion-title"),l.nc(3,"Profile"),l.Nb(),l.Nb(),l.Nb(),l.Ob(4,"ion-content"),l.Ob(5,"p"),l.nc(6,"Cherchez votre livre ou ajouter vous m\xeame"),l.Nb(),l.Ob(7,"ion-searchbar",1,2),l.Wb("ionClear",function(e){return o.getEvent(e)}),l.Nb(),l.Ob(9,"ion-button",3),l.Wb("click",function(){l.jc(e);const t=l.ic(8);return o.getApibooks(t.value)}),l.nc(10,"Valider "),l.Nb(),l.Ob(11,"ion-list"),l.mc(12,U,11,5,"ion-item",4),l.Nb(),l.Ob(13,"ion-button",5),l.Wb("click",function(){return o.toggleBookForm()}),l.nc(14,"Enregister moi m\xeame"),l.Nb(),l.mc(15,T,56,6,"div",6),l.Ob(16,"ion-grid",7),l.Ob(17,"ion-row"),l.Ob(18,"ion-col",8),l.Mb(19,"app-user-books"),l.Nb(),l.Nb(),l.Nb(),l.Nb()}2&e&&(l.Bb(12),l.dc("ngForOf",o.booksList),l.Bb(3),l.dc("ngIf",o.toggleForm))},directives:[p.o,p.L,p.K,p.m,p.x,p.Q,p.e,p.u,i.j,i.k,p.n,p.w,p.l,F,p.s,p.J,p.t,n.f,p.O,p.H,s.l,s.h,s.c,p.y,p.P,p.z,p.r,s.g,s.b,p.A,p.B],pipes:[i.b],styles:[".btn[_ngcontent-%COMP%]{height:40px;margin-top:15px}.btn[_ngcontent-%COMP%], .formSubmit[_ngcontent-%COMP%]{width:100%}"]}),e})()},{path:"user-book/:id",component:C}];let J=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=l.Jb({type:e}),e.\u0275inj=l.Ib({imports:[[n.h.forChild(W)],n.h]}),e})();var Y=t("PCNd");let E=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=l.Jb({type:e}),e.\u0275inj=l.Ib({imports:[[i.c,J,p.M,Y.a,s.i]]}),e})()}}]);