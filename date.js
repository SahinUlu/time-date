function myFunction() {
    var d = new Date();
    var n = d.toLocaleString([], { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true});
    document.getElementById("time").innerHTML = n;
}
function fullDateTime() {
    var d = new Date();          
    var n = d.toLocaleString([], { hour12: true});
    document.getElementById("date").innerHTML = n;
}