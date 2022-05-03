wow = new WOW(
    {
    boxClass:     'wow',      // default
    animateClass: 'animated', // default
    offset:       0,          // default
    mobile:       true,       // default
    live:         true        // default
    }
)
wow.init();

const buttonRight = document.getElementById("right");
const buttonLeft = document.getElementById("left");


buttonRight.addEventListener("click", ()=>{
    document.querySelector(".proyects-container--slider").scrollLeft += 20;
})

buttonLeft.addEventListener("click", ()=>{
    document.querySelector(".proyects-container--slider").scrollLeft -= 20;
})

const menu = document.querySelector(".navbar-menu");
const burger = document.querySelector(".navbar-burger");
const items = document.querySelector(".navbar-end");

function activarMenu (event){
    burger.classList.toggle("is-active");
    menu.classList.toggle("is-active");
    event.preventDefault();
};

function desactivarMenu(){
    burger.classList.remove("is-active");
    menu.classList.remove("is-active");   
};

burger.addEventListener("click", activarMenu, false); 
items.addEventListener("click", desactivarMenu);

const form = document.getElementById("form");
form.addEventListener('submit', handleSubmit);

async function handleSubmit(event){
    event.preventDefault()
    const formulario = new FormData(this)
    const response= await fetch(this.action, {
        method: this.method,
        body: formulario,
        headers: {
            'Accept': 'application/json'
        }
    })
    if(response.ok){
        this.reset()
    }
}

const navbar = document.querySelector(".navbar");

navbar.scrollIntoView({
    behavior: 'smooth'
  });