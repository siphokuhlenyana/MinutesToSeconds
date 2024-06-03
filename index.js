//User must input a number to be convected to seconds 
let input =document.querySelector('input')
let btn=document.querySelector('button')
// this outputs the answer 
let input2=document.querySelectorAll('input')[1]

function convertToMinutes(num){
 input2.value =(input.value *60).toFixed(2)

}

btn.addEventListener('click',()=>{
convertToMinutes()
})


