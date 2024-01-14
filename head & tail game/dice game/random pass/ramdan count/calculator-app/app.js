
const display = document.getElementById('display')

function addcalculate(input){
    display.value += input
}

function remove(){
    display.value = ""
}

function del(){
      var dele = document.getElementById('display')
      dele.value=dele.value.slice(0,-1)
}

function calculate(){
       display.value= eval(display.value)

}