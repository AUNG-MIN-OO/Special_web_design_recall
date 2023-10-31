import './style.scss'

import Typed from 'typed.js';

import ScrollReveal from "scrollreveal";

import "waypoints/lib/noframework.waypoints.min.js";

const typed = new Typed('#auto-typing', {
    strings: ['Food ....', 'Drinks ....'],
    typeSpeed: 50,
    backSpeed: 100,
    loop : true,
});

let headerAnimation = {
                                delay: 375,
                                duration: 500,
                                reset: true,
                                interval: 500,
                            };

ScrollReveal().reveal('.header-animation', headerAnimation);

let aboutImageAnimation = {
    delay: 375,
    distance: '50px',
    origin: 'left',
    duration: 500,
    reset: true,
    interval: 500,
};

ScrollReveal().reveal('.about-image-animation', aboutImageAnimation);

let aboutTextAnimation = {
    delay: 375,
    distance: '50px',
    origin: 'right',
    duration: 500,
    reset: true,
    interval: 500,
};

ScrollReveal().reveal('.about-text-animation', aboutTextAnimation);

// waypoint js

let homeWayPoint = new Waypoint({
    element: document.getElementById('home-content'),
    handler: function(direction) {
        let oldNav = document.querySelector(".nav-link.active");
        if (oldNav != null){
            oldNav.classList.remove("active");
        }
        let currentNav = document.querySelector(`[href="#home"]`);
        currentNav.classList.add("active");
    },
    offset: '25%'
})

let aboutWayPoint = new Waypoint({
    element: document.getElementById('about'),
    handler: function(direction) {
        let oldNav = document.querySelector(".nav-link.active");
        oldNav.classList.remove("active");
        let currentNav = document.querySelector(`[href="#about"]`);
        currentNav.classList.add("active");
    },
    offset: '25%'
})

