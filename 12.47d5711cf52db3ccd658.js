(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"q6+z":function(e,t,o){"use strict";o.r(t),o.d(t,"PagesModule",function(){return w});var n=o("ofXK"),s=o("tyNb"),i=o("mrSG"),r=o("fXoL"),a=o("UbJi"),c=o("vcGB"),l=o("TEn/");function b(e,t){1&e&&(r.Ob(0,"ion-badge",7),r.Mb(1,"ion-icon",8),r.Nb())}function u(e,t){if(1&e&&(r.Ob(0,"ion-tab-bar",1),r.Ob(1,"ion-tab-button",2),r.Mb(2,"ion-icon",3),r.Ob(3,"ion-label"),r.nc(4,"home"),r.Nb(),r.Nb(),r.Ob(5,"ion-tab-button",4),r.Mb(6,"ion-icon",5),r.Ob(7,"ion-label"),r.nc(8,"profile"),r.Nb(),r.mc(9,b,2,0,"ion-badge",6),r.Nb(),r.Nb()),2&e){const e=r.Yb();r.Bb(9),r.dc("ngIf",e.interestesBook)}}let h=(()=>{class e{constructor(e,t){this._authService=e,this._userBookService=t}ngOnInit(){return Object(i.b)(this,void 0,void 0,function*(){this._authService.onAuthStateChanged(e=>Object(i.b)(this,void 0,void 0,function*(){this.user=e,e&&(yield this._userBookService.getUserBooks(),this._userBookService.bookInterest$.subscribe(e=>{console.log("this.interestesBook: ",this.interestesBook),this.interestesBook=e}))}))})}}return e.\u0275fac=function(t){return new(t||e)(r.Lb(a.a),r.Lb(c.a))},e.\u0275cmp=r.Fb({type:e,selectors:[["app-pages"]],decls:2,vars:1,consts:[["slot","bottom",4,"ngIf"],["slot","bottom"],["tab","home"],["name","home"],["tab","user-profile"],["name","person-circle-outline"],["color","success",4,"ngIf"],["color","success"],["name","alert-sharp"]],template:function(e,t){1&e&&(r.Ob(0,"ion-tabs"),r.mc(1,u,10,1,"ion-tab-bar",0),r.Nb()),2&e&&(r.Bb(1),r.dc("ngIf",t.user))},directives:[l.G,n.k,l.E,l.F,l.p,l.t,l.d],styles:[".home[_ngcontent-%COMP%]{height:100%}img[_ngcontent-%COMP%]{width:200px;height:200px}ion-row[_ngcontent-%COMP%]{height:100%}"]}),e})();var d=o("LRne"),p=o("mCNh"),f=o("lJxs"),k=o("IzEk"),O=o("eIep");const g=Object(f.a)(e=>!!e);let m=(()=>{class e{constructor(e,t){this.router=e,this.auth=t,this.canActivate=(e,t)=>{const o=e.data.authGuardPipe||(()=>g);return this.auth.user.pipe(Object(k.a)(1),o(e,t),Object(f.a)(e=>"boolean"==typeof e?e:Array.isArray(e)?this.router.createUrlTree(e):this.router.parseUrl(e)))}}}return e.\u0275fac=function(t){return new(t||e)(r.Sb(s.e),r.Sb(a.a))},e.\u0275prov=Object(r.Hb)({factory:function(){return new e(Object(r.Sb)(s.e),Object(r.Sb)(a.a))},token:e,providedIn:"any"}),e})();const v=e=>({canActivate:[m],data:{authGuardPipe:e}}),j=(Object(f.a)(e=>!!e&&!e.isAnonymous),Object(O.a)(e=>e?e.getIdTokenResult():Object(d.a)(null)));Object(f.a)(e=>!!e&&e.emailVerified),Object(p.a)(j,Object(f.a)(e=>e?e.claims:[]));const B=()=>{return e=["pages/login"],Object(p.a)(g,Object(f.a)(t=>t||e));var e},_=[{path:"",component:h,children:[{path:"home",loadChildren:()=>Promise.all([o.e(0),o.e(16)]).then(o.bind(null,"fOOd")).then(e=>e.HomeModule)},{path:"book-list",loadChildren:()=>Promise.all([o.e(0),o.e(15)]).then(o.bind(null,"RKQH")).then(e=>e.BooksListModule)},Object.assign(Object.assign({path:"book-detail"},v(B)),{loadChildren:()=>Promise.all([o.e(0),o.e(14)]).then(o.bind(null,"jWvB")).then(e=>e.BooksDetailModule)}),Object.assign(Object.assign({path:"user-profile"},v(B)),{loadChildren:()=>Promise.all([o.e(2),o.e(0),o.e(17)]).then(o.bind(null,"7Z3z")).then(e=>e.UserProfileModule)}),{path:"login",loadChildren:()=>Promise.all([o.e(2),o.e(13)]).then(o.bind(null,"P9on")).then(e=>e.AuthenticationModule)},{path:"",redirectTo:"home",pathMatch:"full"}]}];let y=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=r.Jb({type:e}),e.\u0275inj=r.Ib({imports:[[s.h.forChild(_)],s.h]}),e})(),w=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=r.Jb({type:e}),e.\u0275inj=r.Ib({imports:[[n.c,y,l.M]]}),e})()},vcGB:function(e,t,o){"use strict";o.d(t,"a",function(){return l});var n=o("mrSG"),s=o("2Vo4"),i=o("lJxs"),r=o("fXoL"),a=o("I/3d"),c=o("UbJi");let l=(()=>{class e{constructor(e,t){this._firestore=e,this._angularAuth=t,this._userBooks$=new s.a([]),this.userBooks$=this._userBooks$.asObservable(),this._bookDetail$=new s.a(null),this.bookDetail$=this._bookDetail$.asObservable(),this._bookInterest$=new s.a(null),this.bookInterest$=this._bookInterest$.asObservable()}getUserBooks(){return Object(n.b)(this,void 0,void 0,function*(){const e=yield this._angularAuth.currentUser.then(e=>e.uid);this._firestore.collection("books",t=>t.where("userId","==",`${e}`).where("researched","==",!1)).stateChanges(["added","modified","removed"]).pipe(Object(i.a)(e=>e.map(e=>{const t=e.payload.doc.data(),o=e.type;return Object.assign(Object.assign({id:e.payload.doc.id},t),{type:o})}))).subscribe(e=>{const t=[...this._userBooks$.value.filter(t=>!e.find(e=>e.id===t.id)),...e.filter(e=>"removed"!==e.type)].map(e=>(delete e.type,e));console.log("User book New List",t),t.map(e=>{e.interests>0&&(console.log("interest: ",e.interests),this._bookInterest$.next(!0))}),this._userBooks$.next(t)})})}getUserBookById(e){this._firestore.doc(`books/${e}`).valueChanges({idField:"id"}).subscribe(e=>this._bookDetail$.next(e))}deleteBook(e){this._firestore.collection("books").doc(e).delete().then(e=>console.log("delete Function")).catch(e=>console.log("Error: ",e))}}return e.\u0275fac=function(t){return new(t||e)(r.Sb(a.a),r.Sb(c.a))},e.\u0275prov=r.Hb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()}}]);