let queryType, itemID;
function fetchData(){
    queryType = document.getElementById('queryType').value;
    itemID = parseInt(document.getElementById('itemID').value);
    getFromSWAPI()
};

function getFromSWAPI() {
    fetch(`https://swapi.dev/api/${queryType}/${itemID}`)
    .then(response => response.json())
    .then(function (data){
        console.log(data);
        let name = data.name;
        let url = data.url;
        updateInfo(name,url)
    })
    .catch(err => console.warn(err)) 
};
function updateInfo(name, url){
    let dataLabel1 = document.getElementById('dataLabel1');
    let newData = document.createElement('div');
    newData.innerHTML = `Name: ${name}`;
    dataLabel1.append(newData);
    
    let dataLabel2 = document.getElementById('dataLabel2');
    let newData2 = document.createElement('div');
    newData2.innerHTML = `URL: ${url}`;
    dataLabel2.append(newData2);
};
// create a new function called 'updateInfo()' that receives the data from 
// the call to that function (see above). Use logic to write the appropriate
//labels to 'dataLabel1' and 'dataLabel2' elements in starwars.html, as well
// as the appropriate values from the data object to the 'dataValue1' and 
// 'dataValue2' elements in starwars.html.