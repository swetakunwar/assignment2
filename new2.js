function checkbmi() {
    let heighDatat= document.getElementById('height ')
    let weightData= document.getElementById('weight')
    let bmi= weight.value/(height.value*height.value)
    if(bmi  < 18.5){
        document.getElementById('result').innerText="underweight!"
        
        
    }
    if(bmi>18.5 && bmi<24.9){
        document.getElementById('result').innerText="Normal!"

    }
     else if(bmi>25 && bmi<29.9){
        document.getElementById('result').innerText="Over-weight!"
    }
    else if (bmi>30 && bmi<35 ) {
        document.getElementById('result').innerText="obesity!"
    }
    else{
        document.getElementById('result').innerText="severe obesity!"
    }
    
}