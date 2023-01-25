function Megszerkesztheto(){
    var aOldal = parseFloat(document.getElementById("egyikBefogoMezo").value)
    var bOldal = parseFloat(document.getElementById("masikBefogoMezo").value)
    var cOldal = parseFloat(document.getElementById("atfogoMezo").value)
    if  (Math.pow(aOldal, 2) + Math.pow(bOldal, 2) == Math.pow(cOldal, 2))
    {
        alert("A derékszögű háromszög megszerkeszthető!")
    }
    else
    {
        alert("A derékszögű háromszög NEM szerkeszthető meg!")
    }
}

function RandomSzam(){
    document.getElementById("egyikBefogoMezo").value =Math.round(Math.random()*100)
    document.getElementById("masikBefogoMezo").value = Math.round(Math.random()*100)
    document.getElementById("atfogoMezo").value = Math.round(Math.random()*100)
}

function AtfogoSzamitas(){
    var aOldal = parseFloat(document.getElementById("egyikBefogoMezo").value)
    var bOldal = parseFloat(document.getElementById("masikBefogoMezo").value)
    document.getElementById("atfogoMezo").value = Math.sqrt(Math.pow(aOldal, 2) + Math.pow(bOldal, 2)).toFixed(3)
}