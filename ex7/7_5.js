class Person{
    constructor(){
        this._telephoneNumber = new TelephoneNumber();
    }

    get name() {return this._name;}
    set name(arg) {this._name = arg;}
    get telephoneNumber() {return this._telephoneNumber.toString();}
    get areaCode() {return this._telephoneNumber.areaCode;}
    set areaCode(arg) {this._telephoneNumber.areaCode = arg;}
    get number() {return this._telephoneNumber.number;}
    set number(arg) {this._telephoneNumber.number = arg;}
}

class TelephoneNumber{
    get officeAreaCode() {return this._areaCode;}
    set officeAreaCode(arg) {this._areaCode = arg;}
    get officeNumber() {return this._number;}
    set officeNumber(arg) {this._number = arg;}
    get toString() {return `(${this.areaCode}) ${this.number}`;}
}