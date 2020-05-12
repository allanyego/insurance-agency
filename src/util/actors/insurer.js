import User from './user';

class Insurer extends User {
  constructor({
    name,
    addressNumber,
    addressCode,
    addressTown,
    phoneNumber,
  }) {
    super({
      name,
      addressNumber,
      addressCode,
      addressTown,
      phoneNumber,
    });
    this.addressNumber = addressNumber;
    this.addressCode = addressCode;
    this.addressTown = addressTown;
    this.phoneNumber = phoneNumber;
  }
}


export default Insurer;