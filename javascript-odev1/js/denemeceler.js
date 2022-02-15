let name = prompt("Lütfen isminizi bahşeder misiniz?")

let isim = document.querySelector("#name")

let cikti = name[0].toUpperCase() + name.slice(1)

isim.innerHTML = `${cikti}`

// buton


//  sayaççççç ---------------------------------------------------
// Set the date we're counting down to
var countDownDate = new Date("Jun 18, 2023 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("gun").innerHTML = days
  document.getElementById("saat").innerHTML = hours
  document.getElementById("dakika").innerHTML = minutes
  document.getElementById("saniye").innerHTML = seconds
  

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);
