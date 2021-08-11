//let defaultOwner = {firstName : "마틴", lastName :"파울러"};

let defaultOwnerData = {firstName : "마틴", lastName :"파울러"};
export function defaultOwner()      {return defaultOwnerData};
export function setDefaultOwner(arg) {defaultOwnerData = arg;}


let defaultOwnerData = {firstName : "마틴", lastName :"파울러"};
export function defaultOwner()      {return new Person(defaultOwnerData)};;
export function setDefaultOwner(arg) {defaultOwnerData = arg;}

class Person{
    constructor(data){
        this._lastName = data._lastName;
        this._firstName = data._firstName;
    }

    get lastName() { return this._lastName;}
    get firstName() {return this._firstName;}
}