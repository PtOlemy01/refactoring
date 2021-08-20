class Customer{
    constructor(name, discountRate){
        this._name = name; 
        this._setDiscountRate(discountRate);
        this._contract = new CustomerContract(dateToday() );
    }

    get discountRate() {return this._discountRate;}
    _setDiscountRate(aNumber) {this._discountRate = aNumber;}
    becomePreferred(){
        this._setDiscountRate( this.discountRate += 0.03);
        // 다른 멋진 일들
    }
    applyDicount(amount){
        return amount.subtract(amount.multiply(this._discountRate));
    }
}

class CustomerContract{
    constructor(startDate){
        this._startDate = startDate;
    }
}