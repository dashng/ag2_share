import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'my-app',
  moduleId: module.id,
  styleUrls: ['static/styles/styles.css'],
  template: `
      <div class="content">
        <div class="main">
            <div style="margin-left:350px; margin-top:20px;position:relative;">
              <router-outlet></router-outlet>
            </div>
        </div>
        <div class="left">
          <ul class="topics">
            <li><a href="#/index">Angular2 introduction</a></li>
            <li><a href="#/why_ag2">Why angular2</a></li>
            <li><a href="#/data_view_bindings">Data view bindings</a></li>
            <li>
              <a href="#/multiple_components">Components nested</a>
            </li>
            <li>
              <a href="#/multiple_components_fly">Create components on the fly</a>
            </li>
            <li>
              <a href="#/service">Services</a>
            </li>
            <li><a href="#/routers_config">Routers configuration</a></li>
            <li><a href="#/vsc">Visual Source Code</a></li>
          </ul>
        </div>
      </div>
    `
})
export class AppComponent implements OnInit{
    constructor(){
    }

    private resizeEvent(){
      let height = $(document).outerHeight();
      $('.content > div.left').height(height);
    }

    public ngOnInit(){
      $(window).resize(()=>{
        this.resizeEvent();
      });
      this.resizeEvent();
    }
 }