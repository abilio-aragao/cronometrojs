window.onload = function(){

    let seconds = 00;
    let tens = 00;
    let appendTens = document.getElementById('tens');
    let appendSeconds = document.getElementById('seconds');
    let buttonStart = document.getElementById("start");
    let buttonStop = document.getElementById('stop');
    let buttonReset = document.getElementById('reset');
    var interval;


    //botao comecar

    buttonStart.addEventListener('click', ()=>{
        clearInterval(interval)
        interval = setInterval(function startimer(){
            
        

            appendSeconds.innerHTML = seconds
            seconds++
                
            if(seconds > 60){
                seconds=0
                appendSeconds.innerHTML=00
                appendSeconds.innerHTML = seconds++

                tens++
                appendTens.innerHTML = tens
            }

        }, 1000)
        
    })

    //botao parar 

    buttonStop.addEventListener('click', ()=>{
        clearInterval(interval);
    })
   
    //botao resetar

    buttonReset.addEventListener('click', ()=>{
        clearInterval(interval);
        appendSeconds.innerHTML = "00"
        appendTens.innerHTML = "00"
        seconds = 00
        tens = 00
    })
    
   }