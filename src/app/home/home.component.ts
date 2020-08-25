import { Component, OnInit, Input } from '@angular/core';
import { PIZZAS } from '../pizzasList';
import { BasketService } from '../basket.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  totalPrice = 0;
  counter = 0;
  constructor(private basketService: BasketService) { }
  pizzas = PIZZAS;

  ngOnInit() { }

  updateList(isIncrementing: boolean) {
    // isIncrementing === true ? this.counter-- : this.counter++ ;
    /* You should check if the value is incrementing or not and
    change the value of the counter depending of the value of the boolean
    */
  }

  resetAll() {
    this.totalPrice = 0;
    this.counter = 0;
    // First, you need to set the value of the total Amount and the number of pizza Ordered to every pizza to 0 (use map)
    // Then, don't forget to also reset the counter
    // Finally, let's call the service to reset the basket. (Be sure that you have called the service inside the constructor !)
  }

  buyNow() {
    /*
     If the total amount of the basket is greater than 0 and equal or less to 200,
    you can open the modal that contains the pizza choosen
     */
  }
}
