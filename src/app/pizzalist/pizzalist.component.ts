import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  HostListener
} from '@angular/core';
import { PIZZAS } from '../pizzasList';
import { BasketComponent } from '../basket/basket.component';
import { BasketService } from '../basket.service';
import { Pizza } from '../pizza';

@Component({
  selector: 'app-pizzalist',
  templateUrl: './pizzalist.component.html',
  styleUrls: ['./pizzalist.component.css']
})
export class PizzalistComponent implements OnInit {
  constructor(private basketService: BasketService) {}
  @Input() name: string;
  @Output() isAdded = new EventEmitter<boolean>();
  pizzas = PIZZAS;
  pizzaList: Pizza[] = [];

  ngOnInit() {}

  updateList(pizza: Pizza, addedToTotal: boolean) {
    this.basketService.addToTotalAmount(pizza.price, addedToTotal);
    this.isAdded.emit(addedToTotal);
  }

  decrementNumber(pizza: Pizza) {
    pizza.numberOrdered--;
    pizza.totalAmountProduct = pizza.totalAmountProduct - pizza.price;
    this.basketService.totalAmount--;
    this.basketService.totalAmount = this.basketService.totalAmount - pizza.price;
    this.updateList(pizza, false);
    // Decrement the number of the ordered pizza
    // the total amount of the selected pizza should be reduced as well
    // call the update list
  }

  incrementNumber(pizza: Pizza) {
    pizza.numberOrdered++;
    pizza.totalAmountProduct = pizza.totalAmountProduct + pizza.price;
    this.basketService.totalAmount = this.basketService.totalAmount + pizza.price;
    this.updateList(pizza, true);
    // Increment the number of the ordered pizza
    // the total amount of the selected pizza should be augmented as well
    // call the update list
  }
}
