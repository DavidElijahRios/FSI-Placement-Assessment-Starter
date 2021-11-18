// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')

let yourName = "David Rios" 

// Code to update name display 
document.getElementById('credit').textContent = `Created by ${yourName}`

// Variables to track amountds of cookies
let gb = 0      // Gingerbread
let cc = 0      // Chocolate Chip
let sugar = 0   // Sugar Sprinkle
let cookieTotal = gb + cc + sugar

// Variables to track summary count of individual cookies
let sumGb = document.querySelector('#qty-gb')
let sumCc = document.querySelector('#qty-cc')
let sumSugar = document.querySelector('#qty-sugar')




// + & - Buttons for Gingerbread cookies
let plusgb = document.querySelector('#add-gb')
plusgb.addEventListener('click', function(){
    gb = gb + 1
    sumGb.textContent = gb 
})
let resultsgb1= document.querySelector('#qty-total') 
 plusgb.addEventListener('click', function (){
        resultsgb1.textContent = gb + cc + sugar
 })
 let minusgb = document.querySelector('#minus-gb')
 minusgb.addEventListener('click', function (){
     if(gb > 0){
         gb = gb - 1
         sumGb.textContent = gb
     }
 })
 let resultsgb2= document.querySelector('#qty-total') 
 minusgb.addEventListener('click', function (){
       resultsgb2.textContent = gb + cc + sugar
 })




 // + & - Buttons for Chocolate Chip cookies
 let plusCc = document.querySelector('#add-cc')
 plusCc.addEventListener('click', function (){
     cc = cc + 1
     sumCc.textContent = cc 
 })
 let resultsCc1 = document.querySelector('#qty-total') 
plusCc.addEventListener('click', function (){
       resultsCc1.textContent = cc + gb + sugar
})
 let minusCc = document.querySelector('#minus-cc')
 minusCc.addEventListener('click', function(){
     if(cc > 0){
         cc = cc - 1
         sumCc.textContent = cc
     }
})
let resultsCc2 = document.querySelector('#qty-total') 
minusCc.addEventListener('click', function (){
       resultsCc2.textContent = cc + gb + sugar
})





 // + & - Buttons for Sugar Sprinkle Cookies
 let plusSs = document.querySelector('#add-sugar')
 plusSs.addEventListener('click', function (){
     sugar = sugar + 1
     sumSugar.textContent = sugar
 })
 let resultsSs1 = document.querySelector('#qty-total') 
plusSs.addEventListener('click', function (){
      resultsSs1.textContent = sugar + gb + cc
})
 let minusSs = document.querySelector('#minus-sugar')
 minusSs.addEventListener('click', function(){
     if(sugar > 0){
         sugar = sugar - 1
         sumSugar.textContent = sugar
     }
 })
 let resultsSs2 = document.querySelector('#qty-total') 
minusSs.addEventListener('click', function (){
       resultsSs2.textContent = sugar + gb + cc
})
