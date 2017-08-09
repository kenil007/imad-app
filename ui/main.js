console.log('Loaded!');
var img = document.getElementById('image1');
var margin=0;
var cut=0;
 function right(){
    img.style.marginLeft = margin+'px';
   if(margin>1000){
   cut=1;
    }
     if(cut===0){
   margin = margin +10;
    }
     if(margin<-1000){
   cut=0;
    }
     if(cut==1){
   margin = margin -10;
    }
 }
img.onclick = function(){
   
    var interval = setInterval(right,10);
    
    console.log('inside');
};