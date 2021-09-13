class Person{
    constructor() {
        this._telephoneNumber = new TelephoneNumber();
    }

    get officeAreaCode()        {return this._telephoneNumber.areaCode};
    set officeAreaCode(arg)     {
        this._telephoneNumber = new TelephoneNumber(arg, this.officeNumber);
    }
    get officeNumber()          {return this._telephoneNumber.number;}
    set officeNumber(arg)       {
        this._telephoneNumber.number = new TelephoneNumber(this.officeAreaCode, arg);
    }
}

class TelephoneNumber {
    constructor(areaCode, number) {
        this._areaCode = areaCode;
        this._number = number;
    }

    equals(other){
        if(!(other instanceof TelephoneNumber)) return false;
        return this._areaCode === other._areaCode &&
            this._number === other._number;
    }
}