async function bookings (){
   try {
    let result = await fetch('http://localhost:3000/bookings');
    let resultJson = await result.json ();
    let bookings = resultJson.data;
    let bookingDom = document.getElementById("booking");
    let para = document.createElement('p')
    let text = document.createTextNode('voici la liste');
    para.appendChild(text);
    bookingDom.appendChild(para);
    let liste = document.createElement("ul");
    for (let i =0 ; i< bookings.length; i ++){
        let booking = document.createElement("li");
        let bookingName =document.createTextNode(bookings[i].booking + ":" + bookings[i].country);
            booking.appendChild(bookingName);
            list.appendChild(booking);
        
    }
    bookingDom.appendchild(list);
   } catch (e) {
    console.log(e);
   } 
}
bookings();