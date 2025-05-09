async function catways (){
   try {
    let result = await fetch('https://localhost:3000/catways');
    let resultJson = await result.json ();
    let catways = resultJson.data;
    let catwayDom = document.getElementById("catway");
    let para = document.createElement('p')
    let text = document.createTextNode('voici la liste');
    para.appendChild(text);
    catwayDom.appendChild(para);
    let liste = document.createElement("ul");
    for (let i =0 ; i< catways.length; i ++){
        let catway = document.createElement("li");
        let catwayName =document.createTextNode(catways[i].catway + ":" + catways[i].country);
            catway.appendChild(catwayName);
            list.appendChild(catway);
        
    }
    catwayDom.appendchild(list);
   } catch (e) {
    console.log(e);
   } 
}
catways();