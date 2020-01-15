const getID = id => document.getElementById(id);
const getSel = sel => document.querySelector(sel);



let slideIndex = 1;
showSlides(slideIndex);

function moveWithNavigateButtons(number) {
  showSlides(slideIndex += number);
};

function moveWithRadioButtons(number) {
  showSlides(slideIndex = number);
};

function showSlides(number) {
  let dots = document.getElementsByClassName("dot");
  let images = document.getElementsByClassName('boxImage');
  if (number > images.length) {
    slideIndex = 1;
  };
  if (number < 1) {
    slideIndex = images.length;
  };
  for (let i = 0; i < images.length; i++) {
    images[i].style.display = "none";
  };


  
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "")
    dots[i].checked = false;
  }
  images[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  dots[slideIndex - 1].checked = true;
};

















//     let slideIndex = 1;
//     showSlides(slideIndex);

//     function plusSlides(n) {
//         showSlides(slideIndex += n);
//     }

//     function currentSlide(n) {
//         showSlides(slideIndex = n);
//     }

//     function showSlides(n) {
//         let i;
//         let slides = document.getElementsByClassName("mySlides");
//         let dots = document.getElementsByClassName("dot");


//         if (n > slides.length) {
//             slideIndex = 1
//         }
//         if (n < 1) {
//             slideIndex = slides.length
//         }
//         for (i = 0; i < slides.length; i++) {
//             slides[i].style.display = "none";
//         }
//         for (i = 0; i < dots.length; i++) {
//             dots[i].className = dots[i].className.replace(" active", "");
//         }
//         slides[slideIndex - 1].style.display = "block";
//         dots[slideIndex - 1].className += " active";
//     }




// })


// let slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//     showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//     showSlides(slideIndex = n);
// }

// function showSlides(n) {
//     let i;
//     let slides = document.getElementsByClassName("mySlides");
//     let dots = document.getElementsByClassName("dot");


//     if (n > slides.length) {
//         slideIndex = 1
//     }
//     if (n < 1) {
//         slideIndex = slides.length
//     }
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     for (i = 0; i < dots.length; i++) {
//         dots[i].className = dots[i].className.replace(" active", "");
//     }
//     slides[slideIndex - 1].style.display = "block";
//     dots[slideIndex - 1].className += " active";
// }