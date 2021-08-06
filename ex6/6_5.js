// function circum(radius){
//     return 2 * Math.PI * radius;
// }

const { assert } = require("console");

//change

// rename
// function circumference(radius){
//     return 2 * Math.PI * radius;
// }

// migration

// function circum(radius){
//     return 2 * Math.PI * radius;
// }

function circum(radius){
    return circumference(radius);
}

function circumference(radius){
    return 2 * Math.PI * radius;
}


// add variable
addReservation(customer){
    this._reservations.push(customer);
}

// step1
addReservation(customer){
    this.zz_addReservation(customer);
}

zz_addReservation(customer){
    this._reservations.push(customer);
}

// step2
addReservation(customer, false){
    this.zz_addReservation(customer);
}

zz_addReservation(customer, isPriority){
    assert(isPriority === true || isPriority === false);
    this._reservations.push(customer);
}