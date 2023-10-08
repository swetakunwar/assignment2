function split() {
    let amountData=document.getElementById('amount')
    let personData=document.getElementById('person')
    let bill=(amount.value/personData.value).toFixed(2)
    document.getElementById('result').innerText=bill
    console.log(bill)


    
}