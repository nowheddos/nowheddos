const birth = new Date(milliseconds=1174312800000);
var age;
setInterval(function () {
age = (Date.now() - Date.parse(birth)) / 31556952000 
$('#age')[0].innerHTML = age.toFixed(8);
}, 50);
// hell
function hell() {
    $('#reaganomics')[0].play();
    $('#hell').attr('hidden',true)
    document.title = "I'M RONALD REAGAN BABY"
}
// $('#reaganomics')[0].play();