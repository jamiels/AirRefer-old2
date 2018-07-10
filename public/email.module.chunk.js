webpackJsonp(["email.module"],{

/***/ "../../../../../src/app/email/compose/compose.component.html":
/***/ (function(module, exports) {

module.exports = "<pg-secondary-sidebar>\n  <div class=\" m-b-30 m-l-30 m-r-30 d-none d-sm-block\">\n      <a [routerLink]=\"['../compose']\" class=\"btn btn-complete btn-block btn-compose\">Compose</a>\n    </div>\n    <p class=\"menu-title\">BROWSE</p>\n    <ul class=\"main-menu\">\n      <li class=\"active\">\n        <a [routerLink]=\"['../list']\">\n          <span class=\"title\"><i class=\"pg pg-inbox\"></i> Inbox</span>\n          <span class=\"badge pull-right\">5</span>\n        </a>\n      </li>\n      <li class=\"\">\n        <a [routerLink]=\"['../list']\">\n          <span class=\"title\"><i class=\"pg pg-folder\"></i> All mail</span>\n        </a>\n        <ul class=\"sub-menu no-padding\">\n          <li>\n            <a [routerLink]=\"['../list']\">\n              <span class=\"title\">Important</span>\n            </a>\n          </li>\n          <li>\n            <a [routerLink]=\"['../list']\">\n              <span class=\"title\">Labeled</span>\n            </a>\n          </li>\n        </ul>\n      </li>\n      <li>\n        <a [routerLink]=\"['../list']\">\n          <span class=\"title\"><i class=\"pg pg-sent\"></i> Sent</span>\n        </a>\n      </li>\n      <li>\n        <a [routerLink]=\"['../list']\">\n          <span class=\"title\"><i class=\"pg pg-spam\"></i> Spam</span>\n          <span class=\"badge pull-right\">10</span>\n        </a>\n      </li>\n    </ul>\n    <p class=\"menu-title m-t-20 all-caps\">Quick view</p>\n    <ul class=\"sub-menu no-padding\">\n      <li>\n        <a href=\"javascript:void(0)\">\n          <span class=\"title\">Documents</span>\n        </a>\n      </li>\n      <li>\n        <a href=\"javascript:void(0)\">\n          <span class=\"title\">Flagged</span>\n          <span class=\"badge pull-right\">5</span>\n        </a>\n      </li>\n      <li>\n        <a href=\"javascript:void(0)\">\n          <span class=\"title\">Images</span>\n        </a>\n      </li>\n    </ul>  \n</pg-secondary-sidebar>\n<div class=\"inner-content full-height\">\n\t<!-- START COMPOSE EMAIL -->\n  <div class=\"email-composer container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-md-12 no-padding\">\n        <div class=\"wysiwyg5-wrapper email-toolbar-wrapper\">\n        </div>\n          <div class=\"form-group-attached\">\n            <div class=\"row clearfix\">\n              <div class=\"col-md-6\">\n                <div class=\"form-group form-group-default\">\n                  <label>TO:</label>\n                  <pg-tag-control></pg-tag-control>\n                </div>\n              </div>\n              <div class=\"col-md-6\">\n                <div class=\"form-group form-group-default\">\n                  <label>CC:</label>\n                  <pg-tag-control placeholder=\"Add Carbon Copy\"></pg-tag-control>\n                </div>\n              </div>\n            </div>\n            <div class=\"form-group form-group-default\">\n              <label>Subject</label>\n              <input type=\"text\" class=\"form-control\" name=\"subject\">\n            </div>\n          </div>\n        <div class=\"email-body-wrapper\">\n            <quill-editor [style]=\"{height: '350px'}\" placeholder=\"Reply\" [modules]=\"editorModules\">\n            </quill-editor>\n        </div>\n      </div>\n    </div>\n    <div class=\"row p-b-20\">\n      <div class=\"col-md-11 d-sm-flex\">\n        <div>\n          <button class=\"btn btn-white btn-cons\">Cancel</button>\n          <button class=\"btn btn-complete btn-cons m-l-10\">Send</button>\n        </div>\n        <div class=\"checkbox d-md-flex d-none m-l-20\">\n          <input type=\"checkbox\" value=\"1\" id=\"sendCC\">\n          <label for=\"sendCC\" class=\"hint-text d-none d-lg-block\">Send a <span class=\"text-complete\">Carbon Copy</span> CC to my Primary email address.</label>\n          <label for=\"sendCC\" class=\"hint-text d-md-none\">Send me a CC</label>\n        </div>\n      </div>\n      <div class=\"col-md-1\">\n        <div class=\"checkbox pull-left d-md-none\">\n          <input type=\"checkbox\" value=\"1\" id=\"sendCC\">\n          <label for=\"sendCC\" class=\"hint-text d-none d-lg-block\">Send a <span class=\"text-complete\">Carbon Copy</span> CC to my Primary email address.</label>\n          <label for=\"sendCC\" class=\"hint-text d-md-none\">Send me a CC</label>\n        </div>\n        <button class=\"btn btn-complete pull-right\">\n          <i class=\"pg pg-save\"></i>\n        </button>\n      </div>\n    </div>\n  </div>\n  <!-- END COMPOSE EMAIL -->\n</div>  "

/***/ }),

/***/ "../../../../../src/app/email/compose/compose.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/email/compose/compose.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComposeComponent; });
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


var ComposeComponent = (function () {
    function ComposeComponent(toggler) {
        this.toggler = toggler;
        this.editorModules = {
            //https://github.com/KillerCodeMonkey/ngx-quill
            toolbar: [
                [{ 'header': [1, 2, 3, 4, false] }],
                ['bold', 'italic', 'underline'],
                ['link', 'image']
            ]
        };
    }
    ComposeComponent.prototype.ngOnInit = function () {
        var _this = this;
        //Async Update -
        //https://blog.angularindepth.com/everything-you-need-to-know-about-the-expressionchangedafterithasbeencheckederror-error-e3fd9ce7dbb4
        this.timeout = setTimeout(function () {
            _this.toggler.toggleFooter(false);
        });
        this.toggler.setPageContainer("full-height");
        this.toggler.setContent("full-height");
    };
    ComposeComponent.prototype.ngOnDestroy = function () {
        clearTimeout(this.timeout);
    };
    ComposeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'email-compose',
            template: __webpack_require__("../../../../../src/app/email/compose/compose.component.html"),
            styles: [__webpack_require__("../../../../../src/app/email/compose/compose.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__pages_services_toggler_service__["a" /* pagesToggleService */]])
    ], ComposeComponent);
    return ComposeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/email/email.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailModule", function() { return EmailModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__email_routing__ = __webpack_require__("../../../../../src/app/email/email.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_components_shared_module__ = __webpack_require__("../../../../../src/app/@pages/components/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_quill__ = __webpack_require__("../../../../ngx-quill/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_components_tag_tag_module__ = __webpack_require__("../../../../../src/app/@pages/components/tag/tag.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ngx_bootstrap__ = __webpack_require__("../../../../ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__list_list_component__ = __webpack_require__("../../../../../src/app/email/list/list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__compose_compose_component__ = __webpack_require__("../../../../../src/app/email/compose/compose.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__email_service__ = __webpack_require__("../../../../../src/app/email/email.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







//Core Pages Layout Components







var EmailModule = (function () {
    function EmailModule() {
    }
    EmailModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_7__pages_components_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_8_ngx_quill__["a" /* QuillModule */],
                __WEBPACK_IMPORTED_MODULE_9__pages_components_tag_tag_module__["a" /* pgTagModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormsModule"], __WEBPACK_IMPORTED_MODULE_5__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_6__email_routing__["a" /* emailRoute */]),
                __WEBPACK_IMPORTED_MODULE_10_ngx_bootstrap__["c" /* BsDropdownModule */].forRoot(),
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_11__list_list_component__["a" /* EmailListComponent */], __WEBPACK_IMPORTED_MODULE_12__compose_compose_component__["a" /* ComposeComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_13__email_service__["a" /* EmailService */]]
        })
    ], EmailModule);
    return EmailModule;
}());



/***/ }),

/***/ "../../../../../src/app/email/email.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return emailRoute; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__compose_compose_component__ = __webpack_require__("../../../../../src/app/email/compose/compose.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__list_list_component__ = __webpack_require__("../../../../../src/app/email/list/list.component.ts");


var emailRoute = [
    {
        path: '',
        children: [{
                path: 'list',
                component: __WEBPACK_IMPORTED_MODULE_1__list_list_component__["a" /* EmailListComponent */],
                data: {
                    layoutOption: 'email'
                }
            }, {
                path: 'compose',
                component: __WEBPACK_IMPORTED_MODULE_0__compose_compose_component__["a" /* ComposeComponent */],
                data: {
                    layoutOption: 'email'
                }
            },
            //Light Version
            {
                path: 'list/:type',
                component: __WEBPACK_IMPORTED_MODULE_1__list_list_component__["a" /* EmailListComponent */],
                data: {
                    layoutOption: 'email'
                }
            }, {
                path: 'compose/:type',
                component: __WEBPACK_IMPORTED_MODULE_0__compose_compose_component__["a" /* ComposeComponent */],
                data: {
                    layoutOption: 'email'
                }
            }]
    }
];


/***/ }),

/***/ "../../../../../src/app/email/email.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EmailService = (function () {
    function EmailService(http) {
        this.http = http;
    }
    // Get all emails from the API
    EmailService.prototype.getEmails = function () {
        return this.http.get('assets/data/email.json')
            .map(function (res) { return res.json(); });
    };
    EmailService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], EmailService);
    return EmailService;
}());



/***/ }),

/***/ "../../../../../src/app/email/list/list.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- START APP -->\n<pg-secondary-sidebar>\n  <div class=\" m-b-30 m-l-30 m-r-30 d-none d-sm-block\">\n      <a [routerLink]=\"['../compose']\" class=\"btn btn-complete btn-block btn-compose\">Compose</a>\n    </div>\n    <p class=\"menu-title\">BROWSE</p>\n    <ul class=\"main-menu\">\n      <li class=\"active\">\n        <a [routerLink]=\"['../list']\">\n          <span class=\"title\"><i class=\"pg pg-inbox\"></i> Inbox</span>\n          <span class=\"badge pull-right\">5</span>\n        </a>\n      </li>\n      <li class=\"\">\n        <a [routerLink]=\"['../list']\">\n          <span class=\"title\"><i class=\"pg pg-folder\"></i> All mail</span>\n        </a>\n        <ul class=\"sub-menu no-padding\">\n          <li>\n            <a [routerLink]=\"['../list']\">\n              <span class=\"title\">Important</span>\n            </a>\n          </li>\n          <li>\n            <a [routerLink]=\"['../list']\">\n              <span class=\"title\">Labeled</span>\n            </a>\n          </li>\n        </ul>\n      </li>\n      <li>\n        <a [routerLink]=\"['../list']\">\n          <span class=\"title\"><i class=\"pg pg-sent\"></i> Sent</span>\n        </a>\n      </li>\n      <li>\n        <a [routerLink]=\"['../list']\">\n          <span class=\"title\"><i class=\"pg pg-spam\"></i> Spam</span>\n          <span class=\"badge pull-right\">10</span>\n        </a>\n      </li>\n    </ul>\n    <p class=\"menu-title m-t-20 all-caps\">Quick view</p>\n    <ul class=\"sub-menu no-padding\">\n      <li>\n        <a href=\"javascript:void(0)\">\n          <span class=\"title\">Documents</span>\n        </a>\n      </li>\n      <li>\n        <a href=\"javascript:void(0)\">\n          <span class=\"title\">Flagged</span>\n          <span class=\"badge pull-right\">5</span>\n        </a>\n      </li>\n      <li>\n        <a href=\"javascript:void(0)\">\n          <span class=\"title\">Images</span>\n        </a>\n      </li>\n    </ul>\n</pg-secondary-sidebar>\n<!-- END SECONDARY SIDEBAR MENU -->\n<div class=\"inner-content full-height\">\n    <div class=\"split-view\">\n      <!-- START SPLIT LIST VIEW -->\n      <div class=\"split-list\" [class.slideLeft]=\"isEmailSelected\">\n        <a class=\"list-refresh\" href=\"javascript:void(0)\"><i class=\"fa fa-refresh\"></i></a>\n\t      <pg-list-view-container  class=\"scrollable full-height\">\n\t\t\t\t\t\t<pg-list-item *ngFor=\"let emailGroup of emailList\">\n\t\t\t\t\t\t\t\t<ng-template #ItemHeading>\n\t\t\t\t\t\t\t\t\t\t{{emailGroup.group}}\n\t\t\t\t\t\t\t\t</ng-template>\n                <li class=\"item padding-15\" *ngFor=\"let item of emailGroup.list\" (click)=\"onSelect(item)\"  [class.active]=\"item === selectedEmail\">\n                    <div class=\"thumbnail-wrapper d32 circular\"><img alt=\"\" height=\"40\" src=\"{{item.dp}}\" width=\"40\"></div>\n                    <div class=\"checkbox no-margin p-l-10\">\n                      <input id=\"emailcheckbox-0-{{item.id}}\" type=\"checkbox\" value=\"1\"> <label for=\"emailcheckbox-0-{{item.id}}\"></label>\n                    </div>\n                    <div class=\"inline m-l-15\">\n                      <p class=\"recipients no-margin hint-text small\">{{item.from}}</p>\n                      <p class=\"subject no-margin\">{{item.subject}}</p>\n                      <p class=\"body no-margin\" innerHTML=\"{{item.body}}\"></p>\n                    </div>\n                    <div class=\"datetime\">\n                      11:23am\n                    </div>\n                    <div class=\"clearfix\"></div>\n                </li>\n\t\t\t\t\t\t</pg-list-item>\n\t\t\t\t</pg-list-view-container>\n\n      </div>\n      <!-- END SPLIT LIST VIEW -->\n      <!-- START SPLIT DETAILS -->\n      <div class=\"split-details\">\n        <ng-template #noResultBlock>\n          <div class=\"no-result\" >\n            <h1>No email has been selected</h1>\n          </div>\n        </ng-template>\n        <div *ngIf=\"selectedEmail; else noResultBlock\" class=\"email-content-wrapper\">\n          <div class=\"actions-wrapper menuclipper bg-master-lightest scrollable\">\n            <ul class=\"actions menuclipper-menu no-margin p-l-20 d-flex\">\n              <li class=\"d-lg-none d-xl-none\">\n                <a href=\"javascript:void(0;)\" (click)=\"onBack()\" class=\"split-list-toggle\"><i class=\"fa fa-angle-left\"></i> All Inboxes</a>\n              </li>\n              <li class=\"no-padding \"><a href=\"javascript:void(0)\" class=\"text-info\">Reply</a>\n              </li>\n              <li class=\"no-padding \"><a href=\"javascript:void(0)\">Reply all</a>\n              </li>\n              <li class=\"no-padding \"><a href=\"javascript:void(0)\">Forward</a>\n              </li>\n              <li class=\"no-padding \"><a href=\"javascript:void(0)\">Mark as read</a>\n              </li>\n              <li class=\"no-padding \"><a href=\"javascript:void(0)\" class=\"text-danger\">Delete</a>\n              </li>\n            </ul>\n            <div class=\"clearfix\"></div>\n          </div>\n          <div class=\"email-content\">\n            <div class=\"email-content-header\">\n              <div class=\"thumbnail-wrapper d48 circular bordered\">\n                <img width=\"40\" height=\"40\" alt=\"\" src=\"{{selectedEmail.dp}}\">\n              </div>\n              <div class=\"sender inline m-l-10\">\n                <p class=\"name no-margin bold\">\n                    {{selectedEmail.from}}\n                </p>\n                <p class=\"datetime no-margin\">\n                    {{selectedEmail.datetime}}\n                </p>\n              </div>\n              <div class=\"clearfix\"></div>\n              <div class=\"subject m-t-20 m-b-20 semi-bold\">\n                  {{selectedEmail.subject}}\n              </div>\n              <div class=\"fromto\">\n                <div class=\"pull-left\">\n                  <div class=\"btn-group dropdown-default\" dropdown>\n                    <a class=\"btn dropdown-toggle btn-small btn-rounded\" dropdownToggle>{{selectedEmail.from}} </a>\n                    <div *dropdownMenu class=\"dropdown-menu\" role=\"menu\">\n                      <a class=\"dropdown-item\" href=\"javascript:void(0)\">Action</a>\n                      <a class=\"dropdown-item\" href=\"javascript:void(0)\">Friend</a>\n                      <a class=\"dropdown-item\" href=\"javascript:void(0)\">Report</a>\n                    </div>\n                  </div>\n                  <label class=\"inline\">\n                    <span class=\"muted\">&nbsp;&nbsp;to</span>\n                    <span class=\" small-text\">johnsmith@skyace.com</span>\n                  </label>\n                </div>\n              </div>\n            </div>\n            <div class=\"clearfix\"></div>\n            <div class=\"email-content-body m-t-20\" innerHTML=\"{{selectedEmail.body}}\">\n            </div>\n            <div class=\"wysiwyg5-wrapper b-a b-grey m-t-30\">\n              <quill-editor [style]=\"{height: '200px'}\" placeholder=\"Reply\" [modules]=\"editorModules\">\n              </quill-editor>\n            </div>\n          </div>\n        </div>\n      </div>\n      <!-- END SPLIT DETAILS -->\n      <!-- START COMPOSE BUTTON FOR TABS -->\n      <div class=\"compose-wrapper d-md-none\">\n        <a class=\"compose-email text-info pull-right m-r-10 m-t-10\" [routerLink]=\"['../compose']\"><i class=\"fa fa-pencil-square-o\"></i></a>\n      </div>\n      <!-- END COMPOSE BUTTON -->\n    </div>\n</div>  \n<!-- END APP -->"

/***/ }),

/***/ "../../../../../src/app/email/list/list.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/email/list/list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_services_toggler_service__ = __webpack_require__("../../../../../src/app/@pages/services/toggler.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__email_service__ = __webpack_require__("../../../../../src/app/email/email.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EmailListComponent = (function () {
    function EmailListComponent(_service, http, toggler) {
        this._service = _service;
        this.http = http;
        this.toggler = toggler;
        this.emailList = [];
        this.isMobile = pg.getUserAgent() === 'mobile';
        this.config = {};
        this.editorModules = {
            //https://github.com/KillerCodeMonkey/ngx-quill
            toolbar: [
                [{ 'header': [1, 2, 3, 4, false] }],
                ['bold', 'italic', 'underline'],
                ['link', 'image']
            ]
        };
        this.isEmailSelected = false;
    }
    EmailListComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Retrieve posts from the API
        this.subscription = this._service.getEmails().subscribe(function (list) {
            _this.emailList = list.emails;
        });
        //Async Update -
        //https://blog.angularindepth.com/everything-you-need-to-know-about-the-expressionchangedafterithasbeencheckederror-error-e3fd9ce7dbb4
        this.timeout = setTimeout(function () {
            _this.toggler.toggleFooter(false);
        });
        this.toggler.setPageContainer("full-height");
        this.toggler.setContent("full-height");
    };
    EmailListComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
        clearTimeout(this.timeout);
    };
    EmailListComponent.prototype.onSelect = function (item) {
        this.selectedEmail = item;
        this.isEmailSelected = true;
    };
    EmailListComponent.prototype.onBack = function () {
        this.isEmailSelected = false;
    };
    EmailListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'email-list',
            template: __webpack_require__("../../../../../src/app/email/list/list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/email/list/list.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__email_service__["a" /* EmailService */], __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__pages_services_toggler_service__["a" /* pagesToggleService */]])
    ], EmailListComponent);
    return EmailListComponent;
}());



/***/ })

});
//# sourceMappingURL=email.module.chunk.js.map