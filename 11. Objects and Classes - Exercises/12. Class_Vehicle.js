class Vehicle{
    constructor(type, model, parts, fuel){
        this.type = type,
        this.model = model,
        this.parts = parts,
        this.fuel = fuel,
        this.drive = drive
    }
    drive(fuelLoss) {
        this.fuel -= fuelLoss;
      }
}

let parts = { 
     engine: 6,
     power: 100,
     get quality() {
        return this.engine * this.power;
      }
};
 let vehicle = new Vehicle('a', 'b', parts, 200);
  vehicle.drive(100); console.log(vehicle.fuel);
 console.log(vehicle.parts.quality); 