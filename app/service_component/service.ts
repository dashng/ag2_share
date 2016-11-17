import { Injectable} from '@angular/core';
import { Http, Response } from '@angular/http';
import { Hero } from './Hero';
import { Observable } from 'rxjs';

@Injectable()
export class HeroService{
    heroUrl: string = "/data/heroes.json";
    constructor(
        public http: Http
    ){  

    }

    public getHeroes(): Observable<any>{
        return this.http.get(this.heroUrl)
    }
}
