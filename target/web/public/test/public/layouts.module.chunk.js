webpackJsonp(["layouts.module"],{

/***/ "../../../../../src/app/layouts/boxed-alt/boxed-alt.component.html":
/***/ (function(module, exports) {

module.exports = "  <!-- START JUMBOTRON -->\n  <div class=\"jumbotron\">\n      <pg-container extraHorizontalClass=\"p-l-0 p-r-0\" extraClass=\"sm-p-l-0 sm-p-r-0\">\n        <div class=\"inner\" pg-parallax>\n          <!-- START BREADCRUMB -->\n           <ol class=\"breadcrumb\">\n            <li class=\"breadcrumb-item\"><a href=\"javascript:void(0)\">Pages</a></li>\n            <li class=\"breadcrumb-item active\">Boxed template</li>\n          </ol>\n          <!-- END BREADCRUMB --> \n        </div>\n      </pg-container>\n    </div>\n    <!-- END JUMBOTRON -->\n    <!-- START CONTAINER FLUID -->\n    <pg-container>\n      <!-- BEGIN PlACE PAGE CONTENT HERE -->\n      <!-- END PLACE PAGE CONTENT HERE -->\n    </pg-container>\n    <!-- END CONTAINER FLUID -->"

/***/ }),

/***/ "../../../../../src/app/layouts/boxed-alt/boxed-alt.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layouts/boxed-alt/boxed-alt.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BoxedAltComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_services_toggler_service__ = __webpack_require__("../../../../../src/app/@pages/services/toggler.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BoxedAltComponent = (function () {
    function BoxedAltComponent(toggler) {
        this.toggler = toggler;
    }
    BoxedAltComponent.prototype.ngOnInit = function () {
        this.toggler.setBodyLayoutClass("box-layout");
        this.toggler.setBodyLayoutClass("menu-pin");
    };
    BoxedAltComponent.prototype.ngOnDestroy = function () {
        //@TODO : USE service
        pg.removeClass(document.body, "box-layout");
    };
    BoxedAltComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-boxed-alt',
            template: __webpack_require__("../../../../../src/app/layouts/boxed-alt/boxed-alt.component.html"),
            styles: [__webpack_require__("../../../../../src/app/layouts/boxed-alt/boxed-alt.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__pages_services_toggler_service__["a" /* pagesToggleService */]])
    ], BoxedAltComponent);
    return BoxedAltComponent;
}());



/***/ }),

/***/ "../../../../../src/app/layouts/boxed/boxed.component.html":
/***/ (function(module, exports) {

module.exports = "  <!-- START JUMBOTRON -->\n  <div class=\"jumbotron\">\n      <pg-container extraHorizontalClass=\"p-l-0 p-r-0\" extraClass=\"sm-p-l-0 sm-p-r-0\">\n        <div class=\"inner\" pg-parallax>\n          <!-- START BREADCRUMB -->\n           <ol class=\"breadcrumb\">\n            <li class=\"breadcrumb-item\"><a href=\"javascript:void(0)\">Pages</a></li>\n            <li class=\"breadcrumb-item active\">Boxed template</li>\n          </ol>\n          <!-- END BREADCRUMB --> \n        </div>\n      </pg-container>\n    </div>\n    <!-- END JUMBOTRON -->\n    <!-- START CONTAINER FLUID -->\n    <pg-container>\n      <!-- BEGIN PlACE PAGE CONTENT HERE -->\n      <!-- END PLACE PAGE CONTENT HERE -->\n    </pg-container>\n    <!-- END CONTAINER FLUID -->"

/***/ }),

/***/ "../../../../../src/app/layouts/boxed/boxed.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layouts/boxed/boxed.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BoxedComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_services_toggler_service__ = __webpack_require__("../../../../../src/app/@pages/services/toggler.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BoxedComponent = (function () {
    function BoxedComponent(toggler) {
        this.toggler = toggler;
    }
    BoxedComponent.prototype.ngOnInit = function () {
        this.toggler.setBodyLayoutClass("box-layout");
        this.toggler.setBodyLayoutClass("menu-pin");
    };
    BoxedComponent.prototype.ngOnDestroy = function () {
        //@TODO : USE service
        pg.removeClass(document.body, "box-layout");
        pg.removeClass(document.body, "menu-pin");
    };
    BoxedComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-boxed',
            template: __webpack_require__("../../../../../src/app/layouts/boxed/boxed.component.html"),
            styles: [__webpack_require__("../../../../../src/app/layouts/boxed/boxed.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__pages_services_toggler_service__["a" /* pagesToggleService */]])
    ], BoxedComponent);
    return BoxedComponent;
}());



/***/ }),

/***/ "../../../../../src/app/layouts/default/default.component.html":
/***/ (function(module, exports) {

module.exports = "  <!-- START JUMBOTRON -->\n  <div class=\"jumbotron\">\n    <pg-container extraHorizontalClass=\"p-l-0 p-r-0\" extraClass=\"sm-p-l-0 sm-p-r-0\">\n      <div class=\"inner\" pg-parallax>\n        <!-- START BREADCRUMB -->\n         <ol class=\"breadcrumb\">\n          <li class=\"breadcrumb-item\"><a href=\"javascript:void(0)\">Pages</a></li>\n          <li class=\"breadcrumb-item active\">Blank template</li>\n        </ol>\n        <!-- END BREADCRUMB --> \n      </div>\n    </pg-container>\n  </div>\n  <!-- END JUMBOTRON -->\n  <!-- START CONTAINER FLUID -->\n  <pg-container>\n    <!-- BEGIN PlACE PAGE CONTENT HERE -->\n    <!-- END PLACE PAGE CONTENT HERE -->\n  </pg-container>\n  <!-- END CONTAINER FLUID -->"

/***/ }),

/***/ "../../../../../src/app/layouts/default/default.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layouts/default/default.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DefaultComponent; });
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

var DefaultComponent = (function () {
    function DefaultComponent() {
    }
    DefaultComponent.prototype.ngOnInit = function () {
    };
    DefaultComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-default',
            template: __webpack_require__("../../../../../src/app/layouts/default/default.component.html"),
            styles: [__webpack_require__("../../../../../src/app/layouts/default/default.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DefaultComponent);
    return DefaultComponent;
}());



/***/ }),

/***/ "../../../../../src/app/layouts/layouts.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutPageModule", function() { return LayoutPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__layouts_routing__ = __webpack_require__("../../../../../src/app/layouts/layouts.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_components_shared_module__ = __webpack_require__("../../../../../src/app/@pages/components/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__secondary_secondary_component__ = __webpack_require__("../../../../../src/app/layouts/secondary/secondary.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__secondary_light_secondary_component__ = __webpack_require__("../../../../../src/app/layouts/secondary-light/secondary.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__secondary_horizontal_secondary_horizontal_component__ = __webpack_require__("../../../../../src/app/layouts/secondary-horizontal/secondary-horizontal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__default_default_component__ = __webpack_require__("../../../../../src/app/layouts/default/default.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__boxed_boxed_component__ = __webpack_require__("../../../../../src/app/layouts/boxed/boxed.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__boxed_alt_boxed_alt_component__ = __webpack_require__("../../../../../src/app/layouts/boxed-alt/boxed-alt.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__secondary_horizontal_casual_secondary_horizontal_casual_component__ = __webpack_require__("../../../../../src/app/layouts/secondary-horizontal-casual/secondary-horizontal-casual.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//Angular Dependencies



//Router

//Core Pages Layout Components

//Thirdparty components
//Sample Demo pages







var LayoutPageModule = (function () {
    function LayoutPageModule() {
    }
    LayoutPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_4__pages_components_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__layouts_routing__["a" /* LayoutsRoutes */]),
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_5__secondary_secondary_component__["a" /* SecondaryComponent */], __WEBPACK_IMPORTED_MODULE_6__secondary_light_secondary_component__["a" /* SecondaryComponentLight */], __WEBPACK_IMPORTED_MODULE_7__secondary_horizontal_secondary_horizontal_component__["a" /* SecondaryHorizontalComponent */], __WEBPACK_IMPORTED_MODULE_8__default_default_component__["a" /* DefaultComponent */], __WEBPACK_IMPORTED_MODULE_9__boxed_boxed_component__["a" /* BoxedComponent */], __WEBPACK_IMPORTED_MODULE_10__boxed_alt_boxed_alt_component__["a" /* BoxedAltComponent */], __WEBPACK_IMPORTED_MODULE_11__secondary_horizontal_casual_secondary_horizontal_casual_component__["a" /* SecondaryHorizontalCasualComponent */]],
            providers: []
        })
    ], LayoutPageModule);
    return LayoutPageModule;
}());



/***/ }),

/***/ "../../../../../src/app/layouts/layouts.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayoutsRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__secondary_secondary_component__ = __webpack_require__("../../../../../src/app/layouts/secondary/secondary.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__secondary_light_secondary_component__ = __webpack_require__("../../../../../src/app/layouts/secondary-light/secondary.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__secondary_horizontal_secondary_horizontal_component__ = __webpack_require__("../../../../../src/app/layouts/secondary-horizontal/secondary-horizontal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__secondary_horizontal_casual_secondary_horizontal_casual_component__ = __webpack_require__("../../../../../src/app/layouts/secondary-horizontal-casual/secondary-horizontal-casual.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__default_default_component__ = __webpack_require__("../../../../../src/app/layouts/default/default.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__boxed_boxed_component__ = __webpack_require__("../../../../../src/app/layouts/boxed/boxed.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__boxed_alt_boxed_alt_component__ = __webpack_require__("../../../../../src/app/layouts/boxed-alt/boxed-alt.component.ts");







var LayoutsRoutes = [
    {
        path: '',
        children: [{
                path: 'default',
                component: __WEBPACK_IMPORTED_MODULE_4__default_default_component__["a" /* DefaultComponent */],
                data: {
                    title: 'default',
                    boxed: false
                }
            }, {
                path: 'secondary',
                component: __WEBPACK_IMPORTED_MODULE_0__secondary_secondary_component__["a" /* SecondaryComponent */],
                data: {
                    title: '',
                    boxed: false
                }
            }, {
                path: 'secondary-light',
                component: __WEBPACK_IMPORTED_MODULE_1__secondary_light_secondary_component__["a" /* SecondaryComponentLight */],
                data: {
                    title: '',
                    boxed: false
                }
            }, {
                path: 'boxed',
                component: __WEBPACK_IMPORTED_MODULE_5__boxed_boxed_component__["a" /* BoxedComponent */],
                data: {
                    boxed: true
                }
            }, {
                path: 'boxed-alt',
                component: __WEBPACK_IMPORTED_MODULE_6__boxed_alt_boxed_alt_component__["a" /* BoxedAltComponent */],
                data: {
                    boxed: true
                }
            }, {
                path: 'with-sidebar',
                component: __WEBPACK_IMPORTED_MODULE_2__secondary_horizontal_secondary_horizontal_component__["a" /* SecondaryHorizontalComponent */],
                data: {
                    title: 'Builder'
                }
            }, {
                path: 'with-sidebar-casual',
                component: __WEBPACK_IMPORTED_MODULE_3__secondary_horizontal_casual_secondary_horizontal_casual_component__["a" /* SecondaryHorizontalCasualComponent */],
                data: {
                    title: 'Builder'
                }
            },
            {
                path: 'horizontal-blank',
                component: __WEBPACK_IMPORTED_MODULE_4__default_default_component__["a" /* DefaultComponent */],
            }]
    }
];


/***/ }),

/***/ "../../../../../src/app/layouts/secondary-horizontal-casual/secondary-horizontal-casual.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- START APP -->\n<div class=\"container casual-with-breadcrumb no-padding\">\n  <div class=\"secondary-sidebar-toggle bg-master-lighter padding-10 text-center d-lg-none d-xl-none\">\n    <a href=\"javascript:void(0);\" (click)=\"toggleSecondarySideBar($event)\"><i class=\"pg pg-more\"></i></a>\n  </div>\n  <pg-secondary-sidebar extraClass=\"light\">\n      <p class=\"menu-title\">BROWSE</p>\n      <ul class=\"main-menu\">\n        <li class=\"\">\n          <a href=\"javascript:void(0);\">\n            <span class=\"title\">pages frontend</span>\n          </a>\n        </li>\n        <li class=\"\">\n          <a href=\"javascript:void(0);\">\n            <span class=\"title\">webarch admin</span>\n          </a>\n        </li>\n      </ul>\n      <p class=\"menu-title m-t-30\">YOUR FAVOURITE</p>\n      <pg-menu-items-alt [Items]=\"menuItems\"></pg-menu-items-alt>\n  </pg-secondary-sidebar>\n    <!-- END SECONDARY SIDEBAR MENU -->\n    <div class=\"inner-content full-height  p-r-20 p-l-20\">\n        <div class=\"page-content-wrapper content-builder active full-height\" >\n            <div class=\"content\">\n              <div class=\"container container-fixed-lg\">\n                <ul class=\"breadcrumb p-l-0\">\n                  <li class=\"breadcrumb-item\">\n                    <a href=\"javascript:void(0)\">Home</a>\n                  </li>\n                  <li class=\"breadcrumb-item active\">Plain template</li>\n                </ul>\n                <h3 class=\"page-title\">Page Title</h3>\n              </div>\n              <div class=\" container container-fixed-lg\">\n                \n              </div>\n            </div>\n            <div class=\"container container-fixed-lg footer\">\n              <div class=\"copyright sm-text-center\">\n                <p class=\"small no-margin pull-left sm-pull-reset\"><span class=\"hint-text\">Copyright © 2014</span> <span class=\"font-montserrat\">REVOX</span>. <span class=\"hint-text\">All rights reserved.</span> <span class=\"sm-block\"><a class=\"m-l-10 m-r-10\" href=\"javascript:void(0)\">Terms of use</a> | <a class=\"m-l-10\" href=\"javascript:void(0)\">Privacy Policy</a></span></p>\n                <p class=\"small no-margin pull-right sm-pull-reset\"><a href=\"javascript:void(0)\">Hand-crafted</a> <span class=\"hint-text\">&amp; Made with Love ®</span></p>\n                <div class=\"clearfix\"></div>\n              </div>\n            </div>\n          </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/layouts/secondary-horizontal-casual/secondary-horizontal-casual.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".casual-with-breadcrumb {\n  height: calc(100% - 50px); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layouts/secondary-horizontal-casual/secondary-horizontal-casual.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SecondaryHorizontalCasualComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_services_toggler_service__ = __webpack_require__("../../../../../src/app/@pages/services/toggler.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SecondaryHorizontalCasualComponent = (function () {
    function SecondaryHorizontalCasualComponent(toggler) {
        this.toggler = toggler;
        this._secondarySideBar = false;
        this.menuItems = [
            {
                label: "Collection",
                routerLink: "../../layouts/with-sidebar",
                iconType: "fi",
                iconName: "layers",
                badgeCount: "5"
            },
            {
                label: "Playlist",
                routerLink: "../../layouts/with-sidebar",
                iconType: "fi",
                iconName: "award",
            },
            {
                label: "Case Study",
                routerLink: "/",
                iconType: "fi",
                iconName: "inbox",
                toggle: "open",
                submenu: [
                    {
                        label: "Bootstrap 4",
                        routerLink: "../../layouts/with-sidebar",
                        iconType: "letter",
                        iconName: "B4",
                    },
                    {
                        label: "Made with Pages",
                        routerLink: "../../layouts/with-sidebar",
                        iconType: "letter",
                        iconName: "MP",
                    }
                ]
            }
        ];
    }
    SecondaryHorizontalCasualComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.toggler.toggleFooter(false);
            _this.toggler.setPageContainer("full-height");
            _this.toggler.setContent("full-height");
        });
    };
    SecondaryHorizontalCasualComponent.prototype.toggleSecondarySideBar = function (event) {
        this._secondarySideBar = (this._secondarySideBar == true ? false : true);
        //Pass event object to position it to the toggle button
        var subData = {
            $event: event,
            open: this._secondarySideBar
        };
        this.toggler.toggleSecondarySideBar(subData);
    };
    SecondaryHorizontalCasualComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-secondary-horizontal-casual',
            template: __webpack_require__("../../../../../src/app/layouts/secondary-horizontal-casual/secondary-horizontal-casual.component.html"),
            styles: [__webpack_require__("../../../../../src/app/layouts/secondary-horizontal-casual/secondary-horizontal-casual.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__pages_services_toggler_service__["a" /* pagesToggleService */]])
    ], SecondaryHorizontalCasualComponent);
    return SecondaryHorizontalCasualComponent;
}());



/***/ }),

/***/ "../../../../../src/app/layouts/secondary-horizontal/secondary-horizontal.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- START APP -->\n<div class=\"container full-height no-padding\">\n  <div class=\"secondary-sidebar-toggle bg-master-lighter padding-10 text-center d-lg-none d-xl-none\">\n    <a href=\"javascript:void(0);\" (click)=\"toggleSecondarySideBar($event)\"><i class=\"pg pg-more\"></i></a>\n  </div>\n  <pg-secondary-sidebar extraClass=\"light\">\n      <p class=\"menu-title\">BROWSE</p>\n      <ul class=\"main-menu\">\n        <li class=\"\">\n          <a href=\"javascript:void(0);\">\n            <span class=\"title\">pages frontend</span>\n          </a>\n        </li>\n        <li class=\"\">\n          <a href=\"javascript:void(0);\">\n            <span class=\"title\">webarch admin</span>\n          </a>\n        </li>\n      </ul>\n      <p class=\"menu-title m-t-30\">YOUR FAVOURITE</p>\n      <pg-menu-items-alt [Items]=\"menuItems\"></pg-menu-items-alt>\n  </pg-secondary-sidebar>\n    <!-- END SECONDARY SIDEBAR MENU -->\n    <div class=\"inner-content full-height  p-r-20 p-l-20\">\n        <div class=\"page-content-wrapper content-builder active full-height\" >\n            <div class=\"content\">\n              <div class=\"container container-fixed-lg\">\n                <ul class=\"breadcrumb p-l-0\">\n                  <li class=\"breadcrumb-item\">\n                    <a href=\"javascript:void(0)\">Home</a>\n                  </li>\n                  <li class=\"breadcrumb-item active\">Plain template</li>\n                </ul>\n                <h3 class=\"page-title\">Page Title</h3>\n              </div>\n              <div class=\" container container-fixed-lg\">\n                \n              </div>\n            </div>\n            <div class=\"container container-fixed-lg footer\">\n              <div class=\"copyright sm-text-center\">\n                <p class=\"small no-margin pull-left sm-pull-reset\"><span class=\"hint-text\">Copyright © 2014</span> <span class=\"font-montserrat\">REVOX</span>. <span class=\"hint-text\">All rights reserved.</span> <span class=\"sm-block\"><a class=\"m-l-10 m-r-10\" href=\"javascript:void(0)\">Terms of use</a> | <a class=\"m-l-10\" href=\"javascript:void(0)\">Privacy Policy</a></span></p>\n                <p class=\"small no-margin pull-right sm-pull-reset\"><a href=\"javascript:void(0)\">Hand-crafted</a> <span class=\"hint-text\">&amp; Made with Love ®</span></p>\n                <div class=\"clearfix\"></div>\n              </div>\n            </div>\n          </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/layouts/secondary-horizontal/secondary-horizontal.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layouts/secondary-horizontal/secondary-horizontal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SecondaryHorizontalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_services_toggler_service__ = __webpack_require__("../../../../../src/app/@pages/services/toggler.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SecondaryHorizontalComponent = (function () {
    function SecondaryHorizontalComponent(toggler) {
        this.toggler = toggler;
        this._secondarySideBar = false;
        this.menuItems = [
            {
                label: "Collection",
                routerLink: "../../layouts/with-sidebar",
                iconType: "fi",
                iconName: "layers",
                badgeCount: "5"
            },
            {
                label: "Playlist",
                routerLink: "../../layouts/with-sidebar",
                iconType: "fi",
                iconName: "award",
            },
            {
                label: "Case Study",
                routerLink: "/",
                iconType: "fi",
                iconName: "inbox",
                toggle: "open",
                submenu: [
                    {
                        label: "Bootstrap 4",
                        routerLink: "../../layouts/with-sidebar",
                        iconType: "letter",
                        iconName: "B4",
                    },
                    {
                        label: "Made with Pages",
                        routerLink: "../../layouts/with-sidebar",
                        iconType: "letter",
                        iconName: "MP",
                    }
                ]
            }
        ];
    }
    SecondaryHorizontalComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.toggler.toggleFooter(false);
            _this.toggler.setPageContainer("full-height");
            _this.toggler.setContent("full-height");
        });
    };
    SecondaryHorizontalComponent.prototype.toggleSecondarySideBar = function (event) {
        this._secondarySideBar = (this._secondarySideBar == true ? false : true);
        //Pass event object to position it to the toggle button
        var subData = {
            $event: event,
            open: this._secondarySideBar
        };
        this.toggler.toggleSecondarySideBar(subData);
    };
    SecondaryHorizontalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-secondary-horizontal',
            template: __webpack_require__("../../../../../src/app/layouts/secondary-horizontal/secondary-horizontal.component.html"),
            styles: [__webpack_require__("../../../../../src/app/layouts/secondary-horizontal/secondary-horizontal.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__pages_services_toggler_service__["a" /* pagesToggleService */]])
    ], SecondaryHorizontalComponent);
    return SecondaryHorizontalComponent;
}());



/***/ }),

/***/ "../../../../../src/app/layouts/secondary-light/secondary.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- START APP -->\n<pg-secondary-sidebar extraClass=\"light\">\n  <div class=\" m-b-30 m-l-30 m-r-30 d-sm-none d-md-block d-lg-block d-xl-block\">\n      <a href=\"javascript:void(0);\" class=\"btn btn-primary btn-block btn-compose\">Compose</a>\n    </div>\n    <p class=\"menu-title\">BROWSE</p>\n    <ul class=\"main-menu\">\n      <li class=\"active\">\n        <a href=\"javascript:void(0);\">\n          <span class=\"title\"><i class=\"pg pg-inbox\"></i> Inbox</span>\n          <span class=\"badge pull-right\">5</span>\n        </a>\n      </li>\n      <li class=\"\">\n        <a href=\"javascript:void(0);\">\n          <span class=\"title\"><i class=\"pg pg-folder\"></i> All mail</span>\n        </a>\n        <ul class=\"sub-menu no-padding\">\n          <li>\n            <a href=\"javascript:void(0);\">\n              <span class=\"title\">Important</span>\n            </a>\n          </li>\n          <li>\n            <a href=\"javascript:void(0);\">\n              <span class=\"title\">Labeled</span>\n            </a>\n          </li>\n        </ul>\n      </li>\n      <li>\n        <a href=\"javascript:void(0);\">\n          <span class=\"title\"><i class=\"pg pg-sent\"></i> Sent</span>\n        </a>\n      </li>\n      <li>\n        <a href=\"javascript:void(0);\">\n          <span class=\"title\"><i class=\"pg pg-spam\"></i> Spam</span>\n          <span class=\"badge pull-right\">10</span>\n        </a>\n      </li>\n    </ul>\n    <p class=\"menu-title m-t-20 all-caps\">Quick view</p>\n    <ul class=\"sub-menu no-padding\">\n      <li>\n        <a href=\"javascript:void(0)\">\n          <span class=\"title\">Documents</span>\n        </a>\n      </li>\n      <li>\n        <a href=\"javascript:void(0)\">\n          <span class=\"title\">Flagged</span>\n          <span class=\"badge pull-right\">5</span>\n        </a>\n      </li>\n      <li>\n        <a href=\"javascript:void(0)\">\n          <span class=\"title\">Images</span>\n        </a>\n      </li>\n    </ul>\n</pg-secondary-sidebar>\n<!-- END SECONDARY SIDEBAR MENU -->\n<div class=\"inner-content full-height\">\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/layouts/secondary-light/secondary.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layouts/secondary-light/secondary.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SecondaryComponentLight; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_services_toggler_service__ = __webpack_require__("../../../../../src/app/@pages/services/toggler.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SecondaryComponentLight = (function () {
    function SecondaryComponentLight(toggler) {
        this.toggler = toggler;
    }
    SecondaryComponentLight.prototype.ngOnInit = function () {
        var _this = this;
        //Async Update -
        //https://blog.angularindepth.com/everything-you-need-to-know-about-the-expressionchangedafterithasbeencheckederror-error-e3fd9ce7dbb4
        setTimeout(function () {
            _this.toggler.toggleFooter(false);
        });
        this.toggler.setHeaderClass("light");
    };
    SecondaryComponentLight = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-secondary',
            template: __webpack_require__("../../../../../src/app/layouts/secondary-light/secondary.component.html"),
            styles: [__webpack_require__("../../../../../src/app/layouts/secondary-light/secondary.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__pages_services_toggler_service__["a" /* pagesToggleService */]])
    ], SecondaryComponentLight);
    return SecondaryComponentLight;
}());



/***/ }),

/***/ "../../../../../src/app/layouts/secondary/secondary.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- START APP -->\n<pg-secondary-sidebar>\n  <div class=\" m-b-30 m-l-30 m-r-30 d-sm-none d-md-block d-lg-block d-xl-block\">\n      <a href=\"javascript:void(0);\" class=\"btn btn-complete btn-block btn-compose\">Compose</a>\n    </div>\n    <p class=\"menu-title\">BROWSE</p>\n    <ul class=\"main-menu\">\n      <li class=\"active\">\n        <a href=\"javascript:void(0);\">\n          <span class=\"title\"><i class=\"pg pg-inbox\"></i> Inbox</span>\n          <span class=\"badge pull-right\">5</span>\n        </a>\n      </li>\n      <li class=\"\">\n        <a href=\"javascript:void(0);\">\n          <span class=\"title\"><i class=\"pg pg-folder\"></i> All mail</span>\n        </a>\n        <ul class=\"sub-menu no-padding\">\n          <li>\n            <a href=\"javascript:void(0);\">\n              <span class=\"title\">Important</span>\n            </a>\n          </li>\n          <li>\n            <a href=\"javascript:void(0);\">\n              <span class=\"title\">Labeled</span>\n            </a>\n          </li>\n        </ul>\n      </li>\n      <li>\n        <a href=\"javascript:void(0);\">\n          <span class=\"title\"><i class=\"pg pg-sent\"></i> Sent</span>\n        </a>\n      </li>\n      <li>\n        <a href=\"javascript:void(0);\">\n          <span class=\"title\"><i class=\"pg pg-spam\"></i> Spam</span>\n          <span class=\"badge pull-right\">10</span>\n        </a>\n      </li>\n    </ul>\n    <p class=\"menu-title m-t-20 all-caps\">Quick view</p>\n    <ul class=\"sub-menu no-padding\">\n      <li>\n        <a href=\"javascript:void(0)\">\n          <span class=\"title\">Documents</span>\n        </a>\n      </li>\n      <li>\n        <a href=\"javascript:void(0)\">\n          <span class=\"title\">Flagged</span>\n          <span class=\"badge pull-right\">5</span>\n        </a>\n      </li>\n      <li>\n        <a href=\"javascript:void(0)\">\n          <span class=\"title\">Images</span>\n        </a>\n      </li>\n    </ul>\n</pg-secondary-sidebar>\n<!-- END SECONDARY SIDEBAR MENU -->\n<div class=\"inner-content full-height\">\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/layouts/secondary/secondary.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layouts/secondary/secondary.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SecondaryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_services_toggler_service__ = __webpack_require__("../../../../../src/app/@pages/services/toggler.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SecondaryComponent = (function () {
    function SecondaryComponent(toggler) {
        this.toggler = toggler;
    }
    SecondaryComponent.prototype.ngOnInit = function () {
        var _this = this;
        //Async Update -
        //https://blog.angularindepth.com/everything-you-need-to-know-about-the-expressionchangedafterithasbeencheckederror-error-e3fd9ce7dbb4
        setTimeout(function () {
            _this.toggler.toggleFooter(false);
        });
    };
    SecondaryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-secondary',
            template: __webpack_require__("../../../../../src/app/layouts/secondary/secondary.component.html"),
            styles: [__webpack_require__("../../../../../src/app/layouts/secondary/secondary.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__pages_services_toggler_service__["a" /* pagesToggleService */]])
    ], SecondaryComponent);
    return SecondaryComponent;
}());



/***/ })

});
//# sourceMappingURL=layouts.module.chunk.js.map