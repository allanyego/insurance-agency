import User from './user';

class Client extends User {
  constructor({
    firstName,
    lastName,
    middleName=null,
    idNumber,
    addressNumber,
    addressCode,
    addressTown,
    occupation,
    kraPin,
    phoneNumber,
  }) {
    super({
      name: `${firstName} ${middleName ? middleName + ' ' : ''} ${lastName}`,
      addressNumber,
      addressCode,
      addressTown,
      phoneNumber
    });
    this.firstName = firstName; 
    this.lastName = lastName;
    this.middleName = middleName;
    this.idNumber = idNumber;
    this.addressNumber = addressNumber;
    this.addressCode = addressCode;
    this.addressTown = addressTown;
    this.occupation = occupation;
    this.kraPin = kraPin;
  }
}


export default Client;
