import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class FoodService {

    // Data Store
    public favorites: any[] = [
        {name: 'Burger', icon: '🍔'},
        {name: 'Hotdog', icon: '🌭'},
        {name: 'Cake', icon: '🍰'},
    ];
    public message: string = 'Pick something to eat!'; // default

    constructor() {}

    eatFood(i: number): void {
        const selection = this.favorites[i];
        this.message = `You ate a ${selection.name} ${selection.icon}`;
    }
}
