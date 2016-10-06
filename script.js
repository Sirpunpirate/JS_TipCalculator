/* style.js */

//custom fucntion
function calculateTip() {
   
    //get the inputs
    var billAmount = document.getElementById("billAmount").value;
    var serviceQuality = document.getElementById("serviceQuality").value;
    var totalPeople = document.getElementById("totalPeople").value;
    
    if(billAmount == "" || serviceQuality == 0)
        {
            window.alert("Please enter some values to keep this baby running!");
            return;
        }
    
    //check this input
    if(totalPeople == "" || totalPeople <= 1)
        {
            totalPeople = 1;
            
            document.getElementById("each").style.display = "none"; //keep hidden
        }
    else
        document.getElementById("each").style.display = "block"; //show it
    
    var total = (billAmount * serviceQuality) / totalPeople;
    total = Math.round(100 * total) / 100; //round the value
    total = total.toFixed(2); //2 decimals after dot
    
    //display the Tip
    document.getElementById("totalTip").style.display = "block"; //show it
    document.getElementById("tip").innerHTML = total; //display it
}

//Hide the tip amount on load
document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";

//Click to call the custom function
document.getElementById("calculate").onclick = function() { calculateTip(); };


