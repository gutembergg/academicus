(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"1seG":function(e,t,o){"use strict";o.d(t,"a",function(){return a});var i=o("fXoL"),n=o("qBIq"),s=o("tyNb"),r=o("TEn/"),c=o("ofXK");function b(e,t){if(1&e){const e=i.Pb();i.Ob(0,"ion-slide",4),i.Wb("click",function(){i.jc(e);const o=t.$implicit;return i.Yb().selecteBook(o.id)}),i.Ob(1,"ion-grid",5),i.Ob(2,"ion-row",6),i.Mb(3,"img",7),i.Nb(),i.Ob(4,"ion-row",6),i.Ob(5,"p"),i.nc(6),i.Nb(),i.Nb(),i.Nb(),i.Nb()}if(2&e){const e=t.$implicit;i.Bb(3),i.dc("src",e.image,i.kc),i.Bb(3),i.oc(e.title)}}let a=(()=>{class e{constructor(e,t){this._bookService=e,this._router=t,this.slideOpts={slidesPerView:3,coverflowEffect:{rotate:50,stretch:0,depth:100,modifier:1,slideShadows:!0}}}ngOnInit(){this.researchedBook$=this._bookService.researchedBooks$}selecteBook(e){this._router.navigate(["/pages/home/book-finded",e])}}return e.\u0275fac=function(t){return new(t||e)(i.Lb(n.a),i.Lb(s.e))},e.\u0275cmp=i.Fb({type:e,selectors:[["app-researched-book"]],decls:8,vars:4,consts:[[1,"block_list"],["color","academicus-green"],[3,"options"],[3,"click",4,"ngFor","ngForOf"],[3,"click"],["fixed",""],[1,"ion-justify-content-center"],["alt","test",1,"img_book",3,"src"]],template:function(e,t){1&e&&(i.Ob(0,"ion-content"),i.Ob(1,"div",0),i.Ob(2,"ion-text",1),i.Ob(3,"h1"),i.nc(4,"Recherch\xe9s"),i.Nb(),i.Nb(),i.Ob(5,"ion-slides",2),i.mc(6,b,7,2,"ion-slide",3),i.Zb(7,"async"),i.Nb(),i.Nb(),i.Nb()),2&e&&(i.Bb(5),i.dc("options",t.slideOpts),i.Bb(1),i.dc("ngForOf",i.ac(7,2,t.researchedBook$)))},directives:[r.m,r.H,r.D,c.j,r.C,r.n,r.w],pipes:[c.b],styles:[".block_list[_ngcontent-%COMP%]{margin:30px 10px 10px}.img_book[_ngcontent-%COMP%]{height:130px}"]}),e})()},"4vlQ":function(e,t,o){"use strict";o.d(t,"a",function(){return d});var i=o("vkgz"),n=o("fXoL"),s=o("vcGB"),r=o("tyNb"),c=o("TEn/"),b=o("ofXK");function a(e,t){1&e&&n.Mb(0,"ion-icon",9)}function l(e,t){if(1&e){const e=n.Pb();n.Ob(0,"ion-slide",3),n.Wb("click",function(){n.jc(e);const o=t.$implicit;return n.Yb().selecteBook(o.id)}),n.Ob(1,"ion-grid",4),n.Ob(2,"ion-row",5),n.Mb(3,"img",6),n.Nb(),n.Ob(4,"ion-row",7),n.Ob(5,"ion-label"),n.nc(6),n.Nb(),n.mc(7,a,1,0,"ion-icon",8),n.Nb(),n.Nb(),n.Nb()}if(2&e){const e=t.$implicit;n.Bb(3),n.dc("src",e.image,n.kc),n.Bb(3),n.oc(e.title.substr(0,25)),n.Bb(1),n.dc("ngIf",e.interests>0)}}let d=(()=>{class e{constructor(e,t){this._userBookService=e,this._router=t,this.slideOpts={slidesPerView:3,coverflowEffect:{rotate:50,stretch:0,depth:100,modifier:1,slideShadows:!0}}}ngOnInit(){this._userBookService.getUserResearchedBooks(),this.subscription=this._userBookService.researchedBooks$.pipe(Object(i.a)(e=>this._researchedBooks$=e)).subscribe(e=>e)}selecteBook(e){this._router.navigate(["/pages/user-profile/user-book",e])}ngOnDestroy(){this.subscription.unsubscribe()}}return e.\u0275fac=function(t){return new(t||e)(n.Lb(s.a),n.Lb(r.e))},e.\u0275cmp=n.Fb({type:e,selectors:[["app-user-book-researched"]],decls:7,vars:2,consts:[[1,"block_list"],[3,"options"],[3,"click",4,"ngFor","ngForOf"],[3,"click"],["fixed",""],[1,"ion-justify-content-center"],["alt","test",1,"img_book",3,"src"],[1,"ion-justify-content-center","ion-margin-top"],["size","large","name","alert-circle-sharp","color","success",4,"ngIf"],["size","large","name","alert-circle-sharp","color","success"]],template:function(e,t){1&e&&(n.Ob(0,"ion-content"),n.Ob(1,"div",0),n.Ob(2,"ion-text"),n.Ob(3,"h1"),n.nc(4,"Recherch\xe9s"),n.Nb(),n.Nb(),n.Ob(5,"ion-slides",1),n.mc(6,l,8,3,"ion-slide",2),n.Nb(),n.Nb(),n.Nb()),2&e&&(n.Bb(5),n.dc("options",t.slideOpts),n.Bb(1),n.dc("ngForOf",t._researchedBooks$))},directives:[c.m,c.H,c.D,b.j,c.C,c.n,c.w,c.t,b.k,c.p],styles:["ion-content[_ngcontent-%COMP%]{height:100vh;width:100vw}.block_list[_ngcontent-%COMP%]{margin-top:50px}.img_book[_ngcontent-%COMP%]{height:130px}"]}),e})()},MS4O:function(e,t,o){"use strict";o.d(t,"a",function(){return r});var i=o("2Vo4"),n=o("fXoL"),s=o("I/3d");let r=(()=>{class e{constructor(e){this._firestore=e,this._bookFinded$=new i.a(null),this.bookFinded$=this._bookFinded$.asObservable()}getUserBookById(e){this._firestore.doc(`books/${e}`).valueChanges({idField:"id"}).subscribe(e=>this._bookFinded$.next(e))}set(e){return this._bookFinded$.next(e)}get(){return this.bookFinded$}sendOffer(){console.log("ok")}}return e.\u0275fac=function(t){return new(t||e)(n.Sb(s.a))},e.\u0275prov=n.Hb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},PCNd:function(e,t,o){"use strict";o.d(t,"a",function(){return r});var i=o("ofXK"),n=o("TEn/"),s=o("fXoL");o("hKYS"),o("1seG"),o("4vlQ");let r=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=s.Jb({type:e}),e.\u0275inj=s.Ib({imports:[[i.c,n.M]]}),e})()},hKYS:function(e,t,o){"use strict";o.d(t,"a",function(){return g});var i=o("mrSG"),n=o("SxV6"),s=o("vkgz"),r=o("fXoL"),c=o("qBIq"),b=o("MS4O"),a=o("tyNb"),l=o("TEn/"),d=o("ofXK"),u=o("1seG");function h(e,t){if(1&e){const e=r.Pb();r.Ob(0,"ion-segment-button",7),r.Wb("click",function(){r.jc(e);const o=t.$implicit;return r.Yb().selectCategory(o)}),r.Mb(1,"ion-icon",8),r.Ob(2,"ion-label"),r.nc(3),r.Nb(),r.Nb()}if(2&e){const e=t.$implicit;r.dc("value",e.name),r.Bb(1),r.ec("name",e.icon),r.Bb(2),r.oc(e.name)}}function f(e,t){if(1&e){const e=r.Pb();r.Ob(0,"ion-slide"),r.Ob(1,"ion-grid",9),r.Wb("click",function(){r.jc(e);const o=t.$implicit;return r.Yb().findedBook(o.id)}),r.Ob(2,"ion-row",10),r.Mb(3,"img",11),r.Nb(),r.Ob(4,"ion-row",10),r.Ob(5,"p"),r.nc(6),r.Nb(),r.Nb(),r.Nb(),r.Nb()}if(2&e){const e=t.$implicit;r.Bb(3),r.dc("src",e.image,r.kc),r.Bb(3),r.oc(e.title.substr(0,25))}}let g=(()=>{class e{constructor(e,t,o){this._firestore=e,this._findedBook=t,this._router=o,this.max=10,this.min=0,this.slideOpts={slidesPerView:3,coverflowEffect:{rotate:50,stretch:0,depth:100,modifier:1,slideShadows:!0}}}ngOnInit(){return Object(i.b)(this,void 0,void 0,function*(){this.categoryList$=this._firestore.getCategories();const e=yield this.categoryList$.pipe(Object(n.a)()).toPromise();this.defaultCategory=e[0],this.selectCategory(this.defaultCategory)})}selectCategory(e){this.categorySelected=e,this.booksPerCategory$=this._firestore.getBooksByCategory$(e).pipe(Object(s.a)(e=>e))}findedBook(e){this._router.navigate(["/pages/home/book-finded",e])}loadData(e){return Object(i.b)(this,void 0,void 0,function*(){this.max=this.max+10,e.target.complete()})}}return e.\u0275fac=function(t){return new(t||e)(r.Lb(c.a),r.Lb(b.a),r.Lb(a.e))},e.\u0275cmp=r.Fb({type:e,selectors:[["app-categories"]],decls:16,vars:9,consts:[[1,"block"],["color","academicus-green"],["color","academicus-green","scrollable","",3,"value"],[3,"value","click",4,"ngFor","ngForOf"],[1,"block_list"],[3,"options"],[4,"ngFor","ngForOf"],[3,"value","click"],[3,"name"],["fixed","",3,"click"],[1,"ion-justify-content-center"],["alt","test",1,"img_book",3,"src"]],template:function(e,t){1&e&&(r.Ob(0,"ion-content"),r.Ob(1,"div",0),r.Ob(2,"ion-text",1),r.Ob(3,"h1"),r.nc(4,"Categories"),r.Nb(),r.Nb(),r.Ob(5,"ion-segment",2),r.mc(6,h,4,3,"ion-segment-button",3),r.Zb(7,"async"),r.Nb(),r.Nb(),r.Ob(8,"div",4),r.Ob(9,"ion-text",1),r.Ob(10,"h4"),r.nc(11),r.Nb(),r.Nb(),r.Ob(12,"ion-slides",5),r.mc(13,f,7,2,"ion-slide",6),r.Zb(14,"async"),r.Nb(),r.Nb(),r.Mb(15,"app-researched-book"),r.Nb()),2&e&&(r.Bb(5),r.dc("value",t.defaultCategory),r.Bb(1),r.dc("ngForOf",r.ac(7,5,t.categoryList$)),r.Bb(5),r.oc(null!=t.categorySelected&&t.categorySelected.name?null==t.categorySelected?null:t.categorySelected.name:null==t.defaultCategory?null:t.defaultCategory.name),r.Bb(1),r.dc("options",t.slideOpts),r.Bb(1),r.dc("ngForOf",r.ac(14,7,t.booksPerCategory$)))},directives:[l.m,l.H,l.y,l.P,d.j,l.D,u.a,l.z,l.p,l.t,l.C,l.n,l.w],pipes:[d.b],styles:["ion-content[_ngcontent-%COMP%]{padding:20px;margin:0}ion-button[_ngcontent-%COMP%]{margin-right:8px;margin-bottom:5px}ion-button[_ngcontent-%COMP%]:active{background:red}.block[_ngcontent-%COMP%]{margin:10px}.block_list[_ngcontent-%COMP%]{margin:30px 10px 10px}.img_book[_ngcontent-%COMP%]{height:130px}p[_ngcontent-%COMP%]{font-size:13px}"]}),e})()},jWvB:function(e,t,o){"use strict";o.r(t),o.d(t,"BooksDetailModule",function(){return g});var i=o("ofXK"),n=o("tyNb"),s=o("mrSG"),r=o("3Pt+"),c=o("fXoL"),b=o("qBIq"),a=o("UbJi"),l=o("TEn/");function d(e,t){if(1&e&&(c.Ob(0,"ion-select-option",15),c.nc(1),c.Nb()),2&e){const e=t.$implicit;c.dc("value",e.name),c.Bb(1),c.pc(" ",e.name," ")}}const u=[{path:"",component:(()=>{class e{constructor(e,t,o,i,n){this._firestore=e,this._angularAuth=t,this._route=o,this._formBuilder=i,this._toast=n,this.newBook={},this.formFormat="offer",this.form=this._formBuilder.group({category:["",r.k.required],offer:["",r.k.required]})}ngOnInit(){this.categoryList$=this._firestore.getCategories(),this.subscription=this._route.queryParams.subscribe(e=>this.theBook=e)}segmentChanged(e){this.formFormat=e.target.value,console.log("event: ",e.target.value)}registerBook$(){return Object(s.b)(this,void 0,void 0,function*(){const e=yield this._angularAuth.currentUser.then(e=>e.uid);this.newBook=Object.assign(Object.assign({},this.newBook),{userId:e,title:this.theBook.title?this.theBook.title:"",authors:this.theBook.authors?this.theBook.authors:"",image:this.theBook.image,publisher:this.theBook.publisher?this.theBook.publisher:"",categoryId:this.form.value.category,offer:this.form.value.offer,interests:0,researched:"offer"!==this.formFormat}),this._firestore.createBook(this.newBook),this.displayPopUp(),this.form.reset()})}displayPopUp(){return Object(s.b)(this,void 0,void 0,function*(){const e=yield this._toast.create({message:"Livre enregistr\xe9 avec success",position:"bottom",keyboardClose:!0,color:"dark",duration:2e3});yield e.present()})}ngOnDestroy(){this.subscription.unsubscribe()}}return e.\u0275fac=function(t){return new(t||e)(c.Lb(b.a),c.Lb(a.a),c.Lb(n.a),c.Lb(r.a),c.Lb(l.R))},e.\u0275cmp=c.Fb({type:e,selectors:[["app-books-detail"]],decls:53,vars:9,consts:[[1,"ion-no-border"],["slot","start"],[3,"src"],[1,"ion-justify-content-center"],[1,"info_text"],["color","academicus-green","value","offer",3,"ionChange"],["value","offer"],["value","request"],["fixed",""],[3,"formGroup","ngSubmit"],["formControlName","category","okText","Okay","cancelText","Dismiss","required",""],[3,"value",4,"ngFor","ngForOf"],["formControlName","offer","placeholder","Offre","required",""],["offer",""],["color","academicus-green","type","submit","expand","full"],[3,"value"]],template:function(e,t){1&e&&(c.Ob(0,"ion-header",0),c.Ob(1,"ion-toolbar"),c.Ob(2,"ion-buttons",1),c.Mb(3,"ion-back-button"),c.Nb(),c.Ob(4,"ion-title"),c.nc(5),c.Nb(),c.Nb(),c.Nb(),c.Ob(6,"ion-content"),c.Ob(7,"ion-card"),c.Ob(8,"ion-card-header"),c.Mb(9,"ion-img",2),c.Ob(10,"ion-grid"),c.Ob(11,"ion-row",3),c.Ob(12,"ion-card-title"),c.nc(13),c.Nb(),c.Nb(),c.Ob(14,"ion-row",3),c.Ob(15,"ion-card-subtitle"),c.nc(16),c.Nb(),c.Nb(),c.Ob(17,"ion-row",3),c.Ob(18,"ion-text"),c.nc(19," \xc9diteur: "),c.Nb(),c.nc(20),c.Nb(),c.Nb(),c.Nb(),c.Nb(),c.Ob(21,"ion-grid"),c.Ob(22,"ion-row",3),c.Ob(23,"ion-text"),c.Ob(24,"p",4),c.nc(25,"Ajouter livre"),c.Nb(),c.Nb(),c.Nb(),c.Nb(),c.Ob(26,"ion-segment",5),c.Wb("ionChange",function(e){return t.segmentChanged(e)}),c.Ob(27,"ion-segment-button",6),c.Ob(28,"ion-label"),c.nc(29,"J'offre"),c.Nb(),c.Nb(),c.Ob(30,"ion-segment-button",7),c.Ob(31,"ion-label"),c.nc(32,"Je recherche"),c.Nb(),c.Nb(),c.Nb(),c.Ob(33,"ion-grid",8),c.Ob(34,"form",9),c.Wb("ngSubmit",function(){return t.registerBook$()}),c.Ob(35,"ion-row"),c.Ob(36,"ion-col"),c.Ob(37,"ion-list"),c.Ob(38,"ion-item"),c.Ob(39,"ion-label"),c.nc(40,"Categories"),c.Nb(),c.Ob(41,"ion-select",10),c.mc(42,d,2,2,"ion-select-option",11),c.Zb(43,"async"),c.Nb(),c.Nb(),c.Nb(),c.Nb(),c.Nb(),c.Ob(44,"ion-row"),c.Ob(45,"ion-col"),c.Ob(46,"ion-item"),c.Mb(47,"ion-textarea",12,13),c.Nb(),c.Nb(),c.Nb(),c.Ob(49,"ion-row"),c.Ob(50,"ion-col"),c.Ob(51,"ion-button",14),c.nc(52,"Enregister"),c.Nb(),c.Nb(),c.Nb(),c.Nb(),c.Nb(),c.Nb()),2&e&&(c.Bb(5),c.oc(t.theBook.title),c.Bb(4),c.dc("src",t.theBook.image),c.Bb(4),c.oc(t.theBook.title),c.Bb(3),c.oc(t.theBook.authors),c.Bb(4),c.pc(" ",t.theBook.publisher," "),c.Bb(14),c.dc("formGroup",t.form),c.Bb(8),c.dc("ngForOf",c.ac(43,7,t.categoryList$)))},directives:[l.o,l.L,l.f,l.b,l.c,l.K,l.m,l.g,l.i,l.q,l.n,l.w,l.k,l.j,l.H,l.y,l.P,l.z,l.t,r.l,r.h,r.c,l.l,l.u,l.s,l.A,r.g,r.b,r.j,i.j,l.I,l.Q,l.e,l.B],pipes:[i.b],styles:["ion-img[_ngcontent-%COMP%]{height:200px}.info_text[_ngcontent-%COMP%]{margin:10px}"]}),e})()}];let h=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=c.Jb({type:e}),e.\u0275inj=c.Ib({imports:[[n.h.forChild(u)],n.h]}),e})();var f=o("PCNd");let g=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=c.Jb({type:e}),e.\u0275inj=c.Ib({imports:[[i.c,h,l.M,f.a,r.i]]}),e})()},qBIq:function(e,t,o){"use strict";o.d(t,"a",function(){return a});var i=o("mrSG"),n=o("2Vo4"),s=o("lJxs"),r=o("vkgz"),c=o("fXoL"),b=o("I/3d");let a=(()=>{class e{constructor(e){this._firestore=e,this.booksSubject$=new n.a([]),this.books$=this.booksSubject$.asObservable(),this.categorySujet$=new n.a([]),this.booksBycategory$=this.categorySujet$.asObservable(),this._researchedBooks$=new n.a([]),this.researchedBooks$=this._researchedBooks$.asObservable(),this.colections=this._firestore.collection("books",e=>e.where("researched","==",!1)),this.colections.stateChanges(["added","modified","removed"]).pipe(Object(s.a)(e=>e.map(e=>{const t=e.payload.doc.data(),o=e.type;return Object.assign(Object.assign({id:e.payload.doc.id},t),{type:o})}))).subscribe(e=>{const t=[...this.booksSubject$.value.filter(t=>!e.find(e=>e.id===t.id)),...e.filter(e=>"removed"!==e.type)].map(e=>(delete e.type,e));this.booksSubject$.next(t)}),this.categories$=this._firestore.collection("categories").valueChanges(),this._firestore.collection("books",e=>e.where("researched","==",!0)).stateChanges(["added","modified","removed"]).pipe(Object(s.a)(e=>e.map(e=>{const t=e.payload.doc.data(),o=e.type;return Object.assign(Object.assign({id:e.payload.doc.id},t),{type:o})}))).subscribe(e=>{const t=[...this._researchedBooks$.value.filter(t=>!e.find(e=>e.id===t.id)),...e.filter(e=>"removed"!==e.type)].map(e=>(delete e.type,e));return this._researchedBooks$.next(t),t})}createBook(e){this._firestore.collection("books").add(e).then(e=>{console.log("Document written with ID: ",e.id)}).catch(e=>{console.error("Error adding document: ",e)})}getBooksByCategory$(e){return this.books$.pipe(Object(s.a)(t=>t.filter(t=>t.categoryId===e.name)),Object(r.a)(e=>this.categorySujet$.next(e)))}getCategories(){return this.categories$}updateBook(e){var{id:t}=e,o=Object(i.f)(e,["id"]);this._firestore.collection("books").doc(t).update(o).then(e=>console.log("Success!!!")).catch(e=>console.log("error: ",e))}deleteBook(e){this._firestore.collection("books").doc(e).delete().then(e=>e).catch(e=>console.log("Error: ",e))}}return e.\u0275fac=function(t){return new(t||e)(c.Sb(b.a))},e.\u0275prov=c.Hb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()}}]);