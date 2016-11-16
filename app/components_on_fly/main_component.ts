import { 
    ViewChild,
    ViewRef, 
    ComponentRef, 
    ViewContainerRef,
    ComponentFactory,
    ComponentFactoryResolver,
    Component 
} from '@angular/core'; 

import { SubComponentFly } from './sub_component';

import { Observable } from 'rxjs'

@Component({
    selector: 'main-component-fly',
    template: `
        Add Components on the fly.
        <div #placeholder>
        </div>
        <br/>
        <button (click)="addComponent()">Add sub component</button><button>Add Component</button>
    `,
    styles: [`
    `]
})

export class MainComponetFly{
    @ViewChild('placeholder', {read: ViewContainerRef}) viewContainerRef: ViewContainerRef;
    constructor(
        public compoResolver: ComponentFactoryResolver,
        public viewRef:ViewContainerRef
        
    ){
        
    }
    public addComponent(){
       let cf = this.compoResolver.resolveComponentFactory(SubComponentFly);
       this.viewContainerRef.createComponent(cf);
    }
}