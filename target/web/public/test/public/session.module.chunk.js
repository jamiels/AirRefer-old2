webpackJsonp(["session.module"],{

/***/ "../../../../../src/app/session/error/error.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"error-page\">\n<div class=\"d-flex justify-content-center full-height full-width align-items-center\">\n  <div class=\"error-container text-center\">\n    <h1 class=\"error-number\">{{error}}</h1>\n    <h2 class=\"semi-bold\">Sorry but we couldnt find this page</h2>\n    <p class=\"p-b-10\">This page you are looking for does not exsist <a href=\"javascript:void(0)\">Report this?</a>\n    </p>\n    <div class=\"error-container-innner text-center\">\n      <form class=\"error-form\">\n        <div class=\" transparent text-left\">\n          <div class=\"form-group form-group-default input-group\" pgFormGroupDefault>  \n            <div class=\"form-input-group\">\n              <label>Search</label>\n              <input class=\"form-control\" placeholder=\"Try searching the missing page\" type=\"email\">\n            </div>\n            <div class=\"input-group-append\">\n              <span class=\"input-group-text transparent\">\n                <span class=\"pg pg-search\"></span>\n              </span>\n            </div>\n          </div>\n        </div>\n      </form>\n\n    </div>\n  </div>\n</div>\n\n<div class=\"pull-bottom sm-pull-bottom full-width d-flex align-items-center justify-content-center\">\n<div class=\"error-container\">\n  <div class=\"error-container-innner\">\n    <div class=\"p-b-30 sm-m-t-20 sm-p-r-15 sm-p-b-20 clearfix d-flex-md-up row no-margin\">\n      <div class=\"col-md-3 no-padding d-flex align-items-center justify-content-center\">\n        <img alt=\"\" pgRetina src1x=\"assets/img/demo/pages_icon.png\" src2x=\"assets/img/demo/pages_icon_2x.png\" height=\"60\" src=\"assets/img/demo/pages_icon.png\" width=\"60\">\n      </div>\n      <div class=\"col-md-9 no-padding d-flex align-items-center justify-content-center\">\n        <p class=\"small no-margin flex-1\">Create a pages account. If you have a facebook account, log into it for this process.\n              Sign in with <a href=\"javascript:void(0)\">Facebook</a> or <a href=\"javascript:void(0)\">Google</a>\n        </p>\n      </div>\n    </div>\n  </div>\n</div>\n</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/session/error/error.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".error-page {\n  height: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/session/error/error.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ErrorComponent = (function () {
    function ErrorComponent(route) {
        this.route = route;
    }
    ErrorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.error = params['type'];
        });
    };
    ErrorComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    ErrorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-error',
            template: __webpack_require__("../../../../../src/app/session/error/error.component.html"),
            styles: [__webpack_require__("../../../../../src/app/session/error/error.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], ErrorComponent);
    return ErrorComponent;
}());



/***/ }),

/***/ "../../../../../src/app/session/lockscreen/lockscreen.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- START PAGE-CONTAINER -->\n<div class=\"lock-container full-height\">\n  <!-- START PAGE CONTENT WRAPPER -->\n  <div class=\"full-height sm-p-t-50 align-items-center d-md-flex\">\n    <div class=\"row full-width\">\n      <div class=\"col-md-6\">\n        <!-- START Lock Screen User Info -->\n        <div class=\"d-flex justify-content-start align-items-center\">\n          <div class=\"\">\n            <div class=\"thumbnail-wrapper circular d48 m-r-10 \">\n              <img width=\"43\" height=\"43\" src2x=\"assets/img/profiles/avatar_small2x.jpg\" pgRetina src1x=\"assets/img/profiles/avatar.jpg\" alt=\"\" src=\"assets/img/profiles/avatar_small2x.jpg\">\n            </div>\n          </div>\n          <div class=\"\">\n            <h5 class=\"logged hint-text no-margin\">Logged in as</h5>\n            <h2 class=\"name no-margin\">David Nester</h2>\n          </div>\n        </div>\n        <!-- END Lock Screen User Info -->\n      </div>\n      <div class=\"col-md-6\">\n        <!-- START Lock Screen Form -->\n        <form id=\"form-lock\" role=\"form\" action=\"index.html\">\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <!-- START Form Control -->\n              <div class=\"form-group form-group-default sm-m-t-30\">\n                <label>Credentials</label>\n                <div class=\"controls\">\n                  <input type=\"text\" name=\"password\" placeholder=\"Password to unlock\" class=\"form-control\" required>\n                </div>\n              </div>\n              <!-- END Form Control -->\n            </div>\n          </div>\n          <!-- START Lock Screen Notification Icons-->\n          <div class=\"row\">\n            <div class=\"col-md-12 sm-p-l-25\">\n              <a href=\"javascript:void(0)\" class=\"inline text-black fs-14 hint-text\"><i class=\"pg pg-mail\"></i> <span class=\"hint-text\">12</span></a>\n              <a href=\"javascript:void(0)\" class=\"inline text-black  fs-14 hint-text m-l-30\"><i class=\"pg pg-comment\"></i> <span class=\"hint-text\">4</span></a>\n            </div>\n          </div>\n          <!-- END Lock Screen Notification Icons-->\n        </form>\n        <!-- END Lock Screen Form -->\n      </div>\n    </div>\n  </div>\n  <!-- END PAGE CONTENT WRAPPER -->\n</div>\n<!-- END PAGE-CONTAINER -->\n<!-- START Lock Screen Footer Content-->\n<div class=\"pull-bottom full-width\">\n  <div class=\"lock-container m-b-10 clearfix row\">\n    <div class=\"inline col-lg-2\">\n      <img src=\"assets/img/demo/pages_icon.png\" alt=\"\" class=\"m-t-5 \" pgRetina src1x=\"assets/img/demo/pages_icon.png\" src2x=\"assets/img/demo/pages_icon_2x.png\" width=\"60\" height=\"60\">\n    </div>\n    <div class=\"col-lg-10 m-t-15\">\n      <p class=\"hinted-text small inline \">No part of this website or any of its contents may be reproduced, copied, modified or adapted, without the prior written consent of the author, unless otherwise indicated for stand-alone materials.</p>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/session/lockscreen/lockscreen.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/session/lockscreen/lockscreen.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LockscreenComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LockscreenComponent = (function () {
    function LockscreenComponent() {
    }
    LockscreenComponent.prototype.ngOnInit = function () {
    };
    LockscreenComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-lockscreen',
            template: __webpack_require__("../../../../../src/app/session/lockscreen/lockscreen.component.html"),
            styles: [__webpack_require__("../../../../../src/app/session/lockscreen/lockscreen.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LockscreenComponent);
    return LockscreenComponent;
}());



/***/ }),

/***/ "../../../../../src/app/session/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"login-wrapper \">\n\t<!-- START Login Background Pic Wrapper-->\n\t<div class=\"bg-pic\">\n\t\t<!-- START Background Pic-->\n\t\t<img src=\"assets/img/demo/new-york-city-buildings-sunrise-morning-hd-wallpaper.jpg\"\n\t\t     pgRetina src1x=\"assets/img/demo/new-york-city-buildings-sunrise-morning-hd-wallpaper.jpg\"\n\t\t     src2x=\"assets/img/demo/new-york-city-buildings-sunrise-morning-hd-wallpaper.jpg\" alt=\"\"\n\t\t     class=\"lazy\">\n\t\t<!-- END Background Pic-->\n\t\t<!-- START Background Caption-->\n\t\t<div class=\"bg-caption pull-bottom sm-pull-bottom text-white p-l-20 m-b-20\">\n\t\t\t<h2 class=\"semi-bold text-white\">\n\t\t\t\tPages make it easy to enjoy what matters the most in the life</h2>\n\n\t\t\t<p class=\"small\">\n\t\t\t\timages Displayed are solely for representation purposes only, All work copyright of respective\n\t\t\t\towner, otherwise © 2013-2014 REVOX.\n\t\t\t</p>\n\t\t</div>\n\t\t<!-- END Background Caption-->\n\t</div>\n\t<!-- END Login Background Pic Wrapper-->\n\t<!-- START Login Right Container-->\n\t<div class=\"login-container bg-white\">\n\t\t<div class=\"p-l-50 m-l-20 p-r-50 m-r-20 p-t-50 m-t-30 sm-p-l-15 sm-p-r-15 sm-p-t-40\">\n\t\t\t<img src=\"assets/img/logo.png\" alt=\"logo\" pgRetina src1x=\"assets/img/logo.png\" src2x=\"assets/img/logo_2x.png\"\n\t\t\t     width=\"78\" height=\"22\">\n\n\t\t\t<p class=\"p-t-35\">Sign into your pages account</p>\n\t\t\t<!-- START Login Form -->\n\t\t\t<form class=\"p-t-15\" role=\"form\" #loginForm=\"ngForm\">\n\t\t\t\t<!-- START Form Control-->\n\t\t\t\t<div pgFormGroupDefault class=\"form-group form-group-default\" [class.has-error]=\"loginUserName.invalid && (loginUserName.dirty || loginUserName.touched)\">\n\t\t\t\t\t<label>Login</label>\n\t\t\t\t\t<input type=\"text\" id=\"userName\" name=\"userName\" [(ngModel)]=\"userName\"  #loginUserName=\"ngModel\" required  placeholder=\"User Name\" class=\"form-control\">\n\t\t\t\t</div>\n\t\t\t\t<div *ngIf=\"loginUserName.invalid && (loginUserName.dirty || loginUserName.touched)\" >\n\t\t\t\t\t<label  *ngIf=\"loginUserName.errors.required\" class=\"error\" >This field is required.</label>\n\t\t\t\t</div>\n\t\t\t\t<!-- END Form Control-->\n\t\t\t\t<!-- START Form Control-->\n\t\t\t\t<div pgFormGroupDefault class=\"form-group form-group-default\" [class.has-error]=\"loginPassword.invalid && (loginPassword.dirty || loginPassword.touched)\">\n\t\t\t\t\t<label>Password</label>\n\t\t\t\t\t<input type=\"password\" class=\"form-control\" placeholder=\"Credentials\" id=\"password\" name=\"password\" [(ngModel)]=\"password\"  #loginPassword=\"ngModel\" required>\n\t\t\t\t</div>\n\t\t\t\t<div *ngIf=\"loginPassword.invalid && (loginPassword.dirty || loginPassword.touched)\" >\n\t\t\t\t\t<label  *ngIf=\"loginPassword.errors.required\" class=\"error\" >This field is required.</label>\n\t\t\t\t</div>\n\t\t\t\t<!-- START Form Control-->\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-md-6 no-padding sm-p-l-10\">\n\t\t\t\t\t\t<div class=\"checkbox \">\n\t\t\t\t\t\t\t<input type=\"checkbox\" value=\"1\" id=\"checkbox1\">\n\t\t\t\t\t\t\t<label for=\"checkbox1\">Keep Me Signed in</label>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-6 d-flex align-items-center justify-content-end\">\n\t\t\t\t\t\t<a href=\"javascript:void(0)\" class=\"text-info small\">Help? Contact Support</a>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!-- END Form Control-->\n\t\t\t\t<button class=\"btn btn-primary btn-cons m-t-10\" type=\"submit\" [class.disabled]=\"loginForm.invalid\">Sign in</button>\n\t\t\t</form>\n\t\t\t<!--END Login Form-->\n\t\t\t<div class=\"pull-bottom sm-pull-bottom\">\n\t\t\t\t<div class=\"m-b-30 p-r-80 sm-m-t-20 sm-p-r-15 sm-p-b-20 clearfix\">\n\t\t\t\t\t<div class=\"col-sm-3 col-md-2 no-padding\">\n\t\t\t\t\t\t<img alt=\"\" class=\"m-t-5\" pgRetina src1x=\"assets/img/demo/pages_icon.png\"\n\t\t\t\t\t\t     src2x=\"assets/img/demo/pages_icon_2x.png\" height=\"60\"\n\t\t\t\t\t\t     src=\"assets/img/demo/pages_icon.png\" width=\"60\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-9 no-padding m-t-10\">\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t<small>\n\t\t\t\t\t\t\t\tCreate a pages account. If you have a facebook account, log into it for this\n\t\t\t\t\t\t\t\tprocess. Sign in with <a href=\"javascript:void(0)\" class=\"text-info\">Facebook</a> or <a href=\"javascript:void(0)\"\n\t\t\t\t\t\t\t\t                                                                       class=\"text-info\">Google</a>\n\t\t\t\t\t\t\t</small>\n\t\t\t\t\t\t</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<!-- END Login Right Container-->\n</div>"

/***/ }),

/***/ "../../../../../src/app/session/login/login.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/session/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoginComponent = (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/session/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/session/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/session/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"register-container full-height sm-p-t-30\">\n    <div class=\"d-flex justify-content-center flex-column full-height \">\n\n          <img src=\"assets/img/logo.png\" alt=\"logo\" pgRetina src1x=\"assets/img/logo.png\" src2x=\"assets/img/logo_2x.png\" width=\"78\" height=\"22\">\n          <h3>Pages makes it easy to enjoy what matters the most in your life</h3>\n          <p>\n            Create a pages account. If you have a facebook account, log into it for this process. Sign in with <a href=\"javascript:void(0)\" class=\"text-info\">Facebook</a> or <a href=\"javascript:void(0)\" class=\"text-info\">Google</a>\n          </p>\n          <form class=\"p-t-15\" role=\"form\" #registerForm=\"ngForm\">\n            <div class=\"row\">\n              <div class=\"col-md-6\">\n                <div pgFormGroupDefault class=\"form-group form-group-default\" [class.has-error]=\"fName.invalid && (fName.dirty || fName.touched)\">\n                  <label>First Name</label>\n                  <input type=\"text\" placeholder=\"John\" class=\"form-control\" id=\"txtfname\" name=\"txtfname\" [(ngModel)]=\"txtfname\"  #fName=\"ngModel\" required >\n                </div>\n                <div *ngIf=\"fName.invalid && (fName.dirty || fName.touched)\" >\n                    <label  *ngIf=\"fName.errors.required\" class=\"error\" >This field is required.</label>\n                </div>\n              </div>\n              <div class=\"col-md-6\">\n                <div pgFormGroupDefault class=\"form-group form-group-default\" [class.has-error]=\"LName.invalid && (LName.dirty || LName.touched)\">\n                  <label>Last Names</label>\n                  <input type=\"text\" placeholder=\"Smith\" class=\"form-control\" id=\"txtlname\" name=\"txtlname\" [(ngModel)]=\"txtlname\"  #LName=\"ngModel\" required>\n                </div>\n                <div *ngIf=\"LName.invalid && (LName.dirty || LName.touched)\" >\n                    <label  *ngIf=\"LName.errors.required\" class=\"error\" >This field is required.</label>\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-12\">\n                <div pgFormGroupDefault class=\"form-group form-group-default\" [class.has-error]=\"userName.invalid && (userName.dirty || userName.touched)\">\n                  <label>Pages User name</label>\n                  <input type=\"text\" placeholder=\"yourname.pages.com (this can be changed later)\" class=\"form-control\" id=\"txtusername\" name=\"txtusername\" [(ngModel)]=\"txtusername\"  #userName=\"ngModel\" required>\n                </div>\n                <div *ngIf=\"userName.invalid && (userName.dirty || userName.touched)\" >\n                    <label  *ngIf=\"userName.errors.required\" class=\"error\" >This field is required.</label>\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-12\">\n                <div pgFormGroupDefault class=\"form-group form-group-default\" [class.has-error]=\"password.invalid && (password.dirty || password.touched)\">\n                  <label>Password</label>\n                  <input type=\"password\"  placeholder=\"Minimum of 4 Charactors\" class=\"form-control\" id=\"txtpassword\" name=\"txtpassword\" [(ngModel)]=\"txtpassword\"  #password=\"ngModel\" required>\n                </div>\n                <div *ngIf=\"password.invalid && (password.dirty || password.touched)\" >\n                    <label  *ngIf=\"password.errors.required\" class=\"error\" >This field is required.</label>\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-12\">\n                <div pgFormGroupDefault class=\"form-group form-group-default\" [class.has-error]=\"email.invalid && (email.dirty || email.touched)\">\n                  <label>Email</label>\n                  <input type=\"email\" placeholder=\"We will send loging details to you\" class=\"form-control\" id=\"txtemail\" name=\"txtemail\" [(ngModel)]=\"txtemail\"  #email=\"ngModel\" required>\n                </div>\n                <div *ngIf=\"email.invalid && (email.dirty || email.touched)\" >\n                    <label  *ngIf=\"email.errors.required\" class=\"error\" >This field is required.</label>\n                </div>\n              </div>\n            </div>\n            <div class=\"row m-t-10\">\n              <div class=\"col-lg-6\">\n                <p><small>I agree to the <a href=\"javascript:void(0)\" class=\"text-info\">Pages Terms</a> and <a href=\"javascript:void(0)\" class=\"text-info\">Privacy</a>.</small></p>\n              </div>\n              <div class=\"col-lg-6 text-right\">\n                <a href=\"javascript:void(0)\" class=\"text-info small\">Help? Contact Support</a>\n              </div>\n            </div>\n            <button class=\"btn btn-primary btn-cons m-t-10\" type=\"submit\" [class.disabled]=\"registerForm.invalid\">Create a new account</button>\n          </form>\n\n    </div>\n  </div>\n  <div class=\" full-width\">\n    <div class=\"register-container m-b-10 clearfix\">\n      <div class=\"m-b-30 sm-m-t-20 sm-p-r-15 sm-p-b-20 clearfix d-flex-md-up\">\n        <div class=\"col-md-2 no-padding d-flex align-items-center\">\n          <img src=\"assets/img/demo/pages_icon.png\" alt=\"\" class=\"\" pgRetina src1x=\"assets/img/demo/pages_icon.png\" src2x=\"assets/img/demo/pages_icon_2x.png\" width=\"60\" height=\"60\">\n        </div>\n        <div class=\"col-md-9 no-padding d-flex align-items-center\">\n          <p class=\"hinted-text small inline sm-p-t-10\">No part of this website or any of its contents may be reproduced, copied, modified or adapted, without the prior written consent of the author, unless otherwise indicated for stand-alone materials.</p>\n        </div>\n      </div>\n    </div>\n  </div>\n"

/***/ }),

/***/ "../../../../../src/app/session/register/register.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/session/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RegisterPageComponent = (function () {
    function RegisterPageComponent() {
    }
    RegisterPageComponent.prototype.ngOnInit = function () {
    };
    RegisterPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register-page',
            template: __webpack_require__("../../../../../src/app/session/register/register.component.html"),
            styles: [__webpack_require__("../../../../../src/app/session/register/register.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], RegisterPageComponent);
    return RegisterPageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/session/session.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionModule", function() { return SessionModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__session_routing__ = __webpack_require__("../../../../../src/app/session/session.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_components_shared_module__ = __webpack_require__("../../../../../src/app/@pages/components/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__error_error_component__ = __webpack_require__("../../../../../src/app/session/error/error.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_login_component__ = __webpack_require__("../../../../../src/app/session/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__lockscreen_lockscreen_component__ = __webpack_require__("../../../../../src/app/session/lockscreen/lockscreen.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__register_register_component__ = __webpack_require__("../../../../../src/app/session/register/register.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var SessionModule = (function () {
    function SessionModule() {
    }
    SessionModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_5__pages_components_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_4__session_routing__["a" /* SessionRoute */]),
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_6__error_error_component__["a" /* ErrorComponent */], __WEBPACK_IMPORTED_MODULE_7__login_login_component__["a" /* LoginComponent */], __WEBPACK_IMPORTED_MODULE_8__lockscreen_lockscreen_component__["a" /* LockscreenComponent */], __WEBPACK_IMPORTED_MODULE_9__register_register_component__["a" /* RegisterPageComponent */]]
        })
    ], SessionModule);
    return SessionModule;
}());



/***/ }),

/***/ "../../../../../src/app/session/session.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SessionRoute; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login_login_component__ = __webpack_require__("../../../../../src/app/session/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__register_register_component__ = __webpack_require__("../../../../../src/app/session/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__error_error_component__ = __webpack_require__("../../../../../src/app/session/error/error.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lockscreen_lockscreen_component__ = __webpack_require__("../../../../../src/app/session/lockscreen/lockscreen.component.ts");




var SessionRoute = [
    {
        path: '',
        children: [{
                path: 'login',
                component: __WEBPACK_IMPORTED_MODULE_0__login_login_component__["a" /* LoginComponent */]
            }, {
                path: 'register',
                component: __WEBPACK_IMPORTED_MODULE_1__register_register_component__["a" /* RegisterPageComponent */]
            }, {
                path: 'error/:type',
                component: __WEBPACK_IMPORTED_MODULE_2__error_error_component__["a" /* ErrorComponent */]
            }, {
                path: 'lock',
                component: __WEBPACK_IMPORTED_MODULE_3__lockscreen_lockscreen_component__["a" /* LockscreenComponent */]
            }]
    }
];


/***/ })

});
//# sourceMappingURL=session.module.chunk.js.map