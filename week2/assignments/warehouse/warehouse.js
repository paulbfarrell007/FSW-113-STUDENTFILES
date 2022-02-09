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
var myList = document.querySelector("#detailsList");
parts.forEach(function(element, index){
    let parentElement = document.createElement("div");
    let newPart = document.createElement("input");
    newPart.setAttribute("type", "checkbox");
    let newLabel = document.createElement("label");
    newLabel.textContent = `${parts[index].qty} (${parts[index].partNbr}) - ${parts[index].partDescr}`;
    myList.appendChild(parentElement);
    parentElement.appendChild(newPart);
    parentElement.appendChild(newLabel);
});
// if parts requiring special handling exist (in aisle B3), list of items needing 
// special packaging in the "specialPackaging" element, else remove element

var specialPackage = document.querySelector("#specialPackaging");
var b3Filter = parts.filter(function(element, index){
    return parts[index].aisle === "B3";
});

if (b3Filter.length !== 0 ) {
    b3Filter.forEach(function(element, index){
        let newSpecialPackage = document.createElement("p");
        newSpecialPackage.textContent = `Item: ${b3Filter[index].partNbr} / Qty: ${b3Filter[index].qty}`;
        specialPackage.appendChild(newSpecialPackage);
    })
   
} else {
    specialPackage.remove();
}

// if hazardous parts exist (in aisle J4), let employee know in the "hazardousMaterials"
// element and remind them to get gloves, else remove element
var hazardMaterials = document.querySelector("#hazardousMaterials");
var hazardous = parts.some(function(element, index){
    return parts[index].aisle === "J4";
})

if (hazardous !== true) {
    hazardMaterials.remove();
} else {
    let hazardNote = document.createElement("p");
    hazardNote.textContent = "Wear Gloves While Loading!";
    hazardMaterials.appendChild(hazardNote);
}

// if all items in the order are small parts (aisle H1), then let employee know that they should take 
// a basket and go dirctly to aisle H1
var smallItems = document.querySelector("#smallItemsOnly")
var small = parts.every(function(element, index){
    return parts[index].aisle ==="H1";
})

if (small !== true) {
    smallItems.remove();
} else {
    let smallItemsNote = document.createElement("p");
    smallItemsNote.textContent ="Take a Basket and Report Directly to Aisle H1";
    smallItems.appendChild(smallItemsNote);
}
// if there are large items (anthing in aisles S, T, or U), then let the employee know in the "forkiftNeeded"
// element that they will need to reserve a forklift, else remove the element
var forklift = document.querySelector("#forkiftNeeded");
var forkift2 = parts.find(function(element, index){
    return parts[index].aisle === "S" || parts[index].aisle === "T" || parts[index].aisle === "U";
})

if (forkift2 == undefined){
    forklift.remove();
} else {
    let forkliftNote = document.createElement("p");
    forkliftNote.textContent ="Forklift Needed!";
    forklift.appendChild(forkliftNote);
}
// sum up the total number of parts and append that number to the text already in "totalItems" element
var total = document.querySelector("#totalItems");
var totalItem = parts.reduce(function(previousValue, currentValue){
    return previousValue + currentValue.qty
}, 0);

total.textContent += ` : ${totalItem}`;