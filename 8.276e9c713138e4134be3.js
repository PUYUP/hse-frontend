(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{C6VF:function(t,e,n){"use strict";n.r(e),n.d(e,"LoginModule",(function(){return y}));var o=n("ofXK"),r=n("tyNb"),i=n("3Pt+"),b=n("nYR2"),u=n("PSD3"),s=n.n(u),l=n("fXoL"),c=n("Yo9D");const a=function(){return{"font-size":"3.5rem","line-height":"1.0"}};function d(t,e){if(1&t){const t=l.Qb();l.Pb(0,"div",4,5),l.Pb(2,"div",6),l.Kb(3,"img",7),l.Ob(),l.Pb(4,"div",8),l.Pb(5,"h1",9),l.nc(6," HSE"),l.Kb(7,"br"),l.nc(8,"TRAINING"),l.Kb(9,"br"),l.nc(10,"ONLINE "),l.Ob(),l.Pb(11,"h4",10),l.nc(12,"PT PERTAMINA TRANS KONTINENTAL"),l.Ob(),l.Ob(),l.Pb(13,"div",11),l.Wb("swipe",(function(e){return l.ic(t),l.Yb().onSwipe(e)})),l.Pb(14,"div",12),l.Kb(15,"img",13),l.Ob(),l.Ob(),l.Ob()}2&t&&(l.xb(5),l.bc("ngStyle",l.dc(1,a)))}const p=function(){return{width:"175px"}},f=function(){return{"z-index":5}},g=function(){return["/lost-password"]},m=function(){return["/register"]};function h(t,e){if(1&t){const t=l.Qb();l.Pb(0,"div",14,15),l.Pb(2,"div",16),l.Kb(3,"img",17),l.Ob(),l.Pb(4,"form",18),l.Wb("ngSubmit",(function(){return l.ic(t),l.Yb().onSubmit()})),l.Pb(5,"div",19),l.Pb(6,"h3",20),l.nc(7,"Selamat Datang"),l.Ob(),l.Pb(8,"div",21),l.Kb(9,"input",22),l.Ob(),l.Pb(10,"div",23),l.Kb(11,"input",24),l.Ob(),l.Pb(12,"div",25),l.Pb(13,"button",26),l.nc(14,"Lupa PIN?"),l.Ob(),l.Ob(),l.Pb(15,"button",27),l.nc(16,"Login"),l.Ob(),l.Pb(17,"button",28),l.nc(18,"Saya belum punya akun"),l.Ob(),l.Ob(),l.Ob(),l.Ob()}if(2&t){const t=l.Yb();l.xb(3),l.bc("ngStyle",l.dc(5,p)),l.xb(1),l.bc("formGroup",t.formGroupBuilder),l.xb(1),l.bc("ngStyle",l.dc(6,f)),l.xb(8),l.bc("routerLink",l.dc(7,g)),l.xb(4),l.bc("routerLink",l.dc(8,m))}}const w=function(){return{"max-width":"480px","background-image":"url(assets/images/intro-bg.svg)","background-size":"cover","background-repeat":"no-repeat"}},x=[{path:"",component:(()=>{class t{constructor(t,e,n){this.formBuilder=t,this._authService=e,this._router=n,this.formGroupBuilder=i.d,this.showLogin=!1}ngOnInit(){this.formGroupBuilder=this.formBuilder.group({username:["",[i.o.required]],password:["",[i.o.required]]})}onSubmit(){this.doLogin(this.formGroupBuilder.value)}doLogin(t){this._authService.doLogin(t).pipe(Object(b.a)(()=>{})).subscribe(t=>{this._router.navigate(["home"],{replaceUrl:!0})},t=>{s.a.mixin({customClass:{confirmButton:"bg-transparent text-green-700 border-0 focus:outline-none"},buttonsStyling:!1}).fire({title:"",text:"Data yang anda input salah",icon:"error",heightAuto:!1,width:285,confirmButtonText:"Kembali"})})}onSwipe(t){this.showLogin=!0}}return t.\u0275fac=function(e){return new(e||t)(l.Jb(i.b),l.Jb(c.a),l.Jb(r.b))},t.\u0275cmp=l.Db({type:t,selectors:[["app-login"]],decls:4,vars:4,consts:[[1,"h-full","w-full"],["class","w-full",4,"ngIf"],["class","swipe-login pt-8 pb-0 none flex flex-col h-full w-full",4,"ngIf"],[1,"fixed","mx-auto","inset-0","bg-gradient-1",3,"ngStyle","swipe"],[1,"w-full"],["welcomeEl",""],[1,"absolute","top-0","right-0","z-50"],["src","assets/images/logo-colored.svg"],[1,"pt-16","text-center","text-white","z-10","relative"],[1,"text-5xl","font-bold","mt-12","leading-10",3,"ngStyle"],[1,"text-md","mt-6"],[1,"fixed","left-0","right-0","bottom-0","pb-12","z-10",3,"swipe"],[1,"text-center","w-full"],["src","assets/images/swipe-up.svg",1,"m-auto"],[1,"swipe-login","pt-8","pb-0","none","flex","flex-col","h-full","w-full"],["loginEl",""],[1,"relative","z-10","mt-3","mb-4"],["src","assets/images/logo-white.svg",1,"m-auto",3,"ngStyle"],[1,"relative","pt-4","login-form","mt-auto","rounded-t-2xl","pl-8","pr-8","text-white",3,"formGroup","ngSubmit"],[1,"relative",3,"ngStyle"],[1,"text-2xl","font-bold","mb-3"],[1,"mb-5"],["id","username","type","text","placeholder","Email/No Handphone","formControlName","username",1,"border","border-white","focus:outline-none","focus:bg-transparent","bg-transparent","rounded","w-full","py-2","px-3","text-white","placeholder-white"],[1,"mb-6"],["id","password","type","password","placeholder","PIN","formControlName","password",1,"border","border-white","focus:outline-none","focus:bg-transparent","bg-transparent","rounded","w-full","py-2","px-3","text-white","placeholder-white"],[1,"mb-6","text-right"],["type","button",1,"border-0",3,"routerLink"],["type","submit",1,"rounded","bg-yellow-500","w-full","mt-6","text-center","pt-3","pb-3","text-white","shadow-md","bg-yellow-green"],["type","button",1,"rounded","border","border-gray-100","w-full","mt-5","text-center","pt-3","pb-3",3,"routerLink"]],template:function(t,e){1&t&&(l.Pb(0,"div",0),l.mc(1,d,16,2,"div",1),l.mc(2,h,19,9,"div",2),l.Ob(),l.Pb(3,"div",3),l.Wb("swipe",(function(t){return e.onSwipe(t)})),l.Ob()),2&t&&(l.xb(1),l.bc("ngIf",!e.showLogin),l.xb(1),l.bc("ngIf",e.showLogin),l.xb(1),l.bc("ngStyle",l.dc(3,w)))},directives:[o.k,o.l,i.q,i.k,i.e,i.a,i.j,i.c,r.c],styles:[""]}),t})()}];let v=(()=>{class t{}return t.\u0275mod=l.Hb({type:t}),t.\u0275inj=l.Gb({factory:function(e){return new(e||t)},imports:[[r.d.forChild(x)],r.d]}),t})(),y=(()=>{class t{}return t.\u0275mod=l.Hb({type:t}),t.\u0275inj=l.Gb({factory:function(e){return new(e||t)},imports:[[o.b,v,i.f,i.n]]}),t})()}}]);