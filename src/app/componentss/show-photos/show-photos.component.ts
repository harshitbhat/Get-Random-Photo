import { Component, OnInit } from '@angular/core';
import { PhotosService } from 'src/app/services/photos.service';

@Component({
  selector: 'app-show-photos',
  templateUrl: './show-photos.component.html',
  styleUrls: ['./show-photos.component.css'],
})
export class ShowPhotosComponent implements OnInit {
  photoUrl: string = '';
  photoDescription: string = '';
  photographerFirstName: string = '';
  photographerLastName: string = '';
  photographerInstaProfile: string = '';

  constructor(private photosService: PhotosService) {
    this.fetchPhoto();
  }

  ngOnInit(): void {}

  onClick() {
    this.fetchPhoto();
  }

  fetchPhoto() {
    this.photosService.getPhoto().subscribe((res) => {
      this.photoUrl = res.urls.regular;
      this.photoDescription = res.description;
      this.photographerFirstName = res.user.first_name;
      this.photographerLastName = res.user.last_name;
      this.photographerInstaProfile = res.user.social.portfolio_url;
    });
  }
}
