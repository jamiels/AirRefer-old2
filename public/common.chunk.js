webpackJsonp(["common"],{

/***/ "../../../../../src/app/@pages/animations/dropdown-animations.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return dropDownAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return scaleInAnimation; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__("../../../animations/esm5/animations.js");

var dropDownAnimation = Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* trigger */])('dropDownAnimation', [
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* state */])('bottom', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({
        opacity: 1,
        transform: 'scaleY(1)',
        transformOrigin: '0% 0%'
    })),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* transition */])('void => bottom', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({
            opacity: 0,
            transform: 'scaleY(0)',
            transformOrigin: '0% 0%'
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('150ms cubic-bezier(0.25, 0.8, 0.25, 1)')
    ]),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* state */])('top', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({
        opacity: 1,
        transform: 'scaleY(1)',
        transformOrigin: '0% 100%'
    })),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* transition */])('void => top', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({
            opacity: 0,
            transform: 'scaleY(0)',
            transformOrigin: '0% 100%'
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('150ms cubic-bezier(0.25, 0.8, 0.25, 1)')
    ]),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* transition */])('* => void', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('250ms 100ms linear', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({ opacity: 0 }))
    ])
]);
var scaleInAnimation = Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* trigger */])('scaleInAnimation', [
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* state */])('close', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({
        height: '0',
        opacity: '0',
        transform: 'scale(0.7)',
    })),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* state */])('open', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({
        display: 'block',
        opacity: '1',
        transform: 'scale(1)',
    })),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* transition */])('close => open', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('140ms ease-in')),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* transition */])('open => close', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('140ms ease-out'))
]);


/***/ }),

/***/ "../../../../../src/app/@pages/animations/tag-animations.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return tagAnimation; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__("../../../animations/esm5/animations.js");

var tagAnimation = Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* trigger */])('tagAnimation', [
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* state */])('*', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({ opacity: 1, transform: 'scale(1)' })),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* transition */])('void => *', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({ opacity: 0, transform: 'scale(0)' }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('150ms linear')
    ]),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* state */])('void', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({ opacity: 0, transform: 'scale(0)' })),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* transition */])('* => void', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({ opacity: 1, transform: 'scale(1)' }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('150ms linear')
    ])
]);


/***/ }),

/***/ "../../../../../src/app/@pages/components/collapse/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__collapse_component__ = __webpack_require__("../../../../../src/app/@pages/components/collapse/collapse.component.ts");
/* unused harmony reexport pgCollapseComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__collapseset_component__ = __webpack_require__("../../../../../src/app/@pages/components/collapse/collapseset.component.ts");
/* unused harmony reexport pgCollapsesetComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__collapse_module__ = __webpack_require__("../../../../../src/app/@pages/components/collapse/collapse.module.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__collapse_module__["a"]; });





/***/ }),

/***/ "../../../../../src/app/@pages/components/cs-select/option.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return pgOptionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_convert__ = __webpack_require__("../../../../../src/app/@pages/components/util/convert.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__select_component__ = __webpack_require__("../../../../../src/app/@pages/components/cs-select/select.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var pgOptionComponent = (function () {
    function pgOptionComponent(_Select) {
        this._Select = _Select;
        this._disabled = false;
    }
    Object.defineProperty(pgOptionComponent.prototype, "Value", {
        get: function () {
            return this._value;
        },
        set: function (value) {
            if (this._value === value) {
                return;
            }
            this._value = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(pgOptionComponent.prototype, "Label", {
        get: function () {
            return this._label;
        },
        set: function (value) {
            if (this._label === value) {
                return;
            }
            this._label = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(pgOptionComponent.prototype, "Disabled", {
        get: function () {
            return this._disabled;
        },
        set: function (value) {
            this._disabled = Object(__WEBPACK_IMPORTED_MODULE_1__util_convert__["a" /* toBoolean */])(value);
        },
        enumerable: true,
        configurable: true
    });
    pgOptionComponent.prototype.ngOnInit = function () {
        this._Select.addOption(this);
    };
    pgOptionComponent.prototype.ngOnDestroy = function () {
        this._Select.removeOption(this);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ContentChild"])('OptionTemplate'),
        __metadata("design:type", Object)
    ], pgOptionComponent.prototype, "OptionTemplate", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], pgOptionComponent.prototype, "Value", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], pgOptionComponent.prototype, "Label", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], pgOptionComponent.prototype, "Disabled", null);
    pgOptionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'pg-selectfx-option',
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            template: "\n    <ng-content></ng-content>\n  ",
            styleUrls: []
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__select_component__["a" /* pgSelectFXComponent */]])
    ], pgOptionComponent);
    return pgOptionComponent;
}());



/***/ }),

/***/ "../../../../../src/app/@pages/components/cs-select/option.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OptionPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/* tslint:disable:no-any */

var OptionPipe = (function () {
    function OptionPipe() {
    }
    // TODO: enable type checking for this method
    OptionPipe.prototype.transform = function (options, value) {
        if (value.searchText) {
            var _options = options.filter(function (option) { return option.Label && (option.Label.toLowerCase().indexOf(value.searchText.toLowerCase()) !== -1); });
            if (value.tags) {
                _options = options.filter(function (option) { return option.Label && (option.Label.toLowerCase() === value.searchText.toLowerCase()); });
            }
            if (_options.length) {
                return _options;
            }
            else {
                return [{
                        Value: value.value,
                        _value: value.value,
                        Disabled: value.disabled,
                        _disabled: value.disabled,
                        Label: value.notFoundContent,
                        _label: value.notFoundContent,
                    }
                ];
            }
        }
        else {
            return options;
        }
    };
    OptionPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'OptionPipe' })
    ], OptionPipe);
    return OptionPipe;
}());



/***/ }),

/***/ "../../../../../src/app/@pages/components/cs-select/select.component.html":
/***/ (function(module, exports) {

module.exports = "<div\n      tabindex=\"0\"\n      #trigger\n      cdkOverlayOrigin\n      #origin=\"cdkOverlayOrigin\"\n      class=\"cs-wrapper\"\n      (keydown.Enter)=\"handleKeyEnterEvent($event)\"\n      (keydown.Backspace)=\"handleKeyBackspaceEvent($event)\"\n      (keydown.ArrowUp)=\"handleKeyUpEvent($event)\"\n      (keydown.ArrowDown)=\"handleKeyDownEvent($event)\">\n      <!-- <div class=\"pg-select-selection__rendered\" >\n        <div class=\"pg-select-selection__placeholder\">\n          <ng-template [ngIf]=\"!_selectedOption\">\n            {{ PlaceHolder }}\n          </ng-template>\n        </div>\n   \n      </div> -->\n      <div class=\"cs-select cs-skin-slide cs-main\" #placeHolder>\n          <span class=\"cs-placeholder\">\n              <ng-template [ngIf]=\"!_selectedOption\">\n                  {{ PlaceHolder }}\n              </ng-template>\n            {{ _selectedOption?.Label }}\n          </span>\n        <div class=\"cs-options\" style=\"width: 100%; overflow-y: auto;\" #csOptions>\n          <ul>\n            <li\n            *ngFor=\"let option of _filterOptions\">\n            <span>\n              <ng-template\n                *ngIf=\"option.OptionTemplate\"\n                [ngTemplateOutlet]=\"option.OptionTemplate\">\n              </ng-template>\n              <ng-template [ngIf]=\"!option.OptionTemplate\">\n                {{ option.Label }}\n              </ng-template>\n              </span>\n            </li>\n          </ul>\n        </div>\n        <div class=\"cs-backdrop\"></div>    \n      </div> \n    </div>\n    <ng-template\n      cdkConnectedOverlay\n      cdkConnectedOverlayHasBackdrop\n      [cdkConnectedOverlayOrigin]=\"origin\"\n      (backdropClick)=\"closeDropDown()\"\n      (detach)=\"closeDropDown();\"\n      (positionChange)=\"onPositionChange($event)\"\n      [cdkConnectedOverlayWidth]=\"_triggerWidth\"\n      [cdkConnectedOverlayOpen]=\"_isOpen\"\n    >\n      <div class=\"cs-select cs-skin-slide\"\n        [ngClass]=\"_dropDownClassMap\" [ngStyle]=\"top\" [class.cs-active]=\"_openBackdrop\">\n          <span class=\"cs-placeholder\">\n              <ng-template [ngIf]=\"!_selectedOption\">\n                  {{ PlaceHolder }}\n              </ng-template>\n            {{ _selectedOption?.Label }}\n          </span>\n          <div class=\"cs-options\" style=\"width: 100%; overflow-y: auto;\">\n            <ul>\n              <li\n              *ngFor=\"let option of _filterOptions\"\n              [class.active]=\"option.Value == _activeFilterOption?.Value\"\n              [class.selected]=\"(option.Value==(_selectedOption?.Value))||(isInSet(_selectedOptions,option))\"\n              (click)=\"clickOption(option,$event)\">\n              <span>\n                <ng-template\n                  *ngIf=\"option.OptionTemplate\"\n                  [ngTemplateOutlet]=\"option.OptionTemplate\">\n                </ng-template>\n                <ng-template [ngIf]=\"!option.OptionTemplate\">\n                  {{ option.Label }}\n                </ng-template>\n              </span>\n              </li>\n            </ul>\n          </div>\n          <div class=\"cs-backdrop\" [ngStyle]=\"_backDropStyles\"></div>\n      </div>\n    </ng-template>"

/***/ }),

/***/ "../../../../../src/app/@pages/components/cs-select/select.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return pgSelectFXComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_cdk_keycodes__ = __webpack_require__("../../../cdk/esm5/keycodes.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_cdk_overlay__ = __webpack_require__("../../../cdk/esm5/overlay.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__animations_dropdown_animations__ = __webpack_require__("../../../../../src/app/@pages/animations/dropdown-animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__animations_tag_animations__ = __webpack_require__("../../../../../src/app/@pages/animations/tag-animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__util_convert__ = __webpack_require__("../../../../../src/app/@pages/components/util/convert.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__option_pipe__ = __webpack_require__("../../../../../src/app/@pages/components/cs-select/option.pipe.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * complex but work well
 * TODO: rebuild latter
 */






//import { LocaleService } from '../locale/index';


var pgSelectFXComponent = (function () {
    function pgSelectFXComponent(_elementRef, _renderer) {
        var _this = this;
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this._allowClear = false;
        this._disabled = false;
        this._isTags = false;
        this._isMultiple = false;
        this._keepUnListOptions = false;
        this._isOpen = false;
        this._prefixCls = 'pg-select';
        this._classList = [];
        this._dropDownPrefixCls = this._prefixCls + "-dropdown";
        this._selectionPrefixCls = this._prefixCls + "-selection";
        this._placeholder = 'placeholder';
        this._notFoundContent = "No Content";
        this._searchText = '';
        this._triggerWidth = 0;
        this._selectedOptions = new Set();
        this._options = [];
        this._cacheOptions = [];
        this._filterOptions = [];
        this._tagsOptions = [];
        this._isMultiInit = false;
        this._dropDownPosition = 'bottom';
        this._composing = false;
        this._backDropStyles = {
            "transform": 'scale3d(1,1,1)'
        };
        this._openBackdrop = false;
        // ngModel Access
        this.onChange = function () { return null; };
        this.onTouched = function () { return null; };
        this.SearchChange = new __WEBPACK_IMPORTED_MODULE_2__angular_core__["EventEmitter"]();
        this.OpenChange = new __WEBPACK_IMPORTED_MODULE_2__angular_core__["EventEmitter"]();
        this.ScrollToBottom = new __WEBPACK_IMPORTED_MODULE_2__angular_core__["EventEmitter"]();
        this.Filter = true;
        this.MaxMultiple = Infinity;
        /** new -option insert or new tags insert */
        this.addOption = function (option) {
            _this._options.push(option);
            if (!_this._isTags) {
                if (option.Value) {
                    _this.updateSelectedOption(_this._value);
                }
                else {
                    _this.forceUpdateSelectedOption(_this._value);
                }
            }
        };
        /** cancel select multiple option */
        this.unSelectMultipleOption = function (option, $event, emitChange) {
            if (emitChange === void 0) { emitChange = true; }
            _this._operatingMultipleOption = option;
            _this._selectedOptions.delete(option);
            if (emitChange) {
                _this.emitMultipleOptions();
            }
            // 对Tag进行特殊处理
            if (_this._isTags && (_this._options.indexOf(option) !== -1) && (_this._tagsOptions.indexOf(option) !== -1)) {
                _this.removeOption(option);
                _this._tagsOptions.splice(_this._tagsOptions.indexOf(option), 1);
            }
            if ($event) {
                $event.preventDefault();
                $event.stopPropagation();
            }
        };
        this._el = this._elementRef.nativeElement;
    }
    pgSelectFXComponent_1 = pgSelectFXComponent;
    Object.defineProperty(pgSelectFXComponent.prototype, "AllowClear", {
        get: function () {
            return this._allowClear;
        },
        set: function (value) {
            this._allowClear = Object(__WEBPACK_IMPORTED_MODULE_6__util_convert__["a" /* toBoolean */])(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(pgSelectFXComponent.prototype, "KeepUnListOptions", {
        get: function () {
            return this._keepUnListOptions;
        },
        set: function (value) {
            this._keepUnListOptions = Object(__WEBPACK_IMPORTED_MODULE_6__util_convert__["a" /* toBoolean */])(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(pgSelectFXComponent.prototype, "Mode", {
        set: function (value) {
            this._mode = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(pgSelectFXComponent.prototype, "Multiple", {
        get: function () {
            return this._isMultiple;
        },
        set: function (value) {
            this._isMultiple = Object(__WEBPACK_IMPORTED_MODULE_6__util_convert__["a" /* toBoolean */])(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(pgSelectFXComponent.prototype, "PlaceHolder", {
        get: function () {
            return this._placeholder;
        },
        set: function (value) {
            this._placeholder = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(pgSelectFXComponent.prototype, "NotFoundContent", {
        get: function () {
            return this._notFoundContent;
        },
        set: function (value) {
            this._notFoundContent = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(pgSelectFXComponent.prototype, "Size", {
        get: function () {
            return this._size;
        },
        set: function (value) {
            this._size = { large: 'lg', small: 'sm' }[value];
            this.setClassMap();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(pgSelectFXComponent.prototype, "Tags", {
        get: function () {
            return this._isTags;
        },
        set: function (value) {
            var isTags = Object(__WEBPACK_IMPORTED_MODULE_6__util_convert__["a" /* toBoolean */])(value);
            this._isTags = isTags;
            this.Multiple = isTags;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(pgSelectFXComponent.prototype, "Disabled", {
        get: function () {
            return this._disabled;
        },
        set: function (value) {
            this._disabled = Object(__WEBPACK_IMPORTED_MODULE_6__util_convert__["a" /* toBoolean */])(value);
            this.closeDropDown();
            this.setClassMap();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(pgSelectFXComponent.prototype, "Open", {
        get: function () {
            return this._isOpen;
        },
        set: function (value) {
            var _this = this;
            var isOpen = Object(__WEBPACK_IMPORTED_MODULE_6__util_convert__["a" /* toBoolean */])(value);
            if (this._isOpen === isOpen) {
                setTimeout(function () {
                    _this._backDropStyles = {
                        "transform": 'scale3d(1,1,1)'
                    };
                });
                return;
            }
            if (isOpen) {
                this.scrollToActive();
                this._setTriggerWidth();
                var contentHeight = this.csOptions.nativeElement.offsetHeight;
                var originalHeight = this.placeHolder.nativeElement.offsetHeight;
                var contentWidth = this.csOptions.nativeElement.offsetWidth;
                var originalWidth = this.placeHolder.nativeElement.offsetWidth;
                var scaleV = contentHeight / originalHeight;
                var scaleH = (contentWidth > originalWidth) ? contentWidth / originalWidth : 1.05;
                setTimeout(function () {
                    _this._openBackdrop = true;
                    _this._backDropStyles = {
                        "transform": 'scale3d(' + 1 + ', ' + scaleV + ', 1)'
                    };
                });
            }
            this._isOpen = isOpen;
            this.OpenChange.emit(this._isOpen);
            this.setClassMap();
            if (this._isOpen) {
                setTimeout(function () {
                    _this.checkDropDownScroll();
                });
            }
        },
        enumerable: true,
        configurable: true
    });
    /** -option remove or tags remove */
    pgSelectFXComponent.prototype.removeOption = function (option) {
        this._options.splice(this._options.indexOf(option), 1);
        if (!this._isTags) {
            this.forceUpdateSelectedOption(this._value);
        }
    };
    /** dropdown position changed */
    pgSelectFXComponent.prototype.onPositionChange = function (position) {
        this._dropDownPosition = position.connectionPair.originY;
    };
    pgSelectFXComponent.prototype.compositionStart = function () {
        this._composing = true;
    };
    pgSelectFXComponent.prototype.compositionEnd = function () {
        this._composing = false;
    };
    /** clear single selected option */
    pgSelectFXComponent.prototype.clearSelect = function ($event) {
        if ($event) {
            $event.preventDefault();
            $event.stopPropagation();
        }
        this._selectedOption = null;
        this.Value = null;
        this.onChange(null);
    };
    /** click dropdown option by user */
    pgSelectFXComponent.prototype.clickOption = function (option, $event) {
        if (!option) {
            return;
        }
        this.chooseOption(option, true, $event);
        this.closeDropDown();
    };
    /** choose option */
    pgSelectFXComponent.prototype.chooseOption = function (option, isUserClick, $event) {
        if (isUserClick === void 0) { isUserClick = false; }
        if ($event) {
            $event.preventDefault();
            $event.stopPropagation();
        }
        this._activeFilterOption = option;
        if (option && !option.Disabled) {
            if (!this.Multiple) {
                this._selectedOption = option;
                this._value = option.Value;
                if (isUserClick) {
                    this.onChange(option.Value);
                }
            }
            else {
                if (isUserClick) {
                    this.isInSet(this._selectedOptions, option) ? this.unSelectMultipleOption(option) : this.selectMultipleOption(option);
                }
            }
        }
    };
    pgSelectFXComponent.prototype.updateWidth = function (element, text) {
        var _this = this;
        if (text) {
            /** wait for scroll width change */
            setTimeout(function (_) {
                _this._renderer.setStyle(element, 'width', element.scrollWidth + "px");
            });
        }
        else {
            this._renderer.removeStyle(element, 'width');
        }
    };
    /** determine if option in set */
    pgSelectFXComponent.prototype.isInSet = function (set, option) {
        return (Array.from(set).find(function (data) { return data.Value === option.Value; }));
    };
    /** select multiple option */
    pgSelectFXComponent.prototype.selectMultipleOption = function (option, $event) {
        /** if tags do push to tag option */
        if (this._isTags && (this._options.indexOf(option) === -1) && (this._tagsOptions.indexOf(option) === -1)) {
            this.addOption(option);
            this._tagsOptions.push(option);
        }
        this._operatingMultipleOption = option;
        if (this._selectedOptions.size < this.MaxMultiple) {
            this._selectedOptions.add(option);
        }
        this.emitMultipleOptions();
        if ($event) {
            $event.preventDefault();
            $event.stopPropagation();
        }
    };
    /** emit multiple options */
    pgSelectFXComponent.prototype.emitMultipleOptions = function () {
        if (this._isMultiInit) {
            return;
        }
        var arrayOptions = Array.from(this._selectedOptions);
        this._value = arrayOptions.map(function (item) { return item.Value; });
        this.onChange(this._value);
    };
    /** update selected option when add remove option etc */
    pgSelectFXComponent.prototype.updateSelectedOption = function (currentModelValue, triggerByNgModel) {
        var _this = this;
        if (triggerByNgModel === void 0) { triggerByNgModel = false; }
        if (currentModelValue == null) {
            return;
        }
        if (this.Multiple) {
            var selectedOptions = this._options.filter(function (item) {
                return (item != null) && (currentModelValue.indexOf(item.Value) !== -1);
            });
            if ((this.KeepUnListOptions || this.Tags) && (!triggerByNgModel)) {
                var _selectedOptions_1 = Array.from(this._selectedOptions);
                selectedOptions.forEach(function (option) {
                    var _exist = _selectedOptions_1.some(function (item) { return item._value === option._value; });
                    if (!_exist) {
                        _this._selectedOptions.add(option);
                    }
                });
            }
            else {
                this._selectedOptions = new Set();
                selectedOptions.forEach(function (option) {
                    _this._selectedOptions.add(option);
                });
            }
        }
        else {
            var selectedOption = this._options.filter(function (item) {
                return (item != null) && (item.Value === currentModelValue);
            });
            this.chooseOption(selectedOption[0]);
        }
    };
    pgSelectFXComponent.prototype.forceUpdateSelectedOption = function (value) {
        var _this = this;
        /** trigger dirty check */
        setTimeout(function (_) {
            _this.updateSelectedOption(value);
        });
    };
    Object.defineProperty(pgSelectFXComponent.prototype, "Value", {
        get: function () {
            return this._value;
        },
        set: function (value) {
            this._updateValue(value);
        },
        enumerable: true,
        configurable: true
    });
    pgSelectFXComponent.prototype.clearAllSelectedOption = function (emitChange) {
        var _this = this;
        if (emitChange === void 0) { emitChange = true; }
        this._selectedOptions.forEach(function (item) {
            _this.unSelectMultipleOption(item, null, emitChange);
        });
    };
    pgSelectFXComponent.prototype.handleKeyEnterEvent = function (event) {
        /** when composing end */
        if (!this._composing && this._isOpen) {
            event.preventDefault();
            event.stopPropagation();
            this.updateFilterOption(false);
            this.clickOption(this._activeFilterOption);
        }
    };
    pgSelectFXComponent.prototype.handleKeyBackspaceEvent = function (event) {
        if ((!this._searchText) && (!this._composing) && (this._isMultiple)) {
            event.preventDefault();
            var lastOption = Array.from(this._selectedOptions).pop();
            this.unSelectMultipleOption(lastOption);
        }
    };
    pgSelectFXComponent.prototype.handleKeyDownEvent = function ($event) {
        if (this._isOpen) {
            $event.preventDefault();
            $event.stopPropagation();
            this._activeFilterOption = this.nextOption(this._activeFilterOption, this._filterOptions.filter(function (w) { return !w.Disabled; }));
            this.scrollToActive();
        }
    };
    pgSelectFXComponent.prototype.handleKeyUpEvent = function ($event) {
        if (this._isOpen) {
            $event.preventDefault();
            $event.stopPropagation();
            this._activeFilterOption = this.preOption(this._activeFilterOption, this._filterOptions.filter(function (w) { return !w.Disabled; }));
            this.scrollToActive();
        }
    };
    pgSelectFXComponent.prototype.preOption = function (option, options) {
        return options[options.indexOf(option) - 1] || options[options.length - 1];
    };
    pgSelectFXComponent.prototype.nextOption = function (option, options) {
        return options[options.indexOf(option) + 1] || options[0];
    };
    pgSelectFXComponent.prototype.clearSearchText = function () {
        this._searchText = '';
        this.updateFilterOption();
    };
    pgSelectFXComponent.prototype.updateFilterOption = function (updateActiveFilter) {
        if (updateActiveFilter === void 0) { updateActiveFilter = true; }
        if (this.Filter) {
            this._filterOptions = new __WEBPACK_IMPORTED_MODULE_7__option_pipe__["a" /* OptionPipe */]().transform(this._options, {
                'searchText': this._searchText,
                'tags': this._isTags,
                'notFoundContent': this._isTags ? this._searchText : this._notFoundContent,
                'disabled': !this._isTags,
                'value': this._isTags ? this._searchText : 'disabled'
            });
        }
        else {
            this._filterOptions = this._options;
        }
        /** TODO: cause pre & next key selection not work */
        if (updateActiveFilter && !this._selectedOption) {
            this._activeFilterOption = this._filterOptions[0];
        }
    };
    pgSelectFXComponent.prototype.onSearchChange = function (searchValue) {
        this.SearchChange.emit(searchValue);
    };
    pgSelectFXComponent.prototype.onClick = function (e) {
        e.preventDefault();
        if (!this._disabled) {
            this.Open = !this.Open;
        }
    };
    pgSelectFXComponent.prototype.onKeyDown = function (e) {
        var keyCode = e.keyCode;
        if (keyCode === __WEBPACK_IMPORTED_MODULE_0__angular_cdk_keycodes__["d" /* TAB */] && this.Open) {
            this.Open = false;
            return;
        }
        if ((keyCode !== __WEBPACK_IMPORTED_MODULE_0__angular_cdk_keycodes__["a" /* DOWN_ARROW */] && keyCode !== __WEBPACK_IMPORTED_MODULE_0__angular_cdk_keycodes__["b" /* ENTER */]) || this.Open) {
            return;
        }
        e.preventDefault();
        if (!this._disabled) {
            this.Open = true;
        }
    };
    pgSelectFXComponent.prototype.closeDropDown = function () {
        var _this = this;
        if (!this.Open) {
            return;
        }
        this._openBackdrop = false;
        this._backDropStyles = {
            "transform": 'scale3d(1,1,1)'
        };
        setTimeout(function () {
            _this.onTouched();
            _this.clearSearchText();
            _this.Open = false;
        }, 300);
    };
    pgSelectFXComponent.prototype.setClassMap = function () {
        var _this = this;
        this._classList.forEach(function (_className) {
            _this._renderer.removeClass(_this._el, _className);
        });
        this._classList = [
            this._prefixCls,
            (this._mode === 'combobox') && this._prefixCls + "-combobox",
            (!this._disabled) && this._prefixCls + "-enabled",
            (this._disabled) && this._prefixCls + "-disabled",
            this._isOpen && this._prefixCls + "-open",
            this._size && this._prefixCls + "-" + this._size
        ].filter(function (item) {
            return !!item;
        });
        this._classList.forEach(function (_className) {
            _this._renderer.addClass(_this._el, _className);
        });
        this._selectionClassMap = (_a = {},
            _a[this._selectionPrefixCls] = true,
            _a[this._selectionPrefixCls + "--single"] = !this.Multiple,
            _a[this._selectionPrefixCls + "--multiple"] = this.Multiple,
            _a);
        var _a;
    };
    pgSelectFXComponent.prototype.setDropDownClassMap = function () {
        // setTimeout(()=>{ 
        //   this._dropDownClassMap = {
        //     [' cs-active']                               : true,
        //   }
        // },300);
    };
    pgSelectFXComponent.prototype.scrollToActive = function () {
        var _this = this;
        /** wait for dropdown display */
        setTimeout(function (_) {
            if (_this._activeFilterOption && _this._activeFilterOption.Value) {
                var index = _this._filterOptions.findIndex(function (option) { return option.Value === _this._activeFilterOption.Value; });
                try {
                    var scrollPane = _this.dropdownUl.nativeElement.children[index];
                    // TODO: scrollIntoViewIfNeeded is not a standard API, why doing so?
                    /* tslint:disable-next-line:no-any */
                    scrollPane.scrollIntoViewIfNeeded(false);
                }
                catch (e) {
                }
            }
        });
    };
    pgSelectFXComponent.prototype.flushComponentState = function () {
        this.updateFilterOption();
        if (!this.Multiple) {
            this.updateSelectedOption(this._value);
        }
        else {
            if (this._value) {
                this.updateSelectedOption(this._value);
            }
        }
    };
    pgSelectFXComponent.prototype._setTriggerWidth = function () {
        var _this = this;
        this._triggerWidth = this._getTriggerRect().width;
        var rect = this._getTriggerRect();
        /** should remove after after https://github.com/angular/material2/pull/8765 merged **/
        setTimeout(function () {
            if (_this._cdkOverlay && _this._cdkOverlay.overlayRef) {
                _this._cdkOverlay.overlayRef.updateSize({
                    width: _this._triggerWidth,
                    height: rect.height,
                });
            }
        });
    };
    pgSelectFXComponent.prototype._getTriggerRect = function () {
        return this.trigger.nativeElement.getBoundingClientRect();
    };
    pgSelectFXComponent.prototype.writeValue = function (value) {
        this._updateValue(value, false);
    };
    pgSelectFXComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    pgSelectFXComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    pgSelectFXComponent.prototype.setDisabledState = function (isDisabled) {
        this.Disabled = isDisabled;
    };
    pgSelectFXComponent.prototype.dropDownScroll = function (ul) {
        if (ul && (ul.scrollHeight - ul.scrollTop === ul.clientHeight)) {
            this.ScrollToBottom.emit(true);
        }
    };
    pgSelectFXComponent.prototype.checkDropDownScroll = function () {
        if (this.dropdownUl && (this.dropdownUl.nativeElement.scrollHeight === this.dropdownUl.nativeElement.clientHeight)) {
            this.ScrollToBottom.emit(true);
        }
    };
    pgSelectFXComponent.prototype.ngAfterContentInit = function () {
        if (this._value != null) {
            this.flushComponentState();
        }
    };
    pgSelectFXComponent.prototype.ngOnInit = function () {
        this.updateFilterOption();
        this.setClassMap();
        this.setDropDownClassMap();
    };
    pgSelectFXComponent.prototype.ngAfterContentChecked = function () {
        if (this._cacheOptions !== this._options) {
            /** update filter option after every content check cycle */
            this.updateFilterOption();
            this._cacheOptions = this._options;
        }
        else {
            this.updateFilterOption(false);
        }
    };
    pgSelectFXComponent.prototype._updateValue = function (value, emitChange) {
        if (emitChange === void 0) { emitChange = true; }
        if (this._value === value) {
            return;
        }
        if ((value == null) && this.Multiple) {
            this._value = [];
        }
        else {
            this._value = value;
        }
        if (!this.Multiple) {
            if (value == null) {
                this._selectedOption = null;
            }
            else {
                this.updateSelectedOption(value);
            }
        }
        else {
            if (value) {
                if (value.length === 0) {
                    this.clearAllSelectedOption(emitChange);
                }
                else {
                    this.updateSelectedOption(value, true);
                }
            }
            else if (value == null) {
                this.clearAllSelectedOption(emitChange);
            }
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["ViewChild"])('searchInput'),
        __metadata("design:type", Object)
    ], pgSelectFXComponent.prototype, "searchInputElementRef", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["ViewChild"])('trigger'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_core__["ElementRef"])
    ], pgSelectFXComponent.prototype, "trigger", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["ViewChild"])('dropdownUl'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_core__["ElementRef"])
    ], pgSelectFXComponent.prototype, "dropdownUl", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["ViewChild"])('csOptions'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_core__["ElementRef"])
    ], pgSelectFXComponent.prototype, "csOptions", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["ViewChild"])('placeHolder'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_core__["ElementRef"])
    ], pgSelectFXComponent.prototype, "placeHolder", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_core__["EventEmitter"])
    ], pgSelectFXComponent.prototype, "SearchChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_core__["EventEmitter"])
    ], pgSelectFXComponent.prototype, "OpenChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_core__["EventEmitter"])
    ], pgSelectFXComponent.prototype, "ScrollToBottom", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], pgSelectFXComponent.prototype, "Filter", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], pgSelectFXComponent.prototype, "MaxMultiple", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1__angular_cdk_overlay__["a" /* CdkConnectedOverlay */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_cdk_overlay__["a" /* CdkConnectedOverlay */])
    ], pgSelectFXComponent.prototype, "_cdkOverlay", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], pgSelectFXComponent.prototype, "AllowClear", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], pgSelectFXComponent.prototype, "KeepUnListOptions", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], pgSelectFXComponent.prototype, "Mode", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], pgSelectFXComponent.prototype, "Multiple", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], pgSelectFXComponent.prototype, "PlaceHolder", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], pgSelectFXComponent.prototype, "NotFoundContent", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], pgSelectFXComponent.prototype, "Size", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], pgSelectFXComponent.prototype, "Tags", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], pgSelectFXComponent.prototype, "Disabled", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], pgSelectFXComponent.prototype, "Open", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["HostListener"])('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [MouseEvent]),
        __metadata("design:returntype", void 0)
    ], pgSelectFXComponent.prototype, "onClick", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["HostListener"])('keydown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], pgSelectFXComponent.prototype, "onKeyDown", null);
    pgSelectFXComponent = pgSelectFXComponent_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'pg-select-fx',
            encapsulation: __WEBPACK_IMPORTED_MODULE_2__angular_core__["ViewEncapsulation"].None,
            providers: [
                {
                    provide: __WEBPACK_IMPORTED_MODULE_3__angular_forms__["NG_VALUE_ACCESSOR"],
                    useExisting: Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["forwardRef"])(function () { return pgSelectFXComponent_1; }),
                    multi: true
                }
            ],
            animations: [
                __WEBPACK_IMPORTED_MODULE_4__animations_dropdown_animations__["a" /* dropDownAnimation */],
                __WEBPACK_IMPORTED_MODULE_5__animations_tag_animations__["a" /* tagAnimation */]
            ],
            template: __webpack_require__("../../../../../src/app/@pages/components/cs-select/select.component.html"),
            styles: [__webpack_require__("../../../../../src/app/@pages/components/cs-select/style/index.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_2__angular_core__["Renderer2"]])
    ], pgSelectFXComponent);
    return pgSelectFXComponent;
    var pgSelectFXComponent_1;
}());



/***/ }),

/***/ "../../../../../src/app/@pages/components/cs-select/select.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return pgSelectfx; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_cdk_overlay__ = __webpack_require__("../../../cdk/esm5/overlay.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__option_component__ = __webpack_require__("../../../../../src/app/@pages/components/cs-select/option.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__option_pipe__ = __webpack_require__("../../../../../src/app/@pages/components/cs-select/option.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__select_component__ = __webpack_require__("../../../../../src/app/@pages/components/cs-select/select.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var pgSelectfx = (function () {
    function pgSelectfx() {
    }
    pgSelectfx = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"], __WEBPACK_IMPORTED_MODULE_0__angular_cdk_overlay__["c" /* OverlayModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_5__option_pipe__["a" /* OptionPipe */], __WEBPACK_IMPORTED_MODULE_4__option_component__["a" /* pgOptionComponent */], __WEBPACK_IMPORTED_MODULE_6__select_component__["a" /* pgSelectFXComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_5__option_pipe__["a" /* OptionPipe */], __WEBPACK_IMPORTED_MODULE_4__option_component__["a" /* pgOptionComponent */], __WEBPACK_IMPORTED_MODULE_6__select_component__["a" /* pgSelectFXComponent */]]
        })
    ], pgSelectfx);
    return pgSelectfx;
}());



/***/ }),

/***/ "../../../../../src/app/@pages/components/cs-select/style/index.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".pg-select {\n  outline: 0; }\n  .pg-select > *:focus {\n    outline: 0; }\n  .form-group-default-selectFx .cs-backdrop {\n  border: 0; }\n  .form-control.cs-select:not(.cs-active) {\n  margin-top: 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/@pages/components/slider/slider-handle.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return pgSliderHandleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__slider_component__ = __webpack_require__("../../../../../src/app/@pages/components/slider/slider.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var pgSliderHandleComponent = (function () {
    function pgSliderHandleComponent(_slider) {
        this._slider = _slider;
        this.style = {};
        this._showToolTip = false;
    }
    Object.defineProperty(pgSliderHandleComponent.prototype, "Active", {
        set: function (value) {
            this._showToolTip = value;
        },
        enumerable: true,
        configurable: true
    });
    pgSliderHandleComponent.prototype.ngOnChanges = function (changes) {
        if (changes.Offset) {
            this._updateStyle();
        }
        if (changes.Value) {
            this._updateTooltipTitle(); // [For tooltip]
        }
    };
    pgSliderHandleComponent.prototype._updateTooltipTitle = function () {
        this.tooltipTitle = this.TipFormatter ? this.TipFormatter(this.Value) : "" + this.Value;
    };
    pgSliderHandleComponent.prototype._updateStyle = function () {
        this.style[this.Vertical ? 'bottom' : 'left'] = this.Offset + "%";
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], pgSliderHandleComponent.prototype, "ClassName", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], pgSliderHandleComponent.prototype, "Vertical", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], pgSliderHandleComponent.prototype, "Offset", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], pgSliderHandleComponent.prototype, "Value", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Function)
    ], pgSliderHandleComponent.prototype, "TipFormatter", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], pgSliderHandleComponent.prototype, "Active", null);
    pgSliderHandleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'pg-slider-handle',
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            template: "\n    <div [class]=\"ClassName\" [ngStyle]=\"style\">\n      <div class=\"tooltip fade top\" [class.show]=\"_showToolTip\" style=\"top: -33px;left: -7px;\">\n        <div class=\"tooltip-inner\">\n          <span>{{tooltipTitle}}</span>\n        </div>\n      </div>\n    </div>\n  "
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__slider_component__["a" /* pgSliderComponent */]])
    ], pgSliderHandleComponent);
    return pgSliderHandleComponent;
}());



/***/ }),

/***/ "../../../../../src/app/@pages/components/slider/slider-marks.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return pgSliderMarksComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Marks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MarksArray; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_convert__ = __webpack_require__("../../../../../src/app/@pages/components/util/convert.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var pgSliderMarksComponent = (function () {
    function pgSliderMarksComponent() {
        this._vertical = false;
        this._included = false;
        // Dynamic properties
        this.LowerBound = null;
        this.UpperBound = null;
    }
    Object.defineProperty(pgSliderMarksComponent.prototype, "Vertical", {
        get: function () {
            return this._vertical;
        },
        set: function (value) {
            this._vertical = Object(__WEBPACK_IMPORTED_MODULE_1__util_convert__["a" /* toBoolean */])(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(pgSliderMarksComponent.prototype, "Included", {
        get: function () {
            return this._included;
        },
        set: function (value) {
            this._included = Object(__WEBPACK_IMPORTED_MODULE_1__util_convert__["a" /* toBoolean */])(value);
        },
        enumerable: true,
        configurable: true
    });
    pgSliderMarksComponent.prototype.ngOnChanges = function (changes) {
        if (changes.MarksArray) {
            this.buildAttrs();
        }
        if (changes.MarksArray || changes.LowerBound || changes.UpperBound) {
            this.togglePointActive();
        }
    };
    pgSliderMarksComponent.prototype.trackById = function (index, attr) {
        return attr.id;
    };
    pgSliderMarksComponent.prototype.buildAttrs = function () {
        var _this = this;
        var range = this.Max - this.Min;
        this.attrs = this.MarksArray.map(function (mark) {
            var value = mark.value, offset = mark.offset, config = mark.config;
            // calc styles
            var label = config;
            var style;
            if (_this.Vertical) {
                style = {
                    marginBottom: '-50%',
                    bottom: (value - _this.Min) / range * 100 + "%"
                };
            }
            else {
                var marksCount = _this.MarksArray.length;
                var unit = 100 / (marksCount - 1);
                var markWidth = unit * 0.9;
                style = {
                    width: markWidth + "%",
                    marginLeft: -markWidth / 2 + "%",
                    left: (value - _this.Min) / range * 100 + "%"
                };
            }
            // custom configuration
            if (typeof config === 'object') {
                label = config.label;
                if (config.style) {
                    style = __assign({}, style, config.style);
                }
            }
            return {
                id: value,
                value: value,
                offset: offset,
                classes: (_a = {},
                    _a[_this.ClassName + "-text"] = true,
                    _a),
                style: style,
                label: label
            };
            var _a;
        }); // END - map
    };
    pgSliderMarksComponent.prototype.togglePointActive = function () {
        var _this = this;
        if (this.attrs && this.LowerBound !== null && this.UpperBound !== null) {
            this.attrs.forEach(function (attr) {
                var value = attr.value;
                var isActive = (!_this.Included && value === _this.UpperBound) ||
                    (_this.Included && value <= _this.UpperBound && value >= _this.LowerBound);
                attr.classes[_this.ClassName + "-text-active"] = isActive;
            });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], pgSliderMarksComponent.prototype, "LowerBound", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], pgSliderMarksComponent.prototype, "UpperBound", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", MarksArray)
    ], pgSliderMarksComponent.prototype, "MarksArray", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], pgSliderMarksComponent.prototype, "ClassName", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], pgSliderMarksComponent.prototype, "Min", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], pgSliderMarksComponent.prototype, "Max", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], pgSliderMarksComponent.prototype, "Vertical", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], pgSliderMarksComponent.prototype, "Included", null);
    pgSliderMarksComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'pg-slider-marks',
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            template: "\n    <div [class]=\"ClassName\">\n      <span *ngFor=\"let attr of attrs; trackBy: trackById\" [ngClass]=\"attr.classes\" [ngStyle]=\"attr.style\" [innerHTML]=\"attr.label\"></span>\n    </div>\n  "
        })
    ], pgSliderMarksComponent);
    return pgSliderMarksComponent;
}());

var Marks = (function () {
    function Marks() {
    }
    return Marks;
}());

// TODO: extends Array could cause unexpected behavior when targeting es5 or below
var MarksArray = (function (_super) {
    __extends(MarksArray, _super);
    function MarksArray() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return MarksArray;
}(Array));



/***/ }),

/***/ "../../../../../src/app/@pages/components/slider/slider-step.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return pgSliderStepComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_convert__ = __webpack_require__("../../../../../src/app/@pages/components/util/convert.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__slider_marks_component__ = __webpack_require__("../../../../../src/app/@pages/components/slider/slider-marks.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var pgSliderStepComponent = (function () {
    function pgSliderStepComponent() {
        this._vertical = false;
        this._included = false;
        // Dynamic properties
        this.LowerBound = null;
        this.UpperBound = null;
    }
    Object.defineProperty(pgSliderStepComponent.prototype, "Vertical", {
        get: function () {
            return this._vertical;
        },
        set: function (value) {
            this._vertical = Object(__WEBPACK_IMPORTED_MODULE_1__util_convert__["a" /* toBoolean */])(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(pgSliderStepComponent.prototype, "Included", {
        get: function () {
            return this._included;
        },
        set: function (value) {
            this._included = Object(__WEBPACK_IMPORTED_MODULE_1__util_convert__["a" /* toBoolean */])(value);
        },
        enumerable: true,
        configurable: true
    });
    pgSliderStepComponent.prototype.ngOnChanges = function (changes) {
        if (changes.MarksArray) {
            this.buildAttrs();
        }
        if (changes.MarksArray || changes.LowerBound || changes.UpperBound) {
            this.togglePointActive();
        }
    };
    pgSliderStepComponent.prototype.trackById = function (index, attr) {
        return attr.id;
    };
    pgSliderStepComponent.prototype.buildAttrs = function () {
        var orient = this.Vertical ? 'bottom' : 'left';
        var prefixCls = this.PrefixCls;
        this.attrs = this.MarksArray.map(function (mark) {
            var value = mark.value, offset = mark.offset;
            return {
                id: value,
                value: value,
                offset: offset,
                style: (_a = {},
                    _a[orient] = offset + "%",
                    _a),
                classes: (_b = {},
                    _b[prefixCls + "-dot"] = true,
                    _b[prefixCls + "-dot-active"] = false,
                    _b)
            };
            var _a, _b;
        });
    };
    pgSliderStepComponent.prototype.togglePointActive = function () {
        var _this = this;
        if (this.attrs && this.LowerBound !== null && this.UpperBound !== null) {
            this.attrs.forEach(function (attr) {
                var value = attr.value;
                var isActive = (!_this.Included && value === _this.UpperBound) ||
                    (_this.Included && value <= _this.UpperBound && value >= _this.LowerBound);
                attr.classes[_this.PrefixCls + "-dot-active"] = isActive;
            });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], pgSliderStepComponent.prototype, "LowerBound", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], pgSliderStepComponent.prototype, "UpperBound", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__slider_marks_component__["b" /* MarksArray */])
    ], pgSliderStepComponent.prototype, "MarksArray", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], pgSliderStepComponent.prototype, "PrefixCls", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], pgSliderStepComponent.prototype, "Vertical", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], pgSliderStepComponent.prototype, "Included", null);
    pgSliderStepComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'pg-slider-step',
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            template: "\n    <div class=\"{{PrefixCls}}-step\">\n      <span *ngFor=\"let attr of attrs; trackBy: trackById\" [ngClass]=\"attr.classes\" [ngStyle]=\"attr.style\"></span>\n    </div>\n  "
        })
    ], pgSliderStepComponent);
    return pgSliderStepComponent;
}());



/***/ }),

/***/ "../../../../../src/app/@pages/components/slider/slider-track.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return pgSliderTrackComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_convert__ = __webpack_require__("../../../../../src/app/@pages/components/util/convert.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var pgSliderTrackComponent = (function () {
    function pgSliderTrackComponent() {
        this._vertical = false;
        this._included = false;
        this.style = {};
    }
    Object.defineProperty(pgSliderTrackComponent.prototype, "Vertical", {
        get: function () {
            return this._vertical;
        },
        set: function (value) {
            this._vertical = Object(__WEBPACK_IMPORTED_MODULE_1__util_convert__["a" /* toBoolean */])(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(pgSliderTrackComponent.prototype, "Included", {
        get: function () {
            return this._included;
        },
        set: function (value) {
            this._included = Object(__WEBPACK_IMPORTED_MODULE_1__util_convert__["a" /* toBoolean */])(value);
        },
        enumerable: true,
        configurable: true
    });
    pgSliderTrackComponent.prototype.ngOnChanges = function (changes) {
        if (changes.Included) {
            this.style.visibility = this.Included ? 'visible' : 'hidden';
        }
        if (changes.Vertical || changes.Offset || changes.Length) {
            if (this.Vertical) {
                this.style.bottom = this.Offset + "%";
                this.style.height = this.Length + "%";
            }
            else {
                this.style.left = this.Offset + "%";
                this.style.width = this.Length + "%";
            }
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], pgSliderTrackComponent.prototype, "Offset", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], pgSliderTrackComponent.prototype, "Length", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], pgSliderTrackComponent.prototype, "ClassName", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], pgSliderTrackComponent.prototype, "Vertical", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], pgSliderTrackComponent.prototype, "Included", null);
    pgSliderTrackComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'pg-slider-track',
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            template: "\n    <div [class]=\"ClassName\" [ngStyle]=\"style\"></div>\n  "
        })
    ], pgSliderTrackComponent);
    return pgSliderTrackComponent;
}());



/***/ }),

/***/ "../../../../../src/app/@pages/components/slider/slider.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export SliderHandle */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return pgSliderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_fromEvent__ = __webpack_require__("../../../../rxjs/_esm5/observable/fromEvent.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_merge__ = __webpack_require__("../../../../rxjs/_esm5/observable/merge.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators_distinctUntilChanged__ = __webpack_require__("../../../../rxjs/_esm5/operators/distinctUntilChanged.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_operators_filter__ = __webpack_require__("../../../../rxjs/_esm5/operators/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_operators_map__ = __webpack_require__("../../../../rxjs/_esm5/operators/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_operators_pluck__ = __webpack_require__("../../../../rxjs/_esm5/operators/pluck.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_operators_takeUntil__ = __webpack_require__("../../../../rxjs/_esm5/operators/takeUntil.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_operators_tap__ = __webpack_require__("../../../../rxjs/_esm5/operators/tap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__util_convert__ = __webpack_require__("../../../../../src/app/@pages/components/util/convert.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__slider_marks_component__ = __webpack_require__("../../../../../src/app/@pages/components/slider/slider-marks.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__slider_service__ = __webpack_require__("../../../../../src/app/@pages/components/slider/slider.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*
* Author : NG-ZORRO - ANT UI
* Github : https://github.com/NG-ZORRO/ng-zorro-antd
* Copyright Reserved : MIT LICENSE
* Modified : Ace Revox
*/













var SliderHandle = (function () {
    function SliderHandle() {
    }
    return SliderHandle;
}());

var pgSliderComponent = (function () {
    // |--------------------------------------------------------------------------------------------
    // | Lifecycle hooks
    // |--------------------------------------------------------------------------------------------
    function pgSliderComponent(utils) {
        this.utils = utils;
        this._color = "";
        // Debugging
        this.DebugId = null; // set this id will print debug informations to console
        // Static configurations (properties that can only specify once)
        this.Step = 1;
        this.Marks = null;
        this.Min = 0;
        this.Max = 100;
        this.DefaultValue = null;
        this.Tooltip = false;
        this.OnAfterChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        // Inside properties
        this._disabled = false;
        this._dots = false;
        this._included = true;
        this._range = false;
        this._vertical = false;
        this.value = null; // CORE value state
        this.cacheSliderStart = null;
        this.cacheSliderLength = null;
        this.prefixCls = 'pg-slider';
        this.activeValueIndex = null; // Current activated handle's index ONLY for range=true
        this.track = { offset: null, length: null }; // Track's offset and length
        this.bounds = { lower: null, upper: null }; // now for pg-slider-step
        this.isDragging = false; // Current dragging state
    }
    pgSliderComponent_1 = pgSliderComponent;
    Object.defineProperty(pgSliderComponent.prototype, "Disabled", {
        get: function () {
            return this._disabled;
        },
        // Dynamic property settings
        set: function (value) {
            this._disabled = Object(__WEBPACK_IMPORTED_MODULE_10__util_convert__["a" /* toBoolean */])(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(pgSliderComponent.prototype, "Vertical", {
        get: function () {
            return this._vertical;
        },
        set: function (value) {
            this._vertical = Object(__WEBPACK_IMPORTED_MODULE_10__util_convert__["a" /* toBoolean */])(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(pgSliderComponent.prototype, "TooltipForceVisiblity", {
        set: function (value) {
            //this._showHandleTooltip(this.Range ? this.activeValueIndex : 0);
            this._toolTipForce = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(pgSliderComponent.prototype, "Range", {
        get: function () {
            return this._range;
        },
        set: function (value) {
            this._range = Object(__WEBPACK_IMPORTED_MODULE_10__util_convert__["a" /* toBoolean */])(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(pgSliderComponent.prototype, "Dots", {
        get: function () {
            return this._dots;
        },
        set: function (value) {
            this._dots = Object(__WEBPACK_IMPORTED_MODULE_10__util_convert__["a" /* toBoolean */])(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(pgSliderComponent.prototype, "Included", {
        get: function () {
            return this._included;
        },
        set: function (value) {
            this._included = Object(__WEBPACK_IMPORTED_MODULE_10__util_convert__["a" /* toBoolean */])(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(pgSliderComponent.prototype, "Color", {
        get: function () {
            return this._color;
        },
        set: function (value) {
            this._color = value;
        },
        enumerable: true,
        configurable: true
    });
    // |--------------------------------------------------------------------------------------------
    // | value accessors & ngModel accessors
    // |--------------------------------------------------------------------------------------------
    pgSliderComponent.prototype.setValue = function (val, isWriteValue) {
        if (isWriteValue === void 0) { isWriteValue = false; }
        if (isWriteValue) {
            this.value = this.formatValue(val);
            this.log("[ngModel:setValue/writeValue]Update track & handles");
            this.updateTrackAndHandles();
            // if (!this.isValueEqual(this.value, val)) {
            //   this.log(`[ngModel:setValue/writeValue]onValueChange`, val);
            //   if (this.onValueChange) { // NOTE: onValueChange will be unavailable when writeValue() called at the first time
            //     this.onValueChange(this.value);
            //   }
            // }
        }
        else {
            if (!this.isValueEqual(this.value, val)) {
                this.value = val;
                this.log("[Normal:setValue]Update track & handles");
                this.updateTrackAndHandles();
                this.log("[Normal:setValue]onValueChange", val);
                if (this.onValueChange) {
                    this.onValueChange(this.value);
                }
            }
        }
    };
    pgSliderComponent.prototype.getValue = function (cloneAndSort) {
        if (cloneAndSort === void 0) { cloneAndSort = false; }
        // TODO: using type guard, remove type cast
        if (cloneAndSort && this.Range) {
            return this.utils.cloneArray(this.value).sort(function (a, b) { return a - b; });
        }
        return this.value;
    };
    // clone & sort current value and convert them to offsets, then return the new one
    pgSliderComponent.prototype.getValueToOffset = function (value) {
        var _this = this;
        var normalizedValue = value;
        if (typeof normalizedValue === 'undefined') {
            normalizedValue = this.getValue(true);
        }
        // TODO: using type guard, remove type cast
        return this.Range ?
            normalizedValue.map(function (val) { return _this.valueToOffset(val); }) :
            this.valueToOffset(normalizedValue);
    };
    pgSliderComponent.prototype.writeValue = function (val) {
        if (typeof this.onValueChange !== 'function') {
            return;
        } // ignore the first initial call
        this.log("[ngModel/writeValue]current writing value = ", val);
        this.setValue(val, true);
    };
    pgSliderComponent.prototype.registerOnChange = function (fn) {
        this.onValueChange = fn;
    };
    pgSliderComponent.prototype.registerOnTouched = function (fn) { };
    pgSliderComponent.prototype.setDisabledState = function (isDisabled) {
        this.Disabled = isDisabled;
        this.toggleDragDisabled(isDisabled);
        this.setClassMap();
    };
    // initialize event binding, class init, etc. (called only once)
    pgSliderComponent.prototype.ngOnInit = function () {
        // initial checking
        this.checkValidValue(this.DefaultValue); // check DefaultValue
        // default handles
        this.handles = this._generateHandles(this.Range ? 2 : 1);
        // initialize
        this.sliderDOM = this.slider.nativeElement;
        if (this.getValue() === null) {
            this.setValue(this.formatValue(null));
        } // init with default value
        this.marksArray = this.Marks === null ? null : this.toMarksArray(this.Marks);
        // event bindings
        this.createDrag();
        // initialize drag's disabled status
        this.toggleDragDisabled(this.Disabled);
        // the first time to init classes
        this.setClassMap();
        if (this._toolTipForce) {
            this._showHandleTooltip(this.Range ? this.activeValueIndex : 0);
        }
    };
    pgSliderComponent.prototype.ngOnChanges = function (changes) {
        var Disabled = changes.Disabled, Marks = changes.Marks;
        if (Disabled && !Disabled.firstChange) {
            this.toggleDragDisabled(Disabled.currentValue);
            this.setClassMap();
        }
        else if (Marks && !Marks.firstChange) {
            this.marksArray = this.Marks ? this.toMarksArray(this.Marks) : null;
        }
    };
    pgSliderComponent.prototype.ngOnDestroy = function () {
        this.unsubscribeDrag();
    };
    // |--------------------------------------------------------------------------------------------
    // | Basic flow functions
    // |--------------------------------------------------------------------------------------------
    pgSliderComponent.prototype.setClassMap = function () {
        this.classMap = (_a = {},
            _a[this.prefixCls] = true,
            _a[this._color] = true,
            _a[this.prefixCls + "-disabled"] = this.Disabled,
            _a[this.prefixCls + "-vertical"] = this.Vertical,
            _a[this.prefixCls + "-with-marks"] = this.marksArray ? this.marksArray.length : 0,
            _a);
        var _a;
    };
    // find the cloest value to be activated (only for range = true)
    pgSliderComponent.prototype.setActiveValueIndex = function (pointerValue) {
        if (this.Range) {
            var minimal_1 = null;
            var gap_1;
            var activeIndex_1;
            // TODO: using type guard, remove type cast
            this.getValue().forEach(function (val, index) {
                gap_1 = Math.abs(pointerValue - val);
                if (minimal_1 === null || gap_1 < minimal_1) {
                    minimal_1 = gap_1;
                    activeIndex_1 = index;
                }
            });
            this.activeValueIndex = activeIndex_1;
        }
    };
    pgSliderComponent.prototype.setActiveValue = function (pointerValue) {
        if (this.Range) {
            // TODO: using type guard, remove type cast
            var newValue = this.utils.cloneArray(this.value);
            newValue[this.activeValueIndex] = pointerValue;
            this.setValue(newValue);
        }
        else {
            this.setValue(pointerValue);
        }
    };
    pgSliderComponent.prototype.updateTrackAndHandles = function () {
        var _this = this;
        var value = this.getValue();
        var offset = this.getValueToOffset(value);
        var valueSorted = this.getValue(true);
        var offsetSorted = this.getValueToOffset(valueSorted);
        var boundParts = this.Range ? valueSorted : [0, valueSorted];
        var trackParts = this.Range ? [offsetSorted[0], offsetSorted[1] - offsetSorted[0]] : [0, offsetSorted];
        this.handles.forEach(function (handle, index) {
            handle.offset = _this.Range ? offset[index] : offset;
            handle.value = _this.Range ? value[index] : value;
        });
        this.bounds.lower = boundParts[0], this.bounds.upper = boundParts[1];
        this.track.offset = trackParts[0], this.track.length = trackParts[1];
    };
    pgSliderComponent.prototype.toMarksArray = function (marks) {
        var marksArray = [];
        for (var key in marks) {
            var mark = marks[key];
            var val = typeof key === 'number' ? key : parseFloat(key);
            if (val < this.Min || val > this.Max) {
                continue;
            }
            marksArray.push({ value: val, offset: this.valueToOffset(val), config: mark });
        }
        return marksArray;
    };
    // |--------------------------------------------------------------------------------------------
    // | Event listeners & bindings
    // |--------------------------------------------------------------------------------------------
    pgSliderComponent.prototype.onDragStart = function (value) {
        this.log('[onDragStart]dragging value = ', value);
        this.toggleDragMoving(true);
        // cache DOM layout/reflow operations
        this.cacheSliderProperty();
        // trigger drag start
        this.setActiveValueIndex(value);
        this.setActiveValue(value);
        // Tooltip visibility of handles
        if (this.Tooltip) {
            this._showHandleTooltip(this.Range ? this.activeValueIndex : 0);
        }
    };
    pgSliderComponent.prototype.onDragMove = function (value) {
        this.log('[onDragMove]dragging value = ', value);
        // trigger drag moving
        this.setActiveValue(value);
    };
    pgSliderComponent.prototype.onDragEnd = function () {
        this.log('[onDragEnd]');
        this.toggleDragMoving(false);
        this.OnAfterChange.emit(this.getValue(true));
        // remove cache DOM layout/reflow operations
        this.cacheSliderProperty(true);
        // Hide all tooltip
        this._hideAllHandleTooltip();
    };
    pgSliderComponent.prototype.createDrag = function () {
        var _this = this;
        var sliderDOM = this.sliderDOM;
        var orientField = this.Vertical ? 'pageY' : 'pageX';
        // TODO: using named interface
        var mouse = {
            start: 'mousedown', move: 'mousemove', end: 'mouseup',
            pluckKey: [orientField]
        };
        var touch = {
            start: 'touchstart', move: 'touchmove', end: 'touchend',
            pluckKey: ['touches', '0', orientField],
            filter: function (e) { return !_this.utils.isNotTouchEvent(e); }
        };
        // make observables
        [mouse, touch].forEach(function (source) {
            // TODO: remove any
            // TODO: filterFunc doesn't match filter in touch, should be checked
            /* tslint:disable-next-line:no-any */
            var _a = source, start = _a.start, move = _a.move, end = _a.end, pluckKey = _a.pluckKey, _b = _a.filterFunc, filterFunc = _b === void 0 ? (function () { return true; }) : _b;
            // start
            source.startPlucked$ = Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_fromEvent__["fromEvent"])(sliderDOM, start).pipe(Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators_filter__["a" /* filter */])(filterFunc), Object(__WEBPACK_IMPORTED_MODULE_9_rxjs_operators_tap__["a" /* tap */])(_this.utils.pauseEvent), __WEBPACK_IMPORTED_MODULE_7_rxjs_operators_pluck__["a" /* pluck */].apply(void 0, pluckKey), Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators_map__["a" /* map */])(function (position) { return _this.findClosestValue(position); }));
            // end
            source.end$ = Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_fromEvent__["fromEvent"])(document, end);
            // resolve move
            source.moveResolved$ = Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_fromEvent__["fromEvent"])(document, move).pipe(Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators_filter__["a" /* filter */])(filterFunc), Object(__WEBPACK_IMPORTED_MODULE_9_rxjs_operators_tap__["a" /* tap */])(_this.utils.pauseEvent), __WEBPACK_IMPORTED_MODULE_7_rxjs_operators_pluck__["a" /* pluck */].apply(void 0, pluckKey), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators_distinctUntilChanged__["a" /* distinctUntilChanged */])(), Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators_map__["a" /* map */])(function (position) { return _this.findClosestValue(position); }), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators_distinctUntilChanged__["a" /* distinctUntilChanged */])(), Object(__WEBPACK_IMPORTED_MODULE_8_rxjs_operators_takeUntil__["a" /* takeUntil */])(source.end$));
            // merge to become moving
            // source.move$ = source.startPlucked$.mergeMapTo(source.moveResolved$);
        });
        // merge mouse and touch observables
        this.dragstart$ = Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_merge__["a" /* merge */])(mouse.startPlucked$, touch.startPlucked$);
        // this.dragmove$ = Observable.merge(mouse.move$, touch.move$);
        this.dragmove$ = Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_merge__["a" /* merge */])(mouse.moveResolved$, touch.moveResolved$);
        this.dragend$ = Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_merge__["a" /* merge */])(mouse.end$, touch.end$);
    };
    pgSliderComponent.prototype.subscribeDrag = function (periods) {
        if (periods === void 0) { periods = ['start', 'move', 'end']; }
        this.log('[subscribeDrag]this.dragstart$ = ', this.dragstart$);
        if (periods.indexOf('start') !== -1 && this.dragstart$ && !this.dragstart_) {
            this.dragstart_ = this.dragstart$.subscribe(this.onDragStart.bind(this));
        }
        if (periods.indexOf('move') !== -1 && this.dragmove$ && !this.dragmove_) {
            this.dragmove_ = this.dragmove$.subscribe(this.onDragMove.bind(this));
        }
        if (periods.indexOf('end') !== -1 && this.dragend$ && !this.dragend_) {
            this.dragend_ = this.dragend$.subscribe(this.onDragEnd.bind(this));
        }
    };
    pgSliderComponent.prototype.unsubscribeDrag = function (periods) {
        if (periods === void 0) { periods = ['start', 'move', 'end']; }
        this.log('[unsubscribeDrag]this.dragstart_ = ', this.dragstart_);
        if (periods.indexOf('start') !== -1 && this.dragstart_) {
            this.dragstart_.unsubscribe();
            this.dragstart_ = null;
        }
        if (periods.indexOf('move') !== -1 && this.dragmove_) {
            this.dragmove_.unsubscribe();
            this.dragmove_ = null;
        }
        if (periods.indexOf('end') !== -1 && this.dragend_) {
            this.dragend_.unsubscribe();
            this.dragend_ = null;
        }
    };
    pgSliderComponent.prototype.toggleDragMoving = function (movable) {
        var periods = ['move', 'end'];
        if (movable) {
            this.isDragging = true;
            this.subscribeDrag(periods);
        }
        else {
            this.isDragging = false;
            this.unsubscribeDrag(periods);
        }
    };
    pgSliderComponent.prototype.toggleDragDisabled = function (disabled) {
        if (disabled) {
            this.unsubscribeDrag();
        }
        else {
            this.subscribeDrag(['start']);
        }
    };
    // |--------------------------------------------------------------------------------------------
    // | Util functions (tools)
    // |--------------------------------------------------------------------------------------------
    // find the closest value depend on pointer's position
    pgSliderComponent.prototype.findClosestValue = function (position) {
        var sliderStart = this.getSliderStartPosition();
        var sliderLength = this.getSliderLength();
        var ratio = this.utils.correctNumLimit((position - sliderStart) / sliderLength, 0, 1);
        var val = (this.Max - this.Min) * (this.Vertical ? 1 - ratio : ratio) + this.Min;
        var points = (this.Marks === null ? [] : Object.keys(this.Marks).map(parseFloat));
        // push closest step
        if (this.Step !== null && !this.Dots) {
            var closestOne = Math.round(val / this.Step) * this.Step;
            points.push(closestOne);
        }
        // calculate gaps
        var gaps = points.map(function (point) { return Math.abs(val - point); });
        var closest = points[gaps.indexOf(Math.min.apply(Math, gaps))];
        // return the fixed
        return this.Step === null ? closest :
            parseFloat(closest.toFixed(this.utils.getPrecision(this.Step)));
    };
    pgSliderComponent.prototype.valueToOffset = function (value) {
        return this.utils.valueToOffset(this.Min, this.Max, value);
    };
    pgSliderComponent.prototype.getSliderStartPosition = function () {
        if (this.cacheSliderStart !== null) {
            return this.cacheSliderStart;
        }
        var offset = this.utils.getElementOffset(this.sliderDOM);
        return this.Vertical ? offset.top : offset.left;
    };
    pgSliderComponent.prototype.getSliderLength = function () {
        if (this.cacheSliderLength !== null) {
            return this.cacheSliderLength;
        }
        var sliderDOM = this.sliderDOM;
        return this.Vertical ?
            sliderDOM.clientHeight : sliderDOM.clientWidth;
    };
    // cache DOM layout/reflow operations for performance (may not necessary?)
    pgSliderComponent.prototype.cacheSliderProperty = function (remove) {
        if (remove === void 0) { remove = false; }
        this.cacheSliderStart = remove ? null : this.getSliderStartPosition();
        this.cacheSliderLength = remove ? null : this.getSliderLength();
    };
    pgSliderComponent.prototype.formatValue = function (value) {
        var _this = this;
        var res = value;
        if (!this.checkValidValue(value)) {
            res = this.DefaultValue === null ?
                (this.Range ? [this.Min, this.Max] : this.Min) : this.DefaultValue;
        }
        else {
            // TODO: using type guard, remove type cast
            res = this.Range ?
                value.map(function (val) { return _this.utils.correctNumLimit(val, _this.Min, _this.Max); }) :
                this.utils.correctNumLimit(value, this.Min, this.Max);
        }
        return res;
    };
    // check if value is valid and throw error if value-type/range not match
    pgSliderComponent.prototype.checkValidValue = function (value) {
        var range = this.Range;
        if (value === null || value === undefined) {
            return false;
        } // it's an invalid value, just return
        var isArray = Array.isArray(value);
        if (!Array.isArray(value)) {
            var parsedValue = value;
            if (typeof value !== 'number') {
                parsedValue = parseFloat(value);
            }
            if (isNaN(parsedValue)) {
                return false;
            } // it's an invalid value, just return
        }
        if (isArray !== !!range) {
            throw new Error("The \"Range\" can't match the \"Value\"'s type, please check these properties: \"Range\", \"Value\", \"DefaultValue\".");
        }
        return true;
    };
    pgSliderComponent.prototype.isValueEqual = function (value, val) {
        if (typeof value !== typeof val) {
            return false;
        }
        if (Array.isArray(value)) {
            var len = value.length;
            for (var i = 0; i < len; i++) {
                if (value[i] !== val[i]) {
                    return false;
                }
            }
            return true;
        }
        else {
            return value === val;
        }
    };
    // print debug info
    // TODO: should not kept in component
    /* tslint:disable-next-line:no-any */
    pgSliderComponent.prototype.log = function () {
        var messages = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            messages[_i] = arguments[_i];
        }
        if (this.DebugId !== null) {
            var args = ["[pg-slider][#" + this.DebugId + "] "].concat(Array.prototype.slice.call(arguments));
            console.log.apply(null, args);
        }
    };
    // Show one handle's tooltip and hide others'
    pgSliderComponent.prototype._showHandleTooltip = function (handleIndex) {
        var _this = this;
        if (handleIndex === void 0) { handleIndex = 0; }
        this.handles.forEach(function (handle, index) {
            _this.handles[index].active = index === handleIndex;
        });
    };
    pgSliderComponent.prototype._hideAllHandleTooltip = function () {
        if (!this._showHandleTooltip)
            this.handles.forEach(function (handle) { return handle.active = false; });
    };
    pgSliderComponent.prototype._generateHandles = function (amount) {
        var handles = [];
        for (var i = 0; i < amount; i++) {
            handles.push({ offset: null, value: null, active: false });
        }
        return handles;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], pgSliderComponent.prototype, "DebugId", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], pgSliderComponent.prototype, "Disabled", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], pgSliderComponent.prototype, "Step", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_11__slider_marks_component__["a" /* Marks */])
    ], pgSliderComponent.prototype, "Marks", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], pgSliderComponent.prototype, "Min", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], pgSliderComponent.prototype, "Max", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], pgSliderComponent.prototype, "DefaultValue", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], pgSliderComponent.prototype, "Tooltip", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Function)
    ], pgSliderComponent.prototype, "TipFormatter", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], pgSliderComponent.prototype, "OnAfterChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], pgSliderComponent.prototype, "Vertical", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], pgSliderComponent.prototype, "TooltipForceVisiblity", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], pgSliderComponent.prototype, "Range", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], pgSliderComponent.prototype, "Dots", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], pgSliderComponent.prototype, "Included", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], pgSliderComponent.prototype, "Color", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('slider'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], pgSliderComponent.prototype, "slider", void 0);
    pgSliderComponent = pgSliderComponent_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'pg-slider',
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            providers: [{
                    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["NG_VALUE_ACCESSOR"],
                    useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return pgSliderComponent_1; }),
                    multi: true
                }],
            template: "\n    <div #slider [ngClass]=\"classMap\" >\n      <div class=\"pg-slider-rail\"></div>\n      <pg-slider-track\n        ClassName=\"{{prefixCls}}-track\"\n        [Vertical]=\"Vertical\"\n        [Included]=\"Included\"\n        [Offset]=\"track.offset\"\n        [Length]=\"track.length\"\n      ></pg-slider-track>\n      <pg-slider-step *ngIf=\"marksArray\"\n        PrefixCls=\"{{prefixCls}}\"\n        [Vertical]=\"Vertical\"\n        [LowerBound]=\"bounds.lower\"\n        [UpperBound]=\"bounds.upper\"\n        [MarksArray]=\"marksArray\"\n        [Included]=\"Included\"\n      ></pg-slider-step>\n      <pg-slider-handle\n        *ngFor=\"let handle of handles;\"\n        ClassName=\"{{prefixCls}}-handle\"\n        [Vertical]=\"Vertical\"\n        [Offset]=\"handle.offset\"\n        [Value]=\"handle.value\"\n        [Active]=\"handle.active\"\n        [TipFormatter]=\"TipFormatter\"\n      ></pg-slider-handle>\n      <pg-slider-marks *ngIf=\"marksArray\"\n        ClassName=\"{{prefixCls}}-mark\"\n        [Vertical]=\"Vertical\"\n        [Min]=\"Min\"\n        [Max]=\"Max\"\n        [LowerBound]=\"bounds.lower\"\n        [UpperBound]=\"bounds.upper\"\n        [MarksArray]=\"marksArray\"\n        [Included]=\"Included\"\n      ></pg-slider-marks>\n    </div>\n  ",
            styles: [__webpack_require__("../../../../../src/app/@pages/components/slider/slider.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_12__slider_service__["a" /* SliderService */]])
    ], pgSliderComponent);
    return pgSliderComponent;
    var pgSliderComponent_1;
}());



/***/ }),

/***/ "../../../../../src/app/@pages/components/slider/slider.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return pgSliderModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap__ = __webpack_require__("../../../../ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__slider_handle_component__ = __webpack_require__("../../../../../src/app/@pages/components/slider/slider-handle.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__slider_marks_component__ = __webpack_require__("../../../../../src/app/@pages/components/slider/slider-marks.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__slider_step_component__ = __webpack_require__("../../../../../src/app/@pages/components/slider/slider-step.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__slider_track_component__ = __webpack_require__("../../../../../src/app/@pages/components/slider/slider-track.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__slider_component__ = __webpack_require__("../../../../../src/app/@pages/components/slider/slider.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__slider_service__ = __webpack_require__("../../../../../src/app/@pages/components/slider/slider.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/*
* Author : NG-ZORRO - ANT UI
* Github : https://github.com/NG-ZORRO/ng-zorro-antd
* Copyright Reserved : MIT LICENSE
* Modified : Ace Revox
*/









var pgSliderModule = (function () {
    function pgSliderModule() {
    }
    pgSliderModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            exports: [__WEBPACK_IMPORTED_MODULE_7__slider_component__["a" /* pgSliderComponent */], __WEBPACK_IMPORTED_MODULE_6__slider_track_component__["a" /* pgSliderTrackComponent */], __WEBPACK_IMPORTED_MODULE_3__slider_handle_component__["a" /* pgSliderHandleComponent */], __WEBPACK_IMPORTED_MODULE_5__slider_step_component__["a" /* pgSliderStepComponent */], __WEBPACK_IMPORTED_MODULE_4__slider_marks_component__["c" /* pgSliderMarksComponent */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_7__slider_component__["a" /* pgSliderComponent */], __WEBPACK_IMPORTED_MODULE_6__slider_track_component__["a" /* pgSliderTrackComponent */], __WEBPACK_IMPORTED_MODULE_3__slider_handle_component__["a" /* pgSliderHandleComponent */], __WEBPACK_IMPORTED_MODULE_5__slider_step_component__["a" /* pgSliderStepComponent */], __WEBPACK_IMPORTED_MODULE_4__slider_marks_component__["c" /* pgSliderMarksComponent */]],
            imports: [__WEBPACK_IMPORTED_MODULE_0__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap__["j" /* TooltipModule */]],
            providers: [__WEBPACK_IMPORTED_MODULE_8__slider_service__["a" /* SliderService */]]
        })
    ], pgSliderModule);
    return pgSliderModule;
}());



/***/ }),

/***/ "../../../../../src/app/@pages/components/slider/slider.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/@pages/components/slider/slider.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SliderService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SliderService = (function () {
    function SliderService() {
    }
    SliderService.prototype.pauseEvent = function (e) {
        e.stopPropagation();
        e.preventDefault();
    };
    SliderService.prototype.getPrecision = function (num) {
        var numStr = num.toString();
        var dotIndex = numStr.indexOf('.');
        return dotIndex >= 0 ? numStr.length - dotIndex - 1 : 0;
    };
    SliderService.prototype.cloneArray = function (arr) {
        return arr.slice();
    };
    SliderService.prototype.isNotTouchEvent = function (e) {
        return !e.touches || e.touches.length > 1 ||
            (e.type.toLowerCase() === 'touchend' && e.touches.length > 0);
    };
    // convert value to offset in percent
    SliderService.prototype.valueToOffset = function (min, max, value) {
        return (value - min) / (max - min) * 100;
    };
    SliderService.prototype.correctNumLimit = function (num, min, max) {
        var res = +num;
        if (isNaN(res)) {
            return min;
        }
        if (num < min) {
            res = min;
        }
        else if (num > max) {
            res = max;
        }
        return res;
    };
    /**
     * get the offset of an element relative to the document (Reference from jquery's offset())
     * @param elem HTMLElement ref
     */
    SliderService.prototype.getElementOffset = function (elem) {
        // Return zeros for disconnected and hidden (display: none) elements (gh-2310)
        // Support: IE <=11 only
        // Running getBoundingClientRect on a
        // disconnected node in IE throws an error
        if (!elem.getClientRects().length) {
            return { top: 0, left: 0 };
        }
        // Get document-relative position by adding viewport scroll to viewport-relative gBCR
        var rect = elem.getBoundingClientRect();
        var win = elem.ownerDocument.defaultView;
        return {
            top: rect.top + win.pageYOffset,
            left: rect.left + win.pageXOffset
        };
    };
    SliderService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], SliderService);
    return SliderService;
}());



/***/ }),

/***/ "../../../../../src/app/@pages/components/tag/tag.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return pgTagComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__animations_tag_animations__ = __webpack_require__("../../../../../src/app/@pages/animations/tag-animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_convert__ = __webpack_require__("../../../../../src/app/@pages/components/util/convert.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var pgTagComponent = (function () {
    function pgTagComponent(_elementRef, _render) {
        this._elementRef = _elementRef;
        this._render = _render;
        this._closable = false;
        this._prefixCls = 'label';
        this._closed = false;
        this._colorclass = "label-info";
        /** Event: emit before close */
        this.BeforeClose = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        // TODO: AnimationEvent is not subclass of Event, but all payloads should be unified
        /** Event: emit after close */
        this.Close = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    Object.defineProperty(pgTagComponent.prototype, "Closable", {
        get: function () {
            return this._closable;
        },
        /** Whether tag is closable */
        set: function (value) {
            this._closable = Object(__WEBPACK_IMPORTED_MODULE_2__util_convert__["a" /* toBoolean */])(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(pgTagComponent.prototype, "ColorClass", {
        set: function (value) {
            this._colorclass = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(pgTagComponent.prototype, "_dataShow", {
        get: function () {
            return !this._closed;
        },
        enumerable: true,
        configurable: true
    });
    pgTagComponent.prototype._afterClose = function (event) {
        if (this._closed) {
            this.Close.emit(event);
        }
    };
    Object.defineProperty(pgTagComponent.prototype, "_textClass", {
        get: function () {
            return this._prefixCls + "-text";
        },
        enumerable: true,
        configurable: true
    });
    pgTagComponent.prototype._close = function (event) {
        this.BeforeClose.emit(event);
        if (event.defaultPrevented) {
            return;
        }
        this._closed = true;
    };
    pgTagComponent.prototype.ngAfterViewInit = function () {
        this._render.addClass(this._elementRef.nativeElement, this._prefixCls + "-wrapper");
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], pgTagComponent.prototype, "Closable", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], pgTagComponent.prototype, "ColorClass", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], pgTagComponent.prototype, "color", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], pgTagComponent.prototype, "BeforeClose", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], pgTagComponent.prototype, "Close", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('attr.data-show'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [])
    ], pgTagComponent.prototype, "_dataShow", null);
    pgTagComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'pg-tag',
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            animations: [
                __WEBPACK_IMPORTED_MODULE_1__animations_tag_animations__["a" /* tagAnimation */]
            ],
            template: "\n    <span *ngIf=\"!_closed\"\n      class=\"label\"\n      [ngClass]=\"_colorclass\"\n      [@tagAnimation]\n      (@tagAnimation.done)=\"_afterClose($event)\">\n      <span [class]=\"_textClass\"><ng-content></ng-content></span>\n      <i class=\"pg pg-close\" (click)=\"_close($event)\" *ngIf=\"Closable\"></i>\n    </span>\n  ",
            styles: [__webpack_require__("../../../../../src/app/@pages/components/tag/tag.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"]])
    ], pgTagComponent);
    return pgTagComponent;
}());



/***/ }),

/***/ "../../../../../src/app/@pages/components/tag/tag.control.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"tags-control\" #wrapper>\n<pg-tag *ngFor=\"let tag of _tags; let i = index;\"\n      [Closable]=\"i !== 0\"\n      (Close)=\"handleClose(tag)\">\n      {{sliceTagName(tag)}}\n    </pg-tag>\n    <input class=\"form-control\" type=\"text\"\n      [(ngModel)]=\"inputValue\"\n      style=\"width: 78px;\"\n      (blur)=\"handleInputConfirm()\" (keydown.enter)=\"handleInputConfirm()\" (keydown.backspace)=\"handleInputBack()\" (focus)=\"handleFocus()\" (focusout)=\"handleFocusOut()\" placeholder=\"{{_placeholder}}\">\n    </div>"

/***/ }),

/***/ "../../../../../src/app/@pages/components/tag/tag.control.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return pgTagControl; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var pgTagControl = (function () {
    function pgTagControl() {
        this.onChange = function () { return null; };
        this.onTouched = function () { return null; };
        this._tags = [];
        this.inputValue = '';
        this._placeholder = '';
    }
    pgTagControl_1 = pgTagControl;
    Object.defineProperty(pgTagControl.prototype, "placeholder", {
        set: function (value) {
            this._placeholder = value;
        },
        enumerable: true,
        configurable: true
    });
    pgTagControl.prototype.handleClose = function (removedTag) {
        this._tags = this._tags.filter(function (tag) { return tag !== removedTag; });
    };
    pgTagControl.prototype.sliceTagName = function (tag) {
        var isLongTag = tag.length > 20;
        return isLongTag ? tag.slice(0, 20) + "..." : tag;
    };
    pgTagControl.prototype.handleInputConfirm = function () {
        if (this.inputValue) {
            this._tags.push(this.inputValue);
        }
        this.inputValue = '';
    };
    pgTagControl.prototype.handleFocus = function () {
        this.wrapper.nativeElement.parentNode.parentNode.classList.add('focused');
    };
    pgTagControl.prototype.handleFocusOut = function () {
        this.wrapper.nativeElement.parentNode.parentNode.classList.remove('focused');
    };
    pgTagControl.prototype.handleInputBack = function () {
        if (!this.inputValue) {
            this._tags.splice(-1, 1);
        }
    };
    pgTagControl.prototype.updateValue = function (value) {
        this._tags = value;
    };
    pgTagControl.prototype.writeValue = function (value) {
        this.updateValue(value);
    };
    pgTagControl.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    pgTagControl.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    pgTagControl.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('wrapper'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], pgTagControl.prototype, "wrapper", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], pgTagControl.prototype, "placeholder", null);
    pgTagControl = pgTagControl_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'pg-tag-control',
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            providers: [
                {
                    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["NG_VALUE_ACCESSOR"],
                    useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return pgTagControl_1; }),
                    multi: true
                }
            ],
            template: __webpack_require__("../../../../../src/app/@pages/components/tag/tag.control.component.html"),
            styles: [__webpack_require__("../../../../../src/app/@pages/components/tag/tag.scss")]
        })
    ], pgTagControl);
    return pgTagControl;
    var pgTagControl_1;
}());



/***/ }),

/***/ "../../../../../src/app/@pages/components/tag/tag.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return pgTagModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tag_component__ = __webpack_require__("../../../../../src/app/@pages/components/tag/tag.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tag_control_component__ = __webpack_require__("../../../../../src/app/@pages/components/tag/tag.control.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var pgTagModule = (function () {
    function pgTagModule() {
    }
    pgTagModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_0__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"]],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__tag_control_component__["a" /* pgTagControl */], __WEBPACK_IMPORTED_MODULE_3__tag_component__["a" /* pgTagComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_4__tag_control_component__["a" /* pgTagControl */], __WEBPACK_IMPORTED_MODULE_3__tag_component__["a" /* pgTagComponent */]
            ]
        })
    ], pgTagModule);
    return pgTagModule;
}());



/***/ }),

/***/ "../../../../../src/app/@pages/components/tag/tag.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../webpack/buildin/module.js":
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "../../../cdk/esm5/keycodes.es5.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export UP_ARROW */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DOWN_ARROW; });
/* unused harmony export RIGHT_ARROW */
/* unused harmony export LEFT_ARROW */
/* unused harmony export PAGE_UP */
/* unused harmony export PAGE_DOWN */
/* unused harmony export HOME */
/* unused harmony export END */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ENTER; });
/* unused harmony export SPACE */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return TAB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ESCAPE; });
/* unused harmony export BACKSPACE */
/* unused harmony export DELETE */
/* unused harmony export A */
/* unused harmony export Z */
/* unused harmony export ZERO */
/* unused harmony export NINE */
/* unused harmony export COMMA */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

var UP_ARROW = 38;
var DOWN_ARROW = 40;
var RIGHT_ARROW = 39;
var LEFT_ARROW = 37;
var PAGE_UP = 33;
var PAGE_DOWN = 34;
var HOME = 36;
var END = 35;
var ENTER = 13;
var SPACE = 32;
var TAB = 9;
var ESCAPE = 27;
var BACKSPACE = 8;
var DELETE = 46;
var A = 65;
var Z = 90;
var ZERO = 48;
var NINE = 57;
var COMMA = 188;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=keycodes.es5.js.map


/***/ }),

/***/ "../../../cdk/esm5/overlay.es5.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Overlay; });
/* unused harmony export OverlayContainer */
/* unused harmony export CdkOverlayOrigin */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CdkConnectedOverlay; });
/* unused harmony export FullscreenOverlayContainer */
/* unused harmony export OverlayRef */
/* unused harmony export OverlayKeyboardDispatcher */
/* unused harmony export OverlayPositionBuilder */
/* unused harmony export GlobalPositionStrategy */
/* unused harmony export ConnectedPositionStrategy */
/* unused harmony export ConnectedOverlayDirective */
/* unused harmony export OverlayOrigin */
/* unused harmony export OverlayConfig */
/* unused harmony export ConnectionPositionPair */
/* unused harmony export ScrollingVisibility */
/* unused harmony export ConnectedOverlayPositionChange */
/* unused harmony export ScrollStrategyOptions */
/* unused harmony export RepositionScrollStrategy */
/* unused harmony export CloseScrollStrategy */
/* unused harmony export NoopScrollStrategy */
/* unused harmony export BlockScrollStrategy */
/* unused harmony export OVERLAY_PROVIDERS */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return OverlayModule; });
/* unused harmony export ɵg */
/* unused harmony export ɵf */
/* unused harmony export ɵb */
/* unused harmony export ɵa */
/* unused harmony export ɵc */
/* unused harmony export ɵe */
/* unused harmony export ɵd */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_cdk_scrolling__ = __webpack_require__("../../../cdk/esm5/scrolling.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_cdk_bidi__ = __webpack_require__("../../../cdk/esm5/bidi.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_cdk_portal__ = __webpack_require__("../../../cdk/esm5/portal.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_tslib__ = __webpack_require__("../../../../tslib/tslib.es6.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_operators_take__ = __webpack_require__("../../../../rxjs/_esm5/operators/take.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_Subscription__ = __webpack_require__("../../../../rxjs/_esm5/Subscription.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_operators_filter__ = __webpack_require__("../../../../rxjs/_esm5/operators/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_observable_fromEvent__ = __webpack_require__("../../../../rxjs/_esm5/observable/fromEvent.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_cdk_coercion__ = __webpack_require__("../../../cdk/esm5/coercion.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_cdk_keycodes__ = __webpack_require__("../../../cdk/esm5/keycodes.es5.js");
/* unused harmony reexport ViewportRuler */
/* unused harmony reexport VIEWPORT_RULER_PROVIDER */
/* unused harmony reexport CdkScrollable */
/* unused harmony reexport ScrollDispatcher */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */















/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * Scroll strategy that doesn't do anything.
 */
var NoopScrollStrategy = /** @class */ (function () {
    function NoopScrollStrategy() {
    }
    /** Does nothing, as this scroll strategy is a no-op. */
    /**
     * Does nothing, as this scroll strategy is a no-op.
     * @return {?}
     */
    NoopScrollStrategy.prototype.enable = /**
     * Does nothing, as this scroll strategy is a no-op.
     * @return {?}
     */
    function () { };
    /** Does nothing, as this scroll strategy is a no-op. */
    /**
     * Does nothing, as this scroll strategy is a no-op.
     * @return {?}
     */
    NoopScrollStrategy.prototype.disable = /**
     * Does nothing, as this scroll strategy is a no-op.
     * @return {?}
     */
    function () { };
    /** Does nothing, as this scroll strategy is a no-op. */
    /**
     * Does nothing, as this scroll strategy is a no-op.
     * @return {?}
     */
    NoopScrollStrategy.prototype.attach = /**
     * Does nothing, as this scroll strategy is a no-op.
     * @return {?}
     */
    function () { };
    return NoopScrollStrategy;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * Initial configuration used when creating an overlay.
 */
var OverlayConfig = /** @class */ (function () {
    function OverlayConfig(config) {
        var _this = this;
        /**
         * Strategy to be used when handling scroll events while the overlay is open.
         */
        this.scrollStrategy = new NoopScrollStrategy();
        /**
         * Custom class to add to the overlay pane.
         */
        this.panelClass = '';
        /**
         * Whether the overlay has a backdrop.
         */
        this.hasBackdrop = false;
        /**
         * Custom class to add to the backdrop
         */
        this.backdropClass = 'cdk-overlay-dark-backdrop';
        /**
         * The direction of the text in the overlay panel.
         */
        this.direction = 'ltr';
        if (config) {
            Object.keys(config)
                .filter(function (key) { return typeof config[key] !== 'undefined'; })
                .forEach(function (key) { return _this[key] = config[key]; });
        }
    }
    return OverlayConfig;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * A connection point on the origin element.
 * @record
 */

/**
 * A connection point on the overlay element.
 * @record
 */

/**
 * The points of the origin element and the overlay element to connect.
 */
var ConnectionPositionPair = /** @class */ (function () {
    function ConnectionPositionPair(origin, overlay, offsetX, offsetY) {
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        this.originX = origin.originX;
        this.originY = origin.originY;
        this.overlayX = overlay.overlayX;
        this.overlayY = overlay.overlayY;
    }
    return ConnectionPositionPair;
}());
/**
 * Set of properties regarding the position of the origin and overlay relative to the viewport
 * with respect to the containing Scrollable elements.
 *
 * The overlay and origin are clipped if any part of their bounding client rectangle exceeds the
 * bounds of any one of the strategy's Scrollable's bounding client rectangle.
 *
 * The overlay and origin are outside view if there is no overlap between their bounding client
 * rectangle and any one of the strategy's Scrollable's bounding client rectangle.
 *
 *       -----------                    -----------
 *       | outside |                    | clipped |
 *       |  view   |              --------------------------
 *       |         |              |     |         |        |
 *       ----------               |     -----------        |
 *  --------------------------    |                        |
 *  |                        |    |      Scrollable        |
 *  |                        |    |                        |
 *  |                        |     --------------------------
 *  |      Scrollable        |
 *  |                        |
 *  --------------------------
 *
 *  \@docs-private
 */
var ScrollingVisibility = /** @class */ (function () {
    function ScrollingVisibility() {
    }
    return ScrollingVisibility;
}());
/**
 * The change event emitted by the strategy when a fallback position is used.
 */
var ConnectedOverlayPositionChange = /** @class */ (function () {
    function ConnectedOverlayPositionChange(connectionPair, /** @docs-private */
        scrollableViewProperties) {
        this.connectionPair = connectionPair;
        this.scrollableViewProperties = scrollableViewProperties;
    }
    /** @nocollapse */
    ConnectedOverlayPositionChange.ctorParameters = function () { return [
        { type: ConnectionPositionPair, },
        { type: ScrollingVisibility, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"] },] },
    ]; };
    return ConnectedOverlayPositionChange;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * Describes a strategy that will be used by an overlay to handle scroll events while it is open.
 * @record
 */

/**
 * Returns an error to be thrown when attempting to attach an already-attached scroll strategy.
 * @return {?}
 */
function getMatScrollStrategyAlreadyAttachedError() {
    return Error("Scroll strategy has already been attached.");
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Config options for the CloseScrollStrategy.
 * @record
 */

/**
 * Strategy that will close the overlay as soon as the user starts scrolling.
 */
var CloseScrollStrategy = /** @class */ (function () {
    function CloseScrollStrategy(_scrollDispatcher, _ngZone, _viewportRuler, _config) {
        var _this = this;
        this._scrollDispatcher = _scrollDispatcher;
        this._ngZone = _ngZone;
        this._viewportRuler = _viewportRuler;
        this._config = _config;
        this._scrollSubscription = null;
        /**
         * Detaches the overlay ref and disables the scroll strategy.
         */
        this._detach = function () {
            _this.disable();
            if (_this._overlayRef.hasAttached()) {
                _this._ngZone.run(function () { return _this._overlayRef.detach(); });
            }
        };
    }
    /** Attaches this scroll strategy to an overlay. */
    /**
     * Attaches this scroll strategy to an overlay.
     * @param {?} overlayRef
     * @return {?}
     */
    CloseScrollStrategy.prototype.attach = /**
     * Attaches this scroll strategy to an overlay.
     * @param {?} overlayRef
     * @return {?}
     */
    function (overlayRef) {
        if (this._overlayRef) {
            throw getMatScrollStrategyAlreadyAttachedError();
        }
        this._overlayRef = overlayRef;
    };
    /** Enables the closing of the attached overlay on scroll. */
    /**
     * Enables the closing of the attached overlay on scroll.
     * @return {?}
     */
    CloseScrollStrategy.prototype.enable = /**
     * Enables the closing of the attached overlay on scroll.
     * @return {?}
     */
    function () {
        var _this = this;
        if (this._scrollSubscription) {
            return;
        }
        var /** @type {?} */ stream = this._scrollDispatcher.scrolled(0);
        if (this._config && this._config.threshold && this._config.threshold > 1) {
            this._initialScrollPosition = this._viewportRuler.getViewportScrollPosition().top;
            this._scrollSubscription = stream.subscribe(function () {
                var /** @type {?} */ scrollPosition = _this._viewportRuler.getViewportScrollPosition().top;
                if (Math.abs(scrollPosition - _this._initialScrollPosition) > /** @type {?} */ ((/** @type {?} */ ((_this._config)).threshold))) {
                    _this._detach();
                }
                else {
                    _this._overlayRef.updatePosition();
                }
            });
        }
        else {
            this._scrollSubscription = stream.subscribe(this._detach);
        }
    };
    /** Disables the closing the attached overlay on scroll. */
    /**
     * Disables the closing the attached overlay on scroll.
     * @return {?}
     */
    CloseScrollStrategy.prototype.disable = /**
     * Disables the closing the attached overlay on scroll.
     * @return {?}
     */
    function () {
        if (this._scrollSubscription) {
            this._scrollSubscription.unsubscribe();
            this._scrollSubscription = null;
        }
    };
    return CloseScrollStrategy;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * Strategy that will prevent the user from scrolling while the overlay is visible.
 */
var BlockScrollStrategy = /** @class */ (function () {
    function BlockScrollStrategy(_viewportRuler, document) {
        this._viewportRuler = _viewportRuler;
        this._previousHTMLStyles = { top: '', left: '' };
        this._isEnabled = false;
        this._document = document;
    }
    /** Attaches this scroll strategy to an overlay. */
    /**
     * Attaches this scroll strategy to an overlay.
     * @return {?}
     */
    BlockScrollStrategy.prototype.attach = /**
     * Attaches this scroll strategy to an overlay.
     * @return {?}
     */
    function () { };
    /** Blocks page-level scroll while the attached overlay is open. */
    /**
     * Blocks page-level scroll while the attached overlay is open.
     * @return {?}
     */
    BlockScrollStrategy.prototype.enable = /**
     * Blocks page-level scroll while the attached overlay is open.
     * @return {?}
     */
    function () {
        if (this._canBeEnabled()) {
            var /** @type {?} */ root = this._document.documentElement;
            this._previousScrollPosition = this._viewportRuler.getViewportScrollPosition();
            // Cache the previous inline styles in case the user had set them.
            this._previousHTMLStyles.left = root.style.left || '';
            this._previousHTMLStyles.top = root.style.top || '';
            // Note: we're using the `html` node, instead of the `body`, because the `body` may
            // have the user agent margin, whereas the `html` is guaranteed not to have one.
            root.style.left = -this._previousScrollPosition.left + "px";
            root.style.top = -this._previousScrollPosition.top + "px";
            root.classList.add('cdk-global-scrollblock');
            this._isEnabled = true;
        }
    };
    /** Unblocks page-level scroll while the attached overlay is open. */
    /**
     * Unblocks page-level scroll while the attached overlay is open.
     * @return {?}
     */
    BlockScrollStrategy.prototype.disable = /**
     * Unblocks page-level scroll while the attached overlay is open.
     * @return {?}
     */
    function () {
        if (this._isEnabled) {
            var /** @type {?} */ html = this._document.documentElement;
            var /** @type {?} */ body = this._document.body;
            var /** @type {?} */ previousHtmlScrollBehavior = html.style['scrollBehavior'] || '';
            var /** @type {?} */ previousBodyScrollBehavior = body.style['scrollBehavior'] || '';
            this._isEnabled = false;
            html.style.left = this._previousHTMLStyles.left;
            html.style.top = this._previousHTMLStyles.top;
            html.classList.remove('cdk-global-scrollblock');
            // Disable user-defined smooth scrolling temporarily while we restore the scroll position.
            // See https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-behavior
            html.style['scrollBehavior'] = body.style['scrollBehavior'] = 'auto';
            window.scroll(this._previousScrollPosition.left, this._previousScrollPosition.top);
            html.style['scrollBehavior'] = previousHtmlScrollBehavior;
            body.style['scrollBehavior'] = previousBodyScrollBehavior;
        }
    };
    /**
     * @return {?}
     */
    BlockScrollStrategy.prototype._canBeEnabled = /**
     * @return {?}
     */
    function () {
        // Since the scroll strategies can't be singletons, we have to use a global CSS class
        // (`cdk-global-scrollblock`) to make sure that we don't try to disable global
        // scrolling multiple times.
        var /** @type {?} */ html = this._document.documentElement;
        if (html.classList.contains('cdk-global-scrollblock') || this._isEnabled) {
            return false;
        }
        var /** @type {?} */ body = this._document.body;
        var /** @type {?} */ viewport = this._viewportRuler.getViewportSize();
        return body.scrollHeight > viewport.height || body.scrollWidth > viewport.width;
    };
    return BlockScrollStrategy;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

// TODO(jelbourn): move this to live with the rest of the scrolling code
// TODO(jelbourn): someday replace this with IntersectionObservers
/**
 * Gets whether an element is scrolled outside of view by any of its parent scrolling containers.
 * \@docs-private
 * @param {?} element Dimensions of the element (from getBoundingClientRect)
 * @param {?} scrollContainers Dimensions of element's scrolling containers (from getBoundingClientRect)
 * @return {?} Whether the element is scrolled out of view
 */
function isElementScrolledOutsideView(element, scrollContainers) {
    return scrollContainers.some(function (containerBounds) {
        var /** @type {?} */ outsideAbove = element.bottom < containerBounds.top;
        var /** @type {?} */ outsideBelow = element.top > containerBounds.bottom;
        var /** @type {?} */ outsideLeft = element.right < containerBounds.left;
        var /** @type {?} */ outsideRight = element.left > containerBounds.right;
        return outsideAbove || outsideBelow || outsideLeft || outsideRight;
    });
}
/**
 * Gets whether an element is clipped by any of its scrolling containers.
 * \@docs-private
 * @param {?} element Dimensions of the element (from getBoundingClientRect)
 * @param {?} scrollContainers Dimensions of element's scrolling containers (from getBoundingClientRect)
 * @return {?} Whether the element is clipped
 */
function isElementClippedByScrolling(element, scrollContainers) {
    return scrollContainers.some(function (scrollContainerRect) {
        var /** @type {?} */ clippedAbove = element.top < scrollContainerRect.top;
        var /** @type {?} */ clippedBelow = element.bottom > scrollContainerRect.bottom;
        var /** @type {?} */ clippedLeft = element.left < scrollContainerRect.left;
        var /** @type {?} */ clippedRight = element.right > scrollContainerRect.right;
        return clippedAbove || clippedBelow || clippedLeft || clippedRight;
    });
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * Config options for the RepositionScrollStrategy.
 * @record
 */

/**
 * Strategy that will update the element position as the user is scrolling.
 */
var RepositionScrollStrategy = /** @class */ (function () {
    function RepositionScrollStrategy(_scrollDispatcher, _viewportRuler, _ngZone, _config) {
        this._scrollDispatcher = _scrollDispatcher;
        this._viewportRuler = _viewportRuler;
        this._ngZone = _ngZone;
        this._config = _config;
        this._scrollSubscription = null;
    }
    /** Attaches this scroll strategy to an overlay. */
    /**
     * Attaches this scroll strategy to an overlay.
     * @param {?} overlayRef
     * @return {?}
     */
    RepositionScrollStrategy.prototype.attach = /**
     * Attaches this scroll strategy to an overlay.
     * @param {?} overlayRef
     * @return {?}
     */
    function (overlayRef) {
        if (this._overlayRef) {
            throw getMatScrollStrategyAlreadyAttachedError();
        }
        this._overlayRef = overlayRef;
    };
    /** Enables repositioning of the attached overlay on scroll. */
    /**
     * Enables repositioning of the attached overlay on scroll.
     * @return {?}
     */
    RepositionScrollStrategy.prototype.enable = /**
     * Enables repositioning of the attached overlay on scroll.
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this._scrollSubscription) {
            var /** @type {?} */ throttle = this._config ? this._config.scrollThrottle : 0;
            this._scrollSubscription = this._scrollDispatcher.scrolled(throttle).subscribe(function () {
                _this._overlayRef.updatePosition();
                // TODO(crisbeto): make `close` on by default once all components can handle it.
                if (_this._config && _this._config.autoClose) {
                    var /** @type {?} */ overlayRect = _this._overlayRef.overlayElement.getBoundingClientRect();
                    var _a = _this._viewportRuler.getViewportSize(), width = _a.width, height = _a.height;
                    // TODO(crisbeto): include all ancestor scroll containers here once
                    // we have a way of exposing the trigger element to the scroll strategy.
                    var /** @type {?} */ parentRects = [{ width: width, height: height, bottom: height, right: width, top: 0, left: 0 }];
                    if (isElementScrolledOutsideView(overlayRect, parentRects)) {
                        _this.disable();
                        _this._ngZone.run(function () { return _this._overlayRef.detach(); });
                    }
                }
            });
        }
    };
    /** Disables repositioning of the attached overlay on scroll. */
    /**
     * Disables repositioning of the attached overlay on scroll.
     * @return {?}
     */
    RepositionScrollStrategy.prototype.disable = /**
     * Disables repositioning of the attached overlay on scroll.
     * @return {?}
     */
    function () {
        if (this._scrollSubscription) {
            this._scrollSubscription.unsubscribe();
            this._scrollSubscription = null;
        }
    };
    return RepositionScrollStrategy;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Options for how an overlay will handle scrolling.
 *
 * Users can provide a custom value for `ScrollStrategyOptions` to replace the default
 * behaviors. This class primarily acts as a factory for ScrollStrategy instances.
 */
var ScrollStrategyOptions = /** @class */ (function () {
    function ScrollStrategyOptions(_scrollDispatcher, _viewportRuler, _ngZone, document) {
        var _this = this;
        this._scrollDispatcher = _scrollDispatcher;
        this._viewportRuler = _viewportRuler;
        this._ngZone = _ngZone;
        /**
         * Do nothing on scroll.
         */
        this.noop = function () { return new NoopScrollStrategy(); };
        /**
         * Close the overlay as soon as the user scrolls.
         * @param config Configuration to be used inside the scroll strategy.
         */
        this.close = function (config) {
            return new CloseScrollStrategy(_this._scrollDispatcher, _this._ngZone, _this._viewportRuler, config);
        };
        /**
         * Block scrolling.
         */
        this.block = function () { return new BlockScrollStrategy(_this._viewportRuler, _this._document); };
        /**
         * Update the overlay's position on scroll.
         * @param config Configuration to be used inside the scroll strategy.
         * Allows debouncing the reposition calls.
         */
        this.reposition = function (config) {
            return new RepositionScrollStrategy(_this._scrollDispatcher, _this._viewportRuler, _this._ngZone, config);
        };
        this._document = document;
    }
    ScrollStrategyOptions.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    ScrollStrategyOptions.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_cdk_scrolling__["b" /* ScrollDispatcher */], },
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_cdk_scrolling__["d" /* ViewportRuler */], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"], },
        { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [__WEBPACK_IMPORTED_MODULE_2__angular_common__["DOCUMENT"],] },] },
    ]; };
    return ScrollStrategyOptions;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * Reference to an overlay that has been created with the Overlay service.
 * Used to manipulate or dispose of said overlay.
 */
var OverlayRef = /** @class */ (function () {
    function OverlayRef(_portalOutlet, _pane, _config, _ngZone, _keyboardDispatcher, _document) {
        this._portalOutlet = _portalOutlet;
        this._pane = _pane;
        this._config = _config;
        this._ngZone = _ngZone;
        this._keyboardDispatcher = _keyboardDispatcher;
        this._document = _document;
        this._backdropElement = null;
        this._backdropClick = new __WEBPACK_IMPORTED_MODULE_7_rxjs_Subject__["a" /* Subject */]();
        this._attachments = new __WEBPACK_IMPORTED_MODULE_7_rxjs_Subject__["a" /* Subject */]();
        this._detachments = new __WEBPACK_IMPORTED_MODULE_7_rxjs_Subject__["a" /* Subject */]();
        /**
         * Stream of keydown events dispatched to this overlay.
         */
        this._keydownEvents = new __WEBPACK_IMPORTED_MODULE_7_rxjs_Subject__["a" /* Subject */]();
        if (_config.scrollStrategy) {
            _config.scrollStrategy.attach(this);
        }
    }
    Object.defineProperty(OverlayRef.prototype, "overlayElement", {
        /** The overlay's HTML element */
        get: /**
         * The overlay's HTML element
         * @return {?}
         */
        function () {
            return this._pane;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OverlayRef.prototype, "backdropElement", {
        /** The overlay's backdrop HTML element. */
        get: /**
         * The overlay's backdrop HTML element.
         * @return {?}
         */
        function () {
            return this._backdropElement;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Attaches content, given via a Portal, to the overlay.
     * If the overlay is configured to have a backdrop, it will be created.
     *
     * @param portal Portal instance to which to attach the overlay.
     * @returns The portal attachment result.
     */
    /**
     * Attaches content, given via a Portal, to the overlay.
     * If the overlay is configured to have a backdrop, it will be created.
     *
     * @param {?} portal Portal instance to which to attach the overlay.
     * @return {?} The portal attachment result.
     */
    OverlayRef.prototype.attach = /**
     * Attaches content, given via a Portal, to the overlay.
     * If the overlay is configured to have a backdrop, it will be created.
     *
     * @param {?} portal Portal instance to which to attach the overlay.
     * @return {?} The portal attachment result.
     */
    function (portal) {
        var _this = this;
        var /** @type {?} */ attachResult = this._portalOutlet.attach(portal);
        if (this._config.positionStrategy) {
            this._config.positionStrategy.attach(this);
        }
        // Update the pane element with the given configuration.
        this._updateStackingOrder();
        this._updateElementSize();
        this._updateElementDirection();
        if (this._config.scrollStrategy) {
            this._config.scrollStrategy.enable();
        }
        // Update the position once the zone is stable so that the overlay will be fully rendered
        // before attempting to position it, as the position may depend on the size of the rendered
        // content.
        this._ngZone.onStable.asObservable().pipe(Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators_take__["a" /* take */])(1)).subscribe(function () {
            // The overlay could've been detached before the zone has stabilized.
            if (_this.hasAttached()) {
                _this.updatePosition();
            }
        });
        // Enable pointer events for the overlay pane element.
        this._togglePointerEvents(true);
        if (this._config.hasBackdrop) {
            this._attachBackdrop();
        }
        if (this._config.panelClass) {
            // We can't do a spread here, because IE doesn't support setting multiple classes.
            if (Array.isArray(this._config.panelClass)) {
                this._config.panelClass.forEach(function (cls) { return _this._pane.classList.add(cls); });
            }
            else {
                this._pane.classList.add(this._config.panelClass);
            }
        }
        // Only emit the `attachments` event once all other setup is done.
        this._attachments.next();
        // Track this overlay by the keyboard dispatcher
        this._keyboardDispatcher.add(this);
        return attachResult;
    };
    /**
     * Detaches an overlay from a portal.
     * @returns The portal detachment result.
     */
    /**
     * Detaches an overlay from a portal.
     * @return {?} The portal detachment result.
     */
    OverlayRef.prototype.detach = /**
     * Detaches an overlay from a portal.
     * @return {?} The portal detachment result.
     */
    function () {
        if (!this.hasAttached()) {
            return;
        }
        this.detachBackdrop();
        // When the overlay is detached, the pane element should disable pointer events.
        // This is necessary because otherwise the pane element will cover the page and disable
        // pointer events therefore. Depends on the position strategy and the applied pane boundaries.
        this._togglePointerEvents(false);
        if (this._config.positionStrategy && this._config.positionStrategy.detach) {
            this._config.positionStrategy.detach();
        }
        if (this._config.scrollStrategy) {
            this._config.scrollStrategy.disable();
        }
        var /** @type {?} */ detachmentResult = this._portalOutlet.detach();
        // Only emit after everything is detached.
        this._detachments.next();
        // Remove this overlay from keyboard dispatcher tracking
        this._keyboardDispatcher.remove(this);
        return detachmentResult;
    };
    /** Cleans up the overlay from the DOM. */
    /**
     * Cleans up the overlay from the DOM.
     * @return {?}
     */
    OverlayRef.prototype.dispose = /**
     * Cleans up the overlay from the DOM.
     * @return {?}
     */
    function () {
        var /** @type {?} */ isAttached = this.hasAttached();
        if (this._config.positionStrategy) {
            this._config.positionStrategy.dispose();
        }
        if (this._config.scrollStrategy) {
            this._config.scrollStrategy.disable();
        }
        this.detachBackdrop();
        this._keyboardDispatcher.remove(this);
        this._portalOutlet.dispose();
        this._attachments.complete();
        this._backdropClick.complete();
        this._keydownEvents.complete();
        if (isAttached) {
            this._detachments.next();
        }
        this._detachments.complete();
    };
    /** Whether the overlay has attached content. */
    /**
     * Whether the overlay has attached content.
     * @return {?}
     */
    OverlayRef.prototype.hasAttached = /**
     * Whether the overlay has attached content.
     * @return {?}
     */
    function () {
        return this._portalOutlet.hasAttached();
    };
    /** Gets an observable that emits when the backdrop has been clicked. */
    /**
     * Gets an observable that emits when the backdrop has been clicked.
     * @return {?}
     */
    OverlayRef.prototype.backdropClick = /**
     * Gets an observable that emits when the backdrop has been clicked.
     * @return {?}
     */
    function () {
        return this._backdropClick.asObservable();
    };
    /** Gets an observable that emits when the overlay has been attached. */
    /**
     * Gets an observable that emits when the overlay has been attached.
     * @return {?}
     */
    OverlayRef.prototype.attachments = /**
     * Gets an observable that emits when the overlay has been attached.
     * @return {?}
     */
    function () {
        return this._attachments.asObservable();
    };
    /** Gets an observable that emits when the overlay has been detached. */
    /**
     * Gets an observable that emits when the overlay has been detached.
     * @return {?}
     */
    OverlayRef.prototype.detachments = /**
     * Gets an observable that emits when the overlay has been detached.
     * @return {?}
     */
    function () {
        return this._detachments.asObservable();
    };
    /** Gets an observable of keydown events targeted to this overlay. */
    /**
     * Gets an observable of keydown events targeted to this overlay.
     * @return {?}
     */
    OverlayRef.prototype.keydownEvents = /**
     * Gets an observable of keydown events targeted to this overlay.
     * @return {?}
     */
    function () {
        return this._keydownEvents.asObservable();
    };
    /** Gets the the current overlay configuration, which is immutable. */
    /**
     * Gets the the current overlay configuration, which is immutable.
     * @return {?}
     */
    OverlayRef.prototype.getConfig = /**
     * Gets the the current overlay configuration, which is immutable.
     * @return {?}
     */
    function () {
        return this._config;
    };
    /** Updates the position of the overlay based on the position strategy. */
    /**
     * Updates the position of the overlay based on the position strategy.
     * @return {?}
     */
    OverlayRef.prototype.updatePosition = /**
     * Updates the position of the overlay based on the position strategy.
     * @return {?}
     */
    function () {
        if (this._config.positionStrategy) {
            this._config.positionStrategy.apply();
        }
    };
    /** Update the size properties of the overlay. */
    /**
     * Update the size properties of the overlay.
     * @param {?} sizeConfig
     * @return {?}
     */
    OverlayRef.prototype.updateSize = /**
     * Update the size properties of the overlay.
     * @param {?} sizeConfig
     * @return {?}
     */
    function (sizeConfig) {
        this._config = Object(__WEBPACK_IMPORTED_MODULE_5_tslib__["a" /* __assign */])({}, this._config, sizeConfig);
        this._updateElementSize();
    };
    /** Sets the LTR/RTL direction for the overlay. */
    /**
     * Sets the LTR/RTL direction for the overlay.
     * @param {?} dir
     * @return {?}
     */
    OverlayRef.prototype.setDirection = /**
     * Sets the LTR/RTL direction for the overlay.
     * @param {?} dir
     * @return {?}
     */
    function (dir) {
        this._config = Object(__WEBPACK_IMPORTED_MODULE_5_tslib__["a" /* __assign */])({}, this._config, { direction: dir });
        this._updateElementDirection();
    };
    /**
     * Updates the text direction of the overlay panel.
     * @return {?}
     */
    OverlayRef.prototype._updateElementDirection = /**
     * Updates the text direction of the overlay panel.
     * @return {?}
     */
    function () {
        this._pane.setAttribute('dir', /** @type {?} */ ((this._config.direction)));
    };
    /**
     * Updates the size of the overlay element based on the overlay config.
     * @return {?}
     */
    OverlayRef.prototype._updateElementSize = /**
     * Updates the size of the overlay element based on the overlay config.
     * @return {?}
     */
    function () {
        if (this._config.width || this._config.width === 0) {
            this._pane.style.width = formatCssUnit(this._config.width);
        }
        if (this._config.height || this._config.height === 0) {
            this._pane.style.height = formatCssUnit(this._config.height);
        }
        if (this._config.minWidth || this._config.minWidth === 0) {
            this._pane.style.minWidth = formatCssUnit(this._config.minWidth);
        }
        if (this._config.minHeight || this._config.minHeight === 0) {
            this._pane.style.minHeight = formatCssUnit(this._config.minHeight);
        }
        if (this._config.maxWidth || this._config.maxWidth === 0) {
            this._pane.style.maxWidth = formatCssUnit(this._config.maxWidth);
        }
        if (this._config.maxHeight || this._config.maxHeight === 0) {
            this._pane.style.maxHeight = formatCssUnit(this._config.maxHeight);
        }
    };
    /**
     * Toggles the pointer events for the overlay pane element.
     * @param {?} enablePointer
     * @return {?}
     */
    OverlayRef.prototype._togglePointerEvents = /**
     * Toggles the pointer events for the overlay pane element.
     * @param {?} enablePointer
     * @return {?}
     */
    function (enablePointer) {
        this._pane.style.pointerEvents = enablePointer ? 'auto' : 'none';
    };
    /**
     * Attaches a backdrop for this overlay.
     * @return {?}
     */
    OverlayRef.prototype._attachBackdrop = /**
     * Attaches a backdrop for this overlay.
     * @return {?}
     */
    function () {
        var _this = this;
        var /** @type {?} */ showingClass = 'cdk-overlay-backdrop-showing';
        this._backdropElement = this._document.createElement('div');
        this._backdropElement.classList.add('cdk-overlay-backdrop');
        if (this._config.backdropClass) {
            this._backdropElement.classList.add(this._config.backdropClass);
        } /** @type {?} */
        ((
        // Insert the backdrop before the pane in the DOM order,
        // in order to handle stacked overlays properly.
        this._pane.parentElement)).insertBefore(this._backdropElement, this._pane);
        // Forward backdrop clicks such that the consumer of the overlay can perform whatever
        // action desired when such a click occurs (usually closing the overlay).
        this._backdropElement.addEventListener('click', function (event) { return _this._backdropClick.next(event); });
        // Add class to fade-in the backdrop after one frame.
        if (typeof requestAnimationFrame !== 'undefined') {
            this._ngZone.runOutsideAngular(function () {
                requestAnimationFrame(function () {
                    if (_this._backdropElement) {
                        _this._backdropElement.classList.add(showingClass);
                    }
                });
            });
        }
        else {
            this._backdropElement.classList.add(showingClass);
        }
    };
    /**
     * Updates the stacking order of the element, moving it to the top if necessary.
     * This is required in cases where one overlay was detached, while another one,
     * that should be behind it, was destroyed. The next time both of them are opened,
     * the stacking will be wrong, because the detached element's pane will still be
     * in its original DOM position.
     * @return {?}
     */
    OverlayRef.prototype._updateStackingOrder = /**
     * Updates the stacking order of the element, moving it to the top if necessary.
     * This is required in cases where one overlay was detached, while another one,
     * that should be behind it, was destroyed. The next time both of them are opened,
     * the stacking will be wrong, because the detached element's pane will still be
     * in its original DOM position.
     * @return {?}
     */
    function () {
        if (this._pane.nextSibling) {
            /** @type {?} */ ((this._pane.parentNode)).appendChild(this._pane);
        }
    };
    /** Detaches the backdrop (if any) associated with the overlay. */
    /**
     * Detaches the backdrop (if any) associated with the overlay.
     * @return {?}
     */
    OverlayRef.prototype.detachBackdrop = /**
     * Detaches the backdrop (if any) associated with the overlay.
     * @return {?}
     */
    function () {
        var _this = this;
        var /** @type {?} */ backdropToDetach = this._backdropElement;
        if (backdropToDetach) {
            var /** @type {?} */ finishDetach_1 = function () {
                // It may not be attached to anything in certain cases (e.g. unit tests).
                if (backdropToDetach && backdropToDetach.parentNode) {
                    backdropToDetach.parentNode.removeChild(backdropToDetach);
                }
                // It is possible that a new portal has been attached to this overlay since we started
                // removing the backdrop. If that is the case, only clear the backdrop reference if it
                // is still the same instance that we started to remove.
                if (_this._backdropElement == backdropToDetach) {
                    _this._backdropElement = null;
                }
            };
            backdropToDetach.classList.remove('cdk-overlay-backdrop-showing');
            if (this._config.backdropClass) {
                backdropToDetach.classList.remove(this._config.backdropClass);
            }
            backdropToDetach.addEventListener('transitionend', finishDetach_1);
            // If the backdrop doesn't have a transition, the `transitionend` event won't fire.
            // In this case we make it unclickable and we try to remove it after a delay.
            backdropToDetach.style.pointerEvents = 'none';
            // Run this outside the Angular zone because there's nothing that Angular cares about.
            // If it were to run inside the Angular zone, every test that used Overlay would have to be
            // either async or fakeAsync.
            this._ngZone.runOutsideAngular(function () {
                setTimeout(finishDetach_1, 500);
            });
        }
    };
    return OverlayRef;
}());
/**
 * @param {?} value
 * @return {?}
 */
function formatCssUnit(value) {
    return typeof value === 'string' ? /** @type {?} */ (value) : value + "px";
}
/**
 * Size properties for an overlay.
 * @record
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * A strategy for positioning overlays. Using this strategy, an overlay is given an
 * implicit position relative some origin element. The relative position is defined in terms of
 * a point on the origin element that is connected to a point on the overlay element. For example,
 * a basic dropdown is connecting the bottom-left corner of the origin to the top-left corner
 * of the overlay.
 */
var ConnectedPositionStrategy = /** @class */ (function () {
    function ConnectedPositionStrategy(originPos, overlayPos, _connectedTo, _viewportRuler, _document) {
        this._connectedTo = _connectedTo;
        this._viewportRuler = _viewportRuler;
        this._document = _document;
        /**
         * Layout direction of the position strategy.
         */
        this._dir = 'ltr';
        /**
         * The offset in pixels for the overlay connection point on the x-axis
         */
        this._offsetX = 0;
        /**
         * The offset in pixels for the overlay connection point on the y-axis
         */
        this._offsetY = 0;
        /**
         * The Scrollable containers used to check scrollable view properties on position change.
         */
        this.scrollables = [];
        /**
         * Subscription to viewport resize events.
         */
        this._resizeSubscription = __WEBPACK_IMPORTED_MODULE_8_rxjs_Subscription__["a" /* Subscription */].EMPTY;
        /**
         * Ordered list of preferred positions, from most to least desirable.
         */
        this._preferredPositions = [];
        /**
         * Whether the position strategy is applied currently.
         */
        this._applied = false;
        /**
         * Whether the overlay position is locked.
         */
        this._positionLocked = false;
        this._onPositionChange = new __WEBPACK_IMPORTED_MODULE_7_rxjs_Subject__["a" /* Subject */]();
        this._origin = this._connectedTo.nativeElement;
        this.withFallbackPosition(originPos, overlayPos);
    }
    Object.defineProperty(ConnectedPositionStrategy.prototype, "_isRtl", {
        /** Whether the we're dealing with an RTL context */
        get: /**
         * Whether the we're dealing with an RTL context
         * @return {?}
         */
        function () {
            return this._dir === 'rtl';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConnectedPositionStrategy.prototype, "onPositionChange", {
        /** Emits an event when the connection point changes. */
        get: /**
         * Emits an event when the connection point changes.
         * @return {?}
         */
        function () {
            return this._onPositionChange.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConnectedPositionStrategy.prototype, "positions", {
        /** Ordered list of preferred positions, from most to least desirable. */
        get: /**
         * Ordered list of preferred positions, from most to least desirable.
         * @return {?}
         */
        function () {
            return this._preferredPositions;
        },
        enumerable: true,
        configurable: true
    });
    /** Attach this position strategy to an overlay. */
    /**
     * Attach this position strategy to an overlay.
     * @param {?} overlayRef
     * @return {?}
     */
    ConnectedPositionStrategy.prototype.attach = /**
     * Attach this position strategy to an overlay.
     * @param {?} overlayRef
     * @return {?}
     */
    function (overlayRef) {
        var _this = this;
        this._pane = overlayRef.overlayElement;
        this._resizeSubscription.unsubscribe();
        this._resizeSubscription = this._viewportRuler.change().subscribe(function () { return _this.apply(); });
    };
    /** Disposes all resources used by the position strategy. */
    /**
     * Disposes all resources used by the position strategy.
     * @return {?}
     */
    ConnectedPositionStrategy.prototype.dispose = /**
     * Disposes all resources used by the position strategy.
     * @return {?}
     */
    function () {
        this._applied = false;
        this._resizeSubscription.unsubscribe();
        this._onPositionChange.complete();
    };
    /** @docs-private */
    /**
     * \@docs-private
     * @return {?}
     */
    ConnectedPositionStrategy.prototype.detach = /**
     * \@docs-private
     * @return {?}
     */
    function () {
        this._applied = false;
        this._resizeSubscription.unsubscribe();
    };
    /**
     * Updates the position of the overlay element, using whichever preferred position relative
     * to the origin fits on-screen.
     * @docs-private
     */
    /**
     * Updates the position of the overlay element, using whichever preferred position relative
     * to the origin fits on-screen.
     * \@docs-private
     * @return {?}
     */
    ConnectedPositionStrategy.prototype.apply = /**
     * Updates the position of the overlay element, using whichever preferred position relative
     * to the origin fits on-screen.
     * \@docs-private
     * @return {?}
     */
    function () {
        // If the position has been applied already (e.g. when the overlay was opened) and the
        // consumer opted into locking in the position, re-use the  old position, in order to
        // prevent the overlay from jumping around.
        if (this._applied && this._positionLocked && this._lastConnectedPosition) {
            this.recalculateLastPosition();
            return;
        }
        this._applied = true;
        // We need the bounding rects for the origin and the overlay to determine how to position
        // the overlay relative to the origin.
        var /** @type {?} */ element = this._pane;
        var /** @type {?} */ originRect = this._origin.getBoundingClientRect();
        var /** @type {?} */ overlayRect = element.getBoundingClientRect();
        // We use the viewport size to determine whether a position would go off-screen.
        var /** @type {?} */ viewportSize = this._viewportRuler.getViewportSize();
        // Fallback point if none of the fallbacks fit into the viewport.
        var /** @type {?} */ fallbackPoint;
        var /** @type {?} */ fallbackPosition;
        // We want to place the overlay in the first of the preferred positions such that the
        // overlay fits on-screen.
        for (var _i = 0, _a = this._preferredPositions; _i < _a.length; _i++) {
            var pos = _a[_i];
            // Get the (x, y) point of connection on the origin, and then use that to get the
            // (top, left) coordinate for the overlay at `pos`.
            var /** @type {?} */ originPoint = this._getOriginConnectionPoint(originRect, pos);
            var /** @type {?} */ overlayPoint = this._getOverlayPoint(originPoint, overlayRect, viewportSize, pos);
            // If the overlay in the calculated position fits on-screen, put it there and we're done.
            if (overlayPoint.fitsInViewport) {
                this._setElementPosition(element, overlayRect, overlayPoint, pos);
                // Save the last connected position in case the position needs to be re-calculated.
                this._lastConnectedPosition = pos;
                return;
            }
            else if (!fallbackPoint || fallbackPoint.visibleArea < overlayPoint.visibleArea) {
                fallbackPoint = overlayPoint;
                fallbackPosition = pos;
            }
        }
        // If none of the preferred positions were in the viewport, take the one
        // with the largest visible area.
        this._setElementPosition(element, overlayRect, /** @type {?} */ ((fallbackPoint)), /** @type {?} */ ((fallbackPosition)));
    };
    /**
     * Re-positions the overlay element with the trigger in its last calculated position,
     * even if a position higher in the "preferred positions" list would now fit. This
     * allows one to re-align the panel without changing the orientation of the panel.
     */
    /**
     * Re-positions the overlay element with the trigger in its last calculated position,
     * even if a position higher in the "preferred positions" list would now fit. This
     * allows one to re-align the panel without changing the orientation of the panel.
     * @return {?}
     */
    ConnectedPositionStrategy.prototype.recalculateLastPosition = /**
     * Re-positions the overlay element with the trigger in its last calculated position,
     * even if a position higher in the "preferred positions" list would now fit. This
     * allows one to re-align the panel without changing the orientation of the panel.
     * @return {?}
     */
    function () {
        // If the overlay has never been positioned before, do nothing.
        if (!this._lastConnectedPosition) {
            return;
        }
        var /** @type {?} */ originRect = this._origin.getBoundingClientRect();
        var /** @type {?} */ overlayRect = this._pane.getBoundingClientRect();
        var /** @type {?} */ viewportSize = this._viewportRuler.getViewportSize();
        var /** @type {?} */ lastPosition = this._lastConnectedPosition || this._preferredPositions[0];
        var /** @type {?} */ originPoint = this._getOriginConnectionPoint(originRect, lastPosition);
        var /** @type {?} */ overlayPoint = this._getOverlayPoint(originPoint, overlayRect, viewportSize, lastPosition);
        this._setElementPosition(this._pane, overlayRect, overlayPoint, lastPosition);
    };
    /**
     * Sets the list of Scrollable containers that host the origin element so that
     * on reposition we can evaluate if it or the overlay has been clipped or outside view. Every
     * Scrollable must be an ancestor element of the strategy's origin element.
     */
    /**
     * Sets the list of Scrollable containers that host the origin element so that
     * on reposition we can evaluate if it or the overlay has been clipped or outside view. Every
     * Scrollable must be an ancestor element of the strategy's origin element.
     * @param {?} scrollables
     * @return {?}
     */
    ConnectedPositionStrategy.prototype.withScrollableContainers = /**
     * Sets the list of Scrollable containers that host the origin element so that
     * on reposition we can evaluate if it or the overlay has been clipped or outside view. Every
     * Scrollable must be an ancestor element of the strategy's origin element.
     * @param {?} scrollables
     * @return {?}
     */
    function (scrollables) {
        this.scrollables = scrollables;
    };
    /**
     * Adds a new preferred fallback position.
     * @param originPos
     * @param overlayPos
     */
    /**
     * Adds a new preferred fallback position.
     * @param {?} originPos
     * @param {?} overlayPos
     * @param {?=} offsetX
     * @param {?=} offsetY
     * @return {?}
     */
    ConnectedPositionStrategy.prototype.withFallbackPosition = /**
     * Adds a new preferred fallback position.
     * @param {?} originPos
     * @param {?} overlayPos
     * @param {?=} offsetX
     * @param {?=} offsetY
     * @return {?}
     */
    function (originPos, overlayPos, offsetX, offsetY) {
        var /** @type {?} */ position = new ConnectionPositionPair(originPos, overlayPos, offsetX, offsetY);
        this._preferredPositions.push(position);
        return this;
    };
    /**
     * Sets the layout direction so the overlay's position can be adjusted to match.
     * @param dir New layout direction.
     */
    /**
     * Sets the layout direction so the overlay's position can be adjusted to match.
     * @param {?} dir New layout direction.
     * @return {?}
     */
    ConnectedPositionStrategy.prototype.withDirection = /**
     * Sets the layout direction so the overlay's position can be adjusted to match.
     * @param {?} dir New layout direction.
     * @return {?}
     */
    function (dir) {
        this._dir = dir;
        return this;
    };
    /**
     * Sets an offset for the overlay's connection point on the x-axis
     * @param offset New offset in the X axis.
     */
    /**
     * Sets an offset for the overlay's connection point on the x-axis
     * @param {?} offset New offset in the X axis.
     * @return {?}
     */
    ConnectedPositionStrategy.prototype.withOffsetX = /**
     * Sets an offset for the overlay's connection point on the x-axis
     * @param {?} offset New offset in the X axis.
     * @return {?}
     */
    function (offset) {
        this._offsetX = offset;
        return this;
    };
    /**
     * Sets an offset for the overlay's connection point on the y-axis
     * @param  offset New offset in the Y axis.
     */
    /**
     * Sets an offset for the overlay's connection point on the y-axis
     * @param {?} offset New offset in the Y axis.
     * @return {?}
     */
    ConnectedPositionStrategy.prototype.withOffsetY = /**
     * Sets an offset for the overlay's connection point on the y-axis
     * @param {?} offset New offset in the Y axis.
     * @return {?}
     */
    function (offset) {
        this._offsetY = offset;
        return this;
    };
    /**
     * Sets whether the overlay's position should be locked in after it is positioned
     * initially. When an overlay is locked in, it won't attempt to reposition itself
     * when the position is re-applied (e.g. when the user scrolls away).
     * @param isLocked Whether the overlay should locked in.
     */
    /**
     * Sets whether the overlay's position should be locked in after it is positioned
     * initially. When an overlay is locked in, it won't attempt to reposition itself
     * when the position is re-applied (e.g. when the user scrolls away).
     * @param {?} isLocked Whether the overlay should locked in.
     * @return {?}
     */
    ConnectedPositionStrategy.prototype.withLockedPosition = /**
     * Sets whether the overlay's position should be locked in after it is positioned
     * initially. When an overlay is locked in, it won't attempt to reposition itself
     * when the position is re-applied (e.g. when the user scrolls away).
     * @param {?} isLocked Whether the overlay should locked in.
     * @return {?}
     */
    function (isLocked) {
        this._positionLocked = isLocked;
        return this;
    };
    /**
     * Overwrites the current set of positions with an array of new ones.
     * @param positions Position pairs to be set on the strategy.
     */
    /**
     * Overwrites the current set of positions with an array of new ones.
     * @param {?} positions Position pairs to be set on the strategy.
     * @return {?}
     */
    ConnectedPositionStrategy.prototype.withPositions = /**
     * Overwrites the current set of positions with an array of new ones.
     * @param {?} positions Position pairs to be set on the strategy.
     * @return {?}
     */
    function (positions) {
        this._preferredPositions = positions.slice();
        return this;
    };
    /**
     * Sets the origin element, relative to which to position the overlay.
     * @param origin Reference to the new origin element.
     */
    /**
     * Sets the origin element, relative to which to position the overlay.
     * @param {?} origin Reference to the new origin element.
     * @return {?}
     */
    ConnectedPositionStrategy.prototype.setOrigin = /**
     * Sets the origin element, relative to which to position the overlay.
     * @param {?} origin Reference to the new origin element.
     * @return {?}
     */
    function (origin) {
        this._origin = origin.nativeElement;
        return this;
    };
    /**
     * Gets the horizontal (x) "start" dimension based on whether the overlay is in an RTL context.
     * @param {?} rect
     * @return {?}
     */
    ConnectedPositionStrategy.prototype._getStartX = /**
     * Gets the horizontal (x) "start" dimension based on whether the overlay is in an RTL context.
     * @param {?} rect
     * @return {?}
     */
    function (rect) {
        return this._isRtl ? rect.right : rect.left;
    };
    /**
     * Gets the horizontal (x) "end" dimension based on whether the overlay is in an RTL context.
     * @param {?} rect
     * @return {?}
     */
    ConnectedPositionStrategy.prototype._getEndX = /**
     * Gets the horizontal (x) "end" dimension based on whether the overlay is in an RTL context.
     * @param {?} rect
     * @return {?}
     */
    function (rect) {
        return this._isRtl ? rect.left : rect.right;
    };
    /**
     * Gets the (x, y) coordinate of a connection point on the origin based on a relative position.
     * @param {?} originRect
     * @param {?} pos
     * @return {?}
     */
    ConnectedPositionStrategy.prototype._getOriginConnectionPoint = /**
     * Gets the (x, y) coordinate of a connection point on the origin based on a relative position.
     * @param {?} originRect
     * @param {?} pos
     * @return {?}
     */
    function (originRect, pos) {
        var /** @type {?} */ originStartX = this._getStartX(originRect);
        var /** @type {?} */ originEndX = this._getEndX(originRect);
        var /** @type {?} */ x;
        if (pos.originX == 'center') {
            x = originStartX + (originRect.width / 2);
        }
        else {
            x = pos.originX == 'start' ? originStartX : originEndX;
        }
        var /** @type {?} */ y;
        if (pos.originY == 'center') {
            y = originRect.top + (originRect.height / 2);
        }
        else {
            y = pos.originY == 'top' ? originRect.top : originRect.bottom;
        }
        return { x: x, y: y };
    };
    /**
     * Gets the (x, y) coordinate of the top-left corner of the overlay given a given position and
     * origin point to which the overlay should be connected, as well as how much of the element
     * would be inside the viewport at that position.
     * @param {?} originPoint
     * @param {?} overlayRect
     * @param {?} viewportSize
     * @param {?} pos
     * @return {?}
     */
    ConnectedPositionStrategy.prototype._getOverlayPoint = /**
     * Gets the (x, y) coordinate of the top-left corner of the overlay given a given position and
     * origin point to which the overlay should be connected, as well as how much of the element
     * would be inside the viewport at that position.
     * @param {?} originPoint
     * @param {?} overlayRect
     * @param {?} viewportSize
     * @param {?} pos
     * @return {?}
     */
    function (originPoint, overlayRect, viewportSize, pos) {
        // Calculate the (overlayStartX, overlayStartY), the start of the potential overlay position
        // relative to the origin point.
        var /** @type {?} */ overlayStartX;
        if (pos.overlayX == 'center') {
            overlayStartX = -overlayRect.width / 2;
        }
        else if (pos.overlayX === 'start') {
            overlayStartX = this._isRtl ? -overlayRect.width : 0;
        }
        else {
            overlayStartX = this._isRtl ? 0 : -overlayRect.width;
        }
        var /** @type {?} */ overlayStartY;
        if (pos.overlayY == 'center') {
            overlayStartY = -overlayRect.height / 2;
        }
        else {
            overlayStartY = pos.overlayY == 'top' ? 0 : -overlayRect.height;
        }
        // The (x, y) offsets of the overlay based on the current position.
        var /** @type {?} */ offsetX = typeof pos.offsetX === 'undefined' ? this._offsetX : pos.offsetX;
        var /** @type {?} */ offsetY = typeof pos.offsetY === 'undefined' ? this._offsetY : pos.offsetY;
        // The (x, y) coordinates of the overlay.
        var /** @type {?} */ x = originPoint.x + overlayStartX + offsetX;
        var /** @type {?} */ y = originPoint.y + overlayStartY + offsetY;
        // How much the overlay would overflow at this position, on each side.
        var /** @type {?} */ leftOverflow = 0 - x;
        var /** @type {?} */ rightOverflow = (x + overlayRect.width) - viewportSize.width;
        var /** @type {?} */ topOverflow = 0 - y;
        var /** @type {?} */ bottomOverflow = (y + overlayRect.height) - viewportSize.height;
        // Visible parts of the element on each axis.
        var /** @type {?} */ visibleWidth = this._subtractOverflows(overlayRect.width, leftOverflow, rightOverflow);
        var /** @type {?} */ visibleHeight = this._subtractOverflows(overlayRect.height, topOverflow, bottomOverflow);
        // The area of the element that's within the viewport.
        var /** @type {?} */ visibleArea = visibleWidth * visibleHeight;
        var /** @type {?} */ fitsInViewport = (overlayRect.width * overlayRect.height) === visibleArea;
        return { x: x, y: y, fitsInViewport: fitsInViewport, visibleArea: visibleArea };
    };
    /**
     * Gets the view properties of the trigger and overlay, including whether they are clipped
     * or completely outside the view of any of the strategy's scrollables.
     * @param {?} overlay
     * @return {?}
     */
    ConnectedPositionStrategy.prototype._getScrollVisibility = /**
     * Gets the view properties of the trigger and overlay, including whether they are clipped
     * or completely outside the view of any of the strategy's scrollables.
     * @param {?} overlay
     * @return {?}
     */
    function (overlay) {
        var /** @type {?} */ originBounds = this._origin.getBoundingClientRect();
        var /** @type {?} */ overlayBounds = overlay.getBoundingClientRect();
        var /** @type {?} */ scrollContainerBounds = this.scrollables.map(function (s) { return s.getElementRef().nativeElement.getBoundingClientRect(); });
        return {
            isOriginClipped: isElementClippedByScrolling(originBounds, scrollContainerBounds),
            isOriginOutsideView: isElementScrolledOutsideView(originBounds, scrollContainerBounds),
            isOverlayClipped: isElementClippedByScrolling(overlayBounds, scrollContainerBounds),
            isOverlayOutsideView: isElementScrolledOutsideView(overlayBounds, scrollContainerBounds),
        };
    };
    /**
     * Physically positions the overlay element to the given coordinate.
     * @param {?} element
     * @param {?} overlayRect
     * @param {?} overlayPoint
     * @param {?} pos
     * @return {?}
     */
    ConnectedPositionStrategy.prototype._setElementPosition = /**
     * Physically positions the overlay element to the given coordinate.
     * @param {?} element
     * @param {?} overlayRect
     * @param {?} overlayPoint
     * @param {?} pos
     * @return {?}
     */
    function (element, overlayRect, overlayPoint, pos) {
        // We want to set either `top` or `bottom` based on whether the overlay wants to appear above
        // or below the origin and the direction in which the element will expand.
        var /** @type {?} */ verticalStyleProperty = pos.overlayY === 'bottom' ? 'bottom' : 'top';
        // When using `bottom`, we adjust the y position such that it is the distance
        // from the bottom of the viewport rather than the top.
        var /** @type {?} */ y = verticalStyleProperty === 'top' ?
            overlayPoint.y :
            this._document.documentElement.clientHeight - (overlayPoint.y + overlayRect.height);
        // We want to set either `left` or `right` based on whether the overlay wants to appear "before"
        // or "after" the origin, which determines the direction in which the element will expand.
        // For the horizontal axis, the meaning of "before" and "after" change based on whether the
        // page is in RTL or LTR.
        var /** @type {?} */ horizontalStyleProperty;
        if (this._dir === 'rtl') {
            horizontalStyleProperty = pos.overlayX === 'end' ? 'left' : 'right';
        }
        else {
            horizontalStyleProperty = pos.overlayX === 'end' ? 'right' : 'left';
        }
        // When we're setting `right`, we adjust the x position such that it is the distance
        // from the right edge of the viewport rather than the left edge.
        var /** @type {?} */ x = horizontalStyleProperty === 'left' ?
            overlayPoint.x :
            this._document.documentElement.clientWidth - (overlayPoint.x + overlayRect.width);
        // Reset any existing styles. This is necessary in case the preferred position has
        // changed since the last `apply`.
        ['top', 'bottom', 'left', 'right'].forEach(function (p) { return element.style[p] = null; });
        element.style[verticalStyleProperty] = y + "px";
        element.style[horizontalStyleProperty] = x + "px";
        // Notify that the position has been changed along with its change properties.
        var /** @type {?} */ scrollableViewProperties = this._getScrollVisibility(element);
        var /** @type {?} */ positionChange = new ConnectedOverlayPositionChange(pos, scrollableViewProperties);
        this._onPositionChange.next(positionChange);
    };
    /**
     * Subtracts the amount that an element is overflowing on an axis from it's length.
     * @param {?} length
     * @param {...?} overflows
     * @return {?}
     */
    ConnectedPositionStrategy.prototype._subtractOverflows = /**
     * Subtracts the amount that an element is overflowing on an axis from it's length.
     * @param {?} length
     * @param {...?} overflows
     * @return {?}
     */
    function (length) {
        var overflows = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            overflows[_i - 1] = arguments[_i];
        }
        return overflows.reduce(function (currentValue, currentOverflow) {
            return currentValue - Math.max(currentOverflow, 0);
        }, length);
    };
    return ConnectedPositionStrategy;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * A strategy for positioning overlays. Using this strategy, an overlay is given an
 * explicit position relative to the browser's viewport. We use flexbox, instead of
 * transforms, in order to avoid issues with subpixel rendering which can cause the
 * element to become blurry.
 */
var GlobalPositionStrategy = /** @class */ (function () {
    function GlobalPositionStrategy(_document) {
        this._document = _document;
        this._cssPosition = 'static';
        this._topOffset = '';
        this._bottomOffset = '';
        this._leftOffset = '';
        this._rightOffset = '';
        this._alignItems = '';
        this._justifyContent = '';
        this._width = '';
        this._height = '';
        /**
         * A lazily-created wrapper for the overlay element that is used as a flex container.
         */
        this._wrapper = null;
    }
    /**
     * @param {?} overlayRef
     * @return {?}
     */
    GlobalPositionStrategy.prototype.attach = /**
     * @param {?} overlayRef
     * @return {?}
     */
    function (overlayRef) {
        var /** @type {?} */ config = overlayRef.getConfig();
        this._overlayRef = overlayRef;
        if (this._width && !config.width) {
            overlayRef.updateSize({ width: this._width });
        }
        if (this._height && !config.height) {
            overlayRef.updateSize({ height: this._height });
        }
    };
    /**
     * Sets the top position of the overlay. Clears any previously set vertical position.
     * @param value New top offset.
     */
    /**
     * Sets the top position of the overlay. Clears any previously set vertical position.
     * @param {?=} value New top offset.
     * @return {?}
     */
    GlobalPositionStrategy.prototype.top = /**
     * Sets the top position of the overlay. Clears any previously set vertical position.
     * @param {?=} value New top offset.
     * @return {?}
     */
    function (value) {
        if (value === void 0) { value = ''; }
        this._bottomOffset = '';
        this._topOffset = value;
        this._alignItems = 'flex-start';
        return this;
    };
    /**
     * Sets the left position of the overlay. Clears any previously set horizontal position.
     * @param value New left offset.
     */
    /**
     * Sets the left position of the overlay. Clears any previously set horizontal position.
     * @param {?=} value New left offset.
     * @return {?}
     */
    GlobalPositionStrategy.prototype.left = /**
     * Sets the left position of the overlay. Clears any previously set horizontal position.
     * @param {?=} value New left offset.
     * @return {?}
     */
    function (value) {
        if (value === void 0) { value = ''; }
        this._rightOffset = '';
        this._leftOffset = value;
        this._justifyContent = 'flex-start';
        return this;
    };
    /**
     * Sets the bottom position of the overlay. Clears any previously set vertical position.
     * @param value New bottom offset.
     */
    /**
     * Sets the bottom position of the overlay. Clears any previously set vertical position.
     * @param {?=} value New bottom offset.
     * @return {?}
     */
    GlobalPositionStrategy.prototype.bottom = /**
     * Sets the bottom position of the overlay. Clears any previously set vertical position.
     * @param {?=} value New bottom offset.
     * @return {?}
     */
    function (value) {
        if (value === void 0) { value = ''; }
        this._topOffset = '';
        this._bottomOffset = value;
        this._alignItems = 'flex-end';
        return this;
    };
    /**
     * Sets the right position of the overlay. Clears any previously set horizontal position.
     * @param value New right offset.
     */
    /**
     * Sets the right position of the overlay. Clears any previously set horizontal position.
     * @param {?=} value New right offset.
     * @return {?}
     */
    GlobalPositionStrategy.prototype.right = /**
     * Sets the right position of the overlay. Clears any previously set horizontal position.
     * @param {?=} value New right offset.
     * @return {?}
     */
    function (value) {
        if (value === void 0) { value = ''; }
        this._leftOffset = '';
        this._rightOffset = value;
        this._justifyContent = 'flex-end';
        return this;
    };
    /**
     * Sets the overlay width and clears any previously set width.
     * @param value New width for the overlay
     * @deprecated Pass the `width` through the `OverlayConfig`.
     * @deletion-target 7.0.0
     */
    /**
     * Sets the overlay width and clears any previously set width.
     * @deprecated Pass the `width` through the `OverlayConfig`.
     * \@deletion-target 7.0.0
     * @param {?=} value New width for the overlay
     * @return {?}
     */
    GlobalPositionStrategy.prototype.width = /**
     * Sets the overlay width and clears any previously set width.
     * @deprecated Pass the `width` through the `OverlayConfig`.
     * \@deletion-target 7.0.0
     * @param {?=} value New width for the overlay
     * @return {?}
     */
    function (value) {
        if (value === void 0) { value = ''; }
        if (this._overlayRef) {
            this._overlayRef.updateSize({ width: value });
        }
        else {
            this._width = value;
        }
        return this;
    };
    /**
     * Sets the overlay height and clears any previously set height.
     * @param value New height for the overlay
     * @deprecated Pass the `height` through the `OverlayConfig`.
     * @deletion-target 7.0.0
     */
    /**
     * Sets the overlay height and clears any previously set height.
     * @deprecated Pass the `height` through the `OverlayConfig`.
     * \@deletion-target 7.0.0
     * @param {?=} value New height for the overlay
     * @return {?}
     */
    GlobalPositionStrategy.prototype.height = /**
     * Sets the overlay height and clears any previously set height.
     * @deprecated Pass the `height` through the `OverlayConfig`.
     * \@deletion-target 7.0.0
     * @param {?=} value New height for the overlay
     * @return {?}
     */
    function (value) {
        if (value === void 0) { value = ''; }
        if (this._overlayRef) {
            this._overlayRef.updateSize({ height: value });
        }
        else {
            this._height = value;
        }
        return this;
    };
    /**
     * Centers the overlay horizontally with an optional offset.
     * Clears any previously set horizontal position.
     *
     * @param offset Overlay offset from the horizontal center.
     */
    /**
     * Centers the overlay horizontally with an optional offset.
     * Clears any previously set horizontal position.
     *
     * @param {?=} offset Overlay offset from the horizontal center.
     * @return {?}
     */
    GlobalPositionStrategy.prototype.centerHorizontally = /**
     * Centers the overlay horizontally with an optional offset.
     * Clears any previously set horizontal position.
     *
     * @param {?=} offset Overlay offset from the horizontal center.
     * @return {?}
     */
    function (offset) {
        if (offset === void 0) { offset = ''; }
        this.left(offset);
        this._justifyContent = 'center';
        return this;
    };
    /**
     * Centers the overlay vertically with an optional offset.
     * Clears any previously set vertical position.
     *
     * @param offset Overlay offset from the vertical center.
     */
    /**
     * Centers the overlay vertically with an optional offset.
     * Clears any previously set vertical position.
     *
     * @param {?=} offset Overlay offset from the vertical center.
     * @return {?}
     */
    GlobalPositionStrategy.prototype.centerVertically = /**
     * Centers the overlay vertically with an optional offset.
     * Clears any previously set vertical position.
     *
     * @param {?=} offset Overlay offset from the vertical center.
     * @return {?}
     */
    function (offset) {
        if (offset === void 0) { offset = ''; }
        this.top(offset);
        this._alignItems = 'center';
        return this;
    };
    /**
     * Apply the position to the element.
     * @docs-private
     *
     * @returns Resolved when the styles have been applied.
     */
    /**
     * Apply the position to the element.
     * \@docs-private
     *
     * @return {?} Resolved when the styles have been applied.
     */
    GlobalPositionStrategy.prototype.apply = /**
     * Apply the position to the element.
     * \@docs-private
     *
     * @return {?} Resolved when the styles have been applied.
     */
    function () {
        // Since the overlay ref applies the strategy asynchronously, it could
        // have been disposed before it ends up being applied. If that is the
        // case, we shouldn't do anything.
        if (!this._overlayRef.hasAttached()) {
            return;
        }
        var /** @type {?} */ element = this._overlayRef.overlayElement;
        if (!this._wrapper && element.parentNode) {
            this._wrapper = this._document.createElement('div'); /** @type {?} */
            ((this._wrapper)).classList.add('cdk-global-overlay-wrapper');
            element.parentNode.insertBefore(/** @type {?} */ ((this._wrapper)), element); /** @type {?} */
            ((this._wrapper)).appendChild(element);
        }
        var /** @type {?} */ styles = element.style;
        var /** @type {?} */ parentStyles = (/** @type {?} */ (element.parentNode)).style;
        var /** @type {?} */ config = this._overlayRef.getConfig();
        styles.position = this._cssPosition;
        styles.marginLeft = config.width === '100%' ? '0' : this._leftOffset;
        styles.marginTop = config.height === '100%' ? '0' : this._topOffset;
        styles.marginBottom = this._bottomOffset;
        styles.marginRight = this._rightOffset;
        parentStyles.justifyContent = config.width === '100%' ? 'flex-start' : this._justifyContent;
        parentStyles.alignItems = config.height === '100%' ? 'flex-start' : this._alignItems;
    };
    /** Removes the wrapper element from the DOM. */
    /**
     * Removes the wrapper element from the DOM.
     * @return {?}
     */
    GlobalPositionStrategy.prototype.dispose = /**
     * Removes the wrapper element from the DOM.
     * @return {?}
     */
    function () {
        if (this._wrapper && this._wrapper.parentNode) {
            this._wrapper.parentNode.removeChild(this._wrapper);
            this._wrapper = null;
        }
    };
    return GlobalPositionStrategy;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * Builder for overlay position strategy.
 */
var OverlayPositionBuilder = /** @class */ (function () {
    function OverlayPositionBuilder(_viewportRuler, _document) {
        this._viewportRuler = _viewportRuler;
        this._document = _document;
    }
    /**
     * Creates a global position strategy.
     */
    /**
     * Creates a global position strategy.
     * @return {?}
     */
    OverlayPositionBuilder.prototype.global = /**
     * Creates a global position strategy.
     * @return {?}
     */
    function () {
        return new GlobalPositionStrategy(this._document);
    };
    /**
     * Creates a relative position strategy.
     * @param elementRef
     * @param originPos
     * @param overlayPos
     */
    /**
     * Creates a relative position strategy.
     * @param {?} elementRef
     * @param {?} originPos
     * @param {?} overlayPos
     * @return {?}
     */
    OverlayPositionBuilder.prototype.connectedTo = /**
     * Creates a relative position strategy.
     * @param {?} elementRef
     * @param {?} originPos
     * @param {?} overlayPos
     * @return {?}
     */
    function (elementRef, originPos, overlayPos) {
        return new ConnectedPositionStrategy(originPos, overlayPos, elementRef, this._viewportRuler, this._document);
    };
    OverlayPositionBuilder.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    OverlayPositionBuilder.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_cdk_scrolling__["d" /* ViewportRuler */], },
        { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [__WEBPACK_IMPORTED_MODULE_2__angular_common__["DOCUMENT"],] },] },
    ]; };
    return OverlayPositionBuilder;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * Service for dispatching keyboard events that land on the body to appropriate overlay ref,
 * if any. It maintains a list of attached overlays to determine best suited overlay based
 * on event target and order of overlay opens.
 */
var OverlayKeyboardDispatcher = /** @class */ (function () {
    function OverlayKeyboardDispatcher(_document) {
        this._document = _document;
        /**
         * Currently attached overlays in the order they were attached.
         */
        this._attachedOverlays = [];
    }
    /**
     * @return {?}
     */
    OverlayKeyboardDispatcher.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._unsubscribeFromKeydownEvents();
    };
    /** Add a new overlay to the list of attached overlay refs. */
    /**
     * Add a new overlay to the list of attached overlay refs.
     * @param {?} overlayRef
     * @return {?}
     */
    OverlayKeyboardDispatcher.prototype.add = /**
     * Add a new overlay to the list of attached overlay refs.
     * @param {?} overlayRef
     * @return {?}
     */
    function (overlayRef) {
        // Lazily start dispatcher once first overlay is added
        if (!this._keydownEventSubscription) {
            this._subscribeToKeydownEvents();
        }
        this._attachedOverlays.push(overlayRef);
    };
    /** Remove an overlay from the list of attached overlay refs. */
    /**
     * Remove an overlay from the list of attached overlay refs.
     * @param {?} overlayRef
     * @return {?}
     */
    OverlayKeyboardDispatcher.prototype.remove = /**
     * Remove an overlay from the list of attached overlay refs.
     * @param {?} overlayRef
     * @return {?}
     */
    function (overlayRef) {
        var /** @type {?} */ index = this._attachedOverlays.indexOf(overlayRef);
        if (index > -1) {
            this._attachedOverlays.splice(index, 1);
        }
        // Remove the global listener once there are no more overlays.
        if (this._attachedOverlays.length === 0) {
            this._unsubscribeFromKeydownEvents();
        }
    };
    /**
     * Subscribe to keydown events that land on the body and dispatch those
     * events to the appropriate overlay.
     * @return {?}
     */
    OverlayKeyboardDispatcher.prototype._subscribeToKeydownEvents = /**
     * Subscribe to keydown events that land on the body and dispatch those
     * events to the appropriate overlay.
     * @return {?}
     */
    function () {
        var _this = this;
        var /** @type {?} */ bodyKeydownEvents = Object(__WEBPACK_IMPORTED_MODULE_10_rxjs_observable_fromEvent__["fromEvent"])(this._document.body, 'keydown', true);
        this._keydownEventSubscription = bodyKeydownEvents.pipe(Object(__WEBPACK_IMPORTED_MODULE_9_rxjs_operators_filter__["a" /* filter */])(function () { return !!_this._attachedOverlays.length; })).subscribe(function (event) {
            // Dispatch keydown event to the correct overlay.
            // Dispatch keydown event to the correct overlay.
            _this._selectOverlayFromEvent(event)._keydownEvents.next(event);
        });
    };
    /**
     * Removes the global keydown subscription.
     * @return {?}
     */
    OverlayKeyboardDispatcher.prototype._unsubscribeFromKeydownEvents = /**
     * Removes the global keydown subscription.
     * @return {?}
     */
    function () {
        if (this._keydownEventSubscription) {
            this._keydownEventSubscription.unsubscribe();
            this._keydownEventSubscription = null;
        }
    };
    /**
     * Select the appropriate overlay from a keydown event.
     * @param {?} event
     * @return {?}
     */
    OverlayKeyboardDispatcher.prototype._selectOverlayFromEvent = /**
     * Select the appropriate overlay from a keydown event.
     * @param {?} event
     * @return {?}
     */
    function (event) {
        // Check if any overlays contain the event
        var /** @type {?} */ targetedOverlay = this._attachedOverlays.find(function (overlay) {
            return overlay.overlayElement === event.target ||
                overlay.overlayElement.contains(/** @type {?} */ (event.target));
        });
        // Use the overlay if it exists, otherwise choose the most recently attached one
        return targetedOverlay || this._attachedOverlays[this._attachedOverlays.length - 1];
    };
    OverlayKeyboardDispatcher.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    OverlayKeyboardDispatcher.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [__WEBPACK_IMPORTED_MODULE_2__angular_common__["DOCUMENT"],] },] },
    ]; };
    return OverlayKeyboardDispatcher;
}());
/**
 * \@docs-private
 * @param {?} dispatcher
 * @param {?} _document
 * @return {?}
 */
function OVERLAY_KEYBOARD_DISPATCHER_PROVIDER_FACTORY(dispatcher, _document) {
    return dispatcher || new OverlayKeyboardDispatcher(_document);
}
/**
 * \@docs-private
 */
var OVERLAY_KEYBOARD_DISPATCHER_PROVIDER = {
    // If there is already an OverlayKeyboardDispatcher available, use that.
    // Otherwise, provide a new one.
    provide: OverlayKeyboardDispatcher,
    deps: [
        [new __WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"](), new __WEBPACK_IMPORTED_MODULE_0__angular_core__["SkipSelf"](), OverlayKeyboardDispatcher],
        /** @type {?} */ (
        // Coerce to `InjectionToken` so that the `deps` match the "shape"
        // of the type expected by Angular
        __WEBPACK_IMPORTED_MODULE_2__angular_common__["DOCUMENT"])
    ],
    useFactory: OVERLAY_KEYBOARD_DISPATCHER_PROVIDER_FACTORY
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * Container inside which all overlays will render.
 */
var OverlayContainer = /** @class */ (function () {
    function OverlayContainer(_document) {
        this._document = _document;
    }
    /**
     * @return {?}
     */
    OverlayContainer.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this._containerElement && this._containerElement.parentNode) {
            this._containerElement.parentNode.removeChild(this._containerElement);
        }
    };
    /**
     * This method returns the overlay container element. It will lazily
     * create the element the first time  it is called to facilitate using
     * the container in non-browser environments.
     * @returns the container element
     */
    /**
     * This method returns the overlay container element. It will lazily
     * create the element the first time  it is called to facilitate using
     * the container in non-browser environments.
     * @return {?} the container element
     */
    OverlayContainer.prototype.getContainerElement = /**
     * This method returns the overlay container element. It will lazily
     * create the element the first time  it is called to facilitate using
     * the container in non-browser environments.
     * @return {?} the container element
     */
    function () {
        if (!this._containerElement) {
            this._createContainer();
        }
        return this._containerElement;
    };
    /**
     * Create the overlay container element, which is simply a div
     * with the 'cdk-overlay-container' class on the document body.
     */
    /**
     * Create the overlay container element, which is simply a div
     * with the 'cdk-overlay-container' class on the document body.
     * @return {?}
     */
    OverlayContainer.prototype._createContainer = /**
     * Create the overlay container element, which is simply a div
     * with the 'cdk-overlay-container' class on the document body.
     * @return {?}
     */
    function () {
        var /** @type {?} */ container = this._document.createElement('div');
        container.classList.add('cdk-overlay-container');
        this._document.body.appendChild(container);
        this._containerElement = container;
    };
    OverlayContainer.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    OverlayContainer.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [__WEBPACK_IMPORTED_MODULE_2__angular_common__["DOCUMENT"],] },] },
    ]; };
    return OverlayContainer;
}());
/**
 * \@docs-private
 * @param {?} parentContainer
 * @param {?} _document
 * @return {?}
 */
function OVERLAY_CONTAINER_PROVIDER_FACTORY(parentContainer, _document) {
    return parentContainer || new OverlayContainer(_document);
}
/**
 * \@docs-private
 */
var OVERLAY_CONTAINER_PROVIDER = {
    // If there is already an OverlayContainer available, use that. Otherwise, provide a new one.
    provide: OverlayContainer,
    deps: [
        [new __WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"](), new __WEBPACK_IMPORTED_MODULE_0__angular_core__["SkipSelf"](), OverlayContainer],
        /** @type {?} */ (__WEBPACK_IMPORTED_MODULE_2__angular_common__["DOCUMENT"] // We need to use the InjectionToken somewhere to keep TS happy
        ) // We need to use the InjectionToken somewhere to keep TS happy
    ],
    useFactory: OVERLAY_CONTAINER_PROVIDER_FACTORY
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * Next overlay unique ID.
 */
var nextUniqueId = 0;
/**
 * Service to create Overlays. Overlays are dynamically added pieces of floating UI, meant to be
 * used as a low-level building block for other components. Dialogs, tooltips, menus,
 * selects, etc. can all be built using overlays. The service should primarily be used by authors
 * of re-usable components rather than developers building end-user applications.
 *
 * An overlay *is* a PortalOutlet, so any kind of Portal can be loaded into one.
 */
var Overlay = /** @class */ (function () {
    function Overlay(scrollStrategies, _overlayContainer, _componentFactoryResolver, _positionBuilder, _keyboardDispatcher, _appRef, _injector, _ngZone, _document) {
        this.scrollStrategies = scrollStrategies;
        this._overlayContainer = _overlayContainer;
        this._componentFactoryResolver = _componentFactoryResolver;
        this._positionBuilder = _positionBuilder;
        this._keyboardDispatcher = _keyboardDispatcher;
        this._appRef = _appRef;
        this._injector = _injector;
        this._ngZone = _ngZone;
        this._document = _document;
    }
    /**
     * Creates an overlay.
     * @param config Configuration applied to the overlay.
     * @returns Reference to the created overlay.
     */
    /**
     * Creates an overlay.
     * @param {?=} config Configuration applied to the overlay.
     * @return {?} Reference to the created overlay.
     */
    Overlay.prototype.create = /**
     * Creates an overlay.
     * @param {?=} config Configuration applied to the overlay.
     * @return {?} Reference to the created overlay.
     */
    function (config) {
        var /** @type {?} */ pane = this._createPaneElement();
        var /** @type {?} */ portalOutlet = this._createPortalOutlet(pane);
        return new OverlayRef(portalOutlet, pane, new OverlayConfig(config), this._ngZone, this._keyboardDispatcher, this._document);
    };
    /**
     * Gets a position builder that can be used, via fluent API,
     * to construct and configure a position strategy.
     * @returns An overlay position builder.
     */
    /**
     * Gets a position builder that can be used, via fluent API,
     * to construct and configure a position strategy.
     * @return {?} An overlay position builder.
     */
    Overlay.prototype.position = /**
     * Gets a position builder that can be used, via fluent API,
     * to construct and configure a position strategy.
     * @return {?} An overlay position builder.
     */
    function () {
        return this._positionBuilder;
    };
    /**
     * Creates the DOM element for an overlay and appends it to the overlay container.
     * @return {?} Newly-created pane element
     */
    Overlay.prototype._createPaneElement = /**
     * Creates the DOM element for an overlay and appends it to the overlay container.
     * @return {?} Newly-created pane element
     */
    function () {
        var /** @type {?} */ pane = this._document.createElement('div');
        pane.id = "cdk-overlay-" + nextUniqueId++;
        pane.classList.add('cdk-overlay-pane');
        this._overlayContainer.getContainerElement().appendChild(pane);
        return pane;
    };
    /**
     * Create a DomPortalOutlet into which the overlay content can be loaded.
     * @param {?} pane The DOM element to turn into a portal outlet.
     * @return {?} A portal outlet for the given DOM element.
     */
    Overlay.prototype._createPortalOutlet = /**
     * Create a DomPortalOutlet into which the overlay content can be loaded.
     * @param {?} pane The DOM element to turn into a portal outlet.
     * @return {?} A portal outlet for the given DOM element.
     */
    function (pane) {
        return new __WEBPACK_IMPORTED_MODULE_4__angular_cdk_portal__["b" /* DomPortalOutlet */](pane, this._componentFactoryResolver, this._appRef, this._injector);
    };
    Overlay.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    Overlay.ctorParameters = function () { return [
        { type: ScrollStrategyOptions, },
        { type: OverlayContainer, },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"], },
        { type: OverlayPositionBuilder, },
        { type: OverlayKeyboardDispatcher, },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ApplicationRef"], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"], },
        { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [__WEBPACK_IMPORTED_MODULE_2__angular_common__["DOCUMENT"],] },] },
    ]; };
    return Overlay;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * Default set of positions for the overlay. Follows the behavior of a dropdown.
 */
var defaultPositionList = [
    new ConnectionPositionPair({ originX: 'start', originY: 'bottom' }, { overlayX: 'start', overlayY: 'top' }),
    new ConnectionPositionPair({ originX: 'start', originY: 'top' }, { overlayX: 'start', overlayY: 'bottom' }),
    new ConnectionPositionPair({ originX: 'end', originY: 'top' }, { overlayX: 'end', overlayY: 'bottom' }),
    new ConnectionPositionPair({ originX: 'end', originY: 'bottom' }, { overlayX: 'end', overlayY: 'top' }),
];
/**
 * Injection token that determines the scroll handling while the connected overlay is open.
 */
var CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["InjectionToken"]('cdk-connected-overlay-scroll-strategy');
/**
 * \@docs-private
 * @param {?} overlay
 * @return {?}
 */
function CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER_FACTORY(overlay) {
    return function () { return overlay.scrollStrategies.reposition(); };
}
/**
 * \@docs-private
 */
var CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER = {
    provide: CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY,
    deps: [Overlay],
    useFactory: CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER_FACTORY,
};
/**
 * Directive applied to an element to make it usable as an origin for an Overlay using a
 * ConnectedPositionStrategy.
 */
var CdkOverlayOrigin = /** @class */ (function () {
    function CdkOverlayOrigin(elementRef) {
        this.elementRef = elementRef;
    }
    CdkOverlayOrigin.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                    selector: '[cdk-overlay-origin], [overlay-origin], [cdkOverlayOrigin]',
                    exportAs: 'cdkOverlayOrigin',
                },] },
    ];
    /** @nocollapse */
    CdkOverlayOrigin.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
    ]; };
    return CdkOverlayOrigin;
}());
/**
 * Directive to facilitate declarative creation of an Overlay using a ConnectedPositionStrategy.
 */
var CdkConnectedOverlay = /** @class */ (function () {
    // TODO(jelbourn): inputs for size, scroll behavior, animation, etc.
    function CdkConnectedOverlay(_overlay, templateRef, viewContainerRef, _scrollStrategy, _dir) {
        this._overlay = _overlay;
        this._scrollStrategy = _scrollStrategy;
        this._dir = _dir;
        this._hasBackdrop = false;
        this._lockPosition = false;
        this._backdropSubscription = __WEBPACK_IMPORTED_MODULE_8_rxjs_Subscription__["a" /* Subscription */].EMPTY;
        this._offsetX = 0;
        this._offsetY = 0;
        /**
         * Strategy to be used when handling scroll events while the overlay is open.
         */
        this.scrollStrategy = this._scrollStrategy();
        /**
         * Whether the overlay is open.
         */
        this.open = false;
        /**
         * Event emitted when the backdrop is clicked.
         */
        this.backdropClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * Event emitted when the position has changed.
         */
        this.positionChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * Event emitted when the overlay has been attached.
         */
        this.attach = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * Event emitted when the overlay has been detached.
         */
        this.detach = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this._templatePortal = new __WEBPACK_IMPORTED_MODULE_4__angular_cdk_portal__["d" /* TemplatePortal */](templateRef, viewContainerRef);
    }
    Object.defineProperty(CdkConnectedOverlay.prototype, "offsetX", {
        get: /**
         * The offset in pixels for the overlay connection point on the x-axis
         * @return {?}
         */
        function () { return this._offsetX; },
        set: /**
         * @param {?} offsetX
         * @return {?}
         */
        function (offsetX) {
            this._offsetX = offsetX;
            if (this._position) {
                this._position.withOffsetX(offsetX);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkConnectedOverlay.prototype, "offsetY", {
        get: /**
         * The offset in pixels for the overlay connection point on the y-axis
         * @return {?}
         */
        function () { return this._offsetY; },
        set: /**
         * @param {?} offsetY
         * @return {?}
         */
        function (offsetY) {
            this._offsetY = offsetY;
            if (this._position) {
                this._position.withOffsetY(offsetY);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkConnectedOverlay.prototype, "hasBackdrop", {
        get: /**
         * Whether or not the overlay should attach a backdrop.
         * @return {?}
         */
        function () { return this._hasBackdrop; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) { this._hasBackdrop = Object(__WEBPACK_IMPORTED_MODULE_11__angular_cdk_coercion__["a" /* coerceBooleanProperty */])(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkConnectedOverlay.prototype, "lockPosition", {
        get: /**
         * Whether or not the overlay should be locked when scrolling.
         * @return {?}
         */
        function () { return this._lockPosition; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) { this._lockPosition = Object(__WEBPACK_IMPORTED_MODULE_11__angular_cdk_coercion__["a" /* coerceBooleanProperty */])(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkConnectedOverlay.prototype, "_deprecatedOrigin", {
        get: /**
         * @deprecated
         * \@deletion-target 6.0.0
         * @return {?}
         */
        function () { return this.origin; },
        set: /**
         * @param {?} _origin
         * @return {?}
         */
        function (_origin) { this.origin = _origin; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkConnectedOverlay.prototype, "_deprecatedPositions", {
        get: /**
         * @deprecated
         * \@deletion-target 6.0.0
         * @return {?}
         */
        function () { return this.positions; },
        set: /**
         * @param {?} _positions
         * @return {?}
         */
        function (_positions) { this.positions = _positions; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkConnectedOverlay.prototype, "_deprecatedOffsetX", {
        get: /**
         * @deprecated
         * \@deletion-target 6.0.0
         * @return {?}
         */
        function () { return this.offsetX; },
        set: /**
         * @param {?} _offsetX
         * @return {?}
         */
        function (_offsetX) { this.offsetX = _offsetX; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkConnectedOverlay.prototype, "_deprecatedOffsetY", {
        get: /**
         * @deprecated
         * \@deletion-target 6.0.0
         * @return {?}
         */
        function () { return this.offsetY; },
        set: /**
         * @param {?} _offsetY
         * @return {?}
         */
        function (_offsetY) { this.offsetY = _offsetY; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkConnectedOverlay.prototype, "_deprecatedWidth", {
        get: /**
         * @deprecated
         * \@deletion-target 6.0.0
         * @return {?}
         */
        function () { return this.width; },
        set: /**
         * @param {?} _width
         * @return {?}
         */
        function (_width) { this.width = _width; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkConnectedOverlay.prototype, "_deprecatedHeight", {
        get: /**
         * @deprecated
         * \@deletion-target 6.0.0
         * @return {?}
         */
        function () { return this.height; },
        set: /**
         * @param {?} _height
         * @return {?}
         */
        function (_height) { this.height = _height; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkConnectedOverlay.prototype, "_deprecatedMinWidth", {
        get: /**
         * @deprecated
         * \@deletion-target 6.0.0
         * @return {?}
         */
        function () { return this.minWidth; },
        set: /**
         * @param {?} _minWidth
         * @return {?}
         */
        function (_minWidth) { this.minWidth = _minWidth; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkConnectedOverlay.prototype, "_deprecatedMinHeight", {
        get: /**
         * @deprecated
         * \@deletion-target 6.0.0
         * @return {?}
         */
        function () { return this.minHeight; },
        set: /**
         * @param {?} _minHeight
         * @return {?}
         */
        function (_minHeight) { this.minHeight = _minHeight; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkConnectedOverlay.prototype, "_deprecatedBackdropClass", {
        get: /**
         * @deprecated
         * \@deletion-target 6.0.0
         * @return {?}
         */
        function () { return this.backdropClass; },
        set: /**
         * @param {?} _backdropClass
         * @return {?}
         */
        function (_backdropClass) { this.backdropClass = _backdropClass; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkConnectedOverlay.prototype, "_deprecatedScrollStrategy", {
        get: /**
         * @deprecated
         * \@deletion-target 6.0.0
         * @return {?}
         */
        function () { return this.scrollStrategy; },
        set: /**
         * @param {?} _scrollStrategy
         * @return {?}
         */
        function (_scrollStrategy) {
            this.scrollStrategy = _scrollStrategy;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkConnectedOverlay.prototype, "_deprecatedOpen", {
        get: /**
         * @deprecated
         * \@deletion-target 6.0.0
         * @return {?}
         */
        function () { return this.open; },
        set: /**
         * @param {?} _open
         * @return {?}
         */
        function (_open) { this.open = _open; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkConnectedOverlay.prototype, "_deprecatedHasBackdrop", {
        get: /**
         * @deprecated
         * \@deletion-target 6.0.0
         * @return {?}
         */
        function () { return this.hasBackdrop; },
        set: /**
         * @param {?} _hasBackdrop
         * @return {?}
         */
        function (_hasBackdrop) { this.hasBackdrop = _hasBackdrop; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkConnectedOverlay.prototype, "overlayRef", {
        /** The associated overlay reference. */
        get: /**
         * The associated overlay reference.
         * @return {?}
         */
        function () {
            return this._overlayRef;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkConnectedOverlay.prototype, "dir", {
        /** The element's layout direction. */
        get: /**
         * The element's layout direction.
         * @return {?}
         */
        function () {
            return this._dir ? this._dir.value : 'ltr';
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CdkConnectedOverlay.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._destroyOverlay();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    CdkConnectedOverlay.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (this._position) {
            if (changes['positions'] || changes['_deprecatedPositions']) {
                this._position.withPositions(this.positions);
            }
            if (changes['lockPosition']) {
                this._position.withLockedPosition(this.lockPosition);
            }
            if (changes['origin'] || changes['_deprecatedOrigin']) {
                this._position.setOrigin(this.origin.elementRef);
                if (this.open) {
                    this._position.apply();
                }
            }
        }
        if (changes['open'] || changes['_deprecatedOpen']) {
            this.open ? this._attachOverlay() : this._detachOverlay();
        }
    };
    /**
     * Creates an overlay
     * @return {?}
     */
    CdkConnectedOverlay.prototype._createOverlay = /**
     * Creates an overlay
     * @return {?}
     */
    function () {
        if (!this.positions || !this.positions.length) {
            this.positions = defaultPositionList;
        }
        this._overlayRef = this._overlay.create(this._buildConfig());
    };
    /**
     * Builds the overlay config based on the directive's inputs
     * @return {?}
     */
    CdkConnectedOverlay.prototype._buildConfig = /**
     * Builds the overlay config based on the directive's inputs
     * @return {?}
     */
    function () {
        var /** @type {?} */ positionStrategy = this._position = this._createPositionStrategy();
        var /** @type {?} */ overlayConfig = new OverlayConfig({
            positionStrategy: positionStrategy,
            scrollStrategy: this.scrollStrategy,
            hasBackdrop: this.hasBackdrop
        });
        if (this.width || this.width === 0) {
            overlayConfig.width = this.width;
        }
        if (this.height || this.height === 0) {
            overlayConfig.height = this.height;
        }
        if (this.minWidth || this.minWidth === 0) {
            overlayConfig.minWidth = this.minWidth;
        }
        if (this.minHeight || this.minHeight === 0) {
            overlayConfig.minHeight = this.minHeight;
        }
        if (this.backdropClass) {
            overlayConfig.backdropClass = this.backdropClass;
        }
        return overlayConfig;
    };
    /**
     * Returns the position strategy of the overlay to be set on the overlay config
     * @return {?}
     */
    CdkConnectedOverlay.prototype._createPositionStrategy = /**
     * Returns the position strategy of the overlay to be set on the overlay config
     * @return {?}
     */
    function () {
        var _this = this;
        var /** @type {?} */ primaryPosition = this.positions[0];
        var /** @type {?} */ originPoint = { originX: primaryPosition.originX, originY: primaryPosition.originY };
        var /** @type {?} */ overlayPoint = { overlayX: primaryPosition.overlayX, overlayY: primaryPosition.overlayY };
        var /** @type {?} */ strategy = this._overlay.position()
            .connectedTo(this.origin.elementRef, originPoint, overlayPoint)
            .withOffsetX(this.offsetX)
            .withOffsetY(this.offsetY)
            .withLockedPosition(this.lockPosition);
        for (var /** @type {?} */ i = 1; i < this.positions.length; i++) {
            strategy.withFallbackPosition({ originX: this.positions[i].originX, originY: this.positions[i].originY }, { overlayX: this.positions[i].overlayX, overlayY: this.positions[i].overlayY });
        }
        strategy.onPositionChange.subscribe(function (pos) { return _this.positionChange.emit(pos); });
        return strategy;
    };
    /**
     * Attaches the overlay and subscribes to backdrop clicks if backdrop exists
     * @return {?}
     */
    CdkConnectedOverlay.prototype._attachOverlay = /**
     * Attaches the overlay and subscribes to backdrop clicks if backdrop exists
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this._overlayRef) {
            this._createOverlay(); /** @type {?} */
            ((this._overlayRef)).keydownEvents().subscribe(function (event) {
                if (event.keyCode === __WEBPACK_IMPORTED_MODULE_12__angular_cdk_keycodes__["c" /* ESCAPE */]) {
                    _this._detachOverlay();
                }
            });
        }
        else {
            // Update the overlay size, in case the directive's inputs have changed
            this._overlayRef.updateSize({
                width: this.width,
                minWidth: this.minWidth,
                height: this.height,
                minHeight: this.minHeight,
            });
        }
        this._position.withDirection(this.dir);
        this._overlayRef.setDirection(this.dir);
        if (!this._overlayRef.hasAttached()) {
            this._overlayRef.attach(this._templatePortal);
            this.attach.emit();
        }
        if (this.hasBackdrop) {
            this._backdropSubscription = this._overlayRef.backdropClick().subscribe(function (event) {
                _this.backdropClick.emit(event);
            });
        }
    };
    /**
     * Detaches the overlay and unsubscribes to backdrop clicks if backdrop exists
     * @return {?}
     */
    CdkConnectedOverlay.prototype._detachOverlay = /**
     * Detaches the overlay and unsubscribes to backdrop clicks if backdrop exists
     * @return {?}
     */
    function () {
        if (this._overlayRef) {
            this._overlayRef.detach();
            this.detach.emit();
        }
        this._backdropSubscription.unsubscribe();
    };
    /**
     * Destroys the overlay created by this directive.
     * @return {?}
     */
    CdkConnectedOverlay.prototype._destroyOverlay = /**
     * Destroys the overlay created by this directive.
     * @return {?}
     */
    function () {
        if (this._overlayRef) {
            this._overlayRef.dispose();
        }
        this._backdropSubscription.unsubscribe();
    };
    CdkConnectedOverlay.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                    selector: '[cdk-connected-overlay], [connected-overlay], [cdkConnectedOverlay]',
                    exportAs: 'cdkConnectedOverlay'
                },] },
    ];
    /** @nocollapse */
    CdkConnectedOverlay.ctorParameters = function () { return [
        { type: Overlay, },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"], },
        { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY,] },] },
        { type: __WEBPACK_IMPORTED_MODULE_3__angular_cdk_bidi__["b" /* Directionality */], decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"] },] },
    ]; };
    CdkConnectedOverlay.propDecorators = {
        "origin": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['cdkConnectedOverlayOrigin',] },],
        "positions": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['cdkConnectedOverlayPositions',] },],
        "offsetX": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['cdkConnectedOverlayOffsetX',] },],
        "offsetY": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['cdkConnectedOverlayOffsetY',] },],
        "width": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['cdkConnectedOverlayWidth',] },],
        "height": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['cdkConnectedOverlayHeight',] },],
        "minWidth": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['cdkConnectedOverlayMinWidth',] },],
        "minHeight": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['cdkConnectedOverlayMinHeight',] },],
        "backdropClass": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['cdkConnectedOverlayBackdropClass',] },],
        "scrollStrategy": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['cdkConnectedOverlayScrollStrategy',] },],
        "open": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['cdkConnectedOverlayOpen',] },],
        "hasBackdrop": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['cdkConnectedOverlayHasBackdrop',] },],
        "lockPosition": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['cdkConnectedOverlayLockPosition',] },],
        "_deprecatedOrigin": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['origin',] },],
        "_deprecatedPositions": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['positions',] },],
        "_deprecatedOffsetX": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['offsetX',] },],
        "_deprecatedOffsetY": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['offsetY',] },],
        "_deprecatedWidth": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['width',] },],
        "_deprecatedHeight": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['height',] },],
        "_deprecatedMinWidth": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['minWidth',] },],
        "_deprecatedMinHeight": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['minHeight',] },],
        "_deprecatedBackdropClass": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['backdropClass',] },],
        "_deprecatedScrollStrategy": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['scrollStrategy',] },],
        "_deprecatedOpen": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['open',] },],
        "_deprecatedHasBackdrop": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['hasBackdrop',] },],
        "backdropClick": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        "positionChange": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        "attach": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        "detach": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    };
    return CdkConnectedOverlay;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

var OVERLAY_PROVIDERS = [
    Overlay,
    OverlayPositionBuilder,
    OVERLAY_KEYBOARD_DISPATCHER_PROVIDER,
    __WEBPACK_IMPORTED_MODULE_1__angular_cdk_scrolling__["c" /* VIEWPORT_RULER_PROVIDER */],
    OVERLAY_CONTAINER_PROVIDER,
    CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER,
];
var OverlayModule = /** @class */ (function () {
    function OverlayModule() {
    }
    OverlayModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                    imports: [__WEBPACK_IMPORTED_MODULE_3__angular_cdk_bidi__["a" /* BidiModule */], __WEBPACK_IMPORTED_MODULE_4__angular_cdk_portal__["c" /* PortalModule */], __WEBPACK_IMPORTED_MODULE_1__angular_cdk_scrolling__["a" /* ScrollDispatchModule */]],
                    exports: [CdkConnectedOverlay, CdkOverlayOrigin, __WEBPACK_IMPORTED_MODULE_1__angular_cdk_scrolling__["a" /* ScrollDispatchModule */]],
                    declarations: [CdkConnectedOverlay, CdkOverlayOrigin],
                    providers: [OVERLAY_PROVIDERS, ScrollStrategyOptions],
                },] },
    ];
    /** @nocollapse */
    OverlayModule.ctorParameters = function () { return []; };
    return OverlayModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * Alternative to OverlayContainer that supports correct displaying of overlay elements in
 * Fullscreen mode
 * https://developer.mozilla.org/en-US/docs/Web/API/Element/requestFullScreen
 *
 * Should be provided in the root component.
 */
var FullscreenOverlayContainer = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_5_tslib__["b" /* __extends */])(FullscreenOverlayContainer, _super);
    function FullscreenOverlayContainer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @return {?}
     */
    FullscreenOverlayContainer.prototype._createContainer = /**
     * @return {?}
     */
    function () {
        var _this = this;
        _super.prototype._createContainer.call(this);
        this._adjustParentForFullscreenChange();
        this._addFullscreenChangeListener(function () { return _this._adjustParentForFullscreenChange(); });
    };
    /**
     * @return {?}
     */
    FullscreenOverlayContainer.prototype._adjustParentForFullscreenChange = /**
     * @return {?}
     */
    function () {
        if (!this._containerElement) {
            return;
        }
        var /** @type {?} */ fullscreenElement = this.getFullscreenElement();
        var /** @type {?} */ parent = fullscreenElement || document.body;
        parent.appendChild(this._containerElement);
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    FullscreenOverlayContainer.prototype._addFullscreenChangeListener = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        if (document.fullscreenEnabled) {
            document.addEventListener('fullscreenchange', fn);
        }
        else if (document.webkitFullscreenEnabled) {
            document.addEventListener('webkitfullscreenchange', fn);
        }
        else if ((/** @type {?} */ (document)).mozFullScreenEnabled) {
            document.addEventListener('mozfullscreenchange', fn);
        }
        else if ((/** @type {?} */ (document)).msFullscreenEnabled) {
            document.addEventListener('MSFullscreenChange', fn);
        }
    };
    /**
     * When the page is put into fullscreen mode, a specific element is specified.
     * Only that element and its children are visible when in fullscreen mode.
     */
    /**
     * When the page is put into fullscreen mode, a specific element is specified.
     * Only that element and its children are visible when in fullscreen mode.
     * @return {?}
     */
    FullscreenOverlayContainer.prototype.getFullscreenElement = /**
     * When the page is put into fullscreen mode, a specific element is specified.
     * Only that element and its children are visible when in fullscreen mode.
     * @return {?}
     */
    function () {
        return document.fullscreenElement ||
            document.webkitFullscreenElement ||
            (/** @type {?} */ (document)).mozFullScreenElement ||
            (/** @type {?} */ (document)).msFullscreenElement ||
            null;
    };
    FullscreenOverlayContainer.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    FullscreenOverlayContainer.ctorParameters = function () { return []; };
    return FullscreenOverlayContainer;
}(OverlayContainer));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=overlay.es5.js.map


/***/ }),

/***/ "../../../cdk/esm5/platform.es5.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Platform; });
/* unused harmony export supportsPassiveEventListeners */
/* unused harmony export getSupportedInputTypes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return PlatformModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

// Whether the current platform supports the V8 Break Iterator. The V8 check
// is necessary to detect all Blink based browsers.
var hasV8BreakIterator = (typeof Intl !== 'undefined' && (/** @type {?} */ (Intl)).v8BreakIterator);
/**
 * Service to detect the current platform by comparing the userAgent strings and
 * checking browser-specific global properties.
 */
var Platform = /** @class */ (function () {
    function Platform() {
        /**
         * Whether the Angular application is being rendered in the browser.
         */
        this.isBrowser = typeof document === 'object' && !!document;
        /**
         * Whether the current browser is Microsoft Edge.
         */
        this.EDGE = this.isBrowser && /(edge)/i.test(navigator.userAgent);
        /**
         * Whether the current rendering engine is Microsoft Trident.
         */
        this.TRIDENT = this.isBrowser && /(msie|trident)/i.test(navigator.userAgent);
        /**
         * Whether the current rendering engine is Blink.
         */
        this.BLINK = this.isBrowser && (!!((/** @type {?} */ (window)).chrome || hasV8BreakIterator) &&
            typeof CSS !== 'undefined' && !this.EDGE && !this.TRIDENT);
        /**
         * Whether the current rendering engine is WebKit.
         */
        this.WEBKIT = this.isBrowser &&
            /AppleWebKit/i.test(navigator.userAgent) && !this.BLINK && !this.EDGE && !this.TRIDENT;
        /**
         * Whether the current platform is Apple iOS.
         */
        this.IOS = this.isBrowser && /iPad|iPhone|iPod/.test(navigator.userAgent) &&
            !(/** @type {?} */ (window)).MSStream;
        /**
         * Whether the current browser is Firefox.
         */
        this.FIREFOX = this.isBrowser && /(firefox|minefield)/i.test(navigator.userAgent);
        /**
         * Whether the current platform is Android.
         */
        this.ANDROID = this.isBrowser && /android/i.test(navigator.userAgent) && !this.TRIDENT;
        /**
         * Whether the current browser is Safari.
         */
        this.SAFARI = this.isBrowser && /safari/i.test(navigator.userAgent) && this.WEBKIT;
    }
    Platform.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    Platform.ctorParameters = function () { return []; };
    return Platform;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * Cached result of whether the user's browser supports passive event listeners.
 */
var supportsPassiveEvents;
/**
 * Checks whether the user's browser supports passive event listeners.
 * See: https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md
 * @return {?}
 */
function supportsPassiveEventListeners() {
    if (supportsPassiveEvents == null && typeof window !== 'undefined') {
        try {
            window.addEventListener('test', /** @type {?} */ ((null)), Object.defineProperty({}, 'passive', {
                get: function () { return supportsPassiveEvents = true; }
            }));
        }
        finally {
            supportsPassiveEvents = supportsPassiveEvents || false;
        }
    }
    return supportsPassiveEvents;
}
/**
 * Cached result Set of input types support by the current browser.
 */
var supportedInputTypes;
/**
 * Types of `<input>` that *might* be supported.
 */
var candidateInputTypes = [
    'color',
    'button',
    'checkbox',
    'date',
    'datetime-local',
    'email',
    'file',
    'hidden',
    'image',
    'month',
    'number',
    'password',
    'radio',
    'range',
    'reset',
    'search',
    'submit',
    'tel',
    'text',
    'time',
    'url',
    'week',
];
/**
 * @return {?} The input types supported by this browser.
 */
function getSupportedInputTypes() {
    // Result is cached.
    if (supportedInputTypes) {
        return supportedInputTypes;
    }
    // We can't check if an input type is not supported until we're on the browser, so say that
    // everything is supported when not on the browser. We don't use `Platform` here since it's
    // just a helper function and can't inject it.
    if (typeof document !== 'object' || !document) {
        supportedInputTypes = new Set(candidateInputTypes);
        return supportedInputTypes;
    }
    var /** @type {?} */ featureTestInput = document.createElement('input');
    supportedInputTypes = new Set(candidateInputTypes.filter(function (value) {
        featureTestInput.setAttribute('type', value);
        return featureTestInput.type === value;
    }));
    return supportedInputTypes;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

var PlatformModule = /** @class */ (function () {
    function PlatformModule() {
    }
    PlatformModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                    providers: [Platform]
                },] },
    ];
    /** @nocollapse */
    PlatformModule.ctorParameters = function () { return []; };
    return PlatformModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=platform.es5.js.map


/***/ }),

/***/ "../../../cdk/esm5/portal.es5.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export DomPortalHost */
/* unused harmony export PortalHostDirective */
/* unused harmony export TemplatePortalDirective */
/* unused harmony export BasePortalHost */
/* unused harmony export Portal */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentPortal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return TemplatePortal; });
/* unused harmony export BasePortalOutlet */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DomPortalOutlet; });
/* unused harmony export CdkPortal */
/* unused harmony export CdkPortalOutlet */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return PortalModule; });
/* unused harmony export PortalInjector */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("../../../../tslib/tslib.es6.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */




/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * Throws an exception when attempting to attach a null portal to a host.
 * \@docs-private
 * @return {?}
 */
function throwNullPortalError() {
    throw Error('Must provide a portal to attach');
}
/**
 * Throws an exception when attempting to attach a portal to a host that is already attached.
 * \@docs-private
 * @return {?}
 */
function throwPortalAlreadyAttachedError() {
    throw Error('Host already has a portal attached');
}
/**
 * Throws an exception when attempting to attach a portal to an already-disposed host.
 * \@docs-private
 * @return {?}
 */
function throwPortalOutletAlreadyDisposedError() {
    throw Error('This PortalOutlet has already been disposed');
}
/**
 * Throws an exception when attempting to attach an unknown portal type.
 * \@docs-private
 * @return {?}
 */
function throwUnknownPortalTypeError() {
    throw Error('Attempting to attach an unknown Portal type. BasePortalOutlet accepts either ' +
        'a ComponentPortal or a TemplatePortal.');
}
/**
 * Throws an exception when attempting to attach a portal to a null host.
 * \@docs-private
 * @return {?}
 */
function throwNullPortalOutletError() {
    throw Error('Attempting to attach a portal to a null PortalOutlet');
}
/**
 * Throws an exception when attempting to detach a portal that is not attached.
 * \@docs-private
 * @return {?}
 */
function throwNoPortalAttachedError() {
    throw Error('Attempting to detach a portal that is not attached to a host');
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * Interface that can be used to generically type a class.
 * @record
 * @template T
 */

/**
 * A `Portal` is something that you want to render somewhere else.
 * It can be attach to / detached from a `PortalOutlet`.
 * @abstract
 * @template T
 */
var Portal = /** @class */ (function () {
    function Portal() {
    }
    /** Attach this portal to a host. */
    /**
     * Attach this portal to a host.
     * @param {?} host
     * @return {?}
     */
    Portal.prototype.attach = /**
     * Attach this portal to a host.
     * @param {?} host
     * @return {?}
     */
    function (host) {
        if (host == null) {
            throwNullPortalOutletError();
        }
        if (host.hasAttached()) {
            throwPortalAlreadyAttachedError();
        }
        this._attachedHost = host;
        return /** @type {?} */ (host.attach(this));
    };
    /** Detach this portal from its host */
    /**
     * Detach this portal from its host
     * @return {?}
     */
    Portal.prototype.detach = /**
     * Detach this portal from its host
     * @return {?}
     */
    function () {
        var /** @type {?} */ host = this._attachedHost;
        if (host == null) {
            throwNoPortalAttachedError();
        }
        else {
            this._attachedHost = null;
            host.detach();
        }
    };
    Object.defineProperty(Portal.prototype, "isAttached", {
        /** Whether this portal is attached to a host. */
        get: /**
         * Whether this portal is attached to a host.
         * @return {?}
         */
        function () {
            return this._attachedHost != null;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Sets the PortalOutlet reference without performing `attach()`. This is used directly by
     * the PortalOutlet when it is performing an `attach()` or `detach()`.
     */
    /**
     * Sets the PortalOutlet reference without performing `attach()`. This is used directly by
     * the PortalOutlet when it is performing an `attach()` or `detach()`.
     * @param {?} host
     * @return {?}
     */
    Portal.prototype.setAttachedHost = /**
     * Sets the PortalOutlet reference without performing `attach()`. This is used directly by
     * the PortalOutlet when it is performing an `attach()` or `detach()`.
     * @param {?} host
     * @return {?}
     */
    function (host) {
        this._attachedHost = host;
    };
    return Portal;
}());
/**
 * A `ComponentPortal` is a portal that instantiates some Component upon attachment.
 * @template T
 */
var ComponentPortal = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */])(ComponentPortal, _super);
    function ComponentPortal(component, viewContainerRef, injector) {
        var _this = _super.call(this) || this;
        _this.component = component;
        _this.viewContainerRef = viewContainerRef;
        _this.injector = injector;
        return _this;
    }
    return ComponentPortal;
}(Portal));
/**
 * A `TemplatePortal` is a portal that represents some embedded template (TemplateRef).
 * @template C
 */
var TemplatePortal = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */])(TemplatePortal, _super);
    function TemplatePortal(template, viewContainerRef, context) {
        var _this = _super.call(this) || this;
        _this.templateRef = template;
        _this.viewContainerRef = viewContainerRef;
        _this.context = context;
        return _this;
    }
    Object.defineProperty(TemplatePortal.prototype, "origin", {
        get: /**
         * @return {?}
         */
        function () {
            return this.templateRef.elementRef;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Attach the the portal to the provided `PortalOutlet`.
     * When a context is provided it will override the `context` property of the `TemplatePortal`
     * instance.
     */
    /**
     * Attach the the portal to the provided `PortalOutlet`.
     * When a context is provided it will override the `context` property of the `TemplatePortal`
     * instance.
     * @param {?} host
     * @param {?=} context
     * @return {?}
     */
    TemplatePortal.prototype.attach = /**
     * Attach the the portal to the provided `PortalOutlet`.
     * When a context is provided it will override the `context` property of the `TemplatePortal`
     * instance.
     * @param {?} host
     * @param {?=} context
     * @return {?}
     */
    function (host, context) {
        if (context === void 0) { context = this.context; }
        this.context = context;
        return _super.prototype.attach.call(this, host);
    };
    /**
     * @return {?}
     */
    TemplatePortal.prototype.detach = /**
     * @return {?}
     */
    function () {
        this.context = undefined;
        return _super.prototype.detach.call(this);
    };
    return TemplatePortal;
}(Portal));
/**
 * A `PortalOutlet` is an space that can contain a single `Portal`.
 * @record
 */

/**
 * Partial implementation of PortalOutlet that handles attaching
 * ComponentPortal and TemplatePortal.
 * @abstract
 */
var BasePortalOutlet = /** @class */ (function () {
    function BasePortalOutlet() {
        /**
         * Whether this host has already been permanently disposed.
         */
        this._isDisposed = false;
    }
    /** Whether this host has an attached portal. */
    /**
     * Whether this host has an attached portal.
     * @return {?}
     */
    BasePortalOutlet.prototype.hasAttached = /**
     * Whether this host has an attached portal.
     * @return {?}
     */
    function () {
        return !!this._attachedPortal;
    };
    /** Attaches a portal. */
    /**
     * Attaches a portal.
     * @param {?} portal
     * @return {?}
     */
    BasePortalOutlet.prototype.attach = /**
     * Attaches a portal.
     * @param {?} portal
     * @return {?}
     */
    function (portal) {
        if (!portal) {
            throwNullPortalError();
        }
        if (this.hasAttached()) {
            throwPortalAlreadyAttachedError();
        }
        if (this._isDisposed) {
            throwPortalOutletAlreadyDisposedError();
        }
        if (portal instanceof ComponentPortal) {
            this._attachedPortal = portal;
            return this.attachComponentPortal(portal);
        }
        else if (portal instanceof TemplatePortal) {
            this._attachedPortal = portal;
            return this.attachTemplatePortal(portal);
        }
        throwUnknownPortalTypeError();
    };
    /** Detaches a previously attached portal. */
    /**
     * Detaches a previously attached portal.
     * @return {?}
     */
    BasePortalOutlet.prototype.detach = /**
     * Detaches a previously attached portal.
     * @return {?}
     */
    function () {
        if (this._attachedPortal) {
            this._attachedPortal.setAttachedHost(null);
            this._attachedPortal = null;
        }
        this._invokeDisposeFn();
    };
    /** Permanently dispose of this portal host. */
    /**
     * Permanently dispose of this portal host.
     * @return {?}
     */
    BasePortalOutlet.prototype.dispose = /**
     * Permanently dispose of this portal host.
     * @return {?}
     */
    function () {
        if (this.hasAttached()) {
            this.detach();
        }
        this._invokeDisposeFn();
        this._isDisposed = true;
    };
    /** @docs-private */
    /**
     * \@docs-private
     * @param {?} fn
     * @return {?}
     */
    BasePortalOutlet.prototype.setDisposeFn = /**
     * \@docs-private
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this._disposeFn = fn;
    };
    /**
     * @return {?}
     */
    BasePortalOutlet.prototype._invokeDisposeFn = /**
     * @return {?}
     */
    function () {
        if (this._disposeFn) {
            this._disposeFn();
            this._disposeFn = null;
        }
    };
    return BasePortalOutlet;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * A PortalOutlet for attaching portals to an arbitrary DOM element outside of the Angular
 * application context.
 */
var DomPortalOutlet = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */])(DomPortalOutlet, _super);
    function DomPortalOutlet(outletElement, _componentFactoryResolver, _appRef, _defaultInjector) {
        var _this = _super.call(this) || this;
        _this.outletElement = outletElement;
        _this._componentFactoryResolver = _componentFactoryResolver;
        _this._appRef = _appRef;
        _this._defaultInjector = _defaultInjector;
        return _this;
    }
    /**
     * Attach the given ComponentPortal to DOM element using the ComponentFactoryResolver.
     * @param portal Portal to be attached
     * @returns Reference to the created component.
     */
    /**
     * Attach the given ComponentPortal to DOM element using the ComponentFactoryResolver.
     * @template T
     * @param {?} portal Portal to be attached
     * @return {?} Reference to the created component.
     */
    DomPortalOutlet.prototype.attachComponentPortal = /**
     * Attach the given ComponentPortal to DOM element using the ComponentFactoryResolver.
     * @template T
     * @param {?} portal Portal to be attached
     * @return {?} Reference to the created component.
     */
    function (portal) {
        var _this = this;
        var /** @type {?} */ componentFactory = this._componentFactoryResolver.resolveComponentFactory(portal.component);
        var /** @type {?} */ componentRef;
        // If the portal specifies a ViewContainerRef, we will use that as the attachment point
        // for the component (in terms of Angular's component tree, not rendering).
        // When the ViewContainerRef is missing, we use the factory to create the component directly
        // and then manually attach the view to the application.
        if (portal.viewContainerRef) {
            componentRef = portal.viewContainerRef.createComponent(componentFactory, portal.viewContainerRef.length, portal.injector || portal.viewContainerRef.parentInjector);
            this.setDisposeFn(function () { return componentRef.destroy(); });
        }
        else {
            componentRef = componentFactory.create(portal.injector || this._defaultInjector);
            this._appRef.attachView(componentRef.hostView);
            this.setDisposeFn(function () {
                _this._appRef.detachView(componentRef.hostView);
                componentRef.destroy();
            });
        }
        // At this point the component has been instantiated, so we move it to the location in the DOM
        // where we want it to be rendered.
        this.outletElement.appendChild(this._getComponentRootNode(componentRef));
        return componentRef;
    };
    /**
     * Attaches a template portal to the DOM as an embedded view.
     * @param portal Portal to be attached.
     * @returns Reference to the created embedded view.
     */
    /**
     * Attaches a template portal to the DOM as an embedded view.
     * @template C
     * @param {?} portal Portal to be attached.
     * @return {?} Reference to the created embedded view.
     */
    DomPortalOutlet.prototype.attachTemplatePortal = /**
     * Attaches a template portal to the DOM as an embedded view.
     * @template C
     * @param {?} portal Portal to be attached.
     * @return {?} Reference to the created embedded view.
     */
    function (portal) {
        var _this = this;
        var /** @type {?} */ viewContainer = portal.viewContainerRef;
        var /** @type {?} */ viewRef = viewContainer.createEmbeddedView(portal.templateRef, portal.context);
        viewRef.detectChanges();
        // The method `createEmbeddedView` will add the view as a child of the viewContainer.
        // But for the DomPortalOutlet the view can be added everywhere in the DOM
        // (e.g Overlay Container) To move the view to the specified host element. We just
        // re-append the existing root nodes.
        viewRef.rootNodes.forEach(function (rootNode) { return _this.outletElement.appendChild(rootNode); });
        this.setDisposeFn((function () {
            var /** @type {?} */ index = viewContainer.indexOf(viewRef);
            if (index !== -1) {
                viewContainer.remove(index);
            }
        }));
        // TODO(jelbourn): Return locals from view.
        return viewRef;
    };
    /**
     * Clears out a portal from the DOM.
     */
    /**
     * Clears out a portal from the DOM.
     * @return {?}
     */
    DomPortalOutlet.prototype.dispose = /**
     * Clears out a portal from the DOM.
     * @return {?}
     */
    function () {
        _super.prototype.dispose.call(this);
        if (this.outletElement.parentNode != null) {
            this.outletElement.parentNode.removeChild(this.outletElement);
        }
    };
    /**
     * Gets the root HTMLElement for an instantiated component.
     * @param {?} componentRef
     * @return {?}
     */
    DomPortalOutlet.prototype._getComponentRootNode = /**
     * Gets the root HTMLElement for an instantiated component.
     * @param {?} componentRef
     * @return {?}
     */
    function (componentRef) {
        return /** @type {?} */ ((/** @type {?} */ (componentRef.hostView)).rootNodes[0]);
    };
    return DomPortalOutlet;
}(BasePortalOutlet));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * Directive version of a `TemplatePortal`. Because the directive *is* a TemplatePortal,
 * the directive instance itself can be attached to a host, enabling declarative use of portals.
 */
var CdkPortal = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */])(CdkPortal, _super);
    function CdkPortal(templateRef, viewContainerRef) {
        return _super.call(this, templateRef, viewContainerRef) || this;
    }
    CdkPortal.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Directive"], args: [{
                    selector: '[cdk-portal], [cdkPortal], [portal]',
                    exportAs: 'cdkPortal',
                },] },
    ];
    /** @nocollapse */
    CdkPortal.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["TemplateRef"], },
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewContainerRef"], },
    ]; };
    return CdkPortal;
}(TemplatePortal));
/**
 * Directive version of a PortalOutlet. Because the directive *is* a PortalOutlet, portals can be
 * directly attached to it, enabling declarative use.
 *
 * Usage:
 * `<ng-template [cdkPortalOutlet]="greeting"></ng-template>`
 */
var CdkPortalOutlet = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */])(CdkPortalOutlet, _super);
    function CdkPortalOutlet(_componentFactoryResolver, _viewContainerRef) {
        var _this = _super.call(this) || this;
        _this._componentFactoryResolver = _componentFactoryResolver;
        _this._viewContainerRef = _viewContainerRef;
        /**
         * Whether the portal component is initialized.
         */
        _this._isInitialized = false;
        _this.attached = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"]();
        return _this;
    }
    Object.defineProperty(CdkPortalOutlet.prototype, "_deprecatedPortal", {
        get: /**
         * @deprecated
         * \@deletion-target 6.0.0
         * @return {?}
         */
        function () { return this.portal; },
        set: /**
         * @param {?} v
         * @return {?}
         */
        function (v) { this.portal = v; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkPortalOutlet.prototype, "_deprecatedPortalHost", {
        get: /**
         * @deprecated
         * \@deletion-target 6.0.0
         * @return {?}
         */
        function () { return this.portal; },
        set: /**
         * @param {?} v
         * @return {?}
         */
        function (v) { this.portal = v; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkPortalOutlet.prototype, "portal", {
        /** Portal associated with the Portal outlet. */
        get: /**
         * Portal associated with the Portal outlet.
         * @return {?}
         */
        function () {
            return this._attachedPortal;
        },
        set: /**
         * @param {?} portal
         * @return {?}
         */
        function (portal) {
            // Ignore the cases where the `portal` is set to a falsy value before the lifecycle hooks have
            // run. This handles the cases where the user might do something like `<div cdkPortalOutlet>`
            // and attach a portal programmatically in the parent component. When Angular does the first CD
            // round, it will fire the setter with empty string, causing the user's content to be cleared.
            if (this.hasAttached() && !portal && !this._isInitialized) {
                return;
            }
            if (this.hasAttached()) {
                _super.prototype.detach.call(this);
            }
            if (portal) {
                _super.prototype.attach.call(this, portal);
            }
            this._attachedPortal = portal;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkPortalOutlet.prototype, "attachedRef", {
        /** Component or view reference that is attached to the portal. */
        get: /**
         * Component or view reference that is attached to the portal.
         * @return {?}
         */
        function () {
            return this._attachedRef;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CdkPortalOutlet.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this._isInitialized = true;
    };
    /**
     * @return {?}
     */
    CdkPortalOutlet.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        _super.prototype.dispose.call(this);
        this._attachedPortal = null;
        this._attachedRef = null;
    };
    /**
     * Attach the given ComponentPortal to this PortalOutlet using the ComponentFactoryResolver.
     *
     * @param portal Portal to be attached to the portal outlet.
     * @returns Reference to the created component.
     */
    /**
     * Attach the given ComponentPortal to this PortalOutlet using the ComponentFactoryResolver.
     *
     * @template T
     * @param {?} portal Portal to be attached to the portal outlet.
     * @return {?} Reference to the created component.
     */
    CdkPortalOutlet.prototype.attachComponentPortal = /**
     * Attach the given ComponentPortal to this PortalOutlet using the ComponentFactoryResolver.
     *
     * @template T
     * @param {?} portal Portal to be attached to the portal outlet.
     * @return {?} Reference to the created component.
     */
    function (portal) {
        portal.setAttachedHost(this);
        // If the portal specifies an origin, use that as the logical location of the component
        // in the application tree. Otherwise use the location of this PortalOutlet.
        var /** @type {?} */ viewContainerRef = portal.viewContainerRef != null ?
            portal.viewContainerRef :
            this._viewContainerRef;
        var /** @type {?} */ componentFactory = this._componentFactoryResolver.resolveComponentFactory(portal.component);
        var /** @type {?} */ ref = viewContainerRef.createComponent(componentFactory, viewContainerRef.length, portal.injector || viewContainerRef.parentInjector);
        _super.prototype.setDisposeFn.call(this, function () { return ref.destroy(); });
        this._attachedPortal = portal;
        this._attachedRef = ref;
        this.attached.emit(ref);
        return ref;
    };
    /**
     * Attach the given TemplatePortal to this PortlHost as an embedded View.
     * @param portal Portal to be attached.
     * @returns Reference to the created embedded view.
     */
    /**
     * Attach the given TemplatePortal to this PortlHost as an embedded View.
     * @template C
     * @param {?} portal Portal to be attached.
     * @return {?} Reference to the created embedded view.
     */
    CdkPortalOutlet.prototype.attachTemplatePortal = /**
     * Attach the given TemplatePortal to this PortlHost as an embedded View.
     * @template C
     * @param {?} portal Portal to be attached.
     * @return {?} Reference to the created embedded view.
     */
    function (portal) {
        var _this = this;
        portal.setAttachedHost(this);
        var /** @type {?} */ viewRef = this._viewContainerRef.createEmbeddedView(portal.templateRef, portal.context);
        _super.prototype.setDisposeFn.call(this, function () { return _this._viewContainerRef.clear(); });
        this._attachedPortal = portal;
        this._attachedRef = viewRef;
        this.attached.emit(viewRef);
        return viewRef;
    };
    CdkPortalOutlet.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Directive"], args: [{
                    selector: '[cdkPortalOutlet], [cdkPortalHost], [portalHost]',
                    exportAs: 'cdkPortalOutlet, cdkPortalHost',
                    inputs: ['portal: cdkPortalOutlet']
                },] },
    ];
    /** @nocollapse */
    CdkPortalOutlet.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ComponentFactoryResolver"], },
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewContainerRef"], },
    ]; };
    CdkPortalOutlet.propDecorators = {
        "_deprecatedPortal": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"], args: ['portalHost',] },],
        "_deprecatedPortalHost": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"], args: ['cdkPortalHost',] },],
        "attached": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Output"], args: ['attached',] },],
    };
    return CdkPortalOutlet;
}(BasePortalOutlet));
var PortalModule = /** @class */ (function () {
    function PortalModule() {
    }
    PortalModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"], args: [{
                    exports: [CdkPortal, CdkPortalOutlet],
                    declarations: [CdkPortal, CdkPortalOutlet],
                },] },
    ];
    /** @nocollapse */
    PortalModule.ctorParameters = function () { return []; };
    return PortalModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * Custom injector to be used when providing custom
 * injection tokens to components inside a portal.
 * \@docs-private
 */
var PortalInjector = /** @class */ (function () {
    function PortalInjector(_parentInjector, _customTokens) {
        this._parentInjector = _parentInjector;
        this._customTokens = _customTokens;
    }
    /**
     * @param {?} token
     * @param {?=} notFoundValue
     * @return {?}
     */
    PortalInjector.prototype.get = /**
     * @param {?} token
     * @param {?=} notFoundValue
     * @return {?}
     */
    function (token, notFoundValue) {
        var /** @type {?} */ value = this._customTokens.get(token);
        if (typeof value !== 'undefined') {
            return value;
        }
        return this._parentInjector.get(token, notFoundValue);
    };
    return PortalInjector;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=portal.es5.js.map


/***/ }),

/***/ "../../../cdk/esm5/scrolling.es5.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export DEFAULT_SCROLL_TIME */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ScrollDispatcher; });
/* unused harmony export SCROLL_DISPATCHER_PROVIDER_FACTORY */
/* unused harmony export SCROLL_DISPATCHER_PROVIDER */
/* unused harmony export CdkScrollable */
/* unused harmony export DEFAULT_RESIZE_TIME */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return ViewportRuler; });
/* unused harmony export VIEWPORT_RULER_PROVIDER_FACTORY */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return VIEWPORT_RULER_PROVIDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScrollDispatchModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_cdk_platform__ = __webpack_require__("../../../cdk/esm5/platform.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_observable_fromEvent__ = __webpack_require__("../../../../rxjs/_esm5/observable/fromEvent.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_operators_auditTime__ = __webpack_require__("../../../../rxjs/_esm5/operators/auditTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_operators_filter__ = __webpack_require__("../../../../rxjs/_esm5/operators/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_observable_merge__ = __webpack_require__("../../../../rxjs/_esm5/observable/merge.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */










/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * Time in ms to throttle the scrolling events by default.
 */
var DEFAULT_SCROLL_TIME = 20;
/**
 * Service contained all registered Scrollable references and emits an event when any one of the
 * Scrollable references emit a scrolled event.
 */
var ScrollDispatcher = /** @class */ (function () {
    function ScrollDispatcher(_ngZone, _platform) {
        this._ngZone = _ngZone;
        this._platform = _platform;
        /**
         * Subject for notifying that a registered scrollable reference element has been scrolled.
         */
        this._scrolled = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["a" /* Subject */]();
        /**
         * Keeps track of the global `scroll` and `resize` subscriptions.
         */
        this._globalSubscription = null;
        /**
         * Keeps track of the amount of subscriptions to `scrolled`. Used for cleaning up afterwards.
         */
        this._scrolledCount = 0;
        /**
         * Map of all the scrollable references that are registered with the service and their
         * scroll event subscriptions.
         */
        this.scrollContainers = new Map();
    }
    /**
     * Registers a scrollable instance with the service and listens for its scrolled events. When the
     * scrollable is scrolled, the service emits the event to its scrolled observable.
     * @param scrollable Scrollable instance to be registered.
     */
    /**
     * Registers a scrollable instance with the service and listens for its scrolled events. When the
     * scrollable is scrolled, the service emits the event to its scrolled observable.
     * @param {?} scrollable Scrollable instance to be registered.
     * @return {?}
     */
    ScrollDispatcher.prototype.register = /**
     * Registers a scrollable instance with the service and listens for its scrolled events. When the
     * scrollable is scrolled, the service emits the event to its scrolled observable.
     * @param {?} scrollable Scrollable instance to be registered.
     * @return {?}
     */
    function (scrollable) {
        var _this = this;
        var /** @type {?} */ scrollSubscription = scrollable.elementScrolled()
            .subscribe(function () { return _this._scrolled.next(scrollable); });
        this.scrollContainers.set(scrollable, scrollSubscription);
    };
    /**
     * Deregisters a Scrollable reference and unsubscribes from its scroll event observable.
     * @param scrollable Scrollable instance to be deregistered.
     */
    /**
     * Deregisters a Scrollable reference and unsubscribes from its scroll event observable.
     * @param {?} scrollable Scrollable instance to be deregistered.
     * @return {?}
     */
    ScrollDispatcher.prototype.deregister = /**
     * Deregisters a Scrollable reference and unsubscribes from its scroll event observable.
     * @param {?} scrollable Scrollable instance to be deregistered.
     * @return {?}
     */
    function (scrollable) {
        var /** @type {?} */ scrollableReference = this.scrollContainers.get(scrollable);
        if (scrollableReference) {
            scrollableReference.unsubscribe();
            this.scrollContainers.delete(scrollable);
        }
    };
    /**
     * Returns an observable that emits an event whenever any of the registered Scrollable
     * references (or window, document, or body) fire a scrolled event. Can provide a time in ms
     * to override the default "throttle" time.
     *
     * **Note:** in order to avoid hitting change detection for every scroll event,
     * all of the events emitted from this stream will be run outside the Angular zone.
     * If you need to update any data bindings as a result of a scroll event, you have
     * to run the callback using `NgZone.run`.
     */
    /**
     * Returns an observable that emits an event whenever any of the registered Scrollable
     * references (or window, document, or body) fire a scrolled event. Can provide a time in ms
     * to override the default "throttle" time.
     *
     * **Note:** in order to avoid hitting change detection for every scroll event,
     * all of the events emitted from this stream will be run outside the Angular zone.
     * If you need to update any data bindings as a result of a scroll event, you have
     * to run the callback using `NgZone.run`.
     * @param {?=} auditTimeInMs
     * @return {?}
     */
    ScrollDispatcher.prototype.scrolled = /**
     * Returns an observable that emits an event whenever any of the registered Scrollable
     * references (or window, document, or body) fire a scrolled event. Can provide a time in ms
     * to override the default "throttle" time.
     *
     * **Note:** in order to avoid hitting change detection for every scroll event,
     * all of the events emitted from this stream will be run outside the Angular zone.
     * If you need to update any data bindings as a result of a scroll event, you have
     * to run the callback using `NgZone.run`.
     * @param {?=} auditTimeInMs
     * @return {?}
     */
    function (auditTimeInMs) {
        var _this = this;
        if (auditTimeInMs === void 0) { auditTimeInMs = DEFAULT_SCROLL_TIME; }
        return this._platform.isBrowser ? __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].create(function (observer) {
            if (!_this._globalSubscription) {
                _this._addGlobalListener();
            }
            // In the case of a 0ms delay, use an observable without auditTime
            // since it does add a perceptible delay in processing overhead.
            var /** @type {?} */ subscription = auditTimeInMs > 0 ?
                _this._scrolled.pipe(Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators_auditTime__["a" /* auditTime */])(auditTimeInMs)).subscribe(observer) :
                _this._scrolled.subscribe(observer);
            _this._scrolledCount++;
            return function () {
                subscription.unsubscribe();
                _this._scrolledCount--;
                if (!_this._scrolledCount) {
                    _this._removeGlobalListener();
                }
            };
        }) : Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_observable_of__["a" /* of */])();
    };
    /**
     * @return {?}
     */
    ScrollDispatcher.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._removeGlobalListener();
        this.scrollContainers.forEach(function (_, container) { return _this.deregister(container); });
    };
    /**
     * Returns an observable that emits whenever any of the
     * scrollable ancestors of an element are scrolled.
     * @param elementRef Element whose ancestors to listen for.
     * @param auditTimeInMs Time to throttle the scroll events.
     */
    /**
     * Returns an observable that emits whenever any of the
     * scrollable ancestors of an element are scrolled.
     * @param {?} elementRef Element whose ancestors to listen for.
     * @param {?=} auditTimeInMs Time to throttle the scroll events.
     * @return {?}
     */
    ScrollDispatcher.prototype.ancestorScrolled = /**
     * Returns an observable that emits whenever any of the
     * scrollable ancestors of an element are scrolled.
     * @param {?} elementRef Element whose ancestors to listen for.
     * @param {?=} auditTimeInMs Time to throttle the scroll events.
     * @return {?}
     */
    function (elementRef, auditTimeInMs) {
        var /** @type {?} */ ancestors = this.getAncestorScrollContainers(elementRef);
        return this.scrolled(auditTimeInMs).pipe(Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators_filter__["a" /* filter */])(function (target) {
            return !target || ancestors.indexOf(target) > -1;
        }));
    };
    /** Returns all registered Scrollables that contain the provided element. */
    /**
     * Returns all registered Scrollables that contain the provided element.
     * @param {?} elementRef
     * @return {?}
     */
    ScrollDispatcher.prototype.getAncestorScrollContainers = /**
     * Returns all registered Scrollables that contain the provided element.
     * @param {?} elementRef
     * @return {?}
     */
    function (elementRef) {
        var _this = this;
        var /** @type {?} */ scrollingContainers = [];
        this.scrollContainers.forEach(function (_subscription, scrollable) {
            if (_this._scrollableContainsElement(scrollable, elementRef)) {
                scrollingContainers.push(scrollable);
            }
        });
        return scrollingContainers;
    };
    /**
     * Returns true if the element is contained within the provided Scrollable.
     * @param {?} scrollable
     * @param {?} elementRef
     * @return {?}
     */
    ScrollDispatcher.prototype._scrollableContainsElement = /**
     * Returns true if the element is contained within the provided Scrollable.
     * @param {?} scrollable
     * @param {?} elementRef
     * @return {?}
     */
    function (scrollable, elementRef) {
        var /** @type {?} */ element = elementRef.nativeElement;
        var /** @type {?} */ scrollableElement = scrollable.getElementRef().nativeElement;
        // Traverse through the element parents until we reach null, checking if any of the elements
        // are the scrollable's element.
        do {
            if (element == scrollableElement) {
                return true;
            }
        } while (element = element.parentElement);
        return false;
    };
    /**
     * Sets up the global scroll listeners.
     * @return {?}
     */
    ScrollDispatcher.prototype._addGlobalListener = /**
     * Sets up the global scroll listeners.
     * @return {?}
     */
    function () {
        var _this = this;
        this._globalSubscription = this._ngZone.runOutsideAngular(function () {
            return Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_observable_fromEvent__["fromEvent"])(window.document, 'scroll').subscribe(function () { return _this._scrolled.next(); });
        });
    };
    /**
     * Cleans up the global scroll listener.
     * @return {?}
     */
    ScrollDispatcher.prototype._removeGlobalListener = /**
     * Cleans up the global scroll listener.
     * @return {?}
     */
    function () {
        if (this._globalSubscription) {
            this._globalSubscription.unsubscribe();
            this._globalSubscription = null;
        }
    };
    ScrollDispatcher.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    ScrollDispatcher.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"], },
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_cdk_platform__["a" /* Platform */], },
    ]; };
    return ScrollDispatcher;
}());
/**
 * \@docs-private
 * @param {?} parentDispatcher
 * @param {?} ngZone
 * @param {?} platform
 * @return {?}
 */
function SCROLL_DISPATCHER_PROVIDER_FACTORY(parentDispatcher, ngZone, platform) {
    return parentDispatcher || new ScrollDispatcher(ngZone, platform);
}
/**
 * \@docs-private
 */
var SCROLL_DISPATCHER_PROVIDER = {
    // If there is already a ScrollDispatcher available, use that. Otherwise, provide a new one.
    provide: ScrollDispatcher,
    deps: [[new __WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"](), new __WEBPACK_IMPORTED_MODULE_0__angular_core__["SkipSelf"](), ScrollDispatcher], __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"], __WEBPACK_IMPORTED_MODULE_1__angular_cdk_platform__["a" /* Platform */]],
    useFactory: SCROLL_DISPATCHER_PROVIDER_FACTORY
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * Sends an event when the directive's element is scrolled. Registers itself with the
 * ScrollDispatcher service to include itself as part of its collection of scrolling events that it
 * can be listened to through the service.
 */
var CdkScrollable = /** @class */ (function () {
    function CdkScrollable(_elementRef, _scroll, _ngZone) {
        var _this = this;
        this._elementRef = _elementRef;
        this._scroll = _scroll;
        this._ngZone = _ngZone;
        this._elementScrolled = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["a" /* Subject */]();
        this._scrollListener = function (event) { return _this._elementScrolled.next(event); };
    }
    /**
     * @return {?}
     */
    CdkScrollable.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._ngZone.runOutsideAngular(function () {
            _this.getElementRef().nativeElement.addEventListener('scroll', _this._scrollListener);
        });
        this._scroll.register(this);
    };
    /**
     * @return {?}
     */
    CdkScrollable.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._scroll.deregister(this);
        if (this._scrollListener) {
            this.getElementRef().nativeElement.removeEventListener('scroll', this._scrollListener);
        }
    };
    /**
     * Returns observable that emits when a scroll event is fired on the host element.
     */
    /**
     * Returns observable that emits when a scroll event is fired on the host element.
     * @return {?}
     */
    CdkScrollable.prototype.elementScrolled = /**
     * Returns observable that emits when a scroll event is fired on the host element.
     * @return {?}
     */
    function () {
        return this._elementScrolled.asObservable();
    };
    /**
     * @return {?}
     */
    CdkScrollable.prototype.getElementRef = /**
     * @return {?}
     */
    function () {
        return this._elementRef;
    };
    CdkScrollable.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                    selector: '[cdk-scrollable], [cdkScrollable]'
                },] },
    ];
    /** @nocollapse */
    CdkScrollable.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
        { type: ScrollDispatcher, },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"], },
    ]; };
    return CdkScrollable;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * Time in ms to throttle the resize events by default.
 */
var DEFAULT_RESIZE_TIME = 20;
/**
 * Simple utility for getting the bounds of the browser viewport.
 * \@docs-private
 */
var ViewportRuler = /** @class */ (function () {
    function ViewportRuler(_platform, ngZone) {
        var _this = this;
        this._platform = _platform;
        this._change = _platform.isBrowser ? ngZone.runOutsideAngular(function () {
            return Object(__WEBPACK_IMPORTED_MODULE_8_rxjs_observable_merge__["a" /* merge */])(Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_observable_fromEvent__["fromEvent"])(window, 'resize'), Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_observable_fromEvent__["fromEvent"])(window, 'orientationchange'));
        }) : Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_observable_of__["a" /* of */])();
        this._invalidateCache = this.change().subscribe(function () { return _this._updateViewportSize(); });
    }
    /**
     * @return {?}
     */
    ViewportRuler.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._invalidateCache.unsubscribe();
    };
    /** Returns the viewport's width and height. */
    /**
     * Returns the viewport's width and height.
     * @return {?}
     */
    ViewportRuler.prototype.getViewportSize = /**
     * Returns the viewport's width and height.
     * @return {?}
     */
    function () {
        if (!this._viewportSize) {
            this._updateViewportSize();
        }
        var /** @type {?} */ output = { width: this._viewportSize.width, height: this._viewportSize.height };
        // If we're not on a browser, don't cache the size since it'll be mocked out anyway.
        if (!this._platform.isBrowser) {
            this._viewportSize = /** @type {?} */ ((null));
        }
        return output;
    };
    /** Gets a ClientRect for the viewport's bounds. */
    /**
     * Gets a ClientRect for the viewport's bounds.
     * @return {?}
     */
    ViewportRuler.prototype.getViewportRect = /**
     * Gets a ClientRect for the viewport's bounds.
     * @return {?}
     */
    function () {
        // Use the document element's bounding rect rather than the window scroll properties
        // (e.g. pageYOffset, scrollY) due to in issue in Chrome and IE where window scroll
        // properties and client coordinates (boundingClientRect, clientX/Y, etc.) are in different
        // conceptual viewports. Under most circumstances these viewports are equivalent, but they
        // can disagree when the page is pinch-zoomed (on devices that support touch).
        // See https://bugs.chromium.org/p/chromium/issues/detail?id=489206#c4
        // We use the documentElement instead of the body because, by default (without a css reset)
        // browsers typically give the document body an 8px margin, which is not included in
        // getBoundingClientRect().
        var /** @type {?} */ scrollPosition = this.getViewportScrollPosition();
        var _a = this.getViewportSize(), width = _a.width, height = _a.height;
        return {
            top: scrollPosition.top,
            left: scrollPosition.left,
            bottom: scrollPosition.top + height,
            right: scrollPosition.left + width,
            height: height,
            width: width,
        };
    };
    /** Gets the (top, left) scroll position of the viewport. */
    /**
     * Gets the (top, left) scroll position of the viewport.
     * @return {?}
     */
    ViewportRuler.prototype.getViewportScrollPosition = /**
     * Gets the (top, left) scroll position of the viewport.
     * @return {?}
     */
    function () {
        // While we can get a reference to the fake document
        // during SSR, it doesn't have getBoundingClientRect.
        if (!this._platform.isBrowser) {
            return { top: 0, left: 0 };
        }
        // The top-left-corner of the viewport is determined by the scroll position of the document
        // body, normally just (scrollLeft, scrollTop). However, Chrome and Firefox disagree about
        // whether `document.body` or `document.documentElement` is the scrolled element, so reading
        // `scrollTop` and `scrollLeft` is inconsistent. However, using the bounding rect of
        // `document.documentElement` works consistently, where the `top` and `left` values will
        // equal negative the scroll position.
        var /** @type {?} */ documentRect = document.documentElement.getBoundingClientRect();
        var /** @type {?} */ top = -documentRect.top || document.body.scrollTop || window.scrollY ||
            document.documentElement.scrollTop || 0;
        var /** @type {?} */ left = -documentRect.left || document.body.scrollLeft || window.scrollX ||
            document.documentElement.scrollLeft || 0;
        return { top: top, left: left };
    };
    /**
     * Returns a stream that emits whenever the size of the viewport changes.
     * @param throttle Time in milliseconds to throttle the stream.
     */
    /**
     * Returns a stream that emits whenever the size of the viewport changes.
     * @param {?=} throttleTime
     * @return {?}
     */
    ViewportRuler.prototype.change = /**
     * Returns a stream that emits whenever the size of the viewport changes.
     * @param {?=} throttleTime
     * @return {?}
     */
    function (throttleTime) {
        if (throttleTime === void 0) { throttleTime = DEFAULT_RESIZE_TIME; }
        return throttleTime > 0 ? this._change.pipe(Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators_auditTime__["a" /* auditTime */])(throttleTime)) : this._change;
    };
    /**
     * Updates the cached viewport size.
     * @return {?}
     */
    ViewportRuler.prototype._updateViewportSize = /**
     * Updates the cached viewport size.
     * @return {?}
     */
    function () {
        this._viewportSize = this._platform.isBrowser ?
            { width: window.innerWidth, height: window.innerHeight } :
            { width: 0, height: 0 };
    };
    ViewportRuler.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    ViewportRuler.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_cdk_platform__["a" /* Platform */], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"], },
    ]; };
    return ViewportRuler;
}());
/**
 * \@docs-private
 * @param {?} parentRuler
 * @param {?} platform
 * @param {?} ngZone
 * @return {?}
 */
function VIEWPORT_RULER_PROVIDER_FACTORY(parentRuler, platform, ngZone) {
    return parentRuler || new ViewportRuler(platform, ngZone);
}
/**
 * \@docs-private
 */
var VIEWPORT_RULER_PROVIDER = {
    // If there is already a ViewportRuler available, use that. Otherwise, provide a new one.
    provide: ViewportRuler,
    deps: [[new __WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"](), new __WEBPACK_IMPORTED_MODULE_0__angular_core__["SkipSelf"](), ViewportRuler], __WEBPACK_IMPORTED_MODULE_1__angular_cdk_platform__["a" /* Platform */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]],
    useFactory: VIEWPORT_RULER_PROVIDER_FACTORY
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

var ScrollDispatchModule = /** @class */ (function () {
    function ScrollDispatchModule() {
    }
    ScrollDispatchModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                    imports: [__WEBPACK_IMPORTED_MODULE_1__angular_cdk_platform__["b" /* PlatformModule */]],
                    exports: [CdkScrollable],
                    declarations: [CdkScrollable],
                    providers: [SCROLL_DISPATCHER_PROVIDER],
                },] },
    ];
    /** @nocollapse */
    ScrollDispatchModule.ctorParameters = function () { return []; };
    return ScrollDispatchModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=scrolling.es5.js.map


/***/ })

});
//# sourceMappingURL=common.chunk.js.map