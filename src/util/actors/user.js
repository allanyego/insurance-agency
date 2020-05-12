class User {
  constructor({ 
    name,
    addressNumber,
    addressCode,
    addressTown,
    phoneNumber,
    id,
  }) {
    this.id = id;
    this.name = name;
    this.addressNumber = addressNumber;
    this.addressCode = addressCode;
    this.addressTown = addressTown;
    this.phoneNumber = phoneNumber;
  }
}

export default User;
