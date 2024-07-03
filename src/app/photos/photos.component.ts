import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-photos',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatGridListModule],
  template: `
    <mat-grid-list cols="4" rowHeight="350px">
      <mat-grid-tile *ngFor="let photo of filteredPhotos">
        <mat-card>
          <mat-card-header>
            <mat-card-title>{{ photo.title }}</mat-card-title>
          </mat-card-header>
          <img mat-card-image [src]="photo.thumbnailUrl" [alt]="photo.title" style="width: 150px; height: 150px;">
        </mat-card>
      </mat-grid-tile>
    </mat-grid-list>
  `,
  styles: ['mat-card { width: 90%; height: 90%; } mat-card-title { font-size: 14px; }']
})
export class PhotosComponent implements OnInit {
  filteredPhotos: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any[]>('https://jsonplaceholder.typicode.com/photos')
      .subscribe(photos => {
        this.filteredPhotos = photos.filter(photo => 
          ['a', 'r', 's'].includes(photo.title.charAt(0).toLowerCase())
        );
      });
  }
}
