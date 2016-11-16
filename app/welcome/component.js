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
var WelcomeComponent = (function () {
    function WelcomeComponent() {
    }
    return WelcomeComponent;
}());
WelcomeComponent = __decorate([
    core_1.Component({
        selector: 'welcome',
        moduleId: 'app/welcome/',
        styleUrls: ['static/styles/styles.css'],
        template: "\n      <div class=\"welcome\">\n        <div class=\"author\">\n\n        </div>\n        <div class=\"welcome.label\">\n          <h1>Angular2 TS Introduction</h1>\n          <h3>shdai@cisco.com</h3>\n        </div>\n      </div>\n    "
    }),
    __metadata("design:paramtypes", [])
], WelcomeComponent);
exports.WelcomeComponent = WelcomeComponent;
//# sourceMappingURL=component.js.map