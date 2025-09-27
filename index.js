const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"]
let generateEl = document.getElementById("generate-el")
let generatetwoEl = document.getElementById("generatetwo-el")
let resetEl = document.getElementById("reset-el")
let generatedPass = false


function generatePass(){
    
    if(generatedPass === false){
            
        for(let i=0; i<15; i++){
            let randomIndex = Math.floor(Math.random()*characters.length)
            let randomIndexTwo = Math.floor(Math.random()*characters.length)
            generateEl.textContent += characters[randomIndex]
            generatetwoEl.textContent += characters[randomIndexTwo]
        }
    }
    generatedPass = true
}

function reset(){
    generateEl.textContent = ""
    generatetwoEl.textContent= ""
    generatedPass = false
}