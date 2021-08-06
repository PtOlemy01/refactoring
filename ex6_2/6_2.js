/**
 * 함수 추출하기
 * Extract Function
 */

function printOwing(invoce){
    printBanner();
    let outstanding = caculateOutStanding();

    // 세부사항 출력
    console.log(`고객명 : ${invoice.customer}`);
    console.log(`채무액 : ${outstanding}`);
}
