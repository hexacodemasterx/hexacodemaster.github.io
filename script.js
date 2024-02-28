var modal = document.getElementById("myModal");

var imgs = document.querySelectorAll('.gallery img');
var modalImg = document.getElementById("img01");
for (var i = 0; i < imgs.length; i++) {
  imgs[i].addEventListener('click', function() {
    modal.style.display = "block";
    modalImg.src = this.src;
  });
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  modal.style.display = "none";
}
