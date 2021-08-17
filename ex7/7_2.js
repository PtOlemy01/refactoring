// class Person{
//     get course() {return this._course;}
//     set course(aList) {this._course = aList;}
// }

// class Person{
//     get course() {return this._course.slice();}
//     addCourse(aCourse){...}
//     removeCourse(aCourse){...}
// }

class Person{
    constructor(name){
        this._name = name;
        this._course = [];
    }
    get name() {return this._name;}
    get course() {return this._course}
    set course(aList){this._course = aList;}
}

class Course{
    constructor(name, isAdvanced){
        this._name = name;
        this._isAdvanced = isAdvanced;
    }
    get name() {return this._name;}
    get isAdvanced(){return this._isAdvanced;}
}

aPerson = new Person();

numAdvancedCourses = aPerson.course
    .filter(c => c.isAdvanced)
    .length;