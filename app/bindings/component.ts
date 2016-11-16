import { Component } from '@angular/core';

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
            <button (click)="setTimestamp()" >Current Timestamps</button>
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

export class BindingsComponent{
    private ifd_test: string = ''; 

    public setTimestamp(){
        this.ifd_test = new Date().getTime().toString();
    }
}

