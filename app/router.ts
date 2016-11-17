import { AppComponent }   from './main/component';
import { RouterModule, Routes } from '@angular/router';
import { Component } from '@angular/core';

import { WelcomeComponent } from './welcome/component';
import { WhyComponent } from './why/component';
import { BindingsComponent } from './bindings/component';
import { MainComponent } from './multiple_components/main_component';
import { SubComponent } from './multiple_components/sub_component';
import { MainComponetFly } from './components_on_fly/main_component';
import { SubComponentFly } from './components_on_fly/sub_component';
import { ServiceComponent } from './service_component/component';

export const appRoutes: Routes = [
    {
        path: '',
        redirectTo:'/index',
        pathMatch: 'full'
    },
    {
        path: 'index',
        component: WelcomeComponent
    },
    {
        path: 'why_ag2',
        component: WhyComponent
    },
    {
        path: 'data_view_bindings',
        component: BindingsComponent
    },
    {
        path: 'multiple_components',
        component: MainComponent
    },
    {
        path: 'multiple_components_fly',
        component: MainComponetFly
    },
    {
        path: 'service',
        component: ServiceComponent
    },
    { path: '**', component: WelcomeComponent }
];



export const declarations: Component[] = [
    AppComponent,
    WelcomeComponent,
    WhyComponent,
    BindingsComponent,
    MainComponent,
    SubComponent,
    MainComponetFly,
    SubComponentFly,
    ServiceComponent
]