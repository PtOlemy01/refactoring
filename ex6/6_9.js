reading = {customer : "ivan", quantity : 10, month : 5, year :2017};

// client 1
const aReading = acquireReading();
const baseCharge = baseRate(aReading.month, aReading.year) * aReading.quantity;

//client 2
const aReading = acquireReading();
const base = (baseRate(aReading.month, aReading.year) * aReading.quantity);
const taxableCharge = Math.max(0, bsee - taxThreshold(aReading.year));

// client 3
const rawReading =  acquireReading();
const aReading = enrichReading(rawReading);
const baseChargeAmount = aReading.baseCharge;

function calculateBaseCharge(aReading){
    return baseRate(aReading.month, aReading.year) * aReading.quantity;
}

function enrichReading(original){
    const result = _.cloneDeep(original);
    result.baseCharge = calculateBaseCharge(aReading);
    return result;
}