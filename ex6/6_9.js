reading = {customer : "ivan", quantity : 10, month : 5, year :2017};

// client 1
const rawReading = acquireReading();
const aReading = enrichReading(rawReading);
const baseCharge = aReading.baseCharge;

//client 2
const rawReading = acquireReading();
const aReading = enrichReading(rawReading);
const taxableCharge = aReading.taxableCharge;

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
    result.taxableCharge = Math.max(0, result.baseCharge - taxThreshold(aReading.year));
    return result;
}