import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'why',
    moduleId: module.id,
    styles: [`
        .menu-tab{
            list-style: none;
            width: 90%;
            border-bottom: 1px solid #ddd;
            display:block;
            float:left;
        }
        .menu-tab li{
            float: left;
            display:block;
            border: 1px solid #ddd;
            margin: 2px;
            padding:4px 6px
        }
        .trends{
            clear: both;
        }
    `],
    template: `
        <ul class="menu-tab"> 
            <li>
                <a href="javascript:void(0);" (click)="showTab('1')" >Angular2 vs Angular 1</a>
            </li>
            <li >
                <a href="javascript:void(0);" (click)="showTab('2')" >Weakness</a>
            </li>
            <li>
                <a href="javascript:void(0);" (click)="showTab('3')" >Google Trends</a>
            </li>
        </ul>
        <div class="trends" *ngIf="show_slide=='1'">
            <ul>
                <li>
                    Component-Based
                </li>
                <li>
                    Dependency Injection
                </li>
                <li>
                    Type Script
                </li>
                <li>
                    Form Validations
                </li>
                <li>
                    Faster 500%
                </li>
                <li>
                    Zone js vs $digest $watch
                </li>
            </ul>
        </div>
        <div class="trends" *ngIf="show_slide=='2'">
            <ul>
                <li>
                    Version not stable
                </li>
                <li>
                    less components for ag2
                </li>
                <li>
                    bugs and KENG (such as: css load images, component always has a wrapper)
                </li>
            </ul>
        </div>
        <div class="trends" *ngIf="show_slide=='3'">
             <img src="app/why/static/img/angular2_trend.png" style="width:40%;margin-left:30%;margin-top:5%;">
             <img src="app/why/static/img/angular2_keywords.png" style="width:40%;margin-left:30%;margin-top:5%;">
        </div>
    `
    
})

export class WhyComponent implements OnInit{

    private show_slide: string = '1';

    public ngOnInit(){
    }

    public showTab(no){
        this.show_slide = no.toString();
    }
}