/* {
  excessProtector = false,
  windscreen=0.0,
  radio=0.0,
  passengersPLL=null,
  antiTheft=false,
  rookie=false,
} */

class Policy {
  constructor({
    policyNumber,
    policyPeriod,
    sumInsured,
    premiumRate,
    excessProtector,
    antiTheft,
    rookie,
    passengersPLL,
    pvt,
    approved=false,
    insurer,
    client,
    type='new'
  }) {
    this.policyNumber = policyNumber;
    this.policyPeriod = policyPeriod;
    this.type = type;
    this.sumInsured = sumInsured;
    this.premiumRate = premiumRate;
    this.excessProtector = excessProtector;
    this.antiTheft = antiTheft;
    this.rookie = rookie;
    this.passengersPLL = passengersPLL;
    this.pvt = pvt;
    this.approved = approved;
    this.insurer = insurer;
    this.client = client;
  }
}

export default Policy;
