function navClick() {
  var x = document.getElementsByTagName("nav")[0];
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}