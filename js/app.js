var distance = document.getElementById('distance-input');
var age = document.getElementById('age-input');
var generate = document.getElementById('my-btn');

var distanceValue;
var ageValue;
var cost;


function getForm() {

    console.log(distance.value, age.value);
    if (isNaN(distance.value) || isNaN(age.value)) {
        alert('Puoi inserire solo numeri');
    } else {
        distanceValue = distance.value;
        ageValue = age.value;
        calcCost();
        verifyDiscount();
    }

}


generate.addEventListener('click', getForm);



function calcCost() {

    let costforKm = 0.21;

    cost = distanceValue * costforKm;

    console.log(cost);

}



function verifyDiscount() {

    if (ageValue <= 17 || ageValue >= 66) {

        alert('Hai diritto allo sconto');

        if (ageValue <= 17) {

            cost -= (cost / 100) * 20;
            console.log(cost);

        } else if (ageValue >= 66) {

            cost -= (cost / 100) * 40;
            console.log(cost);
        }

    } else {

        alert('Non hai diritto allo sconto');

    }

}





