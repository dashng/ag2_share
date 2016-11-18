import { Component, OnInit, ElementRef } from '@angular/core';
import * as cm  from 'codemirror';
import 'codemirror_js_mode';

@Component({
    selector: 'router-config',
    template: `
        <textarea style="width:90%;height:750px;" id="cm_ta">
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
                import { RouterConfig } from './router_config/component';

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
                    {
                        path: 'routers_config',
                        component: RouterConfig
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
                    ServiceComponent,
                    RouterConfig
                ]
        </textarea>
    `
})

export class RouterConfig implements OnInit{
    constructor(
        public elementRef: ElementRef
    ){

    }

    public ngOnInit(){
        let domNode: HTMLElement = this.elementRef.nativeElement;
        let textarea: any = domNode.querySelectorAll('#cm_ta');
        let code_mirror_editor = cm.fromTextArea(
                        textarea[0], 
                        {
                            "lineNumbers": true,
                            "mode": "javascript"
                        }
                    );
        code_mirror_editor.setSize('100%', '750px');
    }
    


}