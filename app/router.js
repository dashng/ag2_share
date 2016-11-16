"use strict";
var component_1 = require("./main/component");
var component_2 = require("./welcome/component");
var component_3 = require("./why/component");
var component_4 = require("./bindings/component");
var main_component_1 = require("./multiple_components/main_component");
var sub_component_1 = require("./multiple_components/sub_component");
var main_component_2 = require("./components_on_fly/main_component");
var sub_component_2 = require("./components_on_fly/sub_component");
exports.appRoutes = [
    {
        path: '',
        redirectTo: '/index',
        pathMatch: 'full'
    },
    {
        path: 'index',
        component: component_2.WelcomeComponent
    },
    {
        path: 'why_ag2',
        component: component_3.WhyComponent
    },
    {
        path: 'data_view_bindings',
        component: component_4.BindingsComponent
    },
    {
        path: 'multiple_components',
        component: main_component_1.MainComponent
    },
    {
        path: 'multiple_components_fly',
        component: main_component_2.MainComponetFly
    },
    { path: '**', component: component_2.WelcomeComponent }
];
exports.declarations = [
    component_1.AppComponent,
    component_2.WelcomeComponent,
    component_3.WhyComponent,
    component_4.BindingsComponent,
    main_component_1.MainComponent,
    sub_component_1.SubComponent,
    main_component_2.MainComponetFly,
    sub_component_2.SubComponentFly
];
//# sourceMappingURL=router.js.map