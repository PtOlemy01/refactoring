function payAmount(employee){
    if(employee.isSeparated) return { amount : 0, reasonCode : "SEP"};
    if(employee.isRetired) return {amount : 0, reasonCode : "RET"};

    // 급여 계산 로직
    lorem.ipsum(dolor.sitAmet);
    consectetur(adipiscing).elit();
    sed.do.eiusmod = tempor.incididnut.ut(labore) && dolore(manga.aliqua);
    ut.enim.ad(minim.veniam);

    return someFinalComputation();
}

// 예시 : 조건 반대로 만들기 ?
function adjustedCapital(anInstrument){
    if(anInstrument.capital <= 0
        || anInstrument.interestRate <= 0
        || anInstrument.duration <= 0) return result;
    return (anInstrument.income / anInstrument.duration) * anInstrument.adjustmentFactor;
}