let plays = {
    "hamlet" : {"name" : "Hamlet", "type" :"tragedy"},
    "as-like" : {"name" : "As You Like It", "type" : "comedy"},
    "othello" : {"name" : "Othello", "type" : "tragedy"}
};

let invoices = [
    {
        "customer" : "BigCo",
        "performances" : [
            {
                "playID" : "hamlet",
                "audience" : 55
            },
            {
                "playID" : "as-like",
                "audience" : 35
            },
            {
                "playID" : "othello",
                "audience" : 40
            }
        ]
    }
];

function statement(invoice, plays){
    let totalAmount = 0;
    let result = `청구 내역 (고객명: ${invoice[0].customer})\n`;
    
    for(let perf of invoice[0].performances){
        // 청구 내역을 출력한다.
        result += `  ${playFor(perf).name} : ${usd(amountFor(perf))} (${perf.audience}석)\n`;
        totalAmount += amountFor(perf);
    }
    let volumeCredits = 0;
    for(let perf of invoice[0].performances){
        volumeCredits += volumeCreditsFor(perf);
    }

    result += `총액 : ${usd(totalAmount)}\n`;
    result += `적립 포인트 : ${volumeCredits}점\n`;

    return result;
}

function usd(aNumber) {
    return new Intl.NumberFormat("en-US",
        {
            style: "currency", currency: "USD",
            minimumFractionDigits: 2
        }).format(aNumber/ 100);
}

function volumeCreditsFor(aPerformance) {
    let result = 0;

    result += Math.max(aPerformance.audience - 30, 0);
    if ("comedy" === playFor(aPerformance).type)
        result += Math.floor(aPerformance.audience / 5);

    return result;
}

function playFor(aPerformance){
    return plays[aPerformance.playID];
}

function amountFor(aPerformance) {
    let result = 0;

    switch (playFor(aPerformance).type) {
        case "tragedy": //비극
        result = 40000;
            if (aPerformance.audience > 30) {
                result += 1000 * (aPerformance.audience - 30);
            }
            break;
        case "comedy": // 희극 
            result = 30000;
            if (aPerformance.audience > 20) {
                result += 10000 + 500 * (aPerformance.audience - 20);
            }
            result += 300 * aPerformance.audience;
            break;
        default:
            throw new Error(`알 수 없는 장르 : ${playFor(aPerformance).type}`);
    }
    return result;
}

console.log(statement(invoices, plays));
