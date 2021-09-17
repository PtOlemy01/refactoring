aShipment.deliveryDate = rushDeliveryDate(anOrder);

aShipment.deliveryDate = regularDeliveryDate(anOrder);

function rushDeliveryDate(anOrder){
    let deliveryTime;
    if(["MA", "CT"].includes(anOrder.deliveryDate)) deliveryTime = 1;
    else if(["NY", "NH"].includes(anOrder.deliveryDate)) deliveryTime = 2;
    else deliveryTime = 3;
    return anOrder.placedOn.plusDays(1 + deliveryTime);
}

function regularDeliveryDate(anOrder){
    let deliveryTime;
    if(["MA", "CT"].includes(anOrder.deliveryDate)) deliveryTime = 2;
    else if(["NY", "NH"].includes(anOrder.deliveryDate)) deliveryTime = 3;
    else deliveryTime = 4;
    return anOrder.placedOn.plusDays(2 + deliveryTime);
}
