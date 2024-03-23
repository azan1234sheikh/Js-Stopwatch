let seconds = document.getElementById("sec");

let hr = 0;
let min = 0 ;
let sec = 0;
let count = 0;

let timer = false;


function start(){
   timer = true ;
   stopwatch();

}
function stop(){
   timer = false;

}
function reset(){
    timer = false;
    hr = 0;
    min =0;
    sec = 0;
    count = 0;
    let paddedCount = count.toString().padStart(2, '0');
    let paddedhr = hr.toString().padStart(2, '0');
    let paddedsec = sec.toString().padStart(2, '0');
    let paddedmin = min.toString().padStart(2,'0');
    document.getElementById("hr").innerHTML = paddedhr;
    document.getElementById("min").innerHTML = paddedmin;
    document.getElementById("sec").innerHTML = paddedsec;
    document.getElementById("Count").innerHTML = paddedCount;
   
}
function stopwatch(){
  if( timer == true){
    count = count+1;
    if(count == 100){
      sec = sec+1;
       count = 0;
    }
     if(sec ==60){
       min = min+1;
       sec =0;

     } 
     if(min == 60){
        hr = hr+1;
        min =0;
        sec = 0;
        
      }
      document.getElementById("min").innerHTML =min ;
      document.getElementById("hr").innerHTML =hr ;
    document.getElementById("sec").innerHTML =sec ;

    document.getElementById("Count").innerHTML =count;

     setTimeout("stopwatch()",10)
  }
}