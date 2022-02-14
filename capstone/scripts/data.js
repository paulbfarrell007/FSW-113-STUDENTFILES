// Call the "getSystems()" function in such a way that when the page loads, the "system" select element displays the three sytems 
// whose parentID is zero.


    // This function will accept two arguments (see week three): the parentID and the DOM element that will ultimately receive the data. 
    // Code this function as an asynchronous operation that will fetch data from the data.json file (see week three).
    // After receiving the JSON data, the asynchronous promise should use a higher order array method (see week two) to return only 
    // those items from the JSON that have the matching parentID. That promise should then call a function that passes two parameters, 
    // this new array and the DOM element to the "populateDD" function (below).

    // Note that although a number being passed as a parameter into a function may look like a numeral, it may be a string value 
    // instead, and may need to be converted to an integer. 




    const systemSelect = document.getElementById('system')
    const subSystemSelect = document.getElementById('subSystem')
    
    
    getSystems(0, systemSelect);
    
    function getSystems(parentID, domElement) {
        fetch('../data.json')
            .then(res => res.json())
            .then(res => {
                let responseArray = res.systems;
    
                let newArray = responseArray.filter((event) => {
                    return event.parentID == parentID;
                })
                populateDD(newArray, domElement)
            })
            .catch(err => console.log(err))
    }
    
    function populateDD(array, domElement) {
        let option = document.createElement('option');
        option.textContent = 'Select an Item'
        domElement.appendChild(option)
    
        for (let i = 0; i < array.length; i++) {
            let nextOption = document.createElement('option')
            let txt = document.createTextNode(array[i].sysName)
            nextOption.appendChild(txt)
            domElement.appendChild(nextOption)
        }
    }
    
    
    
        // This function receives the array and DOM element from the "getSystems()" function (above). This function should fill the 
        // appropriate DOM element with options from which the user can select. However, since that DOM element has an "onChange" event, this
        // function first needs to add an option that says "Select an Item". Then use a looping mechanism (week one) to create the rest of  
        // the select element's options using the sysName and sysID from the passed in array (see week five).
    
    
    
        // This eventListener responds to a change to the "system" select element by passing the selected value from the "system" element 
        // to the "getSystems()" function along with the "subSystem" DOM element so that the second drop-down list is populated with the 
        // appropriate sub-systems from the data.json file.
    
    document.querySelector('#system').addEventListener('change', () => {
    
        if (document.querySelector('#system').value == 'Sales') {
            for (let i = 0; i < subSystemSelect.length; i++) {
                subSystemSelect.innerHTML = '';
            }
            getSystems(1, subSystemSelect)
        } else if (document.querySelector('#system').value == 'Operations') {
            for (let i = 0; i < subSystemSelect.length; i++) {
                subSystemSelect.innerHTML = '';
            }
            getSystems(2, subSystemSelect)
        } else if (document.querySelector('#system').value == 'Customer Support') {
            for (let i = 0; i < subSystemSelect.length; i++) {
                subSystemSelect.innerHTML = '';
            }
            getSystems(3, subSystemSelect)
        } else if (document.querySelector('#system').value == 'Reservations') {
            for (let i = 0; i < subSystemSelect.length; i++) {
                subSystemSelect.innerHTML = '';
            }
        }
    })