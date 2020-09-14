import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/app/models/movie.model';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
})
export class MessageComponent implements OnInit {
  @Input() movie: Movie;

  constructor(private router: Router) { }

  ngOnInit() {}

  showMovieDetails() {
    this.router.navigate(['/movie', this.movie.id]);
  }

  isIos() {
    const win = window as any;
    return win && win.Ionic && win.Ionic.mode === 'ios';
  }
}
