import { Component, OnInit, ElementRef } from '@angular/core';
import { HeroService } from './service';
import { Response } from '@angular/http';
import { Hero } from './Hero';
import * as $  from 'jquery';

@Component({
    selector: 'service-component',
    styles: [`
        
        .heroname{
            font-size:24px;
        }
        h3, a.hero_lnk{
            text-decoration: none;
            color: #fff;
        }
        a.hero_lnk *{
            cursor: pointer;
        }
        .hero_selected, .hero_selected *{
            color: #5ea6ef !important;
        }
    `],
    template: `
        <div style="position:absolute;top:0px;left:0px;z-index:999;color:#fff;width:100%;">
            <h3>Heroes</h3>
            <hr/>
            <ul>
                <li *ngFor="let hero of heroes;let i = index;"  >
                    <a  class="hero_lnk" href="javascript:void(0)" (click)="showDesc(hero.desc, i, hero.avatar)" [ngClass] = '{"hero_selected": hero_on===i}'>
                        <label class="heroname">{{hero.name}}</label>
                        <small>{{hero.nickname}}</small>
                    </a>
                </li>
            </ul>
            <br/>
            <div style="width:50%;margin:15px;">
                {{aboutHero}}
            </div>
        </div>
        <div style="position:absolute;top:0px;left:0px;z-index:979;width:100%;background:#333;min-height:350px;" >
            <video loop="" autoplay="true" *ngIf="avatar" style="max-width:750px;" ><source src="{{avatar}}" type="video/webm"></video>
        </div>
        
        
    `,
    providers: [HeroService]
})

export class ServiceComponent implements OnInit{
    avatar: string;
    hero_on: number;
    heroes: Hero[] = []; 
    aboutHero: string = "";
    constructor(
        private heroService: HeroService,
        private element: ElementRef){

    }

    public ngOnInit(){
        this.heroService.getHeroes().subscribe((o:Response)=>{
            this.heroes = o.json()['heroes'];
        });
    }

    public showDesc(desc, i, avatar){
        this.aboutHero = desc;
        this.hero_on = i;
        this.avatar = avatar;
        let video: any[] = this.element.nativeElement.querySelectorAll('video');
        if(video[0])
        video[0].load();
    }
}
