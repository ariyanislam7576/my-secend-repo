// document.getElementById('plus-button').addEventListener('click',function(){

//     const phoneAmount = document.getElementById('total-amount')
//     const phoneAmountText = phoneAmount.value ;
//     const phoneAmountNumber = parseInt(phoneAmountText)

//     const phonePrice = document.getElementById('phone-price')
//     const phonePriceText = phonePrice.innerText
//     const phonePriceNumber = parseInt(phonePriceText)
//     phonePrice.innerText = phoneAmountNumber * 1240
//     phoneAmount.value = phoneAmountNumber + 1


  
// })
// document.getElementById('minus-button').addEventListener('click',function(){
//     const phoneAmount = document.getElementById('total-amount');
//     const phoneAmountText = phoneAmount.value;
//     const phoneAmountNumber = parseInt(phoneAmountText);
//     const phonePrice = document.getElementById('phone-price')
//     const phonePriceText = phonePrice.innerText
//     const phonePriceNumber = parseInt(phonePriceText)
//     phonePrice.innerText = 1240 / phoneAmountNumber 
//     if( phoneAmountNumber > 0){
//         phoneAmount.value = phoneAmountNumber - 1
//     }
// })
// document.getElementById('plus-btn-case').addEventListener('click',function(){
//     const phoneAmount = document.getElementById('total-amount-case')
//     const phoneAmountText = phoneAmount.value ;
//     const phoneAmountNumber = parseInt(phoneAmountText)
//     phoneAmount.value = phoneAmountNumber + 1
// })
// document.getElementById('minus-btn-case').addEventListener('click',function(){
//     const phoneAmount = document.getElementById('total-amount-case');
//     const phoneAmountText = phoneAmount.value;
//     const phoneAmountNumber = parseInt(phoneAmountText); 
//     if( phoneAmountNumber > 0){
//         phoneAmount.value = phoneAmountNumber - 1
//     }



// })
function updateCaseNumber(product, price ,isIncreasing){
    const caseInput = document.getElementById('total-amount-case');
    let caseNumber = caseInput.value;
    if(isIncreasing == true){
        caseNumber = parseInt(caseNumber) + 1

    }
    else if( caseNumber > 0){
        caseNumber = parseInt(caseNumber) - 1

    }
    caseInput.value = caseNumber
    const casePrice = document.getElementById( 'case-price')
    casePrice.innerText = caseNumber * price
}


document.getElementById('plus-btn-case').addEventListener('click',function(){
    updateCaseNumber('case', 59 ,true)
})
document.getElementById('minus-btn-case').addEventListener('click',function(){
    updateCaseNumber('case', 59 , false)
})

function updatePhonePrice(product,price,isIncreasing){
    const totalAmount = document.getElementById('total-amount')
    let totalAmountNumber = totalAmount.value;
    if(isIncreasing == true){
        totalAmountNumber = parseInt(totalAmountNumber) + 1
    }
    else if(totalAmountNumber > 0){
        totalAmountNumber = parseInt(totalAmountNumber) - 1
    }
    totalAmount.value = totalAmountNumber

    const phonePrice = document.getElementById('phone-price')
    phonePrice.innerText = totalAmountNumber * price
}

document.getElementById('plus-button').addEventListener('click',function(){
    updatePhonePrice('phone',1238,true)
})
document.getElementById('minus-button').addEventListener('click',function(){
    updatePhonePrice('phone',1238,false)
})