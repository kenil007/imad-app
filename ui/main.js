console.log('Loaded!');
var img = document.getElementById('image1');
var margin=0;
 function right(){
    img.style.marginLeft = margin+'px';
    margin = margin +10;
    }
img.onclick = function(){
    var interval = setinterval(right,100);
    
    console.log('inside');
};