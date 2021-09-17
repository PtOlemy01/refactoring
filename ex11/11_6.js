class HeatingPlan{
    get targetTemperature(){
        if(thermostat.selectedTemperature > this._max) return this._max;
        else if(thermostat.selectedTemperature < this._min)return this._min;
        else return thermostat.selectedTemperature;
    }
}

if(thePlan.targetTemperature > thermostat.currentTemperature) seltToHeat();
else if (thePlan.targetTemperature < thermostat.currentTemperature) seltToCool();
else setOff();