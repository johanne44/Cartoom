    function changeColor(element) {
         var currentColor = element.style.backgroundColor;
         if(currentColor == "#66FFFF") {
            element.style.backgroundColor = "navy";
         } else {
            element.style.backgroundColor = "#66FFFF"; 
         }
      }

setInterval(displayclock,500);


function displayclock(){
        var time = new Date();
        var hrs = time.getHours();
        var min = time.getMinutes();
        var sec = time.getSeconds();
        
        if (hrs > 12){
                hrs = hrs - 12;
        
       
}

if(hrs == 0){
        hrs = 12;

}
if (hrs < 10 ){
        hrs = '0' + hrs; }
        if (min < 10 ){
        min = '0' + min; }
        if (sec < 10) {
                sec = '0' + sec; }

document.getElementById('clock').innerHTML = hrs + ':' + min + ':' + sec;
}
