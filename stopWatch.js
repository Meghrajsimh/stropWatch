const btnStart = document.querySelector('#start');
    const btnStop =  document.querySelector('#stop');
    const btnReset  = document.querySelector("#reset");
   
    function displayTime(){
        let second = sessionStorage.getItem('sec') || 0;
        let min = sessionStorage.getItem("min") || 0;
        let hr = sessionStorage.getItem("hr") || 0;

        let display = `${hr} : ${min} : ${second}`;
        document.querySelector(".display").innerHTML = display;
        btnReset.setAttribute('disabled','');
        btnStop.setAttribute('disabled','');
    }

    function startWatch() {
        let second = sessionStorage.getItem('sec') || 0;
        let min = sessionStorage.getItem("min") || 0;
        let hr = sessionStorage.getItem("hr") || 0;
       btnStart.setAttribute('disabled','');
       btnReset.removeAttribute('disabled');
       btnStop.removeAttribute('disabled');
        let startmili = setInterval(() => {
            second++
            if (second == 60) {
                second = 0;
                min++;
            }
            if (min == 60) {
                min = 0;
                hr++;
            }
            let display = `${hr} : ${min} : ${second}`;
            document.querySelector(".display").innerHTML = display;
        }, 900);

        btnStop.addEventListener("click",()=>{
            clearInterval(startmili);
            btnStart.removeAttribute('disabled','');
            btnStop.setAttribute('disabled','');
            sessionStorage.setItem("sec",second);
            sessionStorage.setItem("min",min);
            sessionStorage.setItem("hr",hr);         
        })
        btnReset.addEventListener("click",()=>{
            clearInterval(startmili);
            second = 0;
            min = 0;
            hr = 0;
            btnStart.removeAttribute('disabled','');
            sessionStorage.setItem("sec",0);
            sessionStorage.setItem("min",0);
            sessionStorage.setItem("hr",0); 
            document.querySelector(".display").innerHTML = '0 : 0 : 0';
        })
    }
     
        
btnStart.addEventListener("click",startWatch);
displayTime()