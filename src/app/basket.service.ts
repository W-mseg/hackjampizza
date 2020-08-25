import {Injectable, Output, EventEmitter, Input} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BasketService {
  constructor() {}

  @Input()totalAmount = 0;
  @Output() update: EventEmitter<number> = new EventEmitter();

  addToTotalAmount(currentProduct: number, isIncrementing: boolean) {
    isIncrementing ?
      this.totalAmount = this.totalAmount + currentProduct :
      this.totalAmount = this.totalAmount - currentProduct;
    this.update.emit(this.totalAmount);
    // This function is supposed to display the total price of every pizza ordered.
    /*
    if it is incrementing, the current product value should be added to the total amount
    else, the value should be retrieved from the total amount
    Then, use the emitter to emit the value of the totalAmount
     */
  }

  resetBasket() {
    this.totalAmount = 0;
    this.update.emit(this.totalAmount);
    // Here, just set the value of the amount to 0
    // Don't forget to emit the amount
  }
}
