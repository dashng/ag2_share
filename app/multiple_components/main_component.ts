import { Component } from '@angular/core';
import { SubComponent } from './sub_component';

@Component({
    selector: 'main-component',
    template: `
        <br/>
        <label>Main Component Speaking...</label>
        <input [(ngModel)] = "speaker" value="" />
        <hr/>
        <sub-component [main_compo_input]="speaker"></sub-component>
    `,
    styles: [`

    `],
    providers: [SubComponent]
})

export class MainComponent{
    speaker: string = '';

}