import { Component } from '@angular/core';

@Component({
    selector: 'sub-component-fly',
    template: `
        <h4>Sub component created at {{createTime}}.</h4>
    `
})

export class SubComponentFly{
    public createTime: string = '';
}
