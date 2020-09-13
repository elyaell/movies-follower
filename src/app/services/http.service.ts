import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from 'src/environments/environment';
import {Movie} from '../models/movie.model';

@Injectable({providedIn: 'root'})
export class HttpService {
    apiPath : string = environment.apiPath;
    apiKey : string = environment.apiKey;
    language : string = environment.language;

    constructor(private http : HttpClient) {}

    get(url : string): Observable < Movie[] > {
        return this.http.get<Movie[]>(url);
    }

}
