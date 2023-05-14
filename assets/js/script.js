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
  var dataText = ["The Quickest Click to Cast Your Vote!", "The Future of Voting", "The Remote election management and voting solution", "A Green Voting solution", "Free, fair, credible, secure, verifiable, non-rigged, and fast remote voting solution", "Convinient voting solution", "Security at its peek"];
  
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

// testimonials 
'use strict'
var	testim = document.getElementById("testim"),
		testimDots = Array.prototype.slice.call(document.getElementById("testim-dots").children),
    testimContent = Array.prototype.slice.call(document.getElementById("testim-content").children),
    testimLeftArrow = document.getElementById("left-arrow"),
    testimRightArrow = document.getElementById("right-arrow"),
    testimSpeed = 4500,
    currentSlide = 0,
    currentActive = 0,
    testimTimer,
		touchStartPos,
		touchEndPos,
		touchPosDiff,
		ignoreTouch = 30;
;

window.onload = function() {

    function playSlide(slide) {
        for (var k = 0; k < testimDots.length; k++) {
            testimContent[k].classList.remove("active");
            testimContent[k].classList.remove("inactive");
            testimDots[k].classList.remove("active");
        }

        if (slide < 0) {
            slide = currentSlide = testimContent.length-1;
        }

        if (slide > testimContent.length - 1) {
            slide = currentSlide = 0;
        }

        if (currentActive != currentSlide) {
            testimContent[currentActive].classList.add("inactive");            
        }
        testimContent[slide].classList.add("active");
        testimDots[slide].classList.add("active");

        currentActive = currentSlide;
    
        clearTimeout(testimTimer);
        testimTimer = setTimeout(function() {
            playSlide(currentSlide += 1);
        }, testimSpeed)
    }

    testimLeftArrow.addEventListener("click", function() {
        playSlide(currentSlide -= 1);
    })

    testimRightArrow.addEventListener("click", function() {
        playSlide(currentSlide += 1);
    })    

    for (var l = 0; l < testimDots.length; l++) {
        testimDots[l].addEventListener("click", function() {
            playSlide(currentSlide = testimDots.indexOf(this));
        })
    }

    playSlide(currentSlide);

    document.addEventListener("keyup", function(e) {
        switch (e.keyCode) {
            case 37:
                testimLeftArrow.click();
                break;
                
            case 39:
                testimRightArrow.click();
                break;

            case 39:
                testimRightArrow.click();
                break;

            default:
                break;
        }
    })
		
		testim.addEventListener("touchstart", function(e) {
				touchStartPos = e.changedTouches[0].clientX;
		})
	
		testim.addEventListener("touchend", function(e) {
				touchEndPos = e.changedTouches[0].clientX;
			
				touchPosDiff = touchStartPos - touchEndPos;
			
				console.log(touchPosDiff);
				console.log(touchStartPos);	
				console.log(touchEndPos);	

			
				if (touchPosDiff > 0 + ignoreTouch) {
						testimLeftArrow.click();
				} else if (touchPosDiff < 0 - ignoreTouch) {
						testimRightArrow.click();
				} else {
					return;
				}
			
		})
}

// contact form 

function whatsapp(){
  var FullName = document.getElementById("fullname").value;
  var Email = document.getElementById("email").value;
  var Phone = document.getElementById("phone").value;
  var Subject = document.getElementById("subject").value;
  var Message = document.getElementById("message").value;

  var url = "https://wa.me/254795398841?text="
  +"* FullName : * " + FullName + "%0a"
  +"* Email : * " + Email + "%0a"
  +"* Phone : * " + Phone + "%0a"
  +"* Subject : * " + Subject + "%0a"
  +"* Message : * " + Message + "%0a"

  window.open(url, '_blank').focus;

}