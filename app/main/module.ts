import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule }    from '@angular/http';
import {
  LocationStrategy,
  HashLocationStrategy
} from '@angular/common';

import { AppComponent }   from './component';
import { declarations, appRoutes }  from '../router';
@NgModule({
    imports: [ 
        BrowserModule, 
        FormsModule, 
        HttpModule,
        RouterModule.forRoot(appRoutes)
    ],
    exports: [ RouterModule ],
    declarations: [ 
        declarations
    ],
    providers: [
        {provide: LocationStrategy, useClass: HashLocationStrategy}
    ],
    entryComponents: [ declarations ],
    bootstrap: [ 
        AppComponent 
    ]
})
export class AppModule { }
