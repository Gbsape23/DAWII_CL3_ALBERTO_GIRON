import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-episodes',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatListModule],
  template: `
    <mat-card>
      <mat-card-header>
        <mat-card-title>Episodios con ID Impar</mat-card-title>
      </mat-card-header>
      <mat-card-content>
        <mat-list>
          <mat-list-item *ngFor="let episode of oddEpisodes">
            {{ episode.id }} - {{ episode.name }}
          </mat-list-item>
        </mat-list>
      </mat-card-content>
    </mat-card>
  `,
  styles: ['mat-card { margin: 20px; }']
})
export class EpisodesComponent implements OnInit {
  oddEpisodes: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any>('https://rickandmortyapi.com/api/episode')
      .subscribe(response => {
        this.oddEpisodes = response.results.filter((episode: any) => episode.id % 2 !== 0);
      });
  }
}