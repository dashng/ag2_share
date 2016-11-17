import { Component } from '@angular/core';
@Component({
  selector: 'welcome',
  moduleId: 'app/welcome/',
  styleUrls: ['static/styles/styles.css'],
  template: `
      <div class="welcome">
        <div class="author">

        </div>
        <div class="welcome.label">
          <h1>Angular2 TS Introduction</h1>
          <h3>shdai@cisco.com</h3>
          <i>2016/11/17</i>
        </div>
      </div>
    `
})
export class WelcomeComponent {
    constructor(){
    }
 }