/* =====================================================
   MD NASIM REJA - PORTFOLIO JAVASCRIPT
   ADVANCED ANIMATIONS
===================================================== */


/* ================= PRELOADER ================= */

window.addEventListener("load", () => {

    const preloader =
        document.getElementById("preloader");

    setTimeout(() => {

        preloader.classList.add("hide");

    }, 800);

});


/* ================= MOBILE MENU ================= */

const menuBtn =
    document.getElementById("menu-btn");

const navbar =
    document.getElementById("navbar");


menuBtn.addEventListener("click", () => {

    navbar.classList.toggle("active");

    const icon =
        menuBtn.querySelector("i");

    if (navbar.classList.contains("active")) {

        icon.classList.remove("fa-bars");

        icon.classList.add("fa-xmark");

    } else {

        icon.classList.remove("fa-xmark");

        icon.classList.add("fa-bars");

    }

});


/* Close menu after clicking */

document.querySelectorAll(".navbar a")
    .forEach(link => {

        link.addEventListener("click", () => {

            navbar.classList.remove("active");

            const icon =
                menuBtn.querySelector("i");

            icon.classList.remove("fa-xmark");

            icon.classList.add("fa-bars");

        });

    });


/* ================= TYPING ANIMATION ================= */

const typingElement =
    document.querySelector(".typing");


const words = [

    "Data Entry Specialist",
    "Web Researcher",
    "Data Collector",
    "Excel Specialist",
    "Data Management Expert"

];


let wordIndex = 0;

let charIndex = 0;

let deleting = false;


function typingEffect() {

    const currentWord =
        words[wordIndex];


    if (!deleting) {

        typingElement.textContent =
            currentWord.substring(
                0,
                charIndex + 1
            );

        charIndex++;


        if (charIndex === currentWord.length) {

            deleting = true;

            setTimeout(
                typingEffect,
                1500
            );

            return;

        }

    } else {

        typingElement.textContent =
            currentWord.substring(
                0,
                charIndex - 1
            );

        charIndex--;


        if (charIndex === 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {

                wordIndex = 0;

            }

        }

    }


    const speed =
        deleting ? 50 : 100;


    setTimeout(
        typingEffect,
        speed
    );

}


typingEffect();


/* ================= PARTICLES ================= */

const particleContainer =
    document.querySelector(".particles");


for (let i = 0; i < 70; i++) {

    const particle =
        document.createElement("span");

    particle.classList.add("particle");


    particle.style.left =
        Math.random() * 100 + "%";


    particle.style.animationDuration =
        (Math.random() * 10 + 8) + "s";


    particle.style.animationDelay =
        (Math.random() * 10) + "s";


    particle.style.opacity =
        Math.random();


    particleContainer.appendChild(
        particle
    );

}


/* ================= SCROLL REVEAL ================= */

const revealElements =
    document.querySelectorAll(
        ".reveal, .reveal-left, .reveal-right"
    );


function revealOnScroll() {

    const windowHeight =
        window.innerHeight;


    revealElements.forEach(element => {

        const elementTop =
            element.getBoundingClientRect().top;


        if (
            elementTop <
            windowHeight - 100
        ) {

            element.classList.add("active");

        }

    });

}


window.addEventListener(
    "scroll",
    revealOnScroll
);


revealOnScroll();


/* ================= SKILL BARS ================= */

const progressBars =
    document.querySelectorAll(
        ".progress-bar"
    );


function animateSkills() {

    progressBars.forEach(bar => {

        const top =
            bar.getBoundingClientRect().top;


        if (
            top <
            window.innerHeight - 100
        ) {

            bar.style.width =
                bar.dataset.width;

        }

    });

}


window.addEventListener(
    "scroll",
    animateSkills
);


animateSkills();


/* ================= COUNTER ================= */

const counters =
    document.querySelectorAll(".counter");


let counterStarted = false;


function startCounters() {

    if (counterStarted) return;


    const statsSection =
        document.querySelector(".stats");


    const sectionTop =
        statsSection.getBoundingClientRect().top;


    if (
        sectionTop <
        window.innerHeight - 100
    ) {

        counterStarted = true;


        counters.forEach(counter => {

            const target =
                Number(
                    counter.dataset.target
                );


            let count = 0;


            const increment =
                target / 100;


            function updateCounter() {

                count += increment;


                if (count < target) {

                    counter.textContent =
                        Math.ceil(count);

                    requestAnimationFrame(
                        updateCounter
                    );

                } else {

                    counter.textContent =
                        target;

                }

            }


            updateCounter();

        });

    }

}


window.addEventListener(
    "scroll",
    startCounters
);


startCounters();


/* ================= ACTIVE NAVIGATION ================= */

const sections =
    document.querySelectorAll("section[id]");

const navLinks =
    document.querySelectorAll(".navbar a");


window.addEventListener(
    "scroll",
    () => {

        let current = "";


        sections.forEach(section => {

            const sectionTop =
                section.offsetTop - 150;

            const sectionHeight =
                section.offsetHeight;


            if (
                window.scrollY >= sectionTop &&
                window.scrollY <
                sectionTop + sectionHeight
            ) {

                current =
                    section.getAttribute("id");

            }

        });


        navLinks.forEach(link => {

            link.classList.remove("active");


            if (
                link.getAttribute("href") ===
                "#" + current
            ) {

                link.classList.add("active");

            }

        });

    }
);


/* ================= BACK TO TOP ================= */

const backTop =
    document.getElementById("back-top");


window.addEventListener(
    "scroll",
    () => {

        if (window.scrollY > 500) {

            backTop.classList.add("show");

        } else {

            backTop.classList.remove("show");

        }

    }
);


backTop.addEventListener(
    "click",
    () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    }
);


/* ================= CONTACT FORM ================= */

const contactForm =
    document.getElementById(
        "contact-form"
    );


contactForm.addEventListener(
    "submit",
    (event) => {

        event.preventDefault();


        const name =
            document.getElementById(
                "name"
            ).value;


        alert(
            `Thank you ${name}! Your message has been received.`
        );


        contactForm.reset();

    }
);


/* ================= MOUSE PARALLAX ================= */

const homeImage =
    document.querySelector(".home-image");


document.addEventListener(
    "mousemove",
    (event) => {

        if (
            window.innerWidth < 850
        ) return;


        const x =
            (window.innerWidth / 2 -
                event.clientX) / 40;


        const y =
            (window.innerHeight / 2 -
                event.clientY) / 40;


        homeImage.style.transform =
            `translate(${x}px, ${y}px)`;

    }
);


/* ================= CARD TILT EFFECT ================= */

const cards =
    document.querySelectorAll(
        ".service-card, .project-card"
    );


cards.forEach(card => {

    card.addEventListener(
        "mousemove",
        (event) => {

            const rect =
                card.getBoundingClientRect();


            const x =
                event.clientX -
                rect.left;


            const y =
                event.clientY -
                rect.top;


            const centerX =
                rect.width / 2;


            const centerY =
                rect.height / 2;


            const rotateX =
                (y - centerY) / 15;


            const rotateY =
                (centerX - x) / 15;


            card.style.transform =
                `perspective(800px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)
                 translateY(-8px)`;

        }
    );


    card.addEventListener(
        "mouseleave",
        () => {

            card.style.transform =
                "";

        }
    );

});


/* ================= BUTTON RIPPLE ================= */

document.querySelectorAll(".btn")
    .forEach(button => {

        button.addEventListener(
            "click",
            function(event) {

                const ripple =
                    document.createElement(
                        "span"
                    );


                const rect =
                    this.getBoundingClientRect();


                const size =
                    Math.max(
                        rect.width,
                        rect.height
                    );


                ripple.style.width =
                    size + "px";


                ripple.style.height =
                    size + "px";


                ripple.style.left =
                    event.clientX -
                    rect.left -
                    size / 2 + "px";


                ripple.style.top =
                    event.clientY -
                    rect.top -
                    size / 2 + "px";


                ripple.style.position =
                    "absolute";


                ripple.style.borderRadius =
                    "50%";


                ripple.style.background =
                    "rgba(255,255,255,0.25)";


                ripple.style.transform =
                    "scale(0)";


                ripple.style.animation =
                    "ripple 0.6s linear";


                ripple.style.pointerEvents =
                    "none";


                this.style.position =
                    "relative";


                this.style.overflow =
                    "hidden";


                this.appendChild(ripple);


                setTimeout(
                    () => ripple.remove(),
                    600
                );

            }

        );

    });


/* ================= CONSOLE ================= */

console.log(
    "🚀 MD. Nasim Reja Portfolio Loaded Successfully!"
);

console.log(
    "💙 Data Entry Specialist | Rajshahi, Bangladesh"
);