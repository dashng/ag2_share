import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { WelcomeComponent }   from './component';

@NgModule({
    imports: [ BrowserModule ],
    exports: [],
    declarations: [ WelcomeComponent ],
    providers: [],
    bootstrap:    [ WelcomeComponent ]
})
export class WelcomeModule { }