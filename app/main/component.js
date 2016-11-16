"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var $ = require("jquery");
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent.prototype.resizeEvent = function () {
        var height = $(document).outerHeight();
        $('.content > div.left').height(height);
    };
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        $(window).resize(function () {
            _this.resizeEvent();
        });
        this.resizeEvent();
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        moduleId: module.id,
        styleUrls: ['static/styles/styles.css'],
        template: "\n      <div class=\"content\">\n        <div class=\"main\">\n            <div style=\"margin-left:350px;\">\n              <router-outlet></router-outlet>\n            </div>\n        </div>\n        <div class=\"left\">\n          <ul class=\"topics\">\n            <li><a href=\"#/index\">Angular2 introduction</a></li>\n            <li><a href=\"#/why_ag2\">Why angular2</a></li>\n            <li><a href=\"#/data_view_bindings\">Data view bindings</a></li>\n            <li>\n              <a href=\"#/multiple_components\">Components nested</a>\n            </li>\n            <li>\n              <a href=\"#/multiple_components_fly\">Create components on the fly</a>\n            </li>\n            <li><a href=\"#/routers_config\">Routers configuration</a></li>\n            <li><a href=\"#/vsc\">Visual Source Code</a></li>\n          </ul>\n        </div>\n        \n      </div>\n    "
    }),
    __metadata("design:paramtypes", [])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=component.js.map