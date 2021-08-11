// // 변경 전 
// const orderData = orderString.split(/\s+/);
// const productPrice = priceList[orderData[0].split("-")[1]];
// const orderPrice = parseInt(orderData[1] * productPrice);

// // 단계 쪼개기 수행 후 
// const orderRecord = parseOrder(order);
// const orderPrice = price(orderRecord, priceList);

// function parseOrder(aString){
//     const values = aString.split(/\s+/);
//     return ({
//         productID : values[0].split("-")[1],
//         quantity : parseInt(values[1]),
//     });
// }

// function price (order, priceList){
//     return order.queantity * priceList[order.productID];
// }

function priceOrder(product, quantity, shippingMethod){
    const basePrice = product.basePrice * quantity;
    const discount = Math.max(quantity - product.discountThreshold, 0) * product.basePrice * product.discoutRate;
    const priceData = {basePrice : basePrice, quantity : quantity};
    const price = applyShipping(priceData, shippingMethod,  discount);
    
    return price;
}

function applyShipping(priceData, shippingMethod,  discount){
    const shippingPerCase = (priceData.basePrice > shippingMethod.discount) ? shippingMethod.discountFee : shippingMethod.feePerCase;
    const shippingCost = priceData.quantity * shippingPerCase;
    const price = priceData.basePrice - discount * shippingCost;
    return price;
}