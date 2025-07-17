import { Component } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { CommonModule} from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  foods:String [] = [];

  constructor(private foodService: FoodService){
    this.foods = foodService.getAll();
  }

}
