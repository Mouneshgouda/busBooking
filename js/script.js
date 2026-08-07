function searchBus()
{

localStorage.from =
document.getElementById("from").value;


localStorage.to =
document.getElementById("to").value;


localStorage.date =
document.getElementById("date").value;


window.location="buses.html";

}



function chooseBus(bus)
{

localStorage.bus=bus;

window.location="booking.html";

}



function confirmBooking()
{

localStorage.name =
document.getElementById("name").value;


localStorage.age =
document.getElementById("age").value;


localStorage.phone =
document.getElementById("phone").value;


localStorage.seat =
document.getElementById("seat").value;


window.location="confirmation.html";

}