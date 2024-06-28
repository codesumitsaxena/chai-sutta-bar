
document.addEventListener('DOMContentLoaded', function() {
    const items = document.querySelectorAll('.item');
    let currentPosition = 1;
    const totalItems = items.length;
  
    function updateCarouselPosition() {
      items.forEach(item => {
        item.style.setProperty('--position', currentPosition);
      });
      currentPosition = (currentPosition % totalItems) + 1;
    }
  
    setInterval(updateCarouselPosition, 800); // Change slide every 2 seconds
  });
  

let currentIndex = 0;
const radios = document.querySelectorAll('input[name="slider"]');
const totalItems = radios.length;

const changeSlide = () => {
    currentIndex = (currentIndex + 1) % totalItems;
    radios[currentIndex].checked = true;
};

// Automatic slide change every 3 seconds
setInterval(changeSlide, 3000);


// FAQ

let toggles = document.getElementsByClassName('toggle');
let contentDiv = document.getElementsByClassName('content');
let icons = document.getElementsByClassName('icon');

for(let i=0; i<toggles.length; i++){
    toggles[i].addEventListener('click', ()=>{
        if( parseInt(contentDiv[i].style.height) != contentDiv[i].scrollHeight){
            contentDiv[i].style.height = contentDiv[i].scrollHeight + "px";
            toggles[i].style.color = "#672717";
            icons[i].classList.remove('fa-plus');
            icons[i].classList.add('fa-minus');
        }
        else{
            contentDiv[i].style.height = "0px";
            toggles[i].style.color = "#111130";
            icons[i].classList.remove('fa-minus');
            icons[i].classList.add('fa-plus');
        }

        for(let j=0; j<contentDiv.length; j++){
            if(j!==i){
                contentDiv[j].style.height = "0px";
                toggles[j].style.color = "#111130";
                icons[j].classList.remove('fa-minus');
                icons[j].classList.add('fa-plus');
            }
        }
    });
}


// demo
