const animeItems = document.querySelectorAll('.anim');

if (animeItems.length > 0){
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll() {
        for (let index = 0; index < animeItems.length; index++){
            const animeItem = animeItems[index];
            const animeItemHeight = animeItem.offsetHeight;
            const animeItemOffset = offset(animeItem).top;
            const animeStart = 4;

            let animeItemPoint = window.innerHeight - animeItemHeight / animeStart;
            if (animeItemHeight > window.innerHeight){
                animeItemPoint = window.innerHeight - window.innerHeight / animeStart;
            }

            if ((window.pageYOffset > animeItemOffset - animeItemPoint) && window.pageYOffset < (animeItemOffset + animeItemHeight)) {
                animeItem.classList.add('activeanim');
            } else {
                if (!animeItem.classList.contains('anim-no')){
                    animeItem.classList.remove('activeanim')
                }
            }

        }
    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollleft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return {top: rect.top + scrollTop, left: rect.left + scrollleft}
    }

    }
    setTimeout(() => {
        animOnScroll(); 
    }, 300);
}


var button = document.getElementById("btn1");
var elements = document.getElementsByClassName("good-eco"); // Обратите внимание на "getElementsByClassName"
var close_btn = document.getElementsByClassName("close-btn1")
  
button.onclick = function() {
        elements[0].classList.add("active");
        
    } 
close_btn[0].onclick = function() {
    elements[0].classList.remove("active");
} 

var button2 = document.getElementById("btn2");
var elements2 = document.getElementsByClassName("bad-eco"); // Обратите внимание на "getElementsByClassName"
var close_btn2 = document.getElementsByClassName("close-btn2")
  
button2.onclick = function() {
        elements2[0].classList.add("active");
        
    } 
close_btn2[0].onclick = function() {
    elements2[0].classList.remove("active");
} 

$(function() {   

    // collapse
    $("[data-collapse]").on("click", function(event){
        event.preventDefault();

        var $this = $(this), 
            elementId = $this.data('collapse');

        $(elementId).slideToggle();
        $this.toggleClass('active')
    })

})