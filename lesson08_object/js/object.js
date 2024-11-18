//first method to create object

var hotel = {
    name: 'Quay',
    rooms: 40,
    booked: 25,
    checkAvailability: function() {
        return this.rooms - this.booked;
    }
};

var el = document.getElementById('result');
el.textContent = hotel.checkAvailability();

//second method to create object

var myHotel2 = new Object();
myHotel2.name = 'Quay';
myHotel2.rooms = 40;
myHotel2.booked = 25;
myHotel2.checkAvailability = function() {
    return this.rooms - this.booked;
};

var el = document.getElementById('result');
el.textContent += 'With second method: ' + myHotel2.checkAvailability();


//third method to create object

function Hotel(name, rooms, booked) {
    this.name = name;
    this.rooms = rooms;
    this.booked = booked;
    this.checkAvailability = function() {
        return this.rooms - this.booked;
    };
};

var hotelQuay = new Hotel('Quay Hotel', 40, 20);
var hotelPark = new Hotel('Park Hotel', 120, 77);

var disp = hotelPark.checkAvailability();