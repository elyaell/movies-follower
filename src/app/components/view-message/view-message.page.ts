import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../services/data.service';
import { FullMovie } from '../../models/movie.model';

@Component({
  selector: 'app-view-message',
  templateUrl: './view-message.page.html',
  styleUrls: ['./view-message.page.scss'],
})
export class ViewMessagePage implements OnInit {
  movie: FullMovie;
  id: string;

  constructor(
    private data: DataService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.fetchMovie();
  }

  fetchMovie() {
    this.data.getMovie(this.id).subscribe(response => {
      this.movie = response;
    })
  }

  getBackButtonText() {
    const win = window as any;
    const mode = win && win.Ionic && win.Ionic.mode;
    return mode === 'ios' ? 'Inbox' : '';
  }
}
