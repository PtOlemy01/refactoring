function alertForMiscreant(people){
    for(const p of people){
        if(p === "조커"){
            setOffAlarms();
            return "조커";
        }
        if(p === "사루만"){
            setOffAlarms();
            return "사루만";
        }
    }
    return "";
}

function findMiscreant(people){
    for(const p of people){
        if(p === "조커"){
            return "조커";
        }
        if(p === "사루만"){
            return "사루만";
        }
    }
    return "";
}