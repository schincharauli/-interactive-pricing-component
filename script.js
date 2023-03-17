
const pageViewers = document.querySelector('.views');
// console.log(pageViewers)

const outputPrice = document.querySelector('#valBox');
// console.log(outputPrice)

const rangeClass = document.querySelector('.rangeClass');
// console.log(typeof rangeClass);

// rangeClass.value = number;
// console.log(typeof rangeClass);







function myFunction() {
    let x = document.querySelector(".rangeClass");
    let currentVal = parseFloat(x.value);

    if(currentVal == 8){
        pageViewers.innerHTML = "10K";
        outputPrice.innerHTML = "8";

    }else if(currentVal <= 12){
        pageViewers.innerHTML = "50K";
        outputPrice.innerHTML = "12";


    }else if(currentVal <= 16){
        pageViewers.innerHTML = "100K";
        outputPrice.innerHTML = "16";

    }else if(currentVal <= 24){
        pageViewers.innerHTML = "500K";
        outputPrice.innerHTML = "24";


    }else{
        pageViewers.innerHTML = "1M";
        outputPrice.innerHTML = "36";

    }



    console.log(typeof currentVal)

  }