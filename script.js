document.addEventListener("DOMContentLoaded", function() {
    var hoversection = document.getElementById("hovrmovesection");
    var hoverdiv = document.getElementById("hovermovediv");
    
  
    hoversection.addEventListener("mousemove", function(event) {
      var hoversectionWidth = hoversection.offsetWidth;
      var hoversectionHeight = hoversection.offsetHeight;
  
      var mouseX = event.pageX - hoversection.offsetLeft;
      var mouseY = event.pageY - hoversection.offsetTop;
  
      var imageX = (mouseY / hoversectionWidth) * 25;
      var imageY = (mouseX / hoversectionHeight) * 25;
  
      hoverdiv.style.transform = "translate(" + imageX + "px, " + imageY + "px)";
    });
  });
  