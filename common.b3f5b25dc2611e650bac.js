(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"74mu":function(t,e,o){"use strict";o.d(e,"a",function(){return i}),o.d(e,"b",function(){return r}),o.d(e,"c",function(){return n}),o.d(e,"d",function(){return c});const n=(t,e)=>null!==e.closest(t),i=(t,e)=>"string"==typeof t&&t.length>0?Object.assign({"ion-color":!0,[`ion-color-${t}`]:!0},e):e,r=t=>{const e={};return(t=>void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter(t=>null!=t).map(t=>t.trim()).filter(t=>""!==t):[])(t).forEach(t=>e[t]=!0),e},s=/^[a-z][a-z0-9+\-.]*:/,c=async(t,e,o,n)=>{if(null!=t&&"#"!==t[0]&&!s.test(t)){const i=document.querySelector("ion-router");if(i)return null!=e&&e.preventDefault(),i.push(t,o,n)}return!1}},JbSX:function(t,e,o){"use strict";o.d(e,"a",function(){return s});var n=o("wEJo"),i=o("qULd"),r=o("iWo5");const s=(t,e)=>{let o,s;const c=(t,n,i)=>{if("undefined"==typeof document)return;const r=document.elementFromPoint(t,n);r&&e(r)?r!==o&&(l(),a(r,i)):l()},a=(t,e)=>{o=t,s||(s=o);const i=o;Object(n.f)(()=>i.classList.add("ion-activated")),e()},l=(t=!1)=>{if(!o)return;const e=o;Object(n.f)(()=>e.classList.remove("ion-activated")),t&&s!==o&&o.click(),o=void 0};return Object(r.createGesture)({el:t,gestureName:"buttonActiveDrag",threshold:0,onStart:t=>c(t.currentX,t.currentY,i.a),onMove:t=>c(t.currentX,t.currentY,i.b),onEnd:()=>{l(!0),Object(i.e)(),s=void 0}})}},MS4O:function(t,e,o){"use strict";o.d(e,"a",function(){return s});var n=o("2Vo4"),i=o("fXoL"),r=o("I/3d");let s=(()=>{class t{constructor(t){this._firestore=t,this._bookFinded$=new n.a(null),this.bookFinded$=this._bookFinded$.asObservable()}getUserBookById(t){this._firestore.doc(`books/${t}`).valueChanges({idField:"id"}).subscribe(t=>this._bookFinded$.next(t))}set(t){return this._bookFinded$.next(t)}get(){return this.bookFinded$}sendOffer(){console.log("ok")}}return t.\u0275fac=function(e){return new(e||t)(i.Sb(r.a))},t.\u0275prov=i.Hb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},PCNd:function(t,e,o){"use strict";o.d(e,"a",function(){return s});var n=o("ofXK"),i=o("TEn/"),r=o("fXoL");o("hKYS");let s=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=r.Jb({type:t}),t.\u0275inj=r.Ib({imports:[[n.c,i.L]]}),t})()},acej:function(t,e,o){"use strict";o.d(e,"a",function(){return i}),o.d(e,"b",function(){return r});var n=o("1vRN");const i=async(t,e,o,i,r)=>{if(t)return t.attachViewToDom(e,o,r,i);if("string"!=typeof o&&!(o instanceof HTMLElement))throw new Error("framework delegate is missing");const s="string"==typeof o?e.ownerDocument&&e.ownerDocument.createElement(o):o;return i&&i.forEach(t=>s.classList.add(t)),r&&Object.assign(s,r),e.appendChild(s),await new Promise(t=>Object(n.c)(s,t)),s},r=(t,e)=>{if(e){if(t)return t.removeViewFromDom(e.parentElement,e);e.remove()}return Promise.resolve()}},h3R7:function(t,e,o){"use strict";o.d(e,"a",function(){return n});const n={bubbles:{dur:1e3,circles:9,fn:(t,e,o)=>{const n=t*e/o-t+"ms",i=2*Math.PI*e/o;return{r:5,style:{top:9*Math.sin(i)+"px",left:9*Math.cos(i)+"px","animation-delay":n}}}},circles:{dur:1e3,circles:8,fn:(t,e,o)=>{const n=e/o,i=t*n-t+"ms",r=2*Math.PI*n;return{r:5,style:{top:9*Math.sin(r)+"px",left:9*Math.cos(r)+"px","animation-delay":i}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(t,e)=>({r:6,style:{left:9-9*e+"px","animation-delay":-110*e+"ms"}})},lines:{dur:1e3,lines:12,fn:(t,e,o)=>({y1:17,y2:29,style:{transform:`rotate(${30*e+(e<6?180:-180)}deg)`,"animation-delay":t*e/o-t+"ms"}})},"lines-small":{dur:1e3,lines:12,fn:(t,e,o)=>({y1:12,y2:20,style:{transform:`rotate(${30*e+(e<6?180:-180)}deg)`,"animation-delay":t*e/o-t+"ms"}})}}},hKYS:function(t,e,o){"use strict";o.d(e,"a",function(){return f});var n=o("mrSG"),i=o("SxV6"),r=o("fXoL"),s=o("qBIq"),c=o("MS4O"),a=o("tyNb"),l=o("TEn/"),u=o("ofXK");function d(t,e){if(1&t){const t=r.Pb();r.Ob(0,"ion-segment-button",7),r.Wb("click",function(){r.jc(t);const o=e.$implicit;return r.Yb().selectCategory(o)}),r.Mb(1,"ion-icon",8),r.Ob(2,"ion-label"),r.nc(3),r.Nb(),r.Nb()}if(2&t){const t=e.$implicit;r.dc("value",t.name),r.Bb(1),r.ec("name",t.icon),r.Bb(2),r.oc(t.name)}}function b(t,e){if(1&t){const t=r.Pb();r.Ob(0,"ion-slide"),r.Ob(1,"ion-grid",9),r.Wb("click",function(){r.jc(t);const o=e.$implicit;return r.Yb().findedBook(o.id)}),r.Ob(2,"ion-row",10),r.Mb(3,"img",11),r.Nb(),r.Ob(4,"ion-row",10),r.Ob(5,"p"),r.nc(6),r.Nb(),r.Nb(),r.Nb(),r.Nb()}if(2&t){const t=e.$implicit;r.Bb(3),r.dc("src",t.image,r.kc),r.Bb(3),r.oc(t.title.substr(0,25))}}let f=(()=>{class t{constructor(t,e,o){this._firestore=t,this._findedBook=e,this._router=o,this.max=10,this.min=0,this.slideOpts={slidesPerView:3,coverflowEffect:{rotate:50,stretch:0,depth:100,modifier:1,slideShadows:!0}}}ngOnInit(){return Object(n.b)(this,void 0,void 0,function*(){this.categoryList$=this._firestore.getCategories();const t=yield this.categoryList$.pipe(Object(i.a)()).toPromise();this.defaultCategory=t[0],this.selectCategory(this.defaultCategory)})}selectCategory(t){this.categorySelected=t,this._firestore.getBooksByCategory(this.categorySelected).then(t=>this.booksPerCategory$=t).catch(t=>console.log("error: ",t))}findedBook(t){console.log("bookId: ",t),this._router.navigate(["/pages/home/book-finded",t])}loadData(t){return Object(n.b)(this,void 0,void 0,function*(){this.max=this.max+10,t.target.complete()})}}return t.\u0275fac=function(e){return new(e||t)(r.Lb(s.a),r.Lb(c.a),r.Lb(a.e))},t.\u0275cmp=r.Fb({type:t,selectors:[["app-categories"]],decls:14,vars:7,consts:[[1,"block"],["color","primary"],["scrollable","",3,"value"],[3,"value","click",4,"ngFor","ngForOf"],[1,"block_list"],[3,"options"],[4,"ngFor","ngForOf"],[3,"value","click"],[3,"name"],["fixed","",3,"click"],[1,"ion-justify-content-center"],["alt","test",1,"img_book",3,"src"]],template:function(t,e){1&t&&(r.Ob(0,"ion-content"),r.Ob(1,"div",0),r.Ob(2,"ion-text",1),r.Ob(3,"h1"),r.nc(4,"Categories"),r.Nb(),r.Nb(),r.Ob(5,"ion-segment",2),r.mc(6,d,4,3,"ion-segment-button",3),r.Zb(7,"async"),r.Nb(),r.Nb(),r.Ob(8,"div",4),r.Ob(9,"ion-text",1),r.Ob(10,"h4"),r.nc(11),r.Nb(),r.Nb(),r.Ob(12,"ion-slides",5),r.mc(13,b,7,2,"ion-slide",6),r.Nb(),r.Nb(),r.Nb()),2&t&&(r.Bb(5),r.dc("value",e.defaultCategory),r.Bb(1),r.dc("ngForOf",r.ac(7,5,e.categoryList$)),r.Bb(5),r.oc(null!=e.categorySelected&&e.categorySelected.name?null==e.categorySelected?null:e.categorySelected.name:null==e.defaultCategory?null:e.defaultCategory.name),r.Bb(1),r.dc("options",e.slideOpts),r.Bb(1),r.dc("ngForOf",e.booksPerCategory$))},directives:[l.l,l.G,l.x,l.O,u.j,l.C,l.y,l.o,l.s,l.B,l.m,l.v],pipes:[u.b],styles:["ion-content[_ngcontent-%COMP%]{padding:20px}ion-button[_ngcontent-%COMP%]{margin-right:8px;margin-bottom:5px}ion-button[_ngcontent-%COMP%]:active{background:red}.block[_ngcontent-%COMP%]{margin:10px}.block_list[_ngcontent-%COMP%]{margin:30px 10px 10px}.img_book[_ngcontent-%COMP%]{height:130px}p[_ngcontent-%COMP%]{font-size:13px}"]}),t})()},qBIq:function(t,e,o){"use strict";o.d(e,"a",function(){return l});var n=o("mrSG"),i=o("2Vo4"),r=o("lJxs"),s=o("SxV6"),c=o("fXoL"),a=o("I/3d");let l=(()=>{class t{constructor(t){this._firestore=t,this.subjectData$=new i.a(null),this.book$=this.subjectData$.asObservable(),this.booksSubject$=new i.a([]),this.books$=this.booksSubject$.asObservable(),this.categorySujet$=new i.a(null),this.booksBycategory$=this.categorySujet$.asObservable(),this.colections=this._firestore.collection("books"),this.colections.stateChanges(["added","modified","removed"]).pipe(Object(r.a)(t=>t.map(t=>{const e=t.payload.doc.data();return Object.assign({id:t.payload.doc.id},e)}))).subscribe(t=>{const e=[...this.booksSubject$.value.filter(e=>!t.find(t=>t.id===e.id)),...t];this.booksSubject$.next(e)}),this.categories$=this._firestore.collection("categories").valueChanges()}createBook(t){this._firestore.collection("books").add(t).then(t=>{console.log("Document written with ID: ",t.id)}).catch(t=>{console.error("Error adding document: ",t)})}getBooksByCategory(t){return Object(n.b)(this,void 0,void 0,function*(){const e=(yield this.books$.pipe(Object(s.a)()).toPromise()).filter(e=>e.categoryId===t.name);return this.categorySujet$.next(e),e})}getCategories(){return this.categories$}set(t){return this.subjectData$.next(t)}get(){return this.book$}updateBook(t){var{id:e}=t,o=Object(n.f)(t,["id"]);this._firestore.collection("books").doc(e).update(o).then(t=>console.log("Success!!!")).catch(t=>console.log("error: ",t))}deleteBook(t){this._firestore.collection("books").doc(t).delete().then(t=>console.log("book deleted")).catch(t=>console.log("Error: ",t))}}return t.\u0275fac=function(e){return new(e||t)(c.Sb(a.a))},t.\u0275prov=c.Hb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},qULd:function(t,e,o){"use strict";o.d(e,"a",function(){return r}),o.d(e,"b",function(){return s}),o.d(e,"c",function(){return i}),o.d(e,"d",function(){return a}),o.d(e,"e",function(){return c});const n={getEngine(){const t=window;return t.TapticEngine||t.Capacitor&&t.Capacitor.isPluginAvailable("Haptics")&&t.Capacitor.Plugins.Haptics},available(){return!!this.getEngine()},isCordova:()=>!!window.TapticEngine,isCapacitor:()=>!!window.Capacitor,impact(t){const e=this.getEngine();if(!e)return;const o=this.isCapacitor()?t.style.toUpperCase():t.style;e.impact({style:o})},notification(t){const e=this.getEngine();if(!e)return;const o=this.isCapacitor()?t.style.toUpperCase():t.style;e.notification({style:o})},selection(){this.impact({style:"light"})},selectionStart(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionStart():t.gestureSelectionStart())},selectionChanged(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionChanged():t.gestureSelectionChanged())},selectionEnd(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionEnd():t.gestureSelectionEnd())}},i=()=>{n.selection()},r=()=>{n.selectionStart()},s=()=>{n.selectionChanged()},c=()=>{n.selectionEnd()},a=t=>{n.impact(t)}}}]);