let aPlan = new HeatingPlan();

if(!aPlan.xxNEWWithinRange(aRoom.daysTempRange))
    alerts.push("방 온도가 지정 범위를 벗어 났습니다.");

class HeatingPlan{
    withinRange(bottom, top){
        return (bottom >= this._temperatureRange.low) && (top <= this._temperatureRange.high);
    }

    xxNEWWithinRange(aNumberRange){
        return this.withinRange(aNumberRange.low, aNumberRange.high);
    }
}