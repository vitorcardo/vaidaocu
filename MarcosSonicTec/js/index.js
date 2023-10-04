var closen = document.getElementById("close");
var login = document.getElementById("login");
var reg = document.getElementById("reg");
var logpag = document.getElementById("logpag");
var fazlogab = document.getElementById("fazlogab");
var fazlog = document.getElementById("fazlog");
setTimeout(function() {
    closen.style.display = "block"
}, 1000);
closen.addEventListener("click", function() {
    login.style.display = "none";
});
reg.addEventListener("click", function() {
    fazlogab.style.display = "block";
    login.style.display = "none";
});
logpag.addEventListener("click", function() {
    fazlogab.style.display = "none";
    login.style.display = "block";
});
fazlog.addEventListener("click", function() {
    fazlogab.style.display = "none";
    login.style.display = "block";
});