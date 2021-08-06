/**
 * 함수 추출하기
 * Extract Function
 */

function printOwing(invoce){
    printBanner();
    let outstanding = caculateOutStanding();
    printDetails(outstanding);

    function printDetails(outstanding){
        console.log(`고객명 : ${invoice.customer}`);
        console.log(`채무액 : ${outstanding}`);
    }
}
