import { Component } from '@angular/core';
import { FoodService } from './services/food.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    constructor(
        public foodService: FoodService
    ) {}

    triggerEatFood(i: number): void {
        this.foodService.eatFood(i);
    }
}
