async function booking (){
   try {
    let result = await fetch('http://localhost:3000/booking');
    let resultJson = await result.json ();
    let booking = resultJson.data;
    let bookingDom = document.getElementById("booking");
    let para = document.createElement('p')
    let text = document.createTextNode('voici la liste');
    para.appendChild(text);
    bookingDom.appendChild(para);
    let liste = document.createElement("ul");
    for (let i =0 ; i< booking.length; i ++){
        let booking = document.createElement("li");
        let bookingName =document.createTextNode(booking[i].booking + ":" + booking[i].country);
            booking.appendChild(bookingName);
            list.appendChild(booking);
        
    }
    bookingDom.appendchild(list);
   } catch (e) {
    console.log(e);
   } 
}
booking();