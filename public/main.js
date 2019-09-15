(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-container\">\r\n\t<div class=\"side-bar\">\r\n\t\t<ul class=\"nav flex-column\">\r\n\t\t\t<li class=\"nav-item\" style=\"text-align: center\">\r\n\t\t\t\t<a  routerLink=\"/\">\r\n\t\t\t\t\t<img src=\"assets/logo.jpg\" alt=\"\" width=\"50\">\r\n\t\t\t\t</a>\r\n\t\t\t</li>\r\n\r\n\t\t\t<li class=\"nav-item\">\r\n\t\t\t\t<a class=\"nav-link active\" routerLink=\"home\">\r\n\t\t\t\t\t<ion-icon name=\"list\"></ion-icon>\r\n\t\t\t\t</a>\r\n\t\t\t</li>\r\n\t\t\t<li class=\"nav-item\">\r\n\t\t\t\t<a class=\"nav-link\" routerLink=\"new-user\">\r\n\t\t\t\t\t<ion-icon name=\"add\"></ion-icon>\r\n\t\t\t\t</a>\r\n\t\t\t</li>\r\n\t\t</ul>\r\n\t</div>\r\n\t<div class=\"content-container\">\r\n\t\t<router-outlet></router-outlet>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".page-container {\n  display: grid;\n  grid-template-columns: 60px auto;\n  height: 100%;\n  padding: 0px; }\n  .page-container .side-bar {\n    background: #000000; }\n  .page-container .side-bar .nav-link {\n      color: #FFF;\n      font-size: 28px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXHByb3llY3Rvc19mbHV0dGVyXFxhbmd1bGFyLWZpcmViYXNlLWNydWQvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixnQ0FBZ0M7RUFDaEMsWUFBWTtFQUNaLFlBQVksRUFBQTtFQUpkO0lBUUksbUJBQW1CLEVBQUE7RUFSdkI7TUFXTSxXQUFXO01BQ1gsZUFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZ2UtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNjBweCBhdXRvO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwYWRkaW5nOiAwcHg7XHJcblxyXG5cclxuICAuc2lkZS1iYXIge1xyXG4gICAgYmFja2dyb3VuZDogIzAwMDAwMDtcclxuXHJcbiAgICAubmF2LWxpbmsge1xyXG4gICAgICBjb2xvcjogI0ZGRjtcclxuICAgICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'angular-firebase-crud';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.routes */ "./src/app/app.routes.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _avatar_dialog_avatar_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./avatar-dialog/avatar-dialog.component */ "./src/app/avatar-dialog/avatar-dialog.component.ts");
/* harmony import */ var _edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./edit-user/edit-user.component */ "./src/app/edit-user/edit-user.component.ts");
/* harmony import */ var _edit_user_edit_user_resolver__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./edit-user/edit-user.resolver */ "./src/app/edit-user/edit-user.resolver.ts");
/* harmony import */ var _new_user_new_user_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./new-user/new-user.component */ "./src/app/new-user/new-user.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/firebase.service */ "./src/app/services/firebase.service.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _bienvenido_bienvenido_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./bienvenido/bienvenido.component */ "./src/app/bienvenido/bienvenido.component.ts");



















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _avatar_dialog_avatar_dialog_component__WEBPACK_IMPORTED_MODULE_7__["AvatarDialogComponent"],
                _edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_8__["EditUserComponent"],
                _new_user_new_user_component__WEBPACK_IMPORTED_MODULE_10__["NewUserComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"],
                _bienvenido_bienvenido_component__WEBPACK_IMPORTED_MODULE_18__["BienvenidoComponent"]
            ],
            entryComponents: [_avatar_dialog_avatar_dialog_component__WEBPACK_IMPORTED_MODULE_7__["AvatarDialogComponent"]],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(_app_routes__WEBPACK_IMPORTED_MODULE_5__["rootRouterConfig"], { useHash: false }),
                _angular_fire__WEBPACK_IMPORTED_MODULE_12__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_14__["environment"].firebase),
                _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_13__["AngularFirestoreModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatDialogModule"]
            ],
            providers: [_services_firebase_service__WEBPACK_IMPORTED_MODULE_15__["FirebaseService"], _edit_user_edit_user_resolver__WEBPACK_IMPORTED_MODULE_9__["EditUserResolver"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
            schemas: [
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["CUSTOM_ELEMENTS_SCHEMA"]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes.ts":
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/*! exports provided: rootRouterConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rootRouterConfig", function() { return rootRouterConfig; });
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _new_user_new_user_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./new-user/new-user.component */ "./src/app/new-user/new-user.component.ts");
/* harmony import */ var _edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit-user/edit-user.component */ "./src/app/edit-user/edit-user.component.ts");
/* harmony import */ var _edit_user_edit_user_resolver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-user/edit-user.resolver */ "./src/app/edit-user/edit-user.resolver.ts");
/* harmony import */ var _bienvenido_bienvenido_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bienvenido/bienvenido.component */ "./src/app/bienvenido/bienvenido.component.ts");





var rootRouterConfig = [
    { path: '', component: _bienvenido_bienvenido_component__WEBPACK_IMPORTED_MODULE_4__["BienvenidoComponent"] },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"] },
    { path: 'new-user', component: _new_user_new_user_component__WEBPACK_IMPORTED_MODULE_1__["NewUserComponent"] },
    { path: 'details/:id', component: _edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_2__["EditUserComponent"], resolve: { data: _edit_user_edit_user_resolver__WEBPACK_IMPORTED_MODULE_3__["EditUserResolver"] } }
];


/***/ }),

/***/ "./src/app/avatar-dialog/avatar-dialog.component.html":
/*!************************************************************!*\
  !*** ./src/app/avatar-dialog/avatar-dialog.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <h5>Select Avatar</h5>\r\n    </div>\r\n  </div>\r\n  <div class=\"d-flex align-content-center flex-wrap\">\r\n    <div *ngFor=\"let avatar of avatars\">\r\n      <img class=\"img-thumbnail\" [src]=avatar.link (click)= \"close(avatar)\">\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/avatar-dialog/avatar-dialog.component.scss":
/*!************************************************************!*\
  !*** ./src/app/avatar-dialog/avatar-dialog.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".img-thumbnail {\n  width: 100px;\n  height: 100px;\n  margin: 4px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXZhdGFyLWRpYWxvZy9DOlxccHJveWVjdG9zX2ZsdXR0ZXJcXGFuZ3VsYXItZmlyZWJhc2UtY3J1ZC9zcmNcXGFwcFxcYXZhdGFyLWRpYWxvZ1xcYXZhdGFyLWRpYWxvZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsV0FBVyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvYXZhdGFyLWRpYWxvZy9hdmF0YXItZGlhbG9nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmltZy10aHVtYm5haWwge1xyXG4gIHdpZHRoOiAxMDBweDtcclxuICBoZWlnaHQ6IDEwMHB4O1xyXG4gIG1hcmdpbjogNHB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/avatar-dialog/avatar-dialog.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/avatar-dialog/avatar-dialog.component.ts ***!
  \**********************************************************/
/*! exports provided: AvatarDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AvatarDialogComponent", function() { return AvatarDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/firebase.service */ "./src/app/services/firebase.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");




var AvatarDialogComponent = /** @class */ (function () {
    function AvatarDialogComponent(dialogRef, firebaseService) {
        this.dialogRef = dialogRef;
        this.firebaseService = firebaseService;
        this.avatars = new Array();
    }
    AvatarDialogComponent.prototype.ngOnInit = function () {
        this.getData();
    };
    AvatarDialogComponent.prototype.getData = function () {
        var _this = this;
        this.firebaseService.getAvatars()
            .subscribe(function (data) { return _this.avatars = data; });
    };
    AvatarDialogComponent.prototype.close = function (avatar) {
        this.dialogRef.close(avatar);
    };
    AvatarDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-avatar-dialog',
            template: __webpack_require__(/*! ./avatar-dialog.component.html */ "./src/app/avatar-dialog/avatar-dialog.component.html"),
            styles: [__webpack_require__(/*! ./avatar-dialog.component.scss */ "./src/app/avatar-dialog/avatar-dialog.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"],
            _services_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"]])
    ], AvatarDialogComponent);
    return AvatarDialogComponent;
}());



/***/ }),

/***/ "./src/app/bienvenido/bienvenido.component.css":
/*!*****************************************************!*\
  !*** ./src/app/bienvenido/bienvenido.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bg{\r\n    background-image: url('bg.jpg');\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmllbnZlbmlkby9iaWVudmVuaWRvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwrQkFBNEM7QUFDaEQiLCJmaWxlIjoic3JjL2FwcC9iaWVudmVuaWRvL2JpZW52ZW5pZG8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iZ3tcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL2JnLmpwZycpO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/bienvenido/bienvenido.component.html":
/*!******************************************************!*\
  !*** ./src/app/bienvenido/bienvenido.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n  <title>Makerhack</title>\n\n  \n\t<!-- Place favicon.ico and apple-touch-icon.png in the root directory -->\n\t<link rel=\"shortcut icon\" href=\"favicon.ico\">\n\n\t<!-- Google Webfonts -->\n\t<link href='https://fonts.googleapis.com/css?family=Montserrat:400,700' rel='stylesheet' type='text/css'>\n\t<link href='https://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet' type='text/css'>\n\n\t<!-- Animate.css -->\n\t<link rel=\"stylesheet\" href=\"../../assets/css/animate.css\">\n\t<!-- Icomoon Icon Fonts-->\n\t<link rel=\"stylesheet\" href=\"../../assets/css/icomoon.css\">\n\t<!-- Simple Line Icons-->\n\t<link rel=\"stylesheet\" href=\"../../assets/css/simple-line-icons.css\">\n\t<!-- Magnific Popup -->\n\t<link rel=\"stylesheet\" href=\"../../assets/css/magnific-popup.css\">\n\t<!-- Owl Carousel -->\n\t<link rel=\"stylesheet\" href=\"../../assets/css/owl.carousel.min.css\">\n\t<link rel=\"stylesheet\" href=\"../../assets/css/owl.theme.default.min.css\">\n\n\t<!-- Theme Style -->\n\t<link rel=\"stylesheet\" href=\"../../assets/css/style.css\">\n\t\t<!-- Modernizr JS -->\n\t\t<script src=\"../../assets/js/modernizr-2.6.2.min.js\"></script>\n\t<!-- FOR IE9 below -->\n\t<!--[if lt IE 9]>\n\t<script src=\"js/respond.min.js\"></script>\n  <![endif]-->\n  \n</head>\n<body>\n  \t<div id=\"fh5co-page\">\n        <div id=\"fh5co-wrap\">\n          <header id=\"fh5co-hero\" data-section=\"home\" role=\"banner\">\n            <div class=\"fh5co-overlay\"></div>\n            <div class=\"fh5co-intro\">\n              <div class=\"container\">\n                <div class=\"row\">\n    \n                  <div class=\"col-md-6 fh5co-text\">\n                    <h2 class=\"to-animate intro-animate-1\">Makerhack</h2>\n                    <p class=\"to-animate intro-animate-2\">Comunidad de Tecnología, Emprendimiento e Innovación</p>\n                    <p class=\"to-animate intro-animate-2\"><img src=\"../../assets/images/ua.png\" width=\"240\" alt=\"\"> <img src=\"../../assets/images/innovua_o.png\" width=\"240\" alt=\"\"> </p>\n                  </div>\n                  <div class=\"col-md-6 text-right fh5co-intro-img to-animate intro-animate-4\">\n                    <img src=\"../../assets/images/iphone_6_3.png\"  alt=\"\">\n                  </div>\n    \n                </div>\n              </div>\n            </div>\n          </header>\n          <!-- END .header -->\n    \n        </div>\n      </div>\n    \n    \n      <!-- jQuery -->\n      <script src=\"../../assets/js/jquery.min.js\"></script>\n      <!-- jQuery Easing -->\n      <script src=\"../../assets/js/jquery.easing.1.3.js\"></script>\n      <!-- Bootstrap -->\n      <script src=\"../../assets/js/bootstrap.min.js\"></script>\n      <!-- Waypoints -->\n      <script src=\"../../assets/js/jquery.waypoints.min.js\"></script>\n      <!-- Magnific Popup -->\n      <script src=\"../../assets/js/jquery.magnific-popup.min.js\"></script>\n      <!-- Owl Carousel -->\n      <script src=\"../../assets/js/owl.carousel.min.js\"></script>\n      <!-- toCount -->\n      <script src=\"../../assets/js/jquery.countTo.js\"></script>\n      <!-- Main JS -->\n      <script src=\"../../assets/js/main.js\"></script>\n</body>\n</html>"

/***/ }),

/***/ "./src/app/bienvenido/bienvenido.component.ts":
/*!****************************************************!*\
  !*** ./src/app/bienvenido/bienvenido.component.ts ***!
  \****************************************************/
/*! exports provided: BienvenidoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BienvenidoComponent", function() { return BienvenidoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BienvenidoComponent = /** @class */ (function () {
    function BienvenidoComponent() {
    }
    BienvenidoComponent.prototype.ngOnInit = function () {
    };
    BienvenidoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-bienvenido',
            template: __webpack_require__(/*! ./bienvenido.component.html */ "./src/app/bienvenido/bienvenido.component.html"),
            styles: [__webpack_require__(/*! ./bienvenido.component.css */ "./src/app/bienvenido/bienvenido.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BienvenidoComponent);
    return BienvenidoComponent;
}());



/***/ }),

/***/ "./src/app/edit-user/edit-user.component.html":
/*!****************************************************!*\
  !*** ./src/app/edit-user/edit-user.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"edit-page\">\r\n  <nav aria-label=\"breadcrumb\">\r\n    <ol class=\"breadcrumb\">\r\n      <li class=\"breadcrumb-item active\" aria-current=\"page\">Editar Miembro</li>\r\n    </ol>\r\n  </nav>\r\n  <div class=\"page-content\">\r\n    <div class=\"row\">\r\n      <div class=\"col col-md-4\">\r\n        <img class=\"img-avatar\" [src]=\"item.avatar\">\r\n        <button mat-stroked-button class=\"change-img-button\" color=\"primary\" (click)=\"openDialog()\">Cambiar\r\n          Avatar</button>\r\n      </div>\r\n      <div class=\"col col-md-8\">\r\n\r\n        <form class=\"edit-form\" [formGroup]=\"exampleForm\" novalidate\r\n          (ngSubmit)=\"onSubmit(exampleForm.value)\">\r\n          <div id=\"contenido\" >\r\n\r\n            <h2>Bio Miembro Makerhack</h2>\r\n            <hr>\r\n            <div class=\"row\">\r\n              <div class=\"col-md-6\">\r\n                <mat-form-field class=\"input-style\">\r\n                  <input matInput placeholder=\"Nombres\" class=\"form-control\" formControlName=\"name\">\r\n                </mat-form-field>\r\n                <ng-container *ngFor=\"let validation of validation_messages.name\">\r\n                  <mat-error\r\n                    *ngIf=\"exampleForm.get('name').hasError(validation.type) && (exampleForm.get('name').dirty || exampleForm.get('name').touched)\">\r\n                    {{validation.message}}</mat-error>\r\n                </ng-container>\r\n              </div>\r\n              <div class=\"col-md-6\">\r\n\r\n                <mat-form-field class=\"input-style\">\r\n                  <input matInput placeholder=\"Apellidos\" class=\"form-control\" formControlName=\"surname\">\r\n                </mat-form-field>\r\n                <ng-container *ngFor=\"let validation of validation_messages.surname\">\r\n                  <mat-error\r\n                    *ngIf=\"exampleForm.get('surname').hasError(validation.type) && (exampleForm.get('surname').dirty || exampleForm.get('surname').touched)\">\r\n                    {{validation.message}}</mat-error>\r\n                </ng-container>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <mat-form-field class=\"input-style\">\r\n                <input matInput placeholder=\"Carrera\" class=\"form-control\" formControlName=\"carrera\">\r\n              </mat-form-field>\r\n              <ng-container *ngFor=\"let validation of validation_messages.carrera\">\r\n                <mat-error\r\n                  *ngIf=\"exampleForm.get('carrera').hasError(validation.type) && (exampleForm.get('carrera').dirty || exampleForm.get('carrera').touched)\">\r\n                  {{validation.message}}</mat-error>\r\n              </ng-container>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <mat-form-field class=\"input-style\">\r\n                <input matInput type=\"number\" min=\"0\" max=\"100\" placeholder=\"Age\" class=\"form-control\"\r\n                  formControlName=\"age\">\r\n              </mat-form-field>\r\n              <ng-container *ngFor=\"let validation of validation_messages.age\">\r\n                <mat-error\r\n                  *ngIf=\"exampleForm.get('age').hasError(validation.type) && (exampleForm.get('age').dirty || exampleForm.get('age').touched)\">\r\n                  {{validation.message}}</mat-error>\r\n              </ng-container>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-md-6\">\r\n                <mat-form-field class=\"input-style\">\r\n                  <input matInput placeholder=\"Email\" class=\"form-control\" formControlName=\"email\">\r\n                </mat-form-field>\r\n                <ng-container *ngFor=\"let validation of validation_messages.email\">\r\n                  <mat-error\r\n                    *ngIf=\"exampleForm.get('email').hasError(validation.type) && (exampleForm.get('email').dirty || exampleForm.get('email').touched)\">\r\n                    {{validation.message}}</mat-error>\r\n                </ng-container>\r\n              </div>\r\n\r\n              <div class=\"col-md-6\">\r\n                <mat-form-field class=\"input-style\">\r\n                  <input matInput placeholder=\"Celular\" class=\"form-control\" formControlName=\"celular\">\r\n                </mat-form-field>\r\n                <ng-container *ngFor=\"let validation of validation_messages.celular\">\r\n                  <mat-error\r\n                    *ngIf=\"exampleForm.get('celular').hasError(validation.type) && (exampleForm.get('celular').dirty || exampleForm.get('celular').touched)\">\r\n                    {{validation.message}}</mat-error>\r\n                </ng-container>\r\n              </div>\r\n            </div>\r\n\r\n            <br>\r\n            <h2>Proyectos</h2>\r\n            <hr>\r\n\r\n            <div class=\"row\">\r\n              <div class=\"col-md-6\">\r\n                <mat-form-field class=\"input-style\">\r\n                  <input matInput placeholder=\"Nombre Proyecto\" class=\"form-control\" formControlName=\"nameproy\">\r\n                </mat-form-field>\r\n              </div>\r\n              <div class=\"col-md-6\">\r\n                <mat-form-field class=\"input-style\">\r\n                  <input matInput placeholder=\"Link página o video\" class=\"form-control\" formControlName=\"link\">\r\n                </mat-form-field>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <mat-form-field class=\"input-style\">\r\n                <textarea matInput placeholder=\"Descripción\" class=\"form-control\"\r\n                  formControlName=\"descripcion\"></textarea>\r\n              </mat-form-field>\r\n            </div>\r\n            <h2>Logros</h2>\r\n            <hr>\r\n            <div class=\"row\">\r\n              <div class=\"col-md-6\">\r\n                <mat-form-field class=\"input-style\">\r\n                  <input matInput placeholder=\"Evento logrado\" class=\"form-control\" formControlName=\"evento_logro\">\r\n                </mat-form-field>\r\n                <ng-container *ngFor=\"let validation of validation_messages.evento_logro\">\r\n                  <mat-error\r\n                    *ngIf=\"exampleForm.get('evento_logro').hasError(validation.type) && (exampleForm.get('evento_logro').dirty || exampleForm.get('evento_logro').touched)\">\r\n                    {{validation.message}}</mat-error>\r\n                </ng-container>\r\n              </div>\r\n              <div class=\"col-md-6\">\r\n                <mat-form-field class=\"input-style\">\r\n                  <input matInput placeholder=\"Fecha Logro\" class=\"form-control\" formControlName=\"fecha_logro\">\r\n                </mat-form-field>\r\n                <ng-container *ngFor=\"let validation of validation_messages.fecha_logro\">\r\n                  <mat-error\r\n                    *ngIf=\"exampleForm.get('fecha_logro').hasError(validation.type) && (exampleForm.get('fecha_logro').dirty || exampleForm.get('fecha_logro').touched)\">\r\n                    {{validation.message}}</mat-error>\r\n                </ng-container>\r\n              </div>\r\n              <div class=\"col-md-6\">\r\n                <mat-form-field class=\"input-style\">\r\n                  <input matInput placeholder=\"Puesto logro\" class=\"form-control\" formControlName=\"puesto_logro\">\r\n                </mat-form-field>\r\n                <ng-container *ngFor=\"let validation of validation_messages.puesto_logro\">\r\n                  <mat-error\r\n                    *ngIf=\"exampleForm.get('puesto_logro').hasError(validation.type) && (exampleForm.get('puesto_logro').dirty || exampleForm.get('puesto_logro').touched)\">\r\n                    {{validation.message}}</mat-error>\r\n                </ng-container>\r\n              </div>\r\n            </div>\r\n\r\n            <h2>Categoría</h2>\r\n            <hr>\r\n\r\n            <div class=\"row\">\r\n              <div class=\"col-md-6\">\r\n                <mat-form-field class=\"input-style\">\r\n                  <input matInput placeholder=\"Categoría de makerhack\" class=\"form-control\" formControlName=\"categoria\">\r\n                </mat-form-field>\r\n                <ng-container *ngFor=\"let validation of validation_messages.categoria\">\r\n                  <mat-error\r\n                    *ngIf=\"exampleForm.get('categoria').hasError(validation.type) && (exampleForm.get('categoria').dirty || exampleForm.get('categoria').touched)\">\r\n                    {{validation.message}}</mat-error>\r\n                </ng-container>\r\n              </div>\r\n              <div class=\"col-md-6\">\r\n                <mat-form-field class=\"input-style\">\r\n                  <input matInput placeholder=\"Fecha de Ingreso\" class=\"form-control\" formControlName=\"fecha\">\r\n                </mat-form-field>\r\n                <ng-container *ngFor=\"let validation of validation_messages.fecha\">\r\n                  <mat-error\r\n                    *ngIf=\"exampleForm.get('fecha').hasError(validation.type) && (exampleForm.get('fecha').dirty || exampleForm.get('fecha').touched)\">\r\n                    {{validation.message}}</mat-error>\r\n                </ng-container>\r\n              </div>\r\n            </div>\r\n            <br>\r\n          </div>\r\n\r\n            <div class=\"row submit-button-container\">\r\n              <div class=\"col-md-4\">\r\n                <button mat-raised-button class=\"submit-button\" color=\"primary\" type=\"submit\"\r\n                  [disabled]=\"!exampleForm.valid\">Guardar</button>\r\n              </div>\r\n              <div class=\"col-md-4\">\r\n                <button mat-raised-button class=\"delete-button\" color=\"warn\" type=\"button\"\r\n                  (click)=\"delete()\">Eliminar</button>\r\n              </div>\r\n              <div class=\"col-md-4\">\r\n                <button mat-raised-button class=\"submit-button\" color=\"secondary\" type=\"button\"\r\n                  (click)=\"generarPDF()\">Crear PDF</button>\r\n              </div>\r\n\r\n            </div>\r\n          \r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/edit-user/edit-user.component.scss":
/*!****************************************************!*\
  !*** ./src/app/edit-user/edit-user.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".edit-page {\n  padding: 20px 5px; }\n  .edit-page .page-content {\n    background-color: #FFF; }\n  .edit-page .page-content .img-avatar {\n      border-radius: 50%;\n      width: 150px;\n      display: block;\n      margin: 20px auto; }\n  .edit-page .page-content .change-img-button {\n      display: block;\n      margin: 0px auto; }\n  .edit-page .page-content .edit-form {\n      padding: 20px; }\n  .edit-page .page-content .edit-form .submit-button-container {\n        justify-content: flex-end; }\n  .edit-page .page-content .edit-form .submit-button-container .submit-button {\n          width: 100%; }\n  .edit-page .page-content .edit-form .submit-button-container .delete-button {\n          width: 100%; }\n  .edit-page .page-content .edit-form .input-style {\n        width: 100%; }\n  .edit-page .page-content .edit-form .mat-error {\n        font-size: 12px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdC11c2VyL0M6XFxwcm95ZWN0b3NfZmx1dHRlclxcYW5ndWxhci1maXJlYmFzZS1jcnVkL3NyY1xcYXBwXFxlZGl0LXVzZXJcXGVkaXQtdXNlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVFLGlCQUFpQixFQUFBO0VBRm5CO0lBS0ksc0JBQXNCLEVBQUE7RUFMMUI7TUFRTSxrQkFBa0I7TUFDbEIsWUFBWTtNQUNaLGNBQWM7TUFDZCxpQkFBaUIsRUFBQTtFQVh2QjtNQWVNLGNBQWM7TUFDZCxnQkFBZ0IsRUFBQTtFQWhCdEI7TUFvQk0sYUFBYSxFQUFBO0VBcEJuQjtRQXdCUSx5QkFBeUIsRUFBQTtFQXhCakM7VUEyQlUsV0FBVyxFQUFBO0VBM0JyQjtVQStCVSxXQUFXLEVBQUE7RUEvQnJCO1FBb0NRLFdBQVcsRUFBQTtFQXBDbkI7UUF3Q1EsZUFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvZWRpdC11c2VyL2VkaXQtdXNlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5lZGl0LXBhZ2Uge1xyXG5cclxuICBwYWRkaW5nOiAyMHB4IDVweDtcclxuXHJcbiAgLnBhZ2UtY29udGVudCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xyXG5cclxuICAgIC5pbWctYXZhdGFyIHtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICB3aWR0aDogMTUwcHg7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICBtYXJnaW46IDIwcHggYXV0bztcclxuICAgIH1cclxuXHJcbiAgICAuY2hhbmdlLWltZy1idXR0b24ge1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgbWFyZ2luOiAwcHggYXV0bztcclxuICAgIH1cclxuXHJcbiAgICAuZWRpdC1mb3JtIHtcclxuICAgICAgcGFkZGluZzogMjBweDtcclxuXHJcblxyXG4gICAgICAuc3VibWl0LWJ1dHRvbi1jb250YWluZXIge1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcblxyXG4gICAgICAgIC5zdWJtaXQtYnV0dG9ue1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuZGVsZXRlLWJ1dHRvbntcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLmlucHV0LXN0eWxle1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAubWF0LWVycm9yIHtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/edit-user/edit-user.component.ts":
/*!**************************************************!*\
  !*** ./src/app/edit-user/edit-user.component.ts ***!
  \**************************************************/
/*! exports provided: EditUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditUserComponent", function() { return EditUserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _avatar_dialog_avatar_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../avatar-dialog/avatar-dialog.component */ "./src/app/avatar-dialog/avatar-dialog.component.ts");
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/firebase.service */ "./src/app/services/firebase.service.ts");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jspdf */ "./node_modules/jspdf/dist/jspdf.min.js");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(jspdf__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! html2canvas */ "./node_modules/html2canvas/dist/html2canvas.js");
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(html2canvas__WEBPACK_IMPORTED_MODULE_8__);










var EditUserComponent = /** @class */ (function () {
    function EditUserComponent(firebaseService, route, fb, router, dialog) {
        this.firebaseService = firebaseService;
        this.route = route;
        this.fb = fb;
        this.router = router;
        this.dialog = dialog;
        this.titulo = 'Generar PDF con Angular JS 5';
        this.imagen1 = 'assets/img/tc.jpg';
        this.imagen2 = 'assets/img/pm.jpg';
        this.imagen3 = 'assets/img/al.jpg';
        this.validation_messages = {
            'name': [
                { type: 'required', message: 'Nombres es requerido.' }
            ],
            'surname': [
                { type: 'required', message: 'Apellidos es requerido.' }
            ],
            'carrera': [
                { type: 'required', message: 'Carrera es requerido.' }
            ],
            'age': [
                { type: 'required', message: 'Edad es requerido.' },
            ],
            'email': [
                { type: 'required', message: 'Email  es requerido.' },
            ],
            'celular': [
                { type: 'required', message: 'Celular  es requerido.' },
            ],
            'categoria': [
                { type: 'required', message: 'categoria  es requerido.' },
            ],
            'fecha': [
                { type: 'required', message: 'fecha  es requerido.' },
            ],
            'evento_logro': [
                { type: 'required', message: 'Evento logro  es requerido.' },
            ],
            'fecha_logro': [
                { type: 'required', message: 'Fecha logro  es requerido.' },
            ],
            'puesto_logro': [
                { type: 'required', message: 'Puesto logro  es requerido.' },
            ]
        };
    }
    EditUserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.subscribe(function (routeData) {
            var data = routeData['data'];
            if (data) {
                _this.item = data.payload.data();
                _this.item.id = data.payload.id;
                _this.createForm();
            }
        });
    };
    EditUserComponent.prototype.createForm = function () {
        this.exampleForm = this.fb.group({
            name: [this.item.name, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            surname: [this.item.surname, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            carrera: [this.item.carrera, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            age: [this.item.age, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            email: [this.item.email, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            celular: [this.item.celular, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            nameproy: [this.item.nameproy],
            link: [this.item.link],
            descripcion: [this.item.descripcion],
            categoria: [this.item.categoria, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            fecha: [this.item.fecha, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            evento_logro: [this.item.evento_logro, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            fecha_logro: [this.item.fecha_logro, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            puesto_logro: [this.item.puesto_logro, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
    };
    EditUserComponent.prototype.openDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_avatar_dialog_avatar_dialog_component__WEBPACK_IMPORTED_MODULE_5__["AvatarDialogComponent"], {
            height: '400px',
            width: '400px'
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.item.avatar = result.link;
            }
        });
    };
    EditUserComponent.prototype.onSubmit = function (value) {
        var _this = this;
        value.avatar = this.item.avatar;
        value.age = Number(value.age);
        this.firebaseService.updateUser(this.item.id, value)
            .then(function (res) {
            _this.router.navigate(['/home']);
        });
    };
    EditUserComponent.prototype.delete = function () {
        var _this = this;
        this.firebaseService.deleteUser(this.item.id)
            .then(function (res) {
            _this.router.navigate(['/home']);
        }, function (err) {
            console.log(err);
        });
    };
    EditUserComponent.prototype.cancel = function () {
        this.router.navigate(['/home']);
    };
    EditUserComponent.prototype.generarPDF = function () {
        html2canvas__WEBPACK_IMPORTED_MODULE_8__(document.getElementById('contenido'), {
            // Opciones
            allowTaint: true,
            useCORS: false,
            // Calidad del PDF
            scale: 1
        }).then(function (canvas) {
            var img = canvas.toDataURL("image/png");
            var doc = new jspdf__WEBPACK_IMPORTED_MODULE_7__();
            doc.addImage(img, 'PNG', 7, 20, 195, 200);
            doc.save('Makerhack-list.pdf');
        });
    };
    EditUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-user',
            template: __webpack_require__(/*! ./edit-user.component.html */ "./src/app/edit-user/edit-user.component.html"),
            styles: [__webpack_require__(/*! ./edit-user.component.scss */ "./src/app/edit-user/edit-user.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_firebase_service__WEBPACK_IMPORTED_MODULE_6__["FirebaseService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]])
    ], EditUserComponent);
    return EditUserComponent;
}());



/***/ }),

/***/ "./src/app/edit-user/edit-user.resolver.ts":
/*!*************************************************!*\
  !*** ./src/app/edit-user/edit-user.resolver.ts ***!
  \*************************************************/
/*! exports provided: EditUserResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditUserResolver", function() { return EditUserResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/firebase.service */ "./src/app/services/firebase.service.ts");



var EditUserResolver = /** @class */ (function () {
    function EditUserResolver(firebaseService) {
        this.firebaseService = firebaseService;
    }
    EditUserResolver.prototype.resolve = function (route) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var userId = route.paramMap.get('id');
            _this.firebaseService.getUser(userId)
                .subscribe(function (data) {
                resolve(data);
            });
        });
    };
    EditUserResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"]])
    ], EditUserResolver);
    return EditUserResolver;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"padding: 20px\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-4 offset-md-1\">\r\n          <div class=\"input-group\">\r\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"searchValue\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"Buscar por nombre...\" (keyup)=\"searchByName()\">\r\n            <div class=\"input-group-append\">\r\n              <span class=\"input-group-text\"><ion-icon class=\"icon\" name=\"search\"></ion-icon></span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-6 filter-by-age\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-auto title\">\r\n              <span>Filtrar por edad (older than):</span>\r\n            </div>\r\n            <div class=\"col\">\r\n              <span>0 </span>\r\n              <mat-slider\r\n                class=\"age-slider\"\r\n                max=\"100\"\r\n                min=\"0\"\r\n                step=\"1\"\r\n                thumbLabel=\"true\"\r\n                (ngModel)=\"ageValue\"\r\n                (change)=\"rangeChange($event)\">\r\n              </mat-slider>\r\n              <span> 100</span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      \r\n      <div class=\"list-group users-list\">\r\n        <div *ngFor=\"let item of items\" class=\"list-group-item list-group-item-action flex-column align-items-start\">\r\n          <div class=\"row\">\r\n            <div class=\"col col-md-2 image-col\">\r\n              <img class=\"image\" [src]=\"item.payload.doc.data().avatar\">\r\n            </div>\r\n            <div class=\"col col-md-8 text-col\">\r\n              <h5 class=\"mb-1\">{{item.payload.doc.data().name}} {{item.payload.doc.data().surname}}</h5>\r\n              <small>Carrera: {{item.payload.doc.data().carrera}}</small><br>\r\n              <small>Categoría: {{item.payload.doc.data().categoria}} </small><br>\r\n              <small>Fecha de Ingreso: {{item.payload.doc.data().fecha}} </small>\r\n            </div>\r\n            <div class=\"col col-md-2 actions-col\">\r\n              <button class=\"btn btn-outline-primary action\" (click)=\"viewDetails(item)\" type=\"button\">\r\n                <ion-icon class=\"icon\" name=\"arrow-round-forward\"></ion-icon>\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      \r\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".filter-by-age {\n  color: #6c757d; }\n  .filter-by-age .title {\n    align-self: center; }\n  .filter-by-age .age-slider {\n    width: 85%; }\n  .users-list {\n  padding: 40px 10px; }\n  .users-list .image-col {\n    text-align: center; }\n  .users-list .image-col .image {\n      border-radius: 50%;\n      width: 100px;\n      height: 100px; }\n  .users-list .text-col {\n    margin: auto 0px; }\n  .users-list .actions-col {\n    text-align: center;\n    margin: auto 0px; }\n  .users-list .actions-col .action {\n      line-height: 1; }\n  .users-list .actions-col .icon {\n      font-size: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxccHJveWVjdG9zX2ZsdXR0ZXJcXGFuZ3VsYXItZmlyZWJhc2UtY3J1ZC9zcmNcXGFwcFxcaG9tZVxcaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWMsRUFBQTtFQURoQjtJQUlJLGtCQUFrQixFQUFBO0VBSnRCO0lBUUksVUFBVSxFQUFBO0VBSWQ7RUFDRSxrQkFBa0IsRUFBQTtFQURwQjtJQUlJLGtCQUFpQixFQUFBO0VBSnJCO01BT00sa0JBQWtCO01BQ2xCLFlBQVk7TUFDWixhQUFhLEVBQUE7RUFUbkI7SUFhSSxnQkFBZ0IsRUFBQTtFQWJwQjtJQWdCSSxrQkFBa0I7SUFDbEIsZ0JBQWdCLEVBQUE7RUFqQnBCO01Bb0JNLGNBQWMsRUFBQTtFQXBCcEI7TUF1Qk0sZUFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZpbHRlci1ieS1hZ2Uge1xyXG4gIGNvbG9yOiAjNmM3NTdkO1xyXG5cclxuICAudGl0bGUge1xyXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLmFnZS1zbGlkZXIge1xyXG4gICAgd2lkdGg6IDg1JTtcclxuICB9XHJcbn1cclxuXHJcbi51c2Vycy1saXN0IHtcclxuICBwYWRkaW5nOiA0MHB4IDEwcHg7XHJcblxyXG4gIC5pbWFnZS1jb2wge1xyXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcblxyXG4gICAgLmltYWdlIHtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC50ZXh0LWNvbCB7XHJcbiAgICBtYXJnaW46IGF1dG8gMHB4O1xyXG4gIH1cclxuICAuYWN0aW9ucy1jb2wge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiBhdXRvIDBweDtcclxuXHJcbiAgICAuYWN0aW9uIHtcclxuICAgICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICB9XHJcbiAgICAuaWNvbiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/firebase.service */ "./src/app/services/firebase.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var HomeComponent = /** @class */ (function () {
    function HomeComponent(firebaseService, router) {
        this.firebaseService = firebaseService;
        this.router = router;
        this.ageValue = 0;
        this.searchValue = "";
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.getData();
    };
    HomeComponent.prototype.getData = function () {
        var _this = this;
        this.firebaseService.getUsers()
            .subscribe(function (result) {
            _this.items = result;
            _this.age_filtered_items = result;
            _this.name_filtered_items = result;
        });
    };
    HomeComponent.prototype.viewDetails = function (item) {
        this.router.navigate(['/details/' + item.payload.doc.id]);
    };
    HomeComponent.prototype.capitalizeFirstLetter = function (value) {
        return value.charAt(0).toUpperCase() + value.slice(1);
    };
    HomeComponent.prototype.searchByName = function () {
        var _this = this;
        var value = this.searchValue.toLowerCase();
        this.firebaseService.searchUsers(value)
            .subscribe(function (result) {
            _this.name_filtered_items = result;
            _this.items = _this.combineLists(result, _this.age_filtered_items);
        });
    };
    HomeComponent.prototype.rangeChange = function (event) {
        var _this = this;
        this.firebaseService.searchUsersByAge(event.value)
            .subscribe(function (result) {
            _this.age_filtered_items = result;
            _this.items = _this.combineLists(result, _this.name_filtered_items);
        });
    };
    HomeComponent.prototype.combineLists = function (a, b) {
        var result = [];
        a.filter(function (x) {
            return b.filter(function (x2) {
                if (x2.payload.doc.id == x.payload.doc.id) {
                    result.push(x2);
                }
            });
        });
        return result;
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/new-user/new-user.component.html":
/*!**************************************************!*\
  !*** ./src/app/new-user/new-user.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"create-page\">\r\n  <nav aria-label=\"breadcrumb\">\r\n    <ol class=\"breadcrumb\">\r\n      <li class=\"breadcrumb-item active\" aria-current=\"page\">Registrar Nuevo miembro</li>\r\n    </ol>\r\n  </nav>\r\n  <div class=\"page-content\">\r\n    <div class=\"row\">\r\n      <div class=\"col col-md-12\">\r\n        <form class=\"create-form\" [formGroup]=\"exampleForm\" novalidate (ngSubmit)=\"onSubmit(exampleForm.value)\">\r\n          <div class=\"row\">\r\n            <div class=\"col col-md-4\">\r\n              <img class=\"img-avatar\" src=\"{{avatarLink}}\">\r\n\r\n              <a mat-stroked-button class=\"change-img-button\" color=\"primary\" (click)=\"openDialog()\">Cambiar\r\n                Avatar</a>\r\n              <br>\r\n\r\n              <br>\r\n\r\n              <h3>Comunidad Makerhack</h3>\r\n              <hr>\r\n\r\n              <div class=\"col-md-12\">\r\n                <mat-form-field class=\"input-style\">\r\n                  <input matInput placeholder=\"Categoría makerhack\" class=\"form-control\" formControlName=\"categoria\">\r\n                </mat-form-field>\r\n                <ng-container *ngFor=\"let validation of validation_messages.categoria\">\r\n                  <mat-error\r\n                    *ngIf=\"exampleForm.get('categoria').hasError(validation.type) && (exampleForm.get('categoria').dirty || exampleForm.get('categoria').touched)\">\r\n                    {{validation.message}}</mat-error>\r\n                </ng-container>\r\n              </div>\r\n              <div class=\"col-md-12\">\r\n                <mat-form-field class=\"input-style\">\r\n                  <input matInput placeholder=\"Fecha de Ingreso\" class=\"form-control\" formControlName=\"fecha\">\r\n                </mat-form-field>\r\n                <ng-container *ngFor=\"let validation of validation_messages.fecha\">\r\n                  <mat-error\r\n                    *ngIf=\"exampleForm.get('fecha').hasError(validation.type) && (exampleForm.get('fecha').dirty || exampleForm.get('fecha').touched)\">\r\n                    {{validation.message}}</mat-error>\r\n                </ng-container>\r\n              </div>\r\n\r\n              <br>\r\n            </div>\r\n            <div class=\"col col-md-8\">\r\n              <h2>Bio</h2>\r\n              <hr>\r\n              <div class=\"row\">\r\n                <div class=\"col-md-6\">\r\n                  <mat-form-field class=\"input-style\">\r\n                    <input matInput placeholder=\"Nombres\" class=\"form-control\" formControlName=\"name\">\r\n                  </mat-form-field>\r\n                  <ng-container *ngFor=\"let validation of validation_messages.name\">\r\n                    <mat-error\r\n                      *ngIf=\"exampleForm.get('name').hasError(validation.type) && (exampleForm.get('name').dirty || exampleForm.get('name').touched)\">\r\n                      {{validation.message}}</mat-error>\r\n                  </ng-container>\r\n                </div>\r\n\r\n                <div class=\"col-md-6\">\r\n                  <mat-form-field class=\"input-style\">\r\n                    <input matInput placeholder=\"Apellidos\" class=\"form-control\" formControlName=\"surname\">\r\n                  </mat-form-field>\r\n                  <ng-container *ngFor=\"let validation of validation_messages.surname\">\r\n                    <mat-error\r\n                      *ngIf=\"exampleForm.get('surname').hasError(validation.type) && (exampleForm.get('surname').dirty || exampleForm.get('surname').touched)\">\r\n                      {{validation.message}}</mat-error>\r\n                  </ng-container>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-md-6\">\r\n                  <mat-form-field class=\"input-style\">\r\n                    <input matInput placeholder=\"Carrera\" class=\"form-control\" formControlName=\"carrera\">\r\n                  </mat-form-field>\r\n                  <ng-container *ngFor=\"let validation of validation_messages.carrera\">\r\n                    <mat-error\r\n                      *ngIf=\"exampleForm.get('carrera').hasError(validation.type) && (exampleForm.get('carrera').dirty || exampleForm.get('carrera').touched)\">\r\n                      {{validation.message}}</mat-error>\r\n                  </ng-container>\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                  <mat-form-field class=\"input-style\">\r\n                    <input matInput type=\"number\" min=\"0\" max=\"100\" placeholder=\"Edad\" class=\"form-control\"\r\n                      formControlName=\"age\">\r\n                  </mat-form-field>\r\n                  <ng-container *ngFor=\"let validation of validation_messages.age\">\r\n                    <mat-error\r\n                      *ngIf=\"exampleForm.get('age').hasError(validation.type) && (exampleForm.get('age').dirty || exampleForm.get('age').touched)\">\r\n                      {{validation.message}}</mat-error>\r\n                  </ng-container>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-md-6\">\r\n                  <mat-form-field class=\"input-style\">\r\n                    <input matInput placeholder=\"Email\" class=\"form-control\" formControlName=\"email\">\r\n                  </mat-form-field>\r\n                  <ng-container *ngFor=\"let validation of validation_messages.email\">\r\n                    <mat-error\r\n                      *ngIf=\"exampleForm.get('email').hasError(validation.type) && (exampleForm.get('email').dirty || exampleForm.get('email').touched)\">\r\n                      {{validation.message}}</mat-error>\r\n                  </ng-container>\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                  <mat-form-field class=\"input-style\">\r\n                    <input matInput placeholder=\"Celular\" class=\"form-control\" formControlName=\"celular\">\r\n                  </mat-form-field>\r\n                  <ng-container *ngFor=\"let validation of validation_messages.celular\">\r\n                    <mat-error\r\n                      *ngIf=\"exampleForm.get('celular').hasError(validation.type) && (exampleForm.get('celular').dirty || exampleForm.get('celular').touched)\">\r\n                      {{validation.message}}</mat-error>\r\n                  </ng-container>\r\n                </div>\r\n              </div>\r\n\r\n              <br>\r\n              <h2>Proyectos destacados</h2>\r\n              <hr>\r\n\r\n              <div class=\"row\">\r\n                <div class=\"col-md-6\">\r\n                  <mat-form-field class=\"input-style\">\r\n                    <input matInput placeholder=\"Nombre Proyecto\" class=\"form-control\" formControlName=\"nameproy\">\r\n                  </mat-form-field>\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                  <mat-form-field class=\"input-style\">\r\n                    <input matInput placeholder=\"Link página o video\" class=\"form-control\" formControlName=\"link\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <mat-form-field class=\"input-style\">\r\n                  <textarea matInput placeholder=\"Descripción\" class=\"form-control\"\r\n                    formControlName=\"descripcion\"></textarea>\r\n                </mat-form-field>\r\n              </div>\r\n\r\n\r\n\r\n              <h2>Logros</h2>\r\n              <hr>\r\n              <div class=\"row\">\r\n                <div class=\"col-md-6\">\r\n                  <mat-form-field class=\"input-style\">\r\n                    <input matInput placeholder=\"Evento logrado\" class=\"form-control\" formControlName=\"evento_logro\">\r\n                  </mat-form-field>\r\n                  <ng-container *ngFor=\"let validation of validation_messages.evento_logro\">\r\n                    <mat-error\r\n                      *ngIf=\"exampleForm.get('evento_logro').hasError(validation.type) && (exampleForm.get('evento_logro').dirty || exampleForm.get('evento_logro').touched)\">\r\n                      {{validation.message}}</mat-error>\r\n                  </ng-container>\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                  <mat-form-field class=\"input-style\">\r\n                    <input matInput placeholder=\"Fecha Logro\" class=\"form-control\" formControlName=\"fecha_logro\">\r\n                  </mat-form-field>\r\n                  <ng-container *ngFor=\"let validation of validation_messages.fecha_logro\">\r\n                    <mat-error\r\n                      *ngIf=\"exampleForm.get('fecha_logro').hasError(validation.type) && (exampleForm.get('fecha_logro').dirty || exampleForm.get('fecha_logro').touched)\">\r\n                      {{validation.message}}</mat-error>\r\n                  </ng-container>\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                  <mat-form-field class=\"input-style\">\r\n                    <input matInput placeholder=\"Puesto logro\" class=\"form-control\" formControlName=\"puesto_logro\">\r\n                  </mat-form-field>\r\n                  <ng-container *ngFor=\"let validation of validation_messages.puesto_logro\">\r\n                    <mat-error\r\n                      *ngIf=\"exampleForm.get('puesto_logro').hasError(validation.type) && (exampleForm.get('puesto_logro').dirty || exampleForm.get('puesto_logro').touched)\">\r\n                      {{validation.message}}</mat-error>\r\n                  </ng-container>\r\n                </div>\r\n              </div>\r\n              <br>\r\n              <div class=\"row submit-button-container\">\r\n                <div class=\"col-md-4\">\r\n                  <button mat-raised-button class=\"submit-button\" color=\"primary\" type=\"submit\"\r\n                    [disabled]=\"!exampleForm.valid\">Registrar</button>\r\n                </div>\r\n              </div>\r\n\r\n\r\n            </div>\r\n\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/new-user/new-user.component.scss":
/*!**************************************************!*\
  !*** ./src/app/new-user/new-user.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".create-page {\n  padding: 20px 5px; }\n  .create-page .page-content {\n    background-color: #FFF; }\n  .create-page .page-content .img-avatar {\n      border-radius: 50%;\n      width: 150px;\n      display: block;\n      margin: 20px auto; }\n  .create-page .page-content .change-img-button {\n      display: block;\n      margin: 0px auto; }\n  .create-page .page-content .create-form {\n      padding: 20px; }\n  .create-page .page-content .create-form .submit-button-container {\n        justify-content: flex-end; }\n  .create-page .page-content .create-form .submit-button-container .submit-button {\n          width: 100%; }\n  .create-page .page-content .create-form .input-style {\n        width: 100%; }\n  .create-page .page-content .create-form .mat-error {\n        font-size: 12px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3LXVzZXIvQzpcXHByb3llY3Rvc19mbHV0dGVyXFxhbmd1bGFyLWZpcmViYXNlLWNydWQvc3JjXFxhcHBcXG5ldy11c2VyXFxuZXctdXNlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVFLGlCQUFpQixFQUFBO0VBRm5CO0lBS0ksc0JBQXNCLEVBQUE7RUFMMUI7TUFRTSxrQkFBa0I7TUFDbEIsWUFBWTtNQUNaLGNBQWM7TUFDZCxpQkFBaUIsRUFBQTtFQVh2QjtNQWVNLGNBQWM7TUFDZCxnQkFBZ0IsRUFBQTtFQWhCdEI7TUFvQk0sYUFBYSxFQUFBO0VBcEJuQjtRQXdCUSx5QkFBeUIsRUFBQTtFQXhCakM7VUEyQlUsV0FBVyxFQUFBO0VBM0JyQjtRQWdDUSxXQUFXLEVBQUE7RUFoQ25CO1FBb0NRLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL25ldy11c2VyL25ldy11c2VyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNyZWF0ZS1wYWdlIHtcclxuXHJcbiAgcGFkZGluZzogMjBweCA1cHg7XHJcblxyXG4gIC5wYWdlLWNvbnRlbnQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcclxuXHJcbiAgICAuaW1nLWF2YXRhciB7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgbWFyZ2luOiAyMHB4IGF1dG87XHJcbiAgICB9XHJcblxyXG4gICAgLmNoYW5nZS1pbWctYnV0dG9uIHtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIG1hcmdpbjogMHB4IGF1dG87XHJcbiAgICB9XHJcblxyXG4gICAgLmNyZWF0ZS1mb3JtIHtcclxuICAgICAgcGFkZGluZzogMjBweDtcclxuXHJcblxyXG4gICAgICAuc3VibWl0LWJ1dHRvbi1jb250YWluZXIge1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcblxyXG4gICAgICAgIC5zdWJtaXQtYnV0dG9ue1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAuaW5wdXQtc3R5bGV7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5tYXQtZXJyb3Ige1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/new-user/new-user.component.ts":
/*!************************************************!*\
  !*** ./src/app/new-user/new-user.component.ts ***!
  \************************************************/
/*! exports provided: NewUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewUserComponent", function() { return NewUserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _avatar_dialog_avatar_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../avatar-dialog/avatar-dialog.component */ "./src/app/avatar-dialog/avatar-dialog.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/firebase.service */ "./src/app/services/firebase.service.ts");







var NewUserComponent = /** @class */ (function () {
    function NewUserComponent(fb, dialog, router, firebaseService) {
        this.fb = fb;
        this.dialog = dialog;
        this.router = router;
        this.firebaseService = firebaseService;
        this.avatarLink = "https://www.loginradius.com/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png";
        this.validation_messages = {
            'name': [
                { type: 'required', message: 'Nombres es requerido.' }
            ],
            'surname': [
                { type: 'required', message: 'Apellidos es requerido.' }
            ],
            'carrera': [
                { type: 'required', message: 'Carrera es requerido.' }
            ],
            'age': [
                { type: 'required', message: 'Edad es requerido.' },
            ],
            'email': [
                { type: 'required', message: 'Email  es requerido.' },
            ],
            'celular': [
                { type: 'required', message: 'Celular  es requerido.' },
            ],
            'categoria': [
                { type: 'required', message: 'categoria  es requerido.' },
            ],
            'fecha': [
                { type: 'required', message: 'fecha  es requerido.' },
            ],
            'evento_logro': [
                { type: 'required', message: 'Nombre de Evento  es requerido.' },
            ],
            'fecha_logro': [
                { type: 'required', message: 'Fecha de Evento es requerido.' },
            ],
            'puesto_logro': [
                { type: 'required', message: 'Puesto del logro es requerido.' },
            ]
        };
    }
    NewUserComponent.prototype.ngOnInit = function () {
        this.createForm();
    };
    NewUserComponent.prototype.createForm = function () {
        this.exampleForm = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            surname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            carrera: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            age: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            celular: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            nameproy: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            descripcion: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            link: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            categoria: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            fecha: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            evento_logro: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            fecha_logro: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            puesto_logro: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    };
    NewUserComponent.prototype.openDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_avatar_dialog_avatar_dialog_component__WEBPACK_IMPORTED_MODULE_4__["AvatarDialogComponent"], {
            height: '400px',
            width: '400px',
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.avatarLink = result.link;
            }
        });
    };
    NewUserComponent.prototype.resetFields = function () {
        this.avatarLink = "https://www.loginradius.com/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png";
        this.exampleForm = this.fb.group({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            surname: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            carrera: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            age: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            celular: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            nameproy: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            descripcion: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            link: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            categoria: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            fecha: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            evento_logro: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            fecha_logro: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            puesto_logro: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
        });
    };
    NewUserComponent.prototype.onSubmit = function (value) {
        var _this = this;
        this.firebaseService.createUser(value, this.avatarLink)
            .then(function (res) {
            _this.resetFields();
            _this.router.navigate(['/home']);
        });
    };
    NewUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-new-user',
            template: __webpack_require__(/*! ./new-user.component.html */ "./src/app/new-user/new-user.component.html"),
            styles: [__webpack_require__(/*! ./new-user.component.scss */ "./src/app/new-user/new-user.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _services_firebase_service__WEBPACK_IMPORTED_MODULE_6__["FirebaseService"]])
    ], NewUserComponent);
    return NewUserComponent;
}());



/***/ }),

/***/ "./src/app/services/firebase.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/firebase.service.ts ***!
  \**********************************************/
/*! exports provided: FirebaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirebaseService", function() { return FirebaseService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");



var FirebaseService = /** @class */ (function () {
    function FirebaseService(db) {
        this.db = db;
    }
    FirebaseService.prototype.getAvatars = function () {
        return this.db.collection('/avatar').valueChanges();
    };
    FirebaseService.prototype.getUser = function (userKey) {
        return this.db.collection('users').doc(userKey).snapshotChanges();
    };
    //  ########### Functions ################ //
    FirebaseService.prototype.updateUser = function (userKey, value) {
        value.nameToSearch = value.name.toLowerCase();
        return this.db.collection('users').doc(userKey).set(value);
    };
    FirebaseService.prototype.deleteUser = function (userKey) {
        return this.db.collection('users').doc(userKey).delete();
    };
    FirebaseService.prototype.getUsers = function () {
        return this.db.collection('users').snapshotChanges();
    };
    //  ########### Filtros ################ //
    FirebaseService.prototype.searchUsers = function (searchValue) {
        return this.db.collection('users', function (ref) { return ref.where('nameToSearch', '>=', searchValue)
            .where('nameToSearch', '<=', searchValue + '\uf8ff'); })
            .snapshotChanges();
    };
    FirebaseService.prototype.searchUsersByAge = function (value) {
        return this.db.collection('users', function (ref) { return ref.orderBy('age').startAt(value); }).snapshotChanges();
    };
    //  #################################### //
    FirebaseService.prototype.createUser = function (value, avatar) {
        return this.db.collection('users').add({
            name: value.name,
            nameToSearch: value.name.toLowerCase(),
            surname: value.surname,
            carrera: value.carrera,
            age: parseInt(value.age),
            email: value.email,
            celular: value.celular,
            avatar: avatar,
            nameproy: value.nameproy,
            link: value.link,
            descripcion: value.descripcion,
            categoria: value.categoria,
            fecha: value.fecha,
            evento_logro: value.evento_logro,
            fecha_logro: value.fecha_logro,
            puesto_logro: value.puesto_logro,
        });
    };
    FirebaseService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]])
    ], FirebaseService);
    return FirebaseService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    firebase: {
        // apiKey: "AIzaSyBMOaRr0NirNOX-eh2ITJBHUpL3ow8Hr4w",
        // authDomain: "splendid-ground-95214.firebaseapp.com",
        // databaseURL: "https://splendid-ground-95214.firebaseio.com",
        // projectId: "splendid-ground-95214",
        // storageBucket: "",
        // messagingSenderId: "429226112331"
        apiKey: "AIzaSyDMAQeWuWit-4BnLXVYweRmHLTAOViElDg",
        authDomain: "makerhack-1ba08.firebaseapp.com",
        databaseURL: "https://makerhack-1ba08.firebaseio.com",
        projectId: "makerhack-1ba08",
        storageBucket: "",
        messagingSenderId: "589106966500",
        appId: "1:589106966500:web:4e5b9cd488307a3a"
    }
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\proyectos_flutter\angular-firebase-crud\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map