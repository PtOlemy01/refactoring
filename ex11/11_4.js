let aPlan = new HeatingPlan();
const tempRange = aRoom.daysTempRange;
const low = tempRange.low;
const high = tempRange.high;
const isWithRange = aPlan.withinRange(low, high);
if(!isWithRange)
    alerts.push("방 온도가 지정 범위를 벗어 났습니다.")

class HeatingPlan{
    withinRange(bottom, top){
        return (bottom >= this._temperatureRange.low) && (top <= this._temperatureRange.high);
    }
}