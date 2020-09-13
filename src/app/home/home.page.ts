import {Component, OnInit} from '@angular/core';
import {DataService} from '../services/data.service';
import {Movie} from '../models/movie.model'

@Component({selector: 'app-home', templateUrl: 'home.page.html', styleUrls: ['home.page.scss']})
export class HomePage implements OnInit {
    movies : Movie[] = [];

    constructor(private data : DataService) {}

    ngOnInit() {
        this.getMessages();
    }

    getMessages() {
        this.data.getMovies().subscribe(response => {
            this.movies = response["results"];
        });
    }

}
