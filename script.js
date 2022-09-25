function myFunction() {
  var x = document.getElementById("simplesearch").value;
  let gogo = x.toLowerCase();
  console.log(gogo);

  if (gogo == "peacekeeper") {
    alert("Nice working")
    window.location.href = 'https://www.google.com/';
    
    //  block of code to be executed if the condition is true
  } else {
    alert("wrong password please try again");
    //  block of code to be executed if the condition is false
  }
}
