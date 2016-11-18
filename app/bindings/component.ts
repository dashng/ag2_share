import { Component, ElementRef, OnChanges, SimpleChanges } from '@angular/core';

@Component({
    selector: 'bindings',
    styles: [`
        .content_zone{
            margin: 25px;
        }
        .content_zone input{
            width: 185px;
            height:25px;
            line-height:25px;
        }
    `],
    template: `
        <div class="content_zone">
            <input [(ngModel)]="ifd_test" value="" placeholder="Input something ..." />
            {{ifd_test}}
            <hr/>
            <button (click)="setTimestamp()" >Set current timestamps</button>
        </div>

        <dl>
            
            <dt>
                How to implements:
                <dl>
                    <a href="https://github.com/angular/zone.js/">Zone.js</a>
                </dl>
                <dl>
                    <a href="http://blog.thoughtram.io/angular/2016/01/22/understanding-zones.html"> Understanding zonejs in angular2</a>
                </dl>
            </dt>
        </dl>

    `
})

export class BindingsComponent implements OnChanges{
    private ifd_test: string = ''; 
    constructor(public elementRef: ElementRef){

    }
    public setTimestamp(){
        this.ifd_test = new Date().getTime().toString();
    }

    public ngOnChanges(changes: SimpleChanges){
        console.log(changes);
    }
}

