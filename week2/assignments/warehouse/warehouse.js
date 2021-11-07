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
];

// list of each part number and qty for check-off in the "detailsList" element
let form = document.createElement('form');
parts.forEach(function(part){
    let input = document.createElement('input');
    input.setAttribute('type', 'checkbox');
    input.setAttribute('id', `${part.partNbr}`);
    let label = document.createElement('label');
    label.setAttribute('id', `${part.partNbr}`);
    label.textContent = `${part.qty} (${part.partNbr}) - ${part.partDescr}`;
    label.innerHTML += '<br>';
    form.append(input, label);
});
document.querySelector('#detailsList').appendChild(form);

// if parts requiring special handling exist (in aisle B3), list of items needing 
// special packaging in the "specialPackaging" element, else remove element
let specialPackaging = document.querySelector('#specialPackaging');
let specialHandlingParts = parts.filter(part => part.aisle == 'B3');

if(specialHandlingParts.length != 0) {
    specialHandlingParts.forEach(part => specialPackaging.innerHTML += `<p>Item: ${part.partNbr} / Qty: ${part.qty}</p>`);
    specialPackaging.style.height = 'min-content';
    specialPackaging.style.width = 'max-content';
} else {
    specialPackaging.remove();
}

// if hazardous parts exist (in aisle J4), let employee know in the "hazardousMaterials"
// element and remind them to get gloves, else remove element
let hazardousMaterials = document.querySelector('#hazardousMaterials');
let isHazardous = parts.some(part => part.aisle == 'J4');
    
if (isHazardous) {
    hazardousMaterials.innerHTML += `<h3>Get Gloves</h3>`;
    hazardousMaterials.style.width = '80%';    
} else {
    hazardousMaterials.remove();
}

// if all items in the order are small parts (aisle H1), then let employee know that they should take 
// a basket and go directly to aisle H1
let smallItemsOnly = document.querySelector('#smallItemsOnly');
let hasSmallItems = parts.every(part => part.aisle == 'H1');

if (hasSmallItems) {
    smallItemsOnly.textContent = 'Get a basket and go directly to aisle H1';
} else {
    smallItemsOnly.remove();
}

// if there are large items (anything in aisles S, T, or U), then let the employee know in the "forkiftNeeded"
// element that they will need to reserve a forklift, else remove the element
let forkiftNeeded = document.querySelector('#forkiftNeeded');
let isforkiftNeeded = parts.some(part => part.aisle == 'S' || part.aisle == 'T' || part.aisle == 'U');

if(isforkiftNeeded) {
    forkiftNeeded.textContent = 'You will need to reserve a forklift.';
} else {
    forkiftNeeded.remove();
}

// sum up the total number of parts and append that number to the text already in "totalItems" element
let total = parts.reduce((total, part) => total + part.qty, 0);
document.querySelector('#totalItems').textContent += ': ' + total;