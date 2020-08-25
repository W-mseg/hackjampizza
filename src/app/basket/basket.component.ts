import {Component, Input, OnInit} from '@angular/core';
import { BasketService } from '../basket.service';
import {observable, Observable, of} from 'rxjs';


@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css'],
  providers: [BasketService]
})
export class BasketComponent implements OnInit {
  amount = this.basketService.totalAmount;
  constructor(private basketService: BasketService) {
    console.log('value : ' + basketService.totalAmount);
  }
  ngOnInit() {
    this.amount = this.basketService.totalAmount;
    console.log(this.amount + ' rolala');
    this.basketService.update.subscribe(this.amount);
    // With the subscribe, you can catch
    // the value of the variable emitted in the service
    /* Here you should subscribe to the update emitter to catch
    its value and pass it to the amount variable so you can display it in the basket.
    */
  }
}
