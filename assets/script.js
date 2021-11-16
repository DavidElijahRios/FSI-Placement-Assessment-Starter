// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')

let yourName = "David Rios" 

// Code to update name display 
document.getElementById('credit').textContent = `Created by ${yourName}`

// Variables to track amountds of cookies
let gb = 0      // Gingerbread
let cc = 0      // Chocolate Chip
let sugar = 0   // Sugar Sprinkle

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
 let minusgb = document.querySelector('#minus-gb')
 minusgb.addEventListener('click', function (){
     if(gb > 0){
         gb = gb - 1
         sumGb.textContent = gb
     }
 })

 // + & - Buttons for Chocolate Chip cookies
 let plusCc = document.querySelector('#add-cc')
 plusCc.addEventListener('click', function (){
     cc = cc + 1
     sumCc.textContent = cc
 })
 let minusCc = document.querySelector('#minus-cc')
 minusCc.addEventListener('click', function(){
     if(cc > 0){
         cc = cc - 1
         sumCc.textContent = cc
     }

 })

 // + & - Buttons for Sugar Sprinkle Cookies
 let plusSs = document.querySelector('#add-sugar')
 plusSs.addEventListener('click', function (){
     sugar = sugar + 1
     sumSugar.textContent = sugar
 })
 let resultsSs1 = document.querySelector('#qty-total') 
plusSs.addEventListener('click', function (){
        sumSugar = sumSugar
       resultsSs1.textContent = sugar
})
 let minusSs = document.querySelector('#minus-sugar')
 minusSs.addEventListener('click', function(){
     if(sugar > 0){
         sugar = sugar - 1
         sumSugar.textContent = sugar
     }

 })
 // this is where I left off numbers are going up with button but not going down.
 let resultsSs2 = document.querySelector('#qty-total') 
minusSs.addEventListener('click', function (){
        if(sumSugar > 0){
    sumSugar = sumSugar --
       resultsSs2.textContent = sugar
    }
})

 // Creating the ability to total up all the numbers at the bottom
 // this code at the bottom worked!!
//let results = document.querySelector('#qty-total') 
//plusSs.addEventListener('click', function (){
        //sumSugar = sumSugar
       //results.textContent = sugar

//})

