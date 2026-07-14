//calculation button functionality
calculate.addEventListener('click', function() {

    let name = document.getElementById("name").value.trim();
    let unit = parseInt(document.getElementById("unit").value);

    //validation
     let namepattern = /^[A-Za-z\s]+$/;
     let numpattern=/^[0-9]+$/;
    if(name === "" || isNaN(unit) || unit <=0 || name.length < 3 || !namepattern.test(name) || !numpattern.test(unit)){
        alert("Please enter a valid name and unit.");
        return;
    }

    //bill calculation
    let bill;
    let res;
    if(unit<100){
        
         bill = unit *5;
    }
    else if(unit>=100 && unit<=200)
    {
         res = unit - 100;
         bill = (100 * 5) + (res* 7);
    }
    else if(unit>200 )
    {
        res = unit -200;
        bill = (100 * 5) + (100 * 7) + (res * 10);
    }
    

   
   //displaying the result
   const display = document.getElementById('display');
   
   display.innerHTML = `
   <p><strong> Customer Name: </strong> ${name}</p>
   <p><strong>Units Consumed: </strong> ${unit}</p>
   <p><strong>Total Bill: </strong>₹${bill}</p>`;
});


//reset button functionality
reset.addEventListener('click', function() {
    document.getElementById("name").value = "";
    document.getElementById("unit").value = "";
    document.getElementById('display').innerHTML = "";

});