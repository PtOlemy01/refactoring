aShipment.deliveryDate = deliveryDate(anOrder, true);

aShipment.deliveryDate = deliveryDate(anOrder, false);

function deliveryDate(anOrder, isRush){
    if(isRush){
        let deliveryTime;
        if(["MA", "CT"].includes(anOrder.deliveryDate)) deliveryTime = 1;
        else if(["NY", "NH"].includes(anOrder.deliveryDate)) deliveryTime = 2;
        else deliveryTime = 3;
        return anOrder.placedOn.plusDays(1 + deliveryTime);
    }
    else{
        let deliveryTime;
        if(["MA", "CT"].includes(anOrder.deliveryDate)) deliveryTime = 2;
        else if(["NY", "NH"].includes(anOrder.deliveryDate)) deliveryTime = 3;
        else deliveryTime = 4;
        return anOrder.placedOn.plusDays(2 + deliveryTime);
    }
}