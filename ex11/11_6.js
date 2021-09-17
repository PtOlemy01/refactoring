class HeatingPlan{
    get targetTemperature(){
        return this.xxNEWtargetTemperature(thermostat.selectedTemperature);
    }

    xxNEWtargetTemperature(selectedTemperature) {
        if (selectedTemperature > this._max) return this._max;
        else if (selectedTemperature < this._min) return this._min;
        else return selectedTemperature;
    }
}

if(thePlan.targetTemperature > thermostat.currentTemperature) seltToHeat();
else if (thePlan.targetTemperature < thermostat.currentTemperature) seltToCool();
else setOff();