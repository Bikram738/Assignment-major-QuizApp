let qtn=document.getElementById("qstn");
let opt=document.querySelector(".options");
let nxtq=document.getElementById("nxt");
let score=document.getElementById("score");
let totQtn=document.getElementById("total_qtn");
let CouQtn=document.getElementById("qstn_count");
let quizBox=document.querySelector(".quiz-box");
let resultBox=document.querySelector(".result-box")
let resultQT=document.getElementById("result-qsthcount")
let resultRA=document.getElementById("correct")
let resultWA= document.getElementById("wrong");
let resultParcent=document.getElementById("parcent");   
let resultTS=document.getElementById("totalS");
let reset=document.getElementById("reset");
let home=document.getElementById("home");
let Uname=document.getElementById("name");
let catagory=document.getElementById("low"); 
let timerCou=document.getElementById("timer");
let score1=00;


//********************************************************************** */
function quitzstart() {
catagory.classList.add("inactive")
quizBox.classList.remove("inactive")     
        
}

totQtn.innerText=""+htmlq.length;
resultQT.innerText=htmlq.length;
let rightAns=0;
let wrong=0;

var qtn_num=0;
CouQtn.innerText=qtn_num+1;
htmlqtn(qtn_num);
//itrate all questions and optios 
function htmlqtn(q_index) {
        qtn.innerText=htmlq[q_index].numn+". "+htmlq[q_index].question;
let options_i="";
for (let i = 0; i < htmlq.length-6; i++) {
        options_i += `<div class="optlist">${htmlq[q_index].options[i]}</div>`;
        
}
opt.innerHTML=options_i;

let allopt=opt.querySelectorAll(".optlist");
for (let j = 0; j < allopt.length; j++) {
        allopt[j].setAttribute("onclick","answer(this)")
        
}
nxtq.classList.add("inactive");
}

let counter;
let timeVal=10;
//the next button funtions
nxtq.onclick=()=>{
        qtn_num++;
        if (htmlq.length>qtn_num) {
                CouQtn.innerText=qtn_num+1;
                htmlqtn(qtn_num);
                clearInterval(counter); 
                startTime(timeVal);      
        }else{
                quizBox.classList.add("inactive");
                resultBox.classList.remove("inactive");
                resultRA.innerText=rightAns;
                resultWA.innerText=wrong;
                resultTS.innerText=score1;
                resultParcent.innerText=((rightAns*100)/htmlq.length)+"%"
                Uname.innerText=localStorage.getItem("user")

                console.log("hellow")
        }
        if (htmlq.length-1==qtn_num) {
                nxtq.innerText="Show Result"
        }
}
//Answer conditions
function answer(ans) {
        clearInterval(counter);
       let theAns=ans.innerText;
       let correctAns=htmlq[qtn_num].answer;
       let allopt2=opt.querySelectorAll(".optlist");
       

       nxtq.classList.remove("inactive")
       if (theAns == correctAns) {
               ans.classList.add("right")
               score1+=10;
               score.innerHTML=""+score1;
               rightAns++
               
               
        } else {
                ans.classList.add("wrong")
                wrong++;
                for (let i = 0; i < allopt2.length; i++) {
                        if (allopt2[i].innerText==correctAns) {
                                allopt2[i].classList.add("right")
                        }
                        
                }      
        }
        
        for (let z = 0; z < allopt2.length; z++) {
                allopt2[z].classList.add("disable")  }  
                
}
//The timer Funtion
function startTime(time) {
        counter=setInterval(timer,1000);
        function timer() {
           timerCou.innerHTML=time;
           time--; 
           if (time<9) {
                let dubbleDigit=timerCou.innerHTML;
                timerCou.innerHTML="0"+dubbleDigit;
           }
           if (time<0) {
                clearInterval(counter);
                timerCou.innerHTML="00";
                nxtq.onclick()
           }    
        }
}

//*on last the reset and home button
reset.onclick=()=>{
        window.location.href="quiz.html"
}
home.onclick=()=>{
window.location.href="index.html"
}
