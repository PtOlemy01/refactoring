function summer() {
    return !aDate.isBefor(plan.summerStart) && !aDate.isAfter(plan.summerEnd);
}

function summerCharge() {
    return quantity * plan.summerRate;
}

function regularCharge() {
    return quantity * plan.regularRate + plan.regularServiceCharge;
}

function  calculateSummerRate(){
    if(summer())
        charge = summerCharge();
    else
        charge = regularCharge();
}
