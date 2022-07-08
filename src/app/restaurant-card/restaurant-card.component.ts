import { Component, Input, OnInit } from '@angular/core';
import { Restaurant } from 'src/interface/interface';

@Component({
  selector: 'app-restaurant-card',
  templateUrl: './restaurant-card.component.html',
  styleUrls: ['./restaurant-card.component.scss'],
})
export class RestaurantCardComponent implements OnInit {
  constructor() {}

  @Input() restaurant: Restaurant = { name: '', imageUrl: '', websiteUrl: '' };

  ngOnInit(): void {}

  onClick(url: string) {
    // open a new window with the url
    window.open(url, '_blank');
  }
}
