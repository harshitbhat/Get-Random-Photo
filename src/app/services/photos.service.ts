import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ACCESS_KEY } from 'src/assets/accessKey';

interface UnsplashResponse {
  description: string;
  urls: {
    regular: string;
  };
  user: {
    first_name: string;
    last_name: string;
    social: {
      portfolio_url: string;
    };
  };
}

@Injectable({
  providedIn: 'root',
})
export class PhotosService {
  constructor(private http: HttpClient) {}

  getPhoto() {
    return this.http.get<UnsplashResponse>(
      'https://api.unsplash.com/photos/random',
      {
        headers: {
          Authorization: `Client-ID ${ACCESS_KEY}`,
        },
      }
    );
  }
}
