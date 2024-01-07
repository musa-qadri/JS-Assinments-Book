 
 const resultInput = document.getElementById('dice')


 function rolldice(){
    let dice =''    
     dice = Math.floor(Math.random()*7)
     
     resultInput.value= dice
 }
//  rolldice()