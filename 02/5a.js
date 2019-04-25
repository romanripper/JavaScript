let car = {
  make: "Dodge",
  model: "Charger",
  year: 1970,
  fuel: 3.0,
  drive() {
    if (this.fuel <= 0) console.log("There is no gas in the tank");
    else {
      if (this.fuel - 5 <= 0) this.fuel = 0;
      else this.fuel -= 5;
      console.log("Car is driving");
    }
  },
  fillUp(litres) {
    this.fuel += litres;
    console.log("Car is filled up for " + litres + " litres");
  }
};

function printPropertiesAndTheirTypes(object) {
  for (let prop in object) {
    console.log(prop + " :" + typeof object[prop]);
  }
}

printPropertiesAndTheirTypes(car);
