(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{jWvB:function(o,t,e){"use strict";e.r(t),e.d(t,"BooksDetailModule",function(){return m});var i=e("ofXK"),n=e("tyNb"),r=e("mrSG"),b=e("3Pt+"),s=e("fXoL"),c=e("qBIq"),a=e("UbJi"),u=e("TEn/");function h(o,t){if(1&o&&(s.Ob(0,"ion-select-option",13),s.nc(1),s.Nb()),2&o){const o=t.$implicit;s.dc("value",o.name),s.Bb(1),s.pc(" ",o.name," ")}}const l=[{path:"",component:(()=>{class o{constructor(o,t,e,i){this._firestore=o,this._angularAuth=t,this._route=e,this._formBuilder=i,this.newBook={},this.form=this._formBuilder.group({category:["",b.k.required],offer:["",b.k.required]})}ngOnInit(){this.categoryList$=this._firestore.getCategories(),this.subscription=this._route.queryParams.subscribe(o=>this.theBook=o)}registerBook$(){return Object(r.b)(this,void 0,void 0,function*(){const o=yield this._angularAuth.currentUser.then(o=>o.uid);this.newBook=Object.assign(Object.assign({},this.newBook),{userId:o,title:this.theBook.title?this.theBook.title:"",authors:this.theBook.authors?this.theBook.authors:"",image:this.theBook.image,publisher:this.theBook.publisher?this.theBook.publisher:"",categoryId:this.form.value.category,offer:this.form.value.offer,interests:0,researched:!1}),this._firestore.createBook(this.newBook)})}ngOnDestroy(){this.subscription.unsubscribe()}}return o.\u0275fac=function(t){return new(t||o)(s.Lb(c.a),s.Lb(a.a),s.Lb(n.a),s.Lb(b.a))},o.\u0275cmp=s.Fb({type:o,selectors:[["app-books-detail"]],decls:53,vars:9,consts:[["slot","start"],[3,"src"],[1,"ion-justify-content-center"],[1,"info_text"],["value","offer"],["value","request"],["fixed",""],[3,"formGroup","ngSubmit"],["formControlName","category","okText","Okay","cancelText","Dismiss","required",""],[3,"value",4,"ngFor","ngForOf"],["formControlName","offer","placeholder","Offre","required",""],["offer",""],["type","submit","expand","full"],[3,"value"]],template:function(o,t){1&o&&(s.Ob(0,"ion-header"),s.Ob(1,"ion-toolbar"),s.Ob(2,"ion-buttons",0),s.Mb(3,"ion-back-button"),s.Nb(),s.Ob(4,"ion-title"),s.nc(5),s.Nb(),s.Nb(),s.Nb(),s.Ob(6,"ion-content"),s.Ob(7,"ion-card"),s.Ob(8,"ion-card-header"),s.Mb(9,"ion-img",1),s.Ob(10,"ion-grid"),s.Ob(11,"ion-row",2),s.Ob(12,"ion-card-title"),s.nc(13),s.Nb(),s.Nb(),s.Ob(14,"ion-row",2),s.Ob(15,"ion-card-subtitle"),s.nc(16),s.Nb(),s.Nb(),s.Ob(17,"ion-row",2),s.Ob(18,"ion-text"),s.nc(19," \xc9diteur: "),s.Nb(),s.nc(20),s.Nb(),s.Nb(),s.Nb(),s.Nb(),s.Ob(21,"ion-grid"),s.Ob(22,"ion-row",2),s.Ob(23,"ion-text"),s.Ob(24,"p",3),s.nc(25,"Ajouter livre"),s.Nb(),s.Nb(),s.Nb(),s.Nb(),s.Ob(26,"ion-segment",4),s.Ob(27,"ion-segment-button",4),s.Ob(28,"ion-label"),s.nc(29,"J'offre"),s.Nb(),s.Nb(),s.Ob(30,"ion-segment-button",5),s.Ob(31,"ion-label"),s.nc(32,"Je recherche"),s.Nb(),s.Nb(),s.Nb(),s.Ob(33,"ion-grid",6),s.Ob(34,"form",7),s.Wb("ngSubmit",function(){return t.registerBook$()}),s.Ob(35,"ion-row"),s.Ob(36,"ion-col"),s.Ob(37,"ion-list"),s.Ob(38,"ion-item"),s.Ob(39,"ion-label"),s.nc(40,"Categories"),s.Nb(),s.Ob(41,"ion-select",8),s.mc(42,h,2,2,"ion-select-option",9),s.Zb(43,"async"),s.Nb(),s.Nb(),s.Nb(),s.Nb(),s.Nb(),s.Ob(44,"ion-row"),s.Ob(45,"ion-col"),s.Ob(46,"ion-item"),s.Mb(47,"ion-textarea",10,11),s.Nb(),s.Nb(),s.Nb(),s.Ob(49,"ion-row"),s.Ob(50,"ion-col"),s.Ob(51,"ion-button",12),s.nc(52,"Enregister"),s.Nb(),s.Nb(),s.Nb(),s.Nb(),s.Nb(),s.Nb()),2&o&&(s.Bb(5),s.oc(t.theBook.title),s.Bb(4),s.dc("src",t.theBook.image),s.Bb(4),s.oc(t.theBook.title),s.Bb(3),s.oc(t.theBook.authors),s.Bb(4),s.pc(" ",t.theBook.publisher," "),s.Bb(14),s.dc("formGroup",t.form),s.Bb(8),s.dc("ngForOf",s.ac(43,7,t.categoryList$)))},directives:[u.o,u.L,u.f,u.b,u.c,u.K,u.m,u.g,u.i,u.q,u.n,u.w,u.k,u.j,u.H,u.y,u.P,u.z,u.t,b.l,b.h,b.c,u.l,u.u,u.s,u.A,b.g,b.b,b.j,i.j,u.I,u.Q,u.e,u.B],pipes:[i.b],styles:["ion-img[_ngcontent-%COMP%]{height:200px}.info_text[_ngcontent-%COMP%]{margin:10px}"]}),o})()}];let f=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=s.Jb({type:o}),o.\u0275inj=s.Ib({imports:[[n.h.forChild(l)],n.h]}),o})();var O=e("PCNd");let m=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=s.Jb({type:o}),o.\u0275inj=s.Ib({imports:[[i.c,f,u.M,O.a,b.i]]}),o})()}}]);