function manageParkingLot(parkingData) {
    const parkingLot = new Set();
  
    for (const data of parkingData) {
      const [direction, carNumber] = data.split(", ");
  
      if (direction === "IN") {
        parkingLot.add(carNumber);
      } else if (direction === "OUT") {
        parkingLot.delete(carNumber);
      }
    }
  
    if (parkingLot.size === 0) {
      console.log("Parking Lot is Empty");
    } else {
      const sortedCarNumbers = Array.from(parkingLot).sort();
      console.log(sortedCarNumbers.join("\n"));
    }
  }
  
  
  manageParkingLot(['IN, CA2844AA', 'IN, CA1234TA', 
  'OUT, CA2844AA', 
  'OUT, CA1234TA'] 
  );
  