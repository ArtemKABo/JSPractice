 
  const i = document.getElementById("inc");
  const cr = document.getElementById("CounterResult");
  const binc = document.getElementById("bInc");
  const bdec = document.getElementById("bDec");
  const alarm = document.getElementById("alarm");
    //let n = 0;

    i.innerHTML = 0;

    function increment() {
        i.innerHTML++;
        ControlState();
    }
    
    function decrement() {
        i.innerHTML--;
        ControlState();
    }

    
    function ControlState() {
        if(i.innerHTML==0){
            cr.style.backgroundColor = "red";
        } ;
        if(i.innerHTML > 0){
            cr.style.backgroundColor = "yellow";
        } ;
         if(i.innerHTML < 0){
            cr.style.backgroundColor = "green";
        } ;
        if(i.innerHTML >= 10){
            binc.disabled = true;
            alarm.hidden = false;
        }
        else if(i.innerHTML <= -10){
            bdec.disabled = true;
            alarm.hidden = false;
         }
        else{
            binc.disabled = false;
            bdec.disabled = false;
            alarm.hidden =true;
        } 
    }