import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';


@Component({
    selector: 'sub-component',
    template: `
        <div class="content-center">
            I am nested sub components & listening...
            <br/>
            {{main_compo_input}}
        </div>

        <h2>ngOnChanges === $watch</h2>
        <div>
            <b>Previous Value</b>: {{prev}}
        </div>
        <div>
            <b>After Value</b>: {{after}}
        </div>
        
    `,
    styles: [`
        .content-center{
            margin:25px;
        }
    `]
})

export class SubComponent implements OnChanges{
    @Input()
    main_compo_input: string = '';
    prev: string;
    after: string;

    public ngOnChanges(changes: SimpleChanges){
        let main_compo_input_change = changes['main_compo_input'];
        this.prev = main_compo_input_change.currentValue;
        this.after = main_compo_input_change.previousValue;


    }

}