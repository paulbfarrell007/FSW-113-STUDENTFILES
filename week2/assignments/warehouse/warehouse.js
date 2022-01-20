const parts = [ 
    { partNbr: 'R5AQDVU', partDescr: 'Halbendozer', aisle: 'B3', qty: 14 },
    { partNbr: 'LJBKC0M', partDescr: 'Knudleknorp', aisle: 'H1', qty: 12},
    { partNbr: 'HUS51DE', partDescr: 'Knudlescheiffer', aisle: 'H1', qty: 12},
    { partNbr: 'M0XORFH', partDescr: 'Borgom Oil', aisle: 'B2', qty: 3},
    { partNbr: '35X7AP8', partDescr: 'Glundelscharf', aisle: 'C3', qty: 1},
    { partNbr: 'C1AYCAI', partDescr: 'Tschoffle', aisle: 'A4', qty: 5},
    { partNbr: 'E9IEYLS', partDescr: 'Karmandloch', aisle: 'C2', qty: 2},
    { partNbr: 'IW2I0TG', partDescr: 'Shreckendwammer', aisle: 'J4', qty: 2},
    { partNbr: '95OJTV6', partDescr: 'Dimpenaus', aisle: 'B1', qty: 16},
    { partNbr: 'LYII1MJ', partDescr: 'Lumpenknorp', aisle: 'H1', qty: 12},
    { partNbr: 'VQIL7AO', partDescr: 'Lumpenschieffer', aisle: 'H1', qty: 12},
    { partNbr: 'XF0MPS9', partDescr: 'Ratklampen', aisle: 'N2', qty: 7},
    { partNbr: 'AFU9OUG', partDescr: 'Dulpo Fittings', aisle: 'J2', qty: 4},
    { partNbr: 'E7XWGGO', partDescr: 'Flugtrimsammler', aisle: 'B3', qty:3 },
    { partNbr: '981FNC9', partDescr: 'Grosstramle', aisle: 'A1', qty: 1},
    { partNbr: 'AGSXYVZ', partDescr: 'Skirpenflatch', aisle: 'B2', qty: 2},
    { partNbr: 'V0SK0UX', partDescr: 'Lumpenmagler', aisle: 'H1', qty: 12},
    { partNbr: 'CTL40Z1', partDescr: 'Lumpenflempest', aisle: 'H1', qty: 24},
    { partNbr: 'POO9ZPM', partDescr: 'Eumonklippen', aisle: 'D2', qty: 7},
    { partNbr: 'WEYPU3Z', partDescr: 'Mumpenflipper', aisle: 'E3', qty: 1}

]


// list of each part number and qty for check-off in the "detailsList" element
var supplyList = document.querySelector("#detailsList");
    parts.forEach(function (e, i) {
    let needElement = document.createElement("div");
    let newElement = document.createElement("input");

    newElement.setAttribute("type", "checkbox"); //created checkbox same as in html creating a type in input

    let partsLabel = document.createElement("label"); //to list qty, parts#'s and descriptions
    
    partsLabel.textContent = `${parts[i].qty} (${parts[i].partNbr}) - ${parts[i].partDescr}`;
    supplyList.append(needElement);
    needElement.append(newElement);
    needElement.append(partsLabel);
});




/* if parts requiring special handling exist (in aisle B3), list of items needing special packaging in the "specialPackaging" element, else remove element */

var specialDelivery = document.querySelector("#specialPackaging");
var fragile = parts.filter(function (e, i) {
    return parts[i].aisle === "B3";
});

if (fragile.length !== 0) {
    fragile.forEach(function (e, i) {
        let revisedPackage = document.createElement("p");
        revisedPackage.textContent = `Item: ${fragile[i].partNbr} / Qty: ${fragile[i].qty}`;
        specialDelivery.appendChild(revisedPackage);
    })

} else {
    specialDelivery.remove(); //else remove element
}




/* if hazardous parts exist (in aisle J4), let employee know in the "hazardousMaterials" element and remind them to get gloves, else remove element */

var hazardItem = document.querySelector("#hazardousMaterials");
var dangerous = parts.some(function (e, i) {
    return parts[i].aisle === "J4";
})

if (dangerous !== true) {
    hazardItem.remove(); //else remove element
} 

else {
    let memo = document.createElement("p");
    memo.textContent = "WARNING!! These parts contain hazardous material, you MUST wear gloves";
    hazardItem.appendChild(memo);
}




/* if all items in the order are small parts (aisle H1), then let employee know that they should take a basket and go directly to aisle H1 */

var smallParts = document.querySelector("#smallItemsOnly")
var moveParts = parts.every(function (e, i) {
    return parts[i].aisle === "H1";
})

if (moveParts !== true) {
    smallParts.remove(); //must remove element to know whats left over 
} else {
    let memo2 = document.createElement("p");
    memo2.textContent = "if all ordered items are small, take a Basket and go directly to aisle H1";
    smallParts.appendChild(memo2);
}




/* if there are large items (anthing in aisles S, T, or U), then let the employee know in the "forkiftNeeded"
element that they will need to reserve a forklift, else remove the element */

var heavyLoad = document.querySelector("#forkiftNeeded");
var reserveLift = parts.find(function (e, i) {
    return parts[i].aisle === "S" + parts[i].aisle === "T" + parts[i].aisle === "U";
})

if (reserveLift == undefined) {
    heavyLoad.remove() // remove element
} else {
    let memo3 = document.createElement("p");
    memo3.textContent = "The load is to Heavy. You will need to reserve a ForkLift.";
    heavyLoad.appendChild(memo3);
}




// sum up the total number of parts and append that number to the text already in "totalItems" element
var subTotal = document.querySelector("#totalItems");
var grandTotal = parts.reduce(function (oldAmount, newAmount) {
    return oldAmount + newAmount.qty
}, 0) //added #0 to avoid error object message
     

subTotal.textContent += ` : ${grandTotal}`;