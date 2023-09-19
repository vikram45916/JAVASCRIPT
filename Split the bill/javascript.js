function convert(){
    let cm = document.getElementById('cm')
    let m = cm.value * 100;

    let result = "Converted value :"+ m + 'cm';
    document.getElementById('result').innerText = result;
}


function split(){
    let amount = document.getElementById('amount');
    let person = document.getElementById('person');

    let result = (amount.value / person.value).toFixed(2);
    document.getElementById('result').innerText = result;

    amount.value = '';
    person.value = '';
}