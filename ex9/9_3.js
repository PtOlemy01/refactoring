class ProductionPlan {
    get production() {
        return this._adjustMents
            .reduce((sum, a) => sum + a.amount, 0);
    }

    applyAdjustment(anAdjustment){
        this._adjustments.push(anAdjustment);
    }
}