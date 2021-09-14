function payAmount(employee){
    let result;
    if(employee.isSeparated) return { amount : 0, reasonCode : "SEP"};
    else{
        if(employee.isRetired){ // 은퇴한 직원인가 ?
            result = {amount : 0, reasonCode : "RET"};
        }
        else{
            // 급여 계산 로직
            lorem.ipsum(dolor.sitAmet);
            consectetur(adipiscing).elit();
            sed.do.eiusmod = tempor.incididnut.ut(labore) && dolore(manga.aliqua);
            ut.enim.ad(minim.veniam);
            result = someFinalComputation();
        }
    }
    return result;
}