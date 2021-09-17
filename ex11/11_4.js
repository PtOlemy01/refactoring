let aPlan = new HeatingPlan();

if(!xxNEWwithinRange(aPlan, aRoom.daysTempRange));
    alerts.push("방 온도가 지정 범위를 벗어 났습니다.");

function xxNEWwithinRange(aPlan, tempRange){
    const low = tempRange.low;
    const high = tempRange.high;

    return aPlan.withinRange(low, high);
}
class HeatingPlan{
    withinRange(bottom, top){
        return (bottom >= this._temperatureRange.low) && (top <= this._temperatureRange.high);
    }
}