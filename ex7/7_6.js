class TrackingInfomation{
    get shippingCompany() {return this._shippingCompany;} //배송회사
    set shippingCompany(arg){this._shippingCompany = arg;}
    get trackingNumber() {return this._trakingNumber;} // 추적번호
    set trakingNumber(arg) {this._trakingNumber = arg;}
    get display(){
        return `${this.shippingCompany}: ${this.trackingNumber}`;
    }
}

class Shipment{
    get trackingInfo(){
        return this._trackingInfomation.display;
    }
    get trackingInfomation() {return this._trackingInfomation;}
    set trackingInfomation(aTrackingInfomation){
        this._trackingInfomation = aTrackingInfomation;
    }
}