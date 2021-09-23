import { Component, Input, OnInit } from '@angular/core';
import { FoodService } from 'src/app/services/food.service';

@Component({
    selector: 'app-list-item',
    templateUrl: './list-item.component.html',
    styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {
    @Input() food: any;
    @Input() index: number = 0;

    constructor(
        private foodService: FoodService
    ) {}

    ngOnInit(): void {}

    onEatFood(): void {
        this.foodService.eatFood(this.index);
    }
}
