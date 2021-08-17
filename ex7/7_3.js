// orders.filter(o => "high" === o.priority || "rush" === o.priority);
// orders.filter(o => o.priority.higherThan(new Priorirty("normal")));

class Order {
    constructor(data){
        this._priority = data.priority;
    }

    get priority()     {return this._priority;}
    set priority(aString) {this._priority = aString;}
}
