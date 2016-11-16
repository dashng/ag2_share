import { Component, Input } from '@angular/core';

@Component({
    selector: 'sub-component',
    template: `
        <div class="content-center">
            I am nested sub components & listening...
            <br/>
            {{main_compo_input}}
        </div>
    `,
    styles: [`
        .content-center{
            margin:25px;
        }
    `]
})

export class SubComponent{
    @Input()
    main_compo_input: string = '';

}