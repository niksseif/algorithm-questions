

//= ================== CLASS ======
// Class is a synthatic sugar in javascript.
// By using new you creat and empty objects and javascript binds the function stores to the
// constructor function so you don't need to use prototype in the
// function constractor
//

// class UserCreator {
//   constructor(name, score) {
//     this.name = name;
//     this.score = score;
//   }
//   increment() {
//     this.score += 1;
//     console.log(this.score);
//   }
//   login() {
//     console.log(`you are loged in ${this.name}`);
//   }
// }
// const user1 = new UserCreator('jeff', 5);
// user1.increment();
// console.log(user1);
// user1.login();


//= ============       Building class    =====
// define a Building class constructor function
class Building {
  constructor(numberOfFloors, yearLastInspected) {
    this.numberOfFloors = numberOfFloors;
    this.yearLastInspected = yearLastInspected;
    this.specialActionNeeded = false;
  }
  // add method addFloor to the building class
  addFloor() {
    this.numberOfFloors += 1;
  }
  // add needsInspectionmethod to the building class
  needsInspection() {
    return this.specialActionNeeded || new Date().getFullYear() - this.yearLastInspected > 10;
  }
}
// extend residential class to the building class
class Residential extends Building {
  // assign constructor args to the residnetial class
  constructor(numberOfFloors, yearLastInspected, numberOfFamilies) {
    // super conects the proto of this class to the extended class ==> prototype.reflect
    // inherit this from the main class
    super(numberOfFloors, yearLastInspected);
    this.numberOfFamilies = numberOfFamilies;
  }
  // add a new method just to the residential class "incapsulated"
  familiesPerFloor() {
    return this.numberOfFamilies / this.numberOfFloors;
  }
  NumberOFFloorsRestriction() {
    if (this.numberOfFloors > 3) {
      console.log('You Can not have more than 3 floors');
    }
  }
}

class Office extends Building {
  constructor(numberOfFloors, yearLastInspected, numberOfOffices) {
    super(numberOfFloors, yearLastInspected);
    this.numberOfOffices = numberOfOffices;
  }
  // inherit this method from the building class
  addFloor() {
    super.addFloor();
    this.specialActionNeeded = true;
  }
  // incapsulated method for the office class
  officesPerFloor() {
    return this.numberOfOffices / this.numberOfFloors;
  }
}

const myHouse = new Residential(2, 1986, 4);
myHouse.addFloor();
myHouse.addFloor();
myHouse.NumberOFFloorsRestriction();
const weWork = new Office(102, 2014, 300);

console.log(myHouse.numberOfFloors); // 2
console.log(myHouse.numberOfFamilies); // 4
console.log(myHouse.familiesPerFloor()); // 2
console.log(myHouse.numberOfOffices); // undefined

console.log(weWork.numberOfFloors); // 102
console.log(weWork.numberOfOffices); // 300
console.log(weWork.officesPerFloor()); // 2.94...
console.log(weWork.numberOfFamilies); // undefined
console.log(weWork.needsInspection()); // false
console.log(weWork.addFloor());
console.log(weWork.numberOfFloors); // 103
console.log(weWork.needsInspection()); // true
