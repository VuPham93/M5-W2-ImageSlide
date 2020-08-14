import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-img-slider',
  templateUrl: './img-slider.component.html',
  styleUrls: ['./img-slider.component.css']
})
export class ImgSliderComponent implements OnInit {

  index: number;
  img: string;

  constructor() { }

  ngOnInit(): void {
    this.index = 0;
    this.img = this.listImage[0];
  }

  listImage = [
    'https://images3.alphacoders.com/109/thumb-1920-1092574.jpg',
    'https://images8.alphacoders.com/109/thumb-1920-1094691.jpg',
    'https://images3.alphacoders.com/109/thumb-1920-1094136.jpg',
    'https://images3.alphacoders.com/109/thumb-1920-1092590.jpg'
  ];

  previous() {
    if (this.index > 0) {
      this.index--;
    }
    this.img = this.listImage[this.index];
  }

  next() {
    if (this.index < this.listImage.length - 1) {
      this.index++;
    }
    this.img = this.listImage[this.index];
  }
}
