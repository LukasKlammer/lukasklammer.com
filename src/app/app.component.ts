import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'lukasklammer.com';
  // hier kann JavaScript eingefügt werden
  images = ['innsbruck.jpg', 'it.jpg', 'science.jpg'];
  currentImage = 0;

  ngOnInit() {
    this.updateImage();
  }

  updateImage() {
    setInterval(() => {
      this.currentImage++;
      this.currentImage = this.currentImage % this.images.length;
    }, 8000);

  }
}
