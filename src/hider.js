// To customize for your service, modify getSelfViewElement() and then minify this JS
// I used https://chriszarate.github.io/bookmarkleter/

function getSelfViewElement(){
    return document.getElementById("publisher");
}

function toggleSelfView(){
  var selfView = getSelfViewElement();
  if (selfView.style.display === "none") {
    selfView.style.display = "block";
  } else {
    selfView.style.display = "none";
  }
}

toggleSelfView()
