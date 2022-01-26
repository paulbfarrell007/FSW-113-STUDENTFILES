let objTargetText 
const objUL = document.querySelector('#lstItems')

objUL.onclick = function(event) {
    var source = getEventTarget(event)
    if (!objTargetText.innerHTML)
        objTargetText.innerHTML = source.innerHTML
    else
        objTargetText.innerHTML += ',' + source.innerHTML
}

function combineLists() {
    var text1= document.getElementById("scavenger-0").value
    var text2= document.getElementById("scavenger-1").value
    var text3= document.getElementById("scavenger-2").value
    var text4= document.getElementById("scavenger-3").value
  
   
     var result1 = text1.split(",")
     var result2 = text2.split(",")
     var result3 = text3.split(",")
     var result4 = text4.split(",")

     var array=[]
     var res=array.concat(result1,result2,result3,result4)
    console.log(res) 

    res.sort()
    var textItem =document.getElementById("AllItems")
    textItem.textContent= res
    
}

function getEventTarget(e) {
    e = e || window.event
    return e.target || e.srcElement
}

function setTarget(obj) {
    objTargetText = obj
}
