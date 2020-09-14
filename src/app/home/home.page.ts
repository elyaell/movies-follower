import {Component, OnInit, ViewChild} from '@angular/core';
import {DataService} from '../services/data.service';
import {Movie} from '../models/movie.model'
import { IonInfiniteScroll } from '@ionic/angular';

@Component({selector: 'app-home', templateUrl: 'home.page.html', styleUrls: ['home.page.scss']})
export class HomePage implements OnInit {
    movies : Movie[] = [];
    cmpt = 1 ;

    constructor(private data : DataService) {}

    ngOnInit() {
        this.getMessages();
    }

    getMessages() {
        this.data.getMovies().subscribe(response => {
            this.movies = response["results"];
        });
    }
    
    
  doInfinite(infiniteScroll) {
    console.log('Begin async operation');
    this.cmpt++;

    setTimeout(() => {
        this.data.getMovies(this.cmpt).subscribe(response => {            
            for (let i = 0; i < (response["results"]).length; i++) {
                this.movies.push(response["results"][i]);
            }
        });
        
      console.log('Async operation has ended');
      infiniteScroll.target.complete();
    }, 500);
  }

}
