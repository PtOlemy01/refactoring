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
    charge = summer() ? summerCharge() : regularCharge();
    // if(summer())
    //     charge = summerCharge();
    // else
    //     charge = regularCharge();
}
