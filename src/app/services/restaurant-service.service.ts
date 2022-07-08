import { Injectable } from '@angular/core';
import { Restaurant } from 'src/interface/interface';

@Injectable({
  providedIn: 'root',
})
export class RestaurantServiceService {
  allRestaurants: Restaurant[] = [];

  constructor() {}

  getAllRestaurants(restaurants: Restaurant[]) {
    this.allRestaurants = restaurants;
    return this.allRestaurants;
  }

  searchRestaurants(searchTerm: string) {
    return this.allRestaurants.filter(
      (restaurant) =>
        restaurant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        restaurant.websiteUrl.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
}
