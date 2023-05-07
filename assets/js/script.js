let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 4000);
}

// counter 
const locale = document.documentElement.lang === "en" ? "en-EN" : "de-DE";
const updateInterval = 40;
const totalUpdates = 50;

function count(element) {
  const targetNumber = parseInt(element.getAttribute("data-number"), 10);
  let currentNumber = 0;
  const increment = targetNumber / totalUpdates;

  const intervalId = setInterval(() => {
    currentNumber += increment;

    if (currentNumber >= targetNumber) {
      clearInterval(intervalId);
      currentNumber = targetNumber;
    }

    element.innerHTML = Math.round(currentNumber).toLocaleString(locale);
  }, updateInterval);
}

const keyFacts = document.querySelectorAll(".js-counter");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      if (!entry.target.counted) {
        count(entry.target);
        entry.target.counted = true;
        observer.unobserve(entry.target);
      }
    }
  });
});

keyFacts.forEach((keyFact) => {
  observer.observe(keyFact);
});


// text animation 

document.addEventListener('DOMContentLoaded',function(event){
  var dataText = [ "The Future of Voting", "The Remote election management and voting solution", "A Green Voting solution", "Free, fair, credible, secure, verifiable, non-rigged, and fast remote voting solution", "Convinient voting solution", "Security at its peek"];
  
  function typeWriter(text, i, fnCallback) {
    if (i < (text.length)) {
     document.querySelector("h1").innerHTML = text.substring(0, i+1) +'<span class="text-anime" aria-hidden="true"></span>';

      setTimeout(function() {
        typeWriter(text, i + 1, fnCallback)
      }, 100);
    }
    else if (typeof fnCallback == 'function') {
      setTimeout(fnCallback, 700);
    }
  }
   function StartTextAnimation(i) {
     if (typeof dataText[i] == 'undefined'){
        setTimeout(function() {
          StartTextAnimation(0);
        }, 20000);
     }
    if (i < dataText[i].length) {
     typeWriter(dataText[i], 0, function(){
       StartTextAnimation(i + 1);
     });
    }
  }
  StartTextAnimation(0);
});

// slider 
window.onload=function(){
  (function(d){/*  FUNZIONE EVENTI SWIPE DESTRA SINISTRA SU GIU'*/
   var
   ce=function(e,n){var a=document.createEvent("CustomEvent");a.initCustomEvent(n,true,true,e.target);e.target.dispatchEvent(a);a=null;return false},
   nm=true,sp={x:0,y:0},ep={x:0,y:0},
   touch={
    touchstart:function(e){sp={x:e.touches[0].pageX,y:e.touches[0].pageY}},
    touchmove:function(e){nm=false;ep={x:e.touches[0].pageX,y:e.touches[0].pageY}},
    touchend:function(e){if(nm){ce(e,'fc')}else{var x=ep.x-sp.x,xr=Math.abs(x),y=ep.y-sp.y,yr=Math.abs(y);if(Math.max(xr,yr)>20){ce(e,(xr>yr?(x<0?'swl':'swr'):(y<0?'swu':'swd')))}};nm=true},
    touchcancel:function(e){nm=false}
   };
   for(var a in touch){d.addEventListener(a,touch[a],false);}
  })(document);
  var h=function(e){console.log(e.type,e)};
  document.body.addEventListener('fc',h,false);// 0-50ms vs 500ms with normal click
      /*SWIPE A DESTRA*/
      document.getElementById('slider-cont').addEventListener('swr',mySlideRight,false);
      /*SWIPE A SINISTRA*/
  document.getElementById('slider-cont').addEventListener('swl',mySlideLeft,false);
  /*document.body.addEventListener('swu',h,false);
  document.body.addEventListener('swd',h,false);*/
  }
  function mySlideRight(){
      /*SE SWIPE SULLA DESTRA*/
          /*Seleziona tutte le immagini della slide*/
          var sli=document.getElementsByClassName('cont-slider');
      for(var i=0;i<sli.length;i++){
          /*Se è la prima immagine, diventa l'ultima*/
          if(sli[i].id=="ext-1"){sli[i].id='ext-8'}else{
              /*Se non è la prima immagine...*/
          var eid=sli[i].id;
          var strnum = eid.match(/\d+$/)[0];
          var num=parseInt(strnum);
              /*...scorre indietro di uno*/
              strnum--;
          sli[i].id='ext-'+strnum;
          }
      }
      
  }
  function mySlideLeft(){
      /*SE SWIPE SULLA SINISTRA*/
          /*Seleziona tutte le immagini della slide*/
      var sli=document.getElementsByClassName('cont-slider');
      for(var i=0;i<sli.length;i++){
          /*Se è l'ultima immagine, diventa la prima*/
          if(sli[i].id=="ext-8"){sli[i].id='ext-1'}else{
              /*Se non è l'ultima immagine...*/
          var eid=sli[i].id;
          var strnum = eid.match(/\d+$/)[0];
          var num=parseInt(strnum);
              /*...scorre avanti di unos*/
              strnum++;
          sli[i].id='ext-'+strnum;
          }
      }
  }
  function selectSliderElement(e){
      /*Se viene cliccato un elemento della slider, viene in primo piano*/
      var idd=e.id;
      var numstr = idd.match(/\d+$/)[0];
      var numid=parseInt(numstr);
      var sli=document.getElementsByClassName('cont-slider');
      if(numid==1){}else{
          var times=9-numid;
          for (var z=0;z<times;z++)
          for(var i=0;i<sli.length;i++){
          /*Se è l'ultima immagine, diventa la prima*/
          if(sli[i].id=="ext-8"){sli[i].id='ext-1'}else{
              /*Se non è l'ultima immagine...*/
          var eid=sli[i].id;
          var strnum = eid.match(/\d+$/)[0];
          var num=parseInt(strnum);
              /*...scorre avanti di unos*/
              strnum++;
          sli[i].id='ext-'+strnum;
          }
      }}
      }