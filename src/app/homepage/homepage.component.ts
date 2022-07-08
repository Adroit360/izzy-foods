import { RestaurantServiceService } from './../services/restaurant-service.service';
import { Restaurant } from './../../interface/interface';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
  constructor(
    private firestore: AngularFirestore,
    private restaurantService: RestaurantServiceService
  ) {
    this.restaurnats$ = this.onGetAllRestaurants();
    this.restaurnats$.subscribe((restaurants) => {
      this.restaurants = this.restaurantService.getAllRestaurants(restaurants);
    });
  }

  restaurnats$: Observable<Restaurant[]>;
  restaurants: Restaurant[] = [];
  searchTerm = '';

  ngOnInit(): void {}

  onGetAllRestaurants(): Observable<any> {
    return this.firestore.collection('restaurants').valueChanges();
  }

  onSearchRestaurants(searchTerm: string) {
    this.restaurants = this.restaurantService.searchRestaurants(searchTerm);
  }

  onSearch(event: any) {
    this.onSearchRestaurants(event);
  }
}
