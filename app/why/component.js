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
var WhyComponent = (function () {
    function WhyComponent() {
        this.show_slide = '1';
    }
    WhyComponent.prototype.ngOnInit = function () {
    };
    WhyComponent.prototype.showTab = function (no) {
        this.show_slide = no.toString();
    };
    return WhyComponent;
}());
WhyComponent = __decorate([
    core_1.Component({
        selector: 'why',
        moduleId: module.id,
        styles: ["\n        .menu-tab{\n            list-style: none;\n            width: 90%;\n            border-bottom: 1px solid #ddd;\n            display:block;\n            float:left;\n        }\n        .menu-tab li{\n            float: left;\n            display:block;\n            border: 1px solid #ddd;\n            margin: 2px;\n            padding:4px 6px\n        }\n        .trends{\n            clear: both;\n        }\n    "],
        template: "\n        <ul class=\"menu-tab\"> \n            <li>\n                <a href=\"javascript:void(0);\" (click)=\"showTab('1')\" >Angular2 vs Angular 1</a>\n            </li>\n            <li >\n                <a href=\"javascript:void(0);\" (click)=\"showTab('2')\" >Weakness</a>\n            </li>\n            <li>\n                <a href=\"javascript:void(0);\" (click)=\"showTab('3')\" >Google Trends</a>\n            </li>\n        </ul>\n        <div class=\"trends\" *ngIf=\"show_slide=='1'\">\n            <ul>\n                <li>\n                    Component-Based\n                </li>\n                <li>\n                    Dependency Injection\n                </li>\n                <li>\n                    Type Script\n                </li>\n                <li>\n                    Form Validations\n                </li>\n                <li>\n                    Faster 500%\n                </li>\n                <li>\n                    Zone js vs $digest $watch\n                </li>\n            </ul>\n        </div>\n        <div class=\"trends\" *ngIf=\"show_slide=='2'\">\n            <ul>\n                <li>\n                    Version not stable\n                </li>\n                <li>\n                    less components for ag2\n                </li>\n                <li>\n                    bugs and KENG (such as: css load images, component always has a wrapper)\n                </li>\n            </ul>\n        </div>\n        <div class=\"trends\" *ngIf=\"show_slide=='3'\">\n             <img src=\"app/why/static/img/angular2_trend.png\" style=\"width:40%;margin-left:30%;margin-top:5%;\">\n             <img src=\"app/why/static/img/angular2_keywords.png\" style=\"width:40%;margin-left:30%;margin-top:5%;\">\n        </div>\n    "
    }),
    __metadata("design:paramtypes", [])
], WhyComponent);
exports.WhyComponent = WhyComponent;
//# sourceMappingURL=component.js.map