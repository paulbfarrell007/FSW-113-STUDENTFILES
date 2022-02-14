// Create a variable of the right kind and in the right place such that each new bug that is added can increment that number


class Bug {
    constructor(reportedBy, system, subSystem, bugDesc) {
        // This constructor should be set up to accept the four user-input values from index.html: 
        // reportedBy, system, subSystem, and bugDesc

        this.reportedBy = reportedBy;
        this.system = system;
        this.subSystem = subSystem;
        this.bugDesc = bugDesc;
    }

    addBug() {
        // Create a div element that displays the bug information input by the user within the "listWrapper" DOM element. 
        // It should also contain buttons whose onClick events will call the deleteBug() and resolveBug() methods (see below). 
        let wrapper = document.querySelector('#listWrapper');
        let newBug = document.createElement('div');
        let name = document.createElement('p');
        let userSys = document.createElement('p');
        let problem = document.createElement('p');
        const deleteButton = document.createElement('button');
        const checkButton = document.createElement('button');

        name.textContent = `Reported By: ${this.reportedBy}`;
        userSys.textContent = `System: ${this.system} / ${this.subSystem}`;
        problem.textContent = this.bugDesc;
        deleteButton.innerHTML = "\u2713"; //checkmark symbol
        deleteButton.style = 'width: 60px'
        checkButton.innerHTML = 'X'; //completed work
        checkButton.style = 'width: 60px'
        newBug.style = 'background-color: #c2c1c9'; //completed work color

        

        wrapper.appendChild(newBug);
        newBug.appendChild(name);
        newBug.appendChild(userSys);
        newBug.appendChild(problem);
        newBug.appendChild(deleteButton);
        newBug.appendChild(checkButton);

        deleteButton.addEventListener('click', () =>{
            this.deleteBug(newBug);
        })

        checkButton.addEventListener('click', () =>{
            this.resolveBug(newBug)
        })
     

    }

        // Create code that will remove the appropriate bug from the DOM. 
        // You may need to Google how to remove an element from the DOM.
        deleteBug(event) {
            event.remove();

        }

    // Create code that changes the appropriate bug report to a darker color
    resolveBug(event) {
        event.style = "background-color: blue; color: white";
      
    }
}


function reportBug() {
    // Create code that instantiates the Bug class with the data input by the 
    // user in the index.html form. Then call the method to add the new bug report.
    let theBug = new Bug(
        document.querySelector('#reportedBy').value,
        document.querySelector('#system').value,
        document.querySelector('#subSystem').value,
        document.querySelector('#bugDesc').value,
    )
    theBug.addBug(theBug)
}


let signature = document.querySelector("#signature");
signature.innerText = "FSW113 Capstone Project: Build a Bug Tracker";
document.body.appendChild(signature);