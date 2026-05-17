/* ===========================
   MOBILE MENU
=========================== */

const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");

menuBtn.addEventListener("click", () => {

    navbar.classList.toggle("active");

    if (navbar.classList.contains("active")) {

        menuBtn.innerHTML =
        `<i class="fa-solid fa-xmark"></i>`;

    } else {

        menuBtn.innerHTML =
        `<i class="fa-solid fa-bars"></i>`;
    }

});

/* ===========================
   CLOSE MENU AFTER CLICK
=========================== */

document.querySelectorAll(".navbar a")
.forEach(link => {

    link.addEventListener("click", () => {

        navbar.classList.remove("active");

        menuBtn.innerHTML =
        `<i class="fa-solid fa-bars"></i>`;

    });

});

/* ===========================
   STICKY HEADER + SCROLL EFFECT
=========================== */

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    header.classList.toggle(
        "active",
        window.scrollY > 80
    );

});

/* ===========================
   FADE IN ANIMATION
=========================== */

const observer = new IntersectionObserver((entries)=>{

    entries.forEach((entry)=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.15
});

const hiddenElements = document.querySelectorAll(
`
.section,
.service-card,
.about-card,
.gallery-grid img,
.contact-item,
.service-item,
.instagram-box,
.cta-wrapper
`
);

hiddenElements.forEach((el)=>{

    el.classList.add("hidden");

    observer.observe(el);

});

/* ===========================
   COUNTER ANIMATION
=========================== */

const counters =
document.querySelectorAll(".counter");

const counterObserver =
new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const counter = entry.target;

const target =
+counter.getAttribute("data-target");

let current = 0;

const increment =
target / 120;

function updateCounter(){

if(current < target){

current += increment;

counter.innerText =
Math.ceil(current);

requestAnimationFrame(
updateCounter
);

}else{

counter.innerText = target;

}

}

updateCounter();

counterObserver.unobserve(counter);

}

});

});

counters.forEach(counter=>{

counterObserver.observe(counter);

});

/* ===========================
   PARALLAX HERO EFFECT
=========================== */

window.addEventListener("scroll", ()=>{

const hero =
document.querySelector(".hero");

if(hero){

let scroll =
window.pageYOffset;

hero.style.backgroundPositionY =
scroll * 0.5 + "px";

}

});

/* ===========================
   BUTTON RIPPLE EFFECT
=========================== */

const buttons =
document.querySelectorAll(
".gold-btn,.white-btn"
);

buttons.forEach(button=>{

button.addEventListener(
"mouseenter",

function(e){

const circle =
document.createElement("span");

circle.classList.add("ripple");

this.appendChild(circle);

let x =
e.clientX -
this.getBoundingClientRect().left;

let y =
e.clientY -
this.getBoundingClientRect().top;

circle.style.left = x+"px";
circle.style.top = y+"px";

setTimeout(()=>{

circle.remove();

},700);

});

});

/* ===========================
   SMOOTH SCROLL
=========================== */

document.querySelectorAll(
'a[href^="#"]'
).forEach(anchor=>{

anchor.addEventListener(
"click",

function(e){

e.preventDefault();

const target =
document.querySelector(
this.getAttribute("href")
);

if(target){

window.scrollTo({

top:
target.offsetTop - 80,

behavior:"smooth"

});

}

});

});

/* ===========================
   IMAGE HOVER 3D EFFECT
=========================== */

const galleryImages =
document.querySelectorAll(
".gallery-grid img"
);

galleryImages.forEach(image=>{

image.addEventListener(
"mousemove",

(e)=>{

const rect =
image.getBoundingClientRect();

const x =
e.clientX - rect.left;

const y =
e.clientY - rect.top;

const rotateY =
((x / rect.width)-0.5)*18;

const rotateX =
((y / rect.height)-0.5)*-18;

image.style.transform =

`
perspective(900px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
scale(1.04)
`;

});

image.addEventListener(
"mouseleave",

()=>{

image.style.transform =
`
perspective(900px)
rotateX(0)
rotateY(0)
scale(1)
`;

});

});

/* ===========================
   FLOATING WHATSAPP PULSE
=========================== */

const whatsapp =
document.querySelector(".whatsapp");

if(whatsapp){

setInterval(()=>{

whatsapp.animate([

{
transform:"scale(1)"
},

{
transform:"scale(1.15)"
},

{
transform:"scale(1)"
}

],{

duration:1200

});

},3500);

}

/* ===========================
   PRELOADER
=========================== */

window.addEventListener("load",()=>{

const preloader =
document.createElement("div");

preloader.className =
"preloader";

preloader.innerHTML =

`
<div class="loader-circle"></div>
`;

document.body.appendChild(
preloader
);

setTimeout(()=>{

preloader.style.opacity="0";

setTimeout(()=>{

preloader.remove();

},600);

},700);

});

/* ===========================
   TEXT TYPING EFFECT
=========================== */

const typingElement =
document.querySelector(
".hero-subtitle"
);

if(typingElement){

const text =
typingElement.innerText;

typingElement.innerText="";

let i=0;

function typing(){

if(i < text.length){

typingElement.innerHTML +=
text.charAt(i);

i++;

setTimeout(
typing,
55
);

}

}

typing();

}

/* ===========================
   SCROLL PROGRESS BAR
=========================== */

const progress =
document.createElement("div");

progress.classList.add(
"scroll-progress"
);

document.body.appendChild(
progress
);

window.addEventListener(
"scroll",

()=>{

const scrollTop =
document.documentElement
.scrollTop;

const height =

document.documentElement
.scrollHeight -

document.documentElement
.clientHeight;

const percentage =

(scrollTop/height)*100;

progress.style.width =
percentage+"%";

});

console.log(
"Marakesh Beauty JS Loaded"
);