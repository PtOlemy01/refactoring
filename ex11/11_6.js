class HeatingPlan{

    targetTemperature(selectedTemperature) {
        if (selectedTemperature > this._max) return this._max;
        else if (selectedTemperature < this._min) return this._min;
        else return selectedTemperature;
    }
}

const thePlan = new HeatingPlan();

if(thePlan.targetTemperature(thermostat.selectedTemperature) >
    thermostat.currentTemperature) seltToHeat();
else if (thePlan.targetTemperature(thermostat.selectedTemperature) <
    thermostat.currentTemperature) seltToCool();
else setOff();