// JavaScript Source Code 
function validateForm() {
    var x = document.forms["myForm"]["fname"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    }
}
	
function myFunction() {
    var d = new Date();
    d.setHours(15);
    document.getElementById("demo").innerHTML = d;
}
