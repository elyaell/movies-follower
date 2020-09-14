import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Movie} from '../models/movie.model'
import {HttpService} from './http.service';

@Injectable({providedIn: 'root'})
export class DataService extends HttpService {

    constructor(http : HttpClient) {
        super(http);
    }

    public getMovies(page : number = 1): Observable < Movie[] > {
        return this.get(this.apiPath + "/3/movie/now_playing?api_key=" + this.apiKey + "&language=" + this.language + "&page=" + page);
    }

    public getMessageById(id : number): Movie {
        return null;
    }
}
