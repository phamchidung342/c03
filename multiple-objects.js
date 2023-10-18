function Hotel(name, romms, booked){
    this.name = name;
    this.romms = romms;
    this.booked = booked;
    this.checkAvailability = function(){
        return this.romms - this.booked;
    };
}

var quaYHotel = new Hotel('Quay', 40, 25);
var parkHotel = new Hotel('Park', 120, 77);

var details1 = quayHotel.name + ' rooms: ';
    details1 += quayHotel.checkAvailability();
var elHotel = document.getElementById('hotel1');
elHotel1.textContent = details1;  

var details2 = parkHotel.name + ' rooms: ';
    details2 += parkHotel.checkAvailability();
var elHotel = document.getElementById('hotel2');
elHotel1.textContent = details2;    