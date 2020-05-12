class Vehicle {
  constructor({
    registrationNumber,
    make,
    bodyType,
    manufactureYear,
    chasisNumber,
    engineNumber,
    ratingCC,
    tonnage,
    policy,
    id,
  }) {
    this.id = id;
    this.registrationNumber = registrationNumber;
    this.make = make;
    this.bodyType = bodyType;
    this.manufactureYear = manufactureYear;
    this.chasisNumber = chasisNumber;
    this.engineNumber = engineNumber;
    this.ratingCC = ratingCC;
    this.tonnage = tonnage;
    this.policy = policy;
  }
}

export default Vehicle;