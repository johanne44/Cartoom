    function changeColor(element) {
         var currentColor = element.style.backgroundColor;
         if(currentColor == "#66FFFF") {
            element.style.backgroundColor = "navy";
         } else {
            element.style.backgroundColor = "#66FFFF"; 
         }
      }

var date = new Date();
var heure = date.getHours();
if(heure => 7 && heure < 20){
   $(body).css("background-image", "url(http://www.serveur.ext/lien_image_journee)");
}else{
   $(body).css("background-image", "url(http://www.serveur.ext/lien_image_nuit)");
}
