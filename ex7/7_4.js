// const basePrice = this._quantity * this._itemPrice;
// if(basePrice > 1000){
//     return basePrice * 0.95;
// }else{
//     return basePrice * 0.98;
// }


// get basePrice() {this._quantity * this._itemPrice;}

// if(this.basePrice > 1000){
//     return this.basePrice * 0.95;
// }else{
//     return this.basePrice * 0.98;
// }


class Order {
    constructor(quantity, item){
        this._quantity = quantity;
        this._item = item;
    }

    get price(){
        var discountFactor = 0.98;

        if(this.basePrice > 1000) discountFactor -= 0.03;
        return this.basePrice * discountFactor;
    }

    get basePrice(){
        return this._quantity * this._item.price;
    }
}