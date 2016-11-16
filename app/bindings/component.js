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
var BindingsComponent = (function () {
    function BindingsComponent() {
        this.ifd_test = '';
    }
    BindingsComponent.prototype.setTimestamp = function () {
        this.ifd_test = new Date().getTime().toString();
    };
    return BindingsComponent;
}());
BindingsComponent = __decorate([
    core_1.Component({
        selector: 'bindings',
        styles: ["\n        .content_zone{\n            margin: 25px;\n        }\n        .content_zone input{\n            width: 185px;\n            height:25px;\n            line-height:25px;\n        }\n    "],
        template: "\n        <div class=\"content_zone\">\n            <input [(ngModel)]=\"ifd_test\" value=\"\" placeholder=\"Input something ...\" />\n            {{ifd_test}}\n            <hr/>\n            <button (click)=\"setTimestamp()\" >Current Timestamps</button>\n        </div>\n\n        <dl>\n            \n            <dt>\n                How to implements:\n                <dl>\n                    <a href=\"https://github.com/angular/zone.js/\">Zone.js</a>\n                </dl>\n                <dl>\n                    <a href=\"http://blog.thoughtram.io/angular/2016/01/22/understanding-zones.html\"> Understanding zonejs in angular2</a>\n                </dl>\n            </dt>\n        </dl>\n\n    "
    }),
    __metadata("design:paramtypes", [])
], BindingsComponent);
exports.BindingsComponent = BindingsComponent;
//# sourceMappingURL=component.js.map