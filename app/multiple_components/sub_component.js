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
var SubComponent = (function () {
    function SubComponent() {
        this.main_compo_input = '';
    }
    return SubComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], SubComponent.prototype, "main_compo_input", void 0);
SubComponent = __decorate([
    core_1.Component({
        selector: 'sub-component',
        template: "\n        <div class=\"content-center\">\n            I am nested sub components & listening...\n            <br/>\n            {{main_compo_input}}\n        </div>\n    ",
        styles: ["\n        .content-center{\n            margin:25px;\n        }\n    "]
    }),
    __metadata("design:paramtypes", [])
], SubComponent);
exports.SubComponent = SubComponent;
//# sourceMappingURL=sub_component.js.map