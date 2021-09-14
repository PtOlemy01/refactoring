function disabilityAmount(anEmployee){
    function isNotEligibleForEisability() {
        return (anEmployee.seniority < 2)
            || (anEmployee.monthsDisabled > 12)
            || (anEmployee.isPartTime);
    }

    if(isNotEligibleForEisability()) return 0;

    // 장애 수당 계산
}